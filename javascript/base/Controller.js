/**
 * Created by Administrator on 2018/3/23.
 */
window.Controller=function(options){
    let init = options.init
    var object= {
        view:null,
        model:null,
        init:function(view,model){
            this.view=view
            this.model=model
            this.model.init()
            init.call(this,view,model)
            this.bindEvents.call(this)
        },
    }
    for(let key in options){
        if(key!=='init'){
            object[key]=options[key]
        }
    }
    return object
}
