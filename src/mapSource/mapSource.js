import XYZ from "ol/source/XYZ"
import OSM from 'ol/source/OSM';
import { Tile } from "ol";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON"

var tiandi = new XYZ({
    url: "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",
    wrapX: false
});

var tiandiMark = new XYZ({
    url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",
    attributions: "天地图属性描述",
    wrapX: false
});
var osm = new OSM();

var city = new VectorSource({
    url: 'http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achncityxy&maxFeatures=1500&outputFormat=application%2Fjson',
    format: new GeoJSON(),
    projection: 'EPSG:4326'
});

var chinaProvinces = new VectorSource({
    url: 'http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Achinaprovince&maxFeatures=15000&outputFormat=application%2Fjson',
    format: new GeoJSON(),
    projection: 'EPSG:4326'
})

var footTrack = new VectorSource({
    url: 'http://localhost:31142/geoserver/dbtest/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=dbtest%3Afoottrack&maxFeatures=1500&outputFormat=application%2Fjson',
    format: new GeoJSON(),
    projection: 'EPSG:4326'
});

export var mapSource = {
    'tiandiVec': tiandi,
    'tiandiMark':tiandiMark,
    'OSM': osm,
    'city': city,
    'province' : chinaProvinces,
    'footTrack': footTrack
}