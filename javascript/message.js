/**
 * Created by Administrator on 2018/3/20.
 */
!function(){
    var view =View('#message')
    var model=Model({resourceName:'message'})
    var controller=Controller({
        myForm:null,
        messageList:null,
        init:function(view,model){
            this.myForm=view.querySelector('#postMessageForm')
            this.messageList=view.querySelector('#messageList')
            this.findMessage()
        },
        bindEvents:function(){
            this.myForm.addEventListener('submit',(e)=>{
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage:function(){
            let myForm=this.myForm
            let messageList=this.messageList
            let content=myForm.querySelector('input[name=content]').value
            let name=myForm.querySelector('input[name=name]').value
            if(content!==''&&name!==''){
                this.model.save({name:name,content: content}).then(function(object) {
                    let li = document.createElement('li')
                    li.innerText=`${object.attributes.name}: ${object.attributes.content}`
                    messageList.appendChild(li)
                    myForm.querySelector('input[name=name]').value=''
                    myForm.querySelector('input[name=content]').value=''
                })
            }else{
                alert('内容和姓名不能为空')
            }
        },
        findMessage:function(){
            let messageList=this.messageList
            this.model.fetch().then((messages)=>{
                let array=messages.map((item)=>item.attributes)
                array.forEach((item)=>{
                    let li = document.createElement('li')
                    li.innerText=` ${item.name}: ${item.content}`
                    messageList.appendChild(li)
                })
            })
        }
    })
    controller.init(view,model)
}.call()




    /*var model={
     initAV:function(){
     var APP_ID = 'kBh0FGiYcT2yUlpTolnTVjdX-gzGzoHsz';
     var APP_KEY = 'QoCC9NJq4qMVBQ1OLWdXrMz6';
     AV.init({appId: APP_ID, appKey: APP_KEY})
     },
     //获取数据
     fetch:function () {
     let query = new AV.Query('message');
     return query.find()//返回一个promise对象
     },
     //创建数据
     save:function (name,content) {
     let Message = AV.Object.extend('message');
     let message=new Message();
     return message.save({
     name:name,
     content: content
     })//返回一个promise对象
     }
     }
     */
   /* var controller ={
        view:null,
        model:null,
        myForm:null,
        messageList:null,
        init:function(view,model){
            this.view=view
            this.model=model
            this.myForm=this.view.querySelector('#postMessageForm')
            this.messageList=this.view.querySelector('#messageList')
            this.model.init()
            this.bindEvents()
            this.findMessage()
        },
        bindEvents:function(){
            this.myForm.addEventListener('submit',(e)=>{
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage:function(){
            let myForm=this.myForm
            let messageList=this.messageList
            let content=myForm.querySelector('input[name=content]').value
            let name=myForm.querySelector('input[name=name]').value
            if(content!==''&&name!==''){
                this.model.save({name:name,content: content}).then(function(object) {
                    let li = document.createElement('li')
                    li.innerText=`${object.attributes.name}: ${object.attributes.content}`
                    messageList.appendChild(li)
                    myForm.querySelector('input[name=name]').value=''
                    myForm.querySelector('input[name=content]').value=''
                })
            }else{
                alert('内容和姓名不能为空')
            }
        },
        findMessage:function(){
            let messageList=this.messageList
            this.model.fetch().then((messages)=>{
                let array=messages.map((item)=>item.attributes)
                array.forEach((item)=>{
                    let li = document.createElement('li')
                    li.innerText=` ${item.name}: ${item.content}`
                    messageList.appendChild(li)
                })
            });
        }
    }*/

//创建一个TestObject
/*
var TestObject = AV.Object.extend('TestObject');
//表中插入一条数据
var testObject = new TestObject();
//数据内容为words: 'Hello World!'
//成功后展示alert('LeanCloud Rocks!')
testObject.save({
    words: 'Hello World!'
}).then(function(object) {
    alert('LeanCloud Rocks!');
})*/
