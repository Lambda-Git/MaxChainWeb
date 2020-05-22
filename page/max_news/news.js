$(document).ready(function() {
    /*页面初始化*/

    /*header鼠标事件*/
    $("#main li a.newsInfo").addClass("activeColor");

    /*news--list*/
    $(".com_more").mouseover(function(){
        $(this).addClass("active");
    });
    $(".com_more").mouseout(function(){
        $(this).removeClass("active");
    });

});

/*function*/


