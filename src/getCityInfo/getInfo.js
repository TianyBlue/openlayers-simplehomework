import $ from "jquery";

function getCorrectVal(param) {
    if (param == 0)
        return "暂无数据"
    else {
        return param;
    }
}

let nullStatInfo = {
    name: "暂无数据",
    gdp: "暂无数据",
    pop: "暂无数据",
    ave_gdp: "暂无数据",
    increase_ratio: "暂无数据",
    construction_land: "暂无数据",
    inhabitant_land: "暂无数据",
    con_land_per: "暂无数据"
};

// 更新右侧info
export var updateInfo = function (name) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/project/GetStatInfo?name=' + name);
    let json = null;
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            json = JSON.parse(xhr.responseText);
            // console.log(json);
            if (json == null) {
                json = nullStatInfo;
            }
            $('.info-content .name span').text(json["name"]);
            $('.info-content .gdp span').text(getCorrectVal(json["gdp"]));
            $('.info-content .pop span').text(getCorrectVal(json["pop"]));
            $('.info-content .ave_gdp span').text(getCorrectVal(json["ave_gdp"]));

            $('.info-content .increase_ratio span').text(getCorrectVal(json["increase_ratio"]));
            $('.info-content .construction_land span').text(getCorrectVal(json["construction_land"]));
            $('.info-content .inhabitant_land span').text(getCorrectVal(json["inhabitant_land"]));
            $('.info-content .con_land_per span').text(getCorrectVal(json["con_land_per"]));
        }
    }
    xhr.send();

    let nearCityxhr = new XMLHttpRequest();
    nearCityxhr.open('GET', '/project/GetNearestCity?name=' + name);
    let info = null;
    nearCityxhr.onreadystatechange = function () {
        if (nearCityxhr.readyState == 4 && nearCityxhr.status == 200) {
            info = JSON.parse(nearCityxhr.responseText);
            if (info == null) {
                console.log("NetWork Error");
                return;
            }
            else {
                $('.info-content .nearest_city span').text(info["name"]);
                $('.info-content .distance span').text(info["distance"].toFixed(2));
            }
        }
    }
    nearCityxhr.send();
}