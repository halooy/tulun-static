var Alert = {
    alert:function (data) {
        //获取容器
        var container = $("#component-container");
        //动态创建模态框实例
        // const alertComponent = Vue.component("alert-component",{
        //     data:function () {
        //         return {
        //             name:data.name,
        //             title:data.title,
        //             context:data.context
        //         }
        //     }
        // });
        const alertComponent = Vue.component("alert-component");
        const instance = new alertComponent();
        instance.$mount("#component-container");
        // if($('#'+data.name+'')){
        // }
        // var alertComponment = $("<alert-component name="+data.name+" title="+data.title+" context="+data.context+"></alert-component>");
        // alertComponment.appendTo(container);
        // //调用
        $('#'+data.name+'').modal();
        // var component = new Vue({
        //     el:"#component-container"
        // });
        console.log(data.title);
        console.log(data.context);
    }
}