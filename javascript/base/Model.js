/**
 * Created by Administrator on 2018/3/23.
 */
window.Model=function(options){
    let resourceName = options.resourceName
    return {
        init:function(){
            var APP_ID = 'kBh0FGiYcT2yUlpTolnTVjdX-gzGzoHsz';
            var APP_KEY = 'QoCC9NJq4qMVBQ1OLWdXrMz6';
            AV.init({appId: APP_ID, appKey: APP_KEY})
        },
        fetch:function(){
            let query = new AV.Query(resourceName);
            return query.find()//返回一个promise对象
        },
        save:function(object){
            let X = AV.Object.extend(resourceName);
            let x=new X();
            return x.save(object)//返回一个promise对象
        }
    }
}
