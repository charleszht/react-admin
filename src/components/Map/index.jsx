import React, { useLayoutEffect, useState } from 'react'
import './index.less'
import L from 'leaflet'
import 'leaflet.awesome-markers'
import 'leaflet.vectorgrid'
import 'leaflet/dist/leaflet.css'
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css'
import { GEO_SERVER } from '@/constant'

const Map = (props) => {

  const [center] = useState([39.9086, 116.3975])
  const [zoom] = useState(13)

  const initMap = () => {
    const map = L.map('map', {
      center: center,
      zoom: zoom
    })
    // changeTileLayer(map, ['https://webst0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=6&x={x}&y={y}&z={z}', 'https://webst0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'])

    changeTileLayer(map, ['http://t{s}.tianditu.com/DataServer?T=vec_w&tk=4d98f25cc47a0a7cddfc4d4e30210dd1&x={x}&y={y}&l={z}'])
    L.marker([39.9086, 116.3975], { icon: L.AwesomeMarkers.icon({
      prefix: 'fa',
      icon: 'spinner',
      markerColor: 'red',
      spin: true
    })}).addTo(map)
    flyTo(map, { maxX: 116.28979789759603, maxY: 39.85739634652498, minX: 116.28480772171804, minY: 39.85382486948373 })
    addShp(map, 'building')
  }

  useLayoutEffect(() => {
    initMap()
  })

  const changeTileLayer = (map, tileLayerArr) => {
    tileLayerArr.forEach(item => {
      L.tileLayer(item, {
        attribution: '&copy; 高德地图',
        subdomains: ['1', '2', '3', '4']
      }).addTo(map)
    })
  }

  const flyTo = (map, posBounds) => {
    const { maxX, maxY, minX, minY } = posBounds
    const corner1 = L.latLng(maxY, maxX)
    const corner2 = L.latLng(minY, minX)
    const bounds = L.latLngBounds(corner1, corner2)
    map.flyToBounds(bounds, {
      animate: true
    })
  }

  const addShp = (map, shpUrl) => {
    const layerUrl = `https://geoserver.zhangtong.work/geoserver/gwc/service/tms/1.0.0/yehan%3A${shpUrl}@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf`
    const vectorTileOptions = {
      layerURL: layerUrl,
      rendererFactory: L.canvas.tile,
      vectorTileLayerStyles: getVectorStyles(shpUrl),
      interactive: true,
      tms: true
    }
    L.vectorGrid.protobuf(layerUrl, vectorTileOptions).addTo(map)
  }

  const getVectorStyles = (layerName, fieldName) => {
    return {
      layerName: (properties, zoom) => {
        return {
          color: '#ff0000',
          fillOpacity: 0.4,
          stroke: true,
          fill: true,
          weight: 2
        }
      }
    }
  }

  return (<div id="map" className="map-component"></div>)
}

export default Map
