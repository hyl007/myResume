/**
 *
 */
function writeCode(prefix,code,fn){
    let domCode=document.querySelector('#code')
    domCode.innerHTML=prefix||''
    var n= 0
    var id= setInterval(()=>{
        n+=1
        domCode.innerHTML= Prism.highlight(prefix+code.substring(0,n), Prism.languages.css);
        codeCss.innerHTML=prefix+code.substring(0,n)
        domCode.scrollTop=domCode.scrollHeight
        if(n>code.length){
            window.clearInterval(id)
            fn&&fn.call()
        }
    },10)
}
function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper>.content')
    let n=0
    let id=setInterval(()=>{
        n+=1
        domPaper.innerHTML=markdown.substring(0,n)
        domPaper.scrollTop=domPaper.scrollHeight
        if(n>=markdown.length){
            window.clearInterval(id)
            fn&&fn.call()
        }
    },20)
}




var result=`
    /*
    *面试官你好，我是胡阳林
    *我会以动画的形式介绍自己
    */
    *{
      transition:all 1s;
    }
    html{
        background: rgb(222,222,222);
        font-size:16px;
    }
    .code{
        border:1px solid grey;
        padding:16px;
        width:45vw;
        height:90vh;
    }
    /*
    *代码颜色太单调，接下来高亮代码
    */
    .token.property{
        color: #690;
    }
    .token.selector{
        color: #905;
    }
    .token.function{
        color: #DD4A68;
    }
    /*
    *加点3D效果
    */
     .code{
        position:fixed;
        animation: breath 0.5s infinite alternate-reverse;
        transform:translateY(30px) translateX(30px);
    }
    /*
    *我需要一张白纸
    *作为我的简历
    *我会在白纸上写我的个人信息
    */
    #paper{
        position:fixed;
        right:0;
        width:50%;
        height:100%;
        display: flex;
        justify-content: center;
        align-content: center;
        padding:16px;
    }
    .content{
        background: white;
        height: 100%;
        width: 100%;
    }
    `
var md= `
# 自我介绍
姓名：胡阳林
年龄：25
学历：本科

专业：计算机科学与技术（网络方向）
学校：贺州学院

自学前端半年
希望应聘前端开发岗位

# 技能介绍
熟悉 JavaScript CSS

# 项目介绍
1. 无缝轮播
2. 我的简历
3. 画板

# 联系方式
* QQ: 314773165
* Email: 314773165
* 手机: 18378401191
`
var result2=
    `
   /*
    *接下来用marked.js把markDown变成html
    *
    *接下来用marked.js把markDown变成html
    *
    *接下来用marked.js把markDown变成html
    *
    *重要的事情说三遍
    */
    `
 result3 =
    `
    /*
    * 这就是我的会动的简历
    * 谢谢观看
    */
    `

writeCode('', result, ()=>{ // writeCss call the function
    createPaper(() => {
    writeMarkdown(md,()=> {
        writeCode(result, result2, ()=>{
        convertMarkdownToHtml(()=>{
            writeCode(result + result2, result2, ()=> {
            console.log('完成')
        })
    })
    })
})
})
})
function createPaper(fn){
    var paper =document.createElement('div')
    paper.id='paper'
    var content =document.createElement('pre')
    content.className='content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}
function convertMarkdownToHtml(fn){
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
}
