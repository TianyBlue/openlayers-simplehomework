import Style from "ol/style/Style";
import Circle from "ol/style/Circle"
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";

var pointRedStyle = new Style({
    image: new Circle({
        radius: 10,
        fill: new Fill({
            color:'#dc143c'
        })
    })
});

var polygonRedStyle = new Style({
    stroke: new Stroke({
        color: '#dc143c',
        width: 1.25
    }),
    fill: new Fill({
        color: 'rgba(0.5,0.5,0.5,0.1)'
    }),
    zIndex: 999
});


export var fillRedToPoint=function(feature){
    feature.setStyle(pointRedStyle);
}

export var fillRedToPolygon=function(feature){
    feature.setStyle(polygonRedStyle);
}