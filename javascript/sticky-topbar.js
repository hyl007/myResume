/**
 * Created by Administrator on 2018/3/19.
 */
!function(){
    var view = document.querySelector('#topNarBar')
    var controller ={
        view:null,
        init:function(view) {
            this.view=view
            this.bindEvents()//this.bindEvents.call(this)
        },
        bindEvents:function(){
            var view= this.view
            window.addEventListener('scroll',(x)=>{
                if(window.scrollY > 0){
                    this.active()
                }else{
                    this.delactive()
                }
            })
        },
        active:function(){this.view.classList.add('sticky')},
        delactive:function(){this.view.classList.remove('sticky')}
    }
    controller.init(view)//controller.init.call(controller,view)
}.call()
