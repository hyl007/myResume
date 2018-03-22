/**
 * Created by Administrator on 2018/3/19.
 */
!function(){
    var view = document.querySelector('.swiper-container')
    var controller ={
        view:null,
        swiper:null,
        init:function(view){
            this.view=view
            this.initSwiper()
        },
        swiperOptions:{
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        initSwiper: function () {
            this.swiper = new Swiper (this.view,this.swiperOptions)
       }
    }
    controller.init(view)
}.call()
