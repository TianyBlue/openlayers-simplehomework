import { Tile } from "ol"
import TileLayer from "ol/layer/Tile"
import VectorLayer from "ol/layer/Vector"
import { map } from "../init/initMap"
import { mapSource } from "./mapSource"

export var addTileLayer = function(name){
    for(var src in mapSource){
        if(src == name){
            var layer = new TileLayer({
                title: name,
                name:name,
                source: mapSource[name],
            });
            map.addLayer(layer);
            break;
        }
    }
}

export var addVectorLayer = function(name){
    for(var src in mapSource){
        if(src == name){
            var layer = new VectorLayer({
                title: name,
                name:name,
                source: mapSource[name],
            });
            map.addLayer(layer);
            break;
        }
    }
}