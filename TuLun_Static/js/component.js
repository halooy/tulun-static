$(function () {
    Vue.component('alert-component', {
        props: ['title','context','name'],
        template: '<div class="modal fade" tabindex="-1" role="dialog" v-bind:id="model">\n' +
        '    <div class="modal-dialog" role="document">\n' +
        '        <div class="modal-content">\n' +
        '            <div class="modal-header">\n' +
        '                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
        '                <h4 class="modal-title">{{title}}</h4>\n' +
        '            </div>\n' +
        '            <div class="modal-body">\n' +
        '                <p>{{context}}</p>\n' +
        '            </div>\n' +
        '            <div class="modal-footer">\n' +
        '                <button type="button" class="btn btn-default" data-dismiss="modal">确定{{model}}</button>\n' +
        '            </div>\n' +
        '        </div><!-- /.modal-content -->\n' +
        '    </div><!-- /.modal-dialog -->\n' +
        '</div><!-- /.modal -->',
        data:function () {
            return {
                model:this.name
            }
        }
    });

});