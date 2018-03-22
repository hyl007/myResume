/**
 * Created by Administrator on 2018/3/19.
 */
//锚点动画
!function(){
    var view =document.querySelector('nav.menu')
    var controller={
        view:null,
        aTags:null,
        initAnimation:function(){
            function animate(time){
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        init:function(view){
            this.view=view
            this.aTags =this.view.querySelectorAll('nav.menu > ul > li > a')
            this.initAnimation()
            this.bindEvents()
        },
        bindEvents:function(){
            for(let i=0;i<this.aTags.length;i++){
                this.aTags[i].onclick = (x)=>{
                    x.preventDefault()
                    let a = x.currentTarget
                    let href = a.getAttribute('href')
                    let element=document.querySelector(href)
                    /*let top=document.querySelector(x.currentTarget.getAttribute('href')).offsetTop*/
                    this.scrollToElement(element)
                }
            }
        },
        scrollToElement:function(element){
            let top = element.offsetTop
            let currentTop = window.scrollY//页面到视口的高度
            let targetTop = top - 63//目标高度
            let s=targetTop-currentTop//路程
            var t=Math.abs((s/100)*300)//时间
            if (t>700){t=700}

            var coords = { y:currentTop }; // 起始位置
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, t)//结束位置与时间
                .easing(TWEEN.Easing.Quadratic.Out)//缓动类型
                .onUpdate(function() {
                    window.scrollTo(0,coords.y)
                })
                .start();
        }
    }
    controller.init(view)
}.call()
