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
            let content=myForm.querySelector('textarea[name=content]').value
            let name=myForm.querySelector('input[name=name]').value
            if(content!==''&&name!==''){
                this.model.save({name:name,content: content}).then(function(object) {
                    let li = document.createElement('li')
                    li.innerText=`${object.attributes.name}: ${object.attributes.content}`
                    messageList.appendChild(li)
                    myForm.querySelector('input[name=name]').value=''
                    myForm.querySelector('textarea[name=content]').value=''
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
                    console.log(item)
                    let li = document.createElement('li')
                    li.innerText=` ${item.name}: ${item.content}`
                    messageList.appendChild(li)
                })
            })
        }
    })
    controller.init(view,model)
}.call()



