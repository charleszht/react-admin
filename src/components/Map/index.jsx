import React, { useLayoutEffect, useState } from 'react'
import './index.less'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const Map = (props) => {

  const [center, setCenter] = useState([39.9086, 116.3975])
  const [zoom, setZoom] = useState(13)

  useLayoutEffect(() => {
    initMap()
  },[])

  const initMap = () => {
    const map = L.map('map', {
      center: center,
      zoom: zoom
    })
    changeTileLayer(map, ['https://webst0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=6&x={x}&y={y}&z={z}', 'https://webst0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'])
  }

  const changeTileLayer = (map, tileLayerArr) => {
    tileLayerArr.forEach(item => {
      L.tileLayer(item, {
        attribution: '&copy; 高德地图',
        subdomains: ['1', '2', '3', '4']
      }).addTo(map)
    })
  }

  return (<div id="map" className="map-component"></div>)
}

export default Map
