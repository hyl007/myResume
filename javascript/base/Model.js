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
            let now = new Date();
            query.lessThanOrEqualTo('createdAt', now);//查询今天之前创建的 Todo
            query.limit(10);// 最多返回 10 条结果
            query.descending('createdAt');
            return query.find()//返回一个promise对象
        },
        save:function(object){
            let X = AV.Object.extend(resourceName);
            let x=new X();
            return x.save(object)//返回一个promise对象
        }
    }
}
