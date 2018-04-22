
var myChart = echarts.init(document.getElementById('graphBar'));

var option = {
    title: {
        text: '前端',
        subtext: '技能展示图',
        top: 200,
        left: 50
    },
    tooltip: {
        trigger: 'item',
        backgroundColor : 'rgba(0,0,250,0.2)'
    },
    visualMap: {
        top: 'middle',
        right: 40,
        color: ['red', 'yellow'],
        calculable: true
    },
    radar: {
        indicator : [
            { text: 'css3', max: 400},
            { text: 'html', max: 400},
            { text: 'javascript', max: 400},
            { text: 'jquery', max: 400},
            { text: 'node.js', max: 400}
        ]
    },
    series : (function (){
        var series = [];
        for (var i = 1; i <= 28; i++) {
            series.push({
                name:'前端',
                type: 'radar',
                symbol: 'none',
                lineStyle: {
                    width: 1
                },
                emphasis: {
                    areaStyle: {
                        color: 'rgba(0,250,0,0.3)'
                    }
                },
                data:[
                    {
                        value:[
                            (40 - i) * 9,
                            (38 - i) * 4 + 160,
                            i * 5 + 200,
                            (i * 10)+30,
                            (i * i/4)+90
                        ],
                    }
                ]
            });
        }
        return series;
    })()
};
myChart.setOption(option);

particlesJS.load('particles-js', 'particlesjs-config.json', function() {

});

var welcomeYou=View('#welcomeYou')
welcomeYou.addEventListener('click',function(){
    welcomeYou.classList.remove('activeYou')
})