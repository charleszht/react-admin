import React, { useLayoutEffect, useState } from 'react'
import './index.less'
import L from 'leaflet'
import 'leaflet.awesome-markers'
import 'leaflet/dist/leaflet.css'
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css'

const Map = (props) => {

  const [center] = useState([39.9086, 116.3975])
  const [zoom] = useState(13)

  const initMap = () => {
    const map = L.map('map', {
      center: center,
      zoom: zoom
    })
    changeTileLayer(map, ['https://webst0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=6&x={x}&y={y}&z={z}', 'https://webst0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'])
    L.marker([39.9086, 116.3975], { icon: L.AwesomeMarkers.icon({
      prefix: 'fa',
      icon: 'spinner',
      markerColor: 'red',
      spin: true
    })}).addTo(map)
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

  return (<div id="map" className="map-component"></div>)
}

export default Map
