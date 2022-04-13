import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import { map } from "../init/initMap";
import Draw from "ol/interaction/Draw";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import { Point } from "ol/geom";
import Circle from "ol/style/Circle";
import $ from "jquery"


var drawPoint;

var createdSource = new VectorSource({
    wrapX: false
});

var createdLayer = new VectorLayer({
    source: createdSource,
    style: new Style({
        fill: new Fill({
            color: 'rgba(255,255,255,0.2)'
        }),
        stroke: new Stroke({
            color: '#ff0000',
            width: 2
        }),
        image: new Circle({
            radius: 7,
            fill: new Fill({
                color: '#ff0000'
            })
        })
    }),
    zIndex: 999,
    name: '新建要素图层'
});

var geomFunc = function (coordinate, geometry) {
    if (!geometry) {
        geometry = new Point(coordinate);
    }
    geometry.setCoordinates(coordinate);
    return geometry;
};

map.addLayer(createdLayer);

export var createPoint = function () {
    drawPoint = new Draw({
        type: 'Point',
        source: createdSource,
        geometryFunction: geomFunc
    });
    
    map.addInteraction(drawPoint);
}

export var quitCreatePoint = function(){
    var features = createdSource.getFeatures();
    if(confirm("是否保存已绘制要素？")){
        var pointsArray = [];
        for(var i=0;i<features.length;i++)
        {
            var feature = features[i];
            // var pts = [feature.getGeometry().getCoordinates()[0],feature.getGeometry().getCoordinates()[0],450];
            pointsArray.push(feature.getGeometry().getCoordinates());
        }
        var pointsObj = {
            pointsCount: pointsArray.length,
            points: pointsArray
        };
        var reqBody = JSON.stringify(pointsObj);
        // console.log(JSON.stringify(pointsArray));
        sendJson(reqBody);
    }
    else{
        createdSource = new VectorSource({
            wrapX: false
        });
        createdLayer.setSource(createdSource);
    }
    map.removeInteraction(drawPoint);
}

function sendJson(body){
    console.log(body);
    $.ajax({
        url: '/project/AddPointsToDB',
        type: "POST",
        contentType: 'application/json;charset=utf-8',
        data: body,
        success: function(){alert("已保存")},
        error: function(){alert("保存失败");}
    });
}