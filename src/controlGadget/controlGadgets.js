import scaleLine from "ol/control/ScaleLine"
import { map } from "../init/initMap";
import FullScreen from 'ol/control/FullScreen';
import MousePosition from "ol/control/MousePosition";
import { createStringXY } from "ol/coordinate";


var scalecontrol = new scaleLine({
    units: 'metric',
    target: 'scalebar',
    className: 'ol-scale-line'
});

var mousePositionControl = new MousePosition({
    className: 'mosuePosition',
    coordinateFormat: createStringXY(6),
    projection: 'EPSG:4326',
    target: document.getElementById('position')
});

var fullscreen = new FullScreen();

export var addScaleLine = function(){
    map.addControl(scalecontrol);
}

export var addFullScreen = function(){
    map.addControl(fullscreen);
}

export var addMousePosControl = function(){
    map.addControl(mousePositionControl);
}