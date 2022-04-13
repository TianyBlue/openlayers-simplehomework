import { addFullScreen, addMousePosControl, addScaleLine } from "./src/controlGadget/controlGadgets";
import { initiateLayerControl } from "./src/layerControl/layerControl";
import { addTileLayer, addVectorLayer } from "./src/mapSource/test"
import $ from "jquery"
import { getFeature, getLayer } from "./searchFeature";
import { flyToFeature } from "./src/mapInteraction/flyToPoint";
import { fillRedToPoint, fillRedToPolygon } from "./src/mapInteraction/fillRedToFeature";
import { createPoint, quitCreatePoint } from "./src/createFeature/createPoint";
import { map } from "./src/init/initMap";

addTileLayer('OSM');
addVectorLayer('city');
addVectorLayer('province');

addScaleLine();
addFullScreen();
addMousePosControl();

initiateLayerControl();


$('.pic-nav').on('mouseenter', function (e) {
    // $(this).animate({
    //     left: 0
    // }, function () {
    //     $('.pic-nav').hide().css('left', -0.8 * $('.pic-nav').width())
    //     $('.nav').show();
    // });

    $(this).hide();
    $('.nav').show().stop().animate({
        left: 0
    })

});

$('.nav').on('mouseleave', function (e) {
    $(this).stop().animate({
        left: -0.8 * $(this).width()
    }, function () {
        $('.nav').hide();
        $('.pic-nav').show();
    })

});

$('.searchBar button').on('click', function () {
    var attr = $(this).siblings('input').val();
    console.log(attr);
    var layer = getLayer('city');
    var feature = getFeature(layer, attr);
    if (feature != null) {
        $('.searchState').text("已搜索到" + attr + ", 位置在:"
            + feature.getGeometry().getCoordinates());
        fillRedToPoint(feature);
        flyToFeature(feature);
    }
    else {
        $('.searchState').text("未搜索到" + attr + ", 请尝试其他位置。");
    }
});

$('.info-bar button').on('click',function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','/project/GetDensePointProvince');
    var info = null;
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status ==200)
        {
            //info is a list
            info = JSON.parse(xhr.response);
            var prov = getLayer("province");
            if(info == null){
                console.log("NetWork Error!");
                return;
            }
            else{
                var text = "";
                for(var i=0;i<3;i++)
                {
                    var fea = getFeature(prov, info[i]["name"]);
                    fillRedToPolygon(fea);
                    text += (info[i]["name"] + "," + info[i]["points"]);
                    text += ";";
                    console.log(text);
                }
                text = text.slice(0,text.length-1);
                console.log(text);
                $('.info-bar .info').text("密度最高的三个省份为: " + text);
            }
        }
    }
    xhr.send();
});


$('.create-point').on('click',function(){
    createPoint();
});

$('.quit-create').on('click',function(){
    quitCreatePoint();
});