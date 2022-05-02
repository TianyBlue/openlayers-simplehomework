import { map } from "../init/initMap";
import Select from "ol/interaction/Select"
import { click } from 'ol/events/condition';
import { getLayer } from "../searchFeature/searchFeature";
import Text from "ol/style/Text";
import Fill from "ol/style/Fill";
import Circle from 'ol/style/Circle';
import Style from "ol/style/Style";
import { updateInfo } from "../getCityInfo/getInfo";
import $ from "jquery";

let selectInteract;

// 鼠标移动到要素上时，样式变为小手
map.on('pointermove', function (evt) {
    var pixel = map.getEventPixel(evt.originalEvent);
    let isPoint = false;
    map.forEachFeatureAtPixel(pixel,(feature,layer)=>{
        if(layer&&layer.get('name')=='city')
            isPoint = true;
    });
    if (map.hasFeatureAtPixel(pixel) && isPoint) {
        $('body').css('cursor', 'pointer');
    }
    else {
        $('body').css('cursor', 'default');
    }
});

export var addCityClick = () => {

    let city = getLayer('city');
    // 单击选择要素，要素颜色变为红色
    selectInteract = new Select({
        condition: click,
        layers: [city],
        style: function (feature) {
            var style = new Style({
                image: new Circle({
                    radius: 8,
                    fill: new Fill({
                        color: '#dc143c'
                    })
                }),
                text: new Text({
                    font: '13px MicroSoft YaHei bolder',
                    text: feature.get("name"),
                    fill: new Fill({
                        color: '#dc143c'
                    }),
                    offsetX: 15,
                    offsetY: 15
                })
            });
            return style;
        }
    });

    // 添加查询选中要素的事件
    selectInteract.on('select', function (evt) {
        // console.log(selectInteract);
        let features = selectInteract.getFeatures().getArray();

        if (features.length > 0) {
            var feature = features[0];
            updateInfo(feature.get("name"));
        }
    });

    map.addInteraction(selectInteract);
}

export var removeCityClick = () => {
    map.removeInteraction(selectInteract);
}