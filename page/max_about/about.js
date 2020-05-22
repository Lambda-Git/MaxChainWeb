$(document).ready(function() {
    /*页面初始化*/

    /*header鼠标事件*/
    $("#main li a.aboutUs").addClass("activeColor");

   /* /!*百度地图API功能*!/
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    var local = new BMap.LocalSearch(map, {
        renderOptions:{map: map}
    });
    /!*local.search("北京宏链科技有限公司");*!/
    local.search("北航致真大厦");*/

});

/*function*/


