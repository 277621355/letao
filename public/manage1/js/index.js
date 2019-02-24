 // 基于准备好的dom，初始化echarts实例
 var myChart1 = echarts.init(document.querySelector('.echa1'));
 var myChart2 = echarts.init(document.querySelector('.echa2'));

 // 指定图表的配置项和数据
 var option1 = {
     title: {
         text: '   2017年注册人数'
     },
     tooltip: {},
     legend: {
         data:['人数']
     },
     xAxis: {
         data: ["一月","二月","三月","四月","五月","六月"]
     },
     yAxis: {},
     series: [{
         name: '人数',
         type: 'bar',
         data: [523, 320, 356, 710, 610, 420]
     },{
        name: '销量',
        type: 'bar',
        data: [423, 620, 456, 310, 810, 720]
    },
    ]
 };
 var option2 ={
    title : {
        text: '热门品牌销售',
        subtext: '2017年6月',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "品牌 <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['耐克','阿迪达斯','Vans','匡威','亚瑟士']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'耐克'},
                {value:310, name:'阿迪达斯'},
                {value:234, name:'Vans'},
                {value:135, name:'匡威'},
                {value:158, name:'亚瑟士'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 30,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.6)'
                }
            }
        }
    ]
};


 // 使用刚指定的配置项和数据显示图表。
 myChart1.setOption(option1);
 myChart2.setOption(option2);
 
 