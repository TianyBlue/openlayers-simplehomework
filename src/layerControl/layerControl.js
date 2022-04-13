import { map } from "../init/initMap";

var layer = [];
var layerName = [];
var layerVisibility = [];

var selector = '.layers';

function clickFunction(ele, layer) {
    ele.addEventListener('click', function () {
        if (this.checked) {
            layer.setVisible(true);
        }
        else {
            layer.setVisible(false);
        }
    });
}

export var initiateLayerControl = function() {
    var layers = map.getLayers();
    // console.log(layers);
    var container = document.querySelector(selector);
    for (var i = 0; i < layers.getArray().length; i++) {
        layer[i] = layers.item(i);
        // console.log(layer[i]);
        layerName[i] = layer[i].get('name');
        layerVisibility[i] = layer[i].getVisible();
        var ele = document.createElement('li');
        ele.innerHTML = '<input type="checkbox" name="layers"><label>' + layerName[i] + '</label>';
        container.appendChild(ele);
        if (layerVisibility[i]) {
            // console.log("true");
            ele.firstElementChild.checked = true;
        }
        clickFunction(ele.firstElementChild, layer[i]);
    }

}