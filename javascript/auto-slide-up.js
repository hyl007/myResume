/**
 * Created by Administrator on 2018/3/19.
 */
!function(){
    let  speciaTags = document.querySelectorAll('[data-x]')
    for(let i =0;i<speciaTags.length;i++){
        speciaTags[i].classList.add('offset')
    }
    findClosestAndRemoveOffset()
    window.addEventListener('scroll',function(x){
        findClosestAndRemoveOffset()
    })
    /*************************/
    function findClosestAndRemoveOffset(){
        let  speciaTags = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for(let i=1;i<speciaTags.length;i++){
            if(Math.abs(speciaTags[i].offsetTop-window.scrollY) < Math.abs(speciaTags[minIndex].offsetTop-window.scrollY)){
                minIndex = i
            }
        }
        //离窗口最近的位置,就高亮下划线
        speciaTags[minIndex].classList. remove('offset')
        let id = speciaTags[minIndex].id
        let a= document.querySelector('a[href="#'+ id +'"]')
        let li = a.parentNode
        let brothersAndMe =li.parentNode.children
        for (let i=0;i<brothersAndMe.length;i++){
            brothersAndMe[i].classList.remove('heightLight')
        }
        li.classList.add('heightLight')
    }
}.call()
