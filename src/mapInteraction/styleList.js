import Style from "ol/style/Style";
import Circle from "ol/style/Circle"
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";

let pointStyleGrey = new Style({
    image: new Circle({
        radius: 4,
        stroke: new Stroke({
            // color:'#8cc269',
            color: '#e2d849',
            width:1.00
        }),
        fill: new Fill({
            color: '#8cc269'
        })
    })
});

const fill = new Fill({
    color: 'rgba(255,255,255,0.0)',
});

const stroke = new Stroke({
    color: '#3399CC',
    width: 1.00,
});

let fillStyle = new Style({
    image: new Circle({
        fill: fill,
        stroke: stroke,
        radius: 4,
    }),
    fill: fill,
    stroke: stroke,
});

export var styleList = {
    'pointStyleGrey': pointStyleGrey,
    'fillStyle':fillStyle
}