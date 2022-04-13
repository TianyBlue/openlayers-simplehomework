import { Feature } from "ol";
import VectorLayer from "ol/layer/Vector";
import { map } from "./src/init/initMap"

export var getFeature = function (layer, attr) {
    var source = layer.getSource();
    var features = source.getFeatures();
    var words = String(attr).split();
    var pattern = ".*";
    for (var i = 0; i < words.length; i++)
        pattern = pattern + (words[i] + ".*");
    var keyword = new RegExp(pattern);
    for (var j = 0; j < features.length; j++) {
        var name = String(features[j].get('name')).trim();
        if (name.match(keyword))
        {
            return features[j];
        }    
    }
    return null;
}

export var getLayer = function (layername) {
    var layers = map.getLayers();
    for (var i = 0; i < layers.getArray().length; i++) {
        var layer = layers.item(i);
        if (layer.get('name')==layername) {
            return layer;
        }
    }
    return null;
}


// var fea = new Feature();

// fea.on('click', function () {
//     console.log(this);
// })


// var layer = new VectorLayer();

// layer.on({

// })

// export var featureClick = function (layer) {
//     var features = layer.getSource().getFeature
// }