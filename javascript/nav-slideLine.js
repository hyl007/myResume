/**
 * Created by Administrator on 2018/3/19.
 */
//导航下滑横线
!function(){
    var view =View('nav.menu')
    var controller={
        view:null,
        liTags:null,
        init:function(view){
            this.view=view
            this.liTags=this.view.querySelectorAll('nav.menu > ul > li')
            this.bindEvents()
        },
        bindEvents:function(){
            //鼠标进入就高亮下划线，离开就移除
            for (let i=0;i<this.liTags.length;i++) {
                this.liTags[i].onmouseenter = function (x) {
                    x.currentTarget.classList.add('active')
                }
                this.liTags[i].onmouseleave = function (x) {
                    x.currentTarget.classList.remove('active')
                }
            }
        }
    }
    controller.init(view)
}.call()
