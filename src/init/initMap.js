import ScaleLine from 'ol/control/ScaleLine';
import { Map } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from 'ol/source/XYZ';
import View from 'ol/View';

// var cityurl = 'http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson';

var tdVec = new TileLayer({
    title: "天地图矢量",
    source: new XYZ({
        url: 'http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f',
        wrapX: false
    })
});

export var layers = [tdVec]

var normalView = new View({
    center: [114.5, 30.5],
    zoom: 8,
    projection: 'EPSG:4326'
});

var scaleBar = new ScaleLine({
    units: 'metric',
    // target: 'scalebar',
    bar: true,
    text: true,
    className: 'ol-scale-line'
});

export var map = new Map({
    target: 'map',
    layers: [
        
    ],
    view: normalView
})