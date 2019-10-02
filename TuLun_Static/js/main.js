// $(function () {
//     var j=0;
//     var show = function () {
//         // console.log("asdas");
//         j++;
//         $.each($("#container td"),function (i,item) {
//             $(this).css("left","-"+j+"px");
//         });
//         // console.log(j);
//     };
//     var v = setInterval(show,10);
//     $("#container td").mouseover(function () {
//         clearInterval(v);
//     })
//     $("#container td").mouseout(function () {
//         v = setInterval(show,10);
//     })
// });
$(function () {
    init();
});
function init() {
    var status=0;   //0表示未显示
    $("#menu_show").hide(function () {
        status = 0;
    });
    $("#menu_action").click(function () {
        $("#menu_show").show(500,function () {
            status = 1;
        });
    });
    $("body").click(function () {
        if(status==1){
            $("#menu_show").hide(500,function () {
                status = 0;
            });
        }
    });



}