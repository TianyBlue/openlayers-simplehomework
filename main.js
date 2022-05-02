import { addFullScreen, addMousePosControl, addScaleLine } from "./src/controlGadget/controlGadgets";
import { initiateLayerControl } from "./src/layerControl/layerControl";
import { addTileLayer, addVectorLayer } from "./src/mapSource/test"
import $ from "jquery"
import { getFeature, getLayer } from "./src/searchFeature/searchFeature";
import { flyToFeature } from "./src/mapInteraction/flyToPoint";
import { fillRedToPoint, fillRedToPolygon } from "./src/mapInteraction/fillRedToFeature";
import { createPoint, quitCreatePoint } from "./src/createFeature/createPoint";
import { addCityClick } from "./src/mapInteraction/cityClick";
import { styleList } from "./src/mapInteraction/styleList";

addTileLayer('OSM');
addVectorLayer('city');
const provinceLayer = addVectorLayer('province');
const footTrackLayer = addVectorLayer('footTrack');

footTrackLayer.setStyle(styleList['pointStyleGrey']);
provinceLayer.setStyle(styleList['fillStyle']);

// async function readFields(){
//     let data = await footTrackLayer.getFeatures();
//     console.log(data);
// }

// readFields()
// console.log(footTrackLayer.getKeys());

addCityClick();

addScaleLine();
addFullScreen();
addMousePosControl();

initiateLayerControl();

let defaultStyle;
let lastFeature;

$('.pic-nav').on('mouseenter', function (e) {
    $(this).hide();
    $('.nav').show().stop().animate({
        left: 0
    });

});

$('.nav').on('mouseleave', function (e) {
    $(this).stop().animate({
        left: -0.6 * $(this).width()
    }, function () {
        $('.nav').hide();
        $('.pic-nav').show();
    });

});

$('.searchBar .search').on('click', function () {
    let attr = $(this).siblings('input').val();
    // console.log(attr);
    let layer = getLayer('footTrack');
    let feature = getFeature(layer, attr);

    let oldText = $('.info-bar .info').html();

    if (feature != null) {
        $('.info-bar .info').html(oldText + "已搜索到" + attr + ", 位置在:<br />"
            + feature.getGeometry().getCoordinates() + "<br /><br />");

        //清空原有红色
        if (lastFeature != null)
            lastFeature.setStyle(defaultStyle);

        lastFeature = feature;
        defaultStyle = feature.getStyle();
        fillRedToPoint(feature);
        flyToFeature(feature);
    }
    else {
        $('.info-bar .info').html(oldText + "未搜索到" + attr + ", 请尝试其他位置。<br /><br />");
    }
});

$('.tools .density').on('click', function () {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/project/GetDensePointProvince');
    let info = null;
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //info is a list
            info = JSON.parse(xhr.response);
            let prov = getLayer("province");
            if (info == null) {
                console.log("NetWork Error!");
                return;
            }
            else {
                // console.log(info);
                let text = "";
                for (let i = 0; i < 3; i++) {
                    let fea = getFeature(prov, info[i]["name"]);
                    // console.log(fea);
                    fea && fillRedToPolygon(fea);
                    text += (info[i]["name"] + "," + info[i]["points"]);
                    text += ";";
                }
                text = text.slice(0, text.length - 1);
                // console.log(text);
                let oldText = $('.info-bar .info').html();
                $('.info-bar .info').html(oldText + "密度最高的三个省份为: " + text + "<br /><br />");
            }
        }
    }
    xhr.send();
});


$('.tools .create-point').on('click', function () {
    createPoint();
});

$('.tools .quit-create').on('click', function () {
    quitCreatePoint();
});



$('a.group-page').on('click',()=>{
    $('.main-map').hide();
    $('.courses-info').hide();
    $('.group-info').show();
    $('.contact-info').hide();
    $('.tools-used-info').hide();
});

$('a.map-page').on('click',()=>{
    $('.main-map').show();
    $('.courses-info').hide();
    $('.group-info').hide();
    $('.contact-info').hide();
    $('.tools-used-info').hide();
});

$('a.courses-page').on('click',()=>{
    $('.main-map').hide();
    $('.courses-info').show();
    $('.group-info').hide();
    $('.contact-info').hide();
    $('.tools-used-info').hide();
});

$('a.contact-page').on('click',()=>{
    $('.main-map').hide();
    $('.courses-info').hide();
    $('.group-info').hide();
    $('.contact-info').show();
    $('.tools-used-info').hide();
    
});

$('a.tools-used-page').on('click',()=>{
    $('.main-map').hide();
    $('.courses-info').hide();
    $('.group-info').hide();
    $('.contact-info').hide();
    $('.tools-used-info').show();
});


$('.tools .open-city-info').on('click',function(){
    $('.city-info').toggle();
});