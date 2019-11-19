// JavaScript Document
$(document).ready(function(){
	var accordionsMenu = $('.cd-accordion-menu');

	if( accordionsMenu.length > 0 ) {
	
	accordionsMenu.each(function(){
		var accordion = $(this);
		//detect change in the input[type="checkbox"] value
		accordion.on('change', 'input[type="checkbox"]', function(){
			var checkbox = $(this);
			console.log(checkbox.prop('checked'));
			( checkbox.prop('checked') ) ? checkbox.siblings('ul').attr('style', 'display:none;').slideDown(300) : checkbox.siblings('ul').attr('style', 'display:block;').slideUp(300);
		});
	});
	$('#content_bar').hide(0);
	$('#content_pie').hide(0);
//	var date = new Object();
//	date = get_date();
	console.log(date);
	console.log(date.today);
	var flag = 0;//0 is year,1 is month,2 is day
	window.year='';
	window.month='';
	window.day='';
	for(var i=0;i<date.today.length;i++){
		if(date.today[i]=='/'){flag++;continue;}
		if(flag==0){year += date.today[i];}
		if(flag==1){month += date.today[i];}
		if(flag==2){day += date.today[i];}
	}
//	console.log(window.year.window.month,window.day);
	//地图初始化隐藏部分
	$('#longtian_nav').css('display','none');
	$('#kengzi_nav').css('display','none');
	$('#biling_nav').css('display','none');
	$('#maluan_nav').css('display','none');
	$('#pingshanjiedao_nav').css('display','none');
	$('#shijing_nav').css('display','none');
	//结束
	canvas_change();
}

document.getElementById('time_box').onmousewheel = function(){
	document.getElementById('time_box').setAttribute('class','box_hided');
	$('#clock_box2').slideUp(300);
	$('#clock_box').slideDown(0);
}
})

function myshow(showed){
	$('#edubalance').css('height','95%');
	$('#courserate').css('height','95%');
	//document.getElementById('edubalance').height='95%';
	//document.getElementById('courserate').height='95%';
	$('.table').hide();
	$('#content_'+showed).show();
	//canvas_change();
}
function show_map(showed){
	$('#mapadd_nav').css('display','none');
	$('#longtian_nav').css('display','none');
	$('#kengzi_nav').css('display','none');
	$('#biling_nav').css('display','none');
	$('#maluan_nav').css('display','none');
	$('#pingshanjiedao_nav').css('display','none');
	$('#shijing_nav').css('display','none');
	$('#'+showed+'_nav').css('display','block');
}
//控制街道选择块儿
$('#selected_street').change(
	function(){
	$('#blank').hide(0);
	$('.selected_community').hide(0);
	$('#'+this.value).show(0);
})
$('#street').mouseover(
	function(){
	$('#street_son').show(200);
})
$('#street').mouseout(
	function(){
	$('#street_son').hide(200);
})
//加载统计图区域：
//bar区：
function canvas_change(){
	map_issue();
//$(function() {
	var response_bar;
	var xmlhttp_bar;
	function bar_issue(){
		if (window.XMLHttpRequest) {xmlhttp_bar=new XMLHttpRequest();}
		
		else{xmlhttp_bar=new ActiveXObject("Microsoft.XMLHTTP");}	
		xmlhttp_bar.onreadystatechange=getResult_bar;
		xmlhttp_bar.open("POST","DataStreetToday",true);
		xmlhttp_bar.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp_bar.send("year="+window.year+"&month="+window.month+"&day="+window.day+"&hour="+date.hrs+"&minute="+date.min+"&second="+date.sec);		
	}
	
	function getResult_bar(){
		if (xmlhttp_bar.readyState==4) {		
			if(xmlhttp_bar.status==200){
				var rec=xmlhttp_bar.responseText;
				response_bar = eval("("+rec+")");
				var dataType=[];
				for(var kinds in response_bar.坪山街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.坑梓街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.马峦街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.碧玲街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.龙田街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				for(var kinds in response_bar.石井街道){
					if(dataType.indexOf(kinds)>-1){continue;}
					else{dataType.push(kinds);}
				}
				console.log(dataType);
				var colors = 0x24f213;
				for(var i=0;i<dataType.length;i++){
					colors += 0x234567;
					colors = colors & 0xffffff;
					var temp = dataType[i]
					if(!response_bar.龙田街道[temp]){response_bar.龙田街道[temp] = 0;}
					if(!response_bar.坑梓街道[temp]){response_bar.坑梓街道[temp] = 0;}
					if(!response_bar.碧岭街道[temp]){response_bar.碧岭街道[temp] = 0;}
					if(!response_bar.马峦街道[temp]){response_bar.马峦街道[temp] = 0;}
					if(!response_bar.石井街道[temp]){response_bar.石井街道[temp] = 0;}
					if(!response_bar.坪山街道[temp]){response_bar.坪山街道[temp] = 0;}
					var sery = {
						name:dataType[i],
						type:'bar',
						stack: '总量',
						data:[response_bar.龙田街道[temp],response_bar.坑梓街道[temp],response_bar.碧岭街道[temp],
							  response_bar.马峦街道[temp],response_bar.石井街道[temp],response_bar.坪山街道[temp]],
						barMaxWidth : 50,
						itemStyle: {
							normal: {
								color: '#'+colors.toString(16)
								},
								label: {
									show: true,
									position: 'top',
									formatter: '{c}'
								}
							},
							
					};
					//console.log(dataType[i],sery);
					paint_bar(dataType[i],sery);
					console.log(i);
				}
			}
			else{
				alert("连接失败");
			}
		}
	}
	$('#bar_button').click(function(){
		bar_issue();
	})
	var bar_option = {
	        tooltip: {
	            trigger: 'axis',
	            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}</br>{a4}: {c4}</br>...'
	        },
	        toolbox: {
	            show:false,
	            feature: {
	                dataView: {show: true, readOnly: false},
	                magicType: {show: true, type: ['bar','stack']},
	                restore: {show: true},
	                saveAsImage: {show: true}
	            }
	        },
			calculable : true,
	        legend: {
	            data:[],
	            right:"5%",
	            textStyle:{
	                color:'#000'
	            }
	        },
	        grid:{
	            top:'18%',
	            right:'5%',
	            bottom:'8%',
	            left:'5%',
	            containLabel: true
	        },
	        xAxis: [
	            {
	                type: 'category',
	                data: ['龙田街道','坑梓街道','碧岭街道','马峦街道','石井街道','坪山街道'],
	                splitLine:{
	                    show:false,
	                    lineStyle:{
	                        color: '#000'
	                    }
	                },
	                axisTick: {
	                    show: false
	                },
	                axisLabel:{
	                    textStyle:{
	                        color:"#000"
	                    },
	                    lineStyle:{
	                        color: '#000'
	                    },
	                    alignWithLabel: true,
	                    interval:0,
	                }
	            }
	        ],
	        yAxis: [
	            {
	                type: 'value',

	                nameTextStyle:{
	                    color:'#000'
	                },
	                interval: 5,
	                max:60,
	                min: 0,
	                splitLine:{
	                    show:true,
	                    lineStyle:{
	                        color: '#000'
	                    }
	                },
	                axisLine: {
	                    show:false,
	                    lineStyle: {
	                        color: '#000'
	                    }
	                },
	                axisTick: {
	                    show: false
	                },
	                axisLabel:{
	                    textStyle:{
	                        color:"#000"
	                    },
	                    alignWithLabel: true,
	                    interval:0

	                }
	            }
	        ],
			
	        color:"yellow",
	        series: []
	    };
	function paint_bar(dataType,sery){
		console.log(sery);
	    var edubalance = echarts.init(document.getElementById('edubalance'));
	    
		bar_option.series.push(sery);
		bar_option.legend.data.push(dataType);
		edubalance.setOption(bar_option);
	}
	//$('#content_bar').hide(0);
/*  =====-=*/
//pie区：
	//时间事件ajax
	//var response;
    window.response='';
	var xmlhttp_time;
	function time_issue(){
		var year1=document.getElementById('selected_year_pre').value;
		var month1=document.getElementById('selected_month_pre').value;
		var day1=document.getElementById('selected_day_pre').value;
		var year=document.getElementById('selected_year').value;
		var month=document.getElementById('selected_month').value;
		var day=document.getElementById('selected_day').value;
		console.log(year,month,day,year1,month1,day1);
		if (window.XMLHttpRequest) {xmlhttp_time=new XMLHttpRequest();}
		
		else{xmlhttp_time=new ActiveXObject("Microsoft.XMLHTTP");}	
		xmlhttp_time.onreadystatechange=getResult;
		xmlhttp_time.open("POST","DataProperties",true);
		xmlhttp_time.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp_time.send("year="+window.year+"&month="+window.month+"&day="+window.day+"&year1="+year1+"&month1="+month1+"&day1="+day1);		
	}
	
	function getResult(){
		if (xmlhttp_time.readyState==4) {		
			if(xmlhttp_time.status==200){
				var rec=xmlhttp_time.responseText;
				response = JSON.parse(rec);
//				console.log('???');
//				console.log(response);
//				console.log(response.投诉);
				window.test_response.tousu = response.投诉;
				console.log(window.test_response.tousu);
				window.test_response.jianyi = response.建议;
				window.test_response.zixun = response.咨询;
				window.test_response.ganxie = response.感谢;
				window.test_response.qiujue = response.求决;
				window.test_response.qita = response.其他;
				paint_pie();
			}
			else{
				alert("连接失败");
			}
		}
	}
	//var test_response = [];
	window.test_response = [];
	test_response.tousu=0;
	test_response.jianyi=0;
	test_response.zixun=0;
	test_response.ganxie=0;
	test_response.qiujue=0;
	test_response.qita=0;
	$('#time_button').click(function(){
		time_issue();
		
	})
	
	
//	for(var key in response){
//		alert('!!');
//		if(key == '投诉'){test_response.tousu = response['投诉'];}
//		else if(key == '建议'){test_response.jianyi = response['建议'];}
//		else if(key == '咨询'){test_response.zixun = response['咨询'];}
//		else if(key == '感谢'){test_response.ganxie = response['感谢'];}
//		else if(key == '求决'){test_response.qiujue = response['求决'];}
//		else if(key == '其他'){test_response.qita = response['其他'];}
//	}
	
	function paint_pie(){
		console.log(response);
		console.log(test_response);
		console.log(test_response.tousu);
		for(var key in test_response){
			console.log(key);
		}
//    	console.log('!!');
//    	console.log(test_response);
//    	console.log(test_response.tousu);
    var courserate = echarts.init(document.getElementById('courserate'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '20%',
            y:'middle',
            textStyle:{
                color:"#000"
            },

            formatter:function(name){
            	
            	console.log(option.series[0].data);
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value + oa[4].value + oa[5].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name +  ' '+oa[i].value;
                    }
                }
            },
            data: ['投诉','建议','咨询','感谢','求决','其他']
        },
        series : [
            	{
                name: '具体数据',
                type: 'pie',
                radius : '65%',
                color:['#27c2c1','#9ccb63','#fcd85a','#60c1de','#6495ED','#FFFF00'],
                center: ['30%', '50%'],
                data:[
                    {value:test_response.tousu, name:'投诉'},
                    {value:test_response.jianyi, name:'建议'},
                    {value:test_response.zixun, name:'咨询'},
                    {value:test_response.ganxie, name:'感谢'},
					{value:test_response.qiujue, name:'求决'},
					{value:test_response.qita, name:'其他'},
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            position:'outside',
                            formatter: '{b}'
                        }
                    },
                    labelLine :{show:true}
                }
            }
        ]
    };
    courserate.setOption(option);
	//$('#content_pie').hide(0);
	}
//})
//统计图区域结束

//地图块开始
/* 地图 需要哪个省市的地图直接引用js 将下面的name以及mapType修改为对应省市名称*/
	var xmlhttp_map;
	function map_issue(){
		if (window.XMLHttpRequest) {xmlhttp_map=new XMLHttpRequest();}
		
		else{xmlhttp_map=new ActiveXObject("Microsoft.XMLHTTP");}	
		xmlhttp_map.onreadystatechange=getResult_map;
		xmlhttp_map.open("POST","HotCommunityToday",true);
		xmlhttp_map.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp_map.send("year="+window.year+"&month="+window.month+"&day="+window.day+"&hour="+date.hrs+"&minute="+date.min+"&second="+date.sec);				
	}
	
	function getResult_map(){
		if (xmlhttp_map.readyState==4) {		
			if(xmlhttp_map.status==200){
				var rec=xmlhttp_map.responseText;
				response_map = eval("("+rec+")");
				console.log(response_map);
				var longtian,biliing,maluan,pingshanjiedao,kengzi,shijing;
				longtian = (response_map.龙田社区?response_map.龙田社区:0) + (response_map.老坑社区?response_map.老坑社区:0) + (response_map.南布社区?response_map.南布社区:0) + (response_map.竹坑社区?response_map.竹坑社区:0);
				kengzi = (response_map.沙田社区?response_map.沙田社区:0) + (response_map.金沙社区?response_map.金沙社区:0) + (response_map.秀新社区?response_map.秀新社区:0) + (response_map.坑梓社区?response_map.坑梓社区:0);
				biling = (response_map.碧玲社区?response_map.碧玲社区:0) + (response_map.汤坑社区?response_map.汤坑社区:0) + (response_map.沙湖社区?response_map.沙湖社区:0);
				maluan = (response_map.坪环社区?response_map.坪环社区:0) + (response_map.马峦社区?response_map.马峦社区:0) + (response_map.江岭社区?response_map.江岭社区:0) + (response_map.沙坣社区?response_map.沙坣社区:0);
				shijing = (response_map.石井社区?response_map.石井社区:0) + (response_map.田头社区?response_map.田头社区:0) + (response_map.田心社区?response_map.田心社区:0) + (response_map.金龟社区?response_map.金龟社区:0);
				pingshanjiedao = (response_map.六联社区?response_map.六联社区:0) + (response_map.和平社区?response_map.和平社区:0) + (response_map.六和社区?response_map.六和社区:0) + (response_map.坪山社区?response_map.坪山社区:0);
				console.log(longtian,kengzi,biling,maluan,shijing,pingshanjiedao);
				var color=['','','','','',''];
				window.longtian_color=['','','',''];
				window.kengzi_color=['','','',''];
				window.biling_color=['','',''];
				window.maluan_color=['','','',''];
				window.shijing_color=['','','',''];
				window.pingshanjiedao_color=['','','',''];
				function get_color(obj){
				if(obj<1000){
				if(obj<900){
				if(obj<800){
				if(obj<700){
				if(obj<600){
				if(obj<500){
				if(obj<400){
				if(obj<300){
				if(obj<200){
				if(obj<100){
					return '#acd6ff';}
					return '#97cbff';}
					return '#84c1ff';}
					return '#66b3ff';}
					return '#46a3ff';}
					return '#2894ff';}
					return '#0080ff';}
					return '#0072e3';}
					return '#0066cc';}
					return '#005ab5';}
				return '#004b97';
				}
				function get_shequ_color(obj){
					if(obj<420){
					if(obj<360){
					if(obj<300){
					if(obj<240){
					if(obj<180){
					if(obj<120){
					if(obj<60){
						return '#acd6ff';}
						return '#84c1ff';}
						return '#66b3ff';}
						return '#46a3ff';}
						return '#0080ff';}
						return '#0072e3';}
						return '#005ab5';}
					return '#004b97';
				}
				color[0]=get_color(longtian);color[1]=get_color(kengzi);color[2]=get_color(biling);
				color[3]=get_color(maluan);color[4]=get_color(shijing);color[5]=get_color(pingshanjiedao);
				window.longtian_color[0]=get_shequ_color(response_map.龙田社区);window.longtian_color[1]=get_shequ_color(response_map.老坑社区);
				window.longtian_color[2]=get_shequ_color(response_map.南布社区);window.longtian_color[3]=get_shequ_color(response_map.竹坑社区);
				window.kengzi_color[0]=get_shequ_color(response_map.沙田社区);window.longtian_color[1]=get_shequ_color(response_map.秀新社区);
				window.kengzi_color[2]=get_shequ_color(response_map.金沙社区);window.longtian_color[3]=get_shequ_color(response_map.坑梓社区);
				window.biling_color[0]=get_shequ_color(response_map.碧玲社区);window.longtian_color[1]=get_shequ_color(response_map.沙湖社区);
				window.biling_color[2]=get_shequ_color(response_map.汤坑社区);
				window.maluan_color[0]=get_shequ_color(response_map.坪环社区);window.longtian_color[1]=get_shequ_color(response_map.马峦社区);
				window.maluan_color[2]=get_shequ_color(response_map.江岭社区);window.longtian_color[3]=get_shequ_color(response_map.沙坣社区);
				window.shijing_color[0]=get_shequ_color(response_map.石井社区);window.longtian_color[1]=get_shequ_color(response_map.田心社区);
				window.shijing_color[2]=get_shequ_color(response_map.田头社区);window.longtian_color[3]=get_shequ_color(response_map.金龟社区);
				window.pingshanjiedao_color[0]=get_shequ_color(response_map.六和社区);window.longtian_color[1]=get_shequ_color(response_map.和平社区);
				window.pingshanjiedao_color[2]=get_shequ_color(response_map.六联社区);window.longtian_color[3]=get_shequ_color(response_map.坪山社区);
				console.log(color);
				paint_map(color);
			}
			else{
				alert("连接失败");
			}
		}
	}
function paint_map(color){
    var maps = echarts.init(document.getElementById('mapadd_nav'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [{
            name: '坪山',
            type: 'map',
            mapType: '坪山',
            roam: false,
            top:'8%',
            zoom:1.2,
            x:'25%',
            selectedMode : 'single',//multiple多选
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"//地图上的字体颜色
                        }
                    },
                    areaStyle:{color:'#fff'},
                    color:'#fff',
                    borderColor:'#fff'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'red'//hover后的字体颜色
                        }
                    },
                    areaStyle:{color:'#fff'}
                }
            },
            data:[
                {name:'坪山街道',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'马峦街道',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'石井街道',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'碧岭街道',
                    itemStyle: {
                        normal: {
                            areaColor: '#88ddf5',
                            borderColor: '#88ddf5',
                        }
                    }
                },
                {name:'坑梓街道',
                    itemStyle: {
                        normal: {
                            areaColor: '#13d5ff',
                            borderColor: '#45b5ef',
                        }
                    }
                },
                {name:'龙田街道',
                    itemStyle: {
                        normal: {
                            areaColor: 'red',
                            borderColor: '#45b5ef'
                        }
                    }
                },
               
                
               
            ]
        }]
    };
    //console.log(option['series'][0]['data'][0]['itemStyle']['normal']['areaColor']);
    option['series'][0]['data'][0]['itemStyle']['normal']['areaColor'] = color[0];
    option['series'][0]['data'][1]['itemStyle']['normal']['areaColor'] = color[1];
    option['series'][0]['data'][2]['itemStyle']['normal']['areaColor'] = color[2];
    option['series'][0]['data'][3]['itemStyle']['normal']['areaColor'] = color[3];
    option['series'][0]['data'][4]['itemStyle']['normal']['areaColor'] = color[4];
    option['series'][0]['data'][5]['itemStyle']['normal']['areaColor'] = color[5];
    maps.setOption(option);
	maps.on('click',function(params){
		switch (params.name){
			case '龙田街道':
				show_map('longtian');
				paint_longtian(window.longtian_color);
				break;
			case '坑梓街道':
				show_map('kengzi');
				paint_kengzi(window.kengzi_color);
				break;
			case '碧岭街道':
				show_map('biling');
				paint_biling(window.biling_color);
				break;
			case '坪山街道':
				show_map('pingshanjiedao');
				paint_pingshanjiedao(window.pingshanjiedao_color);
				break;
			case '石井街道':
				show_map('shijing');
				paint_shijing(window.shijing_color);
				break;
			case '马峦街道':
				show_map('maluan');
				paint_maluan(window.maluan_color);
				break;
		}; 
	});
}
function paint_longtian(color){
	var map_longtian = echarts.init(document.getElementById('longtian'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [{
            name: '龙田',
            type: 'map',
            mapType: '龙田',
            roam: false,
            top:'8%',
            zoom:1.2,
            x:'25%',
            selectedMode : 'single',//multiple多选
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'龙田社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'竹坑社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'南布社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'老坑社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#88ddf5',
                            borderColor: '#88ddf5',
                        }
                    }
                },
                
            ]
        }]
    };
    option['series'][0]['data'][0]['itemStyle']['normal']['areaColor'] = color[0];
    option['series'][0]['data'][1]['itemStyle']['normal']['areaColor'] = color[3];
    option['series'][0]['data'][2]['itemStyle']['normal']['areaColor'] = color[2];
    option['series'][0]['data'][3]['itemStyle']['normal']['areaColor'] = color[1];
    map_longtian.setOption(option);
}
function paint_kengzi(color){	
	var map_kengzi = echarts.init(document.getElementById('kengzi'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [{
            name: '坑梓',
            type: 'map',
            mapType: '坑梓',
            roam: false,
            top:'8%',
            zoom:1.2,
            x:'25%',
            selectedMode : 'single',//multiple多选
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'坑梓社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'金沙社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'沙田社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'秀新社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#88ddf5',
                            borderColor: '#88ddf5',
                        }
                    }
                },
                
            ]
        }]
    };
    option['series'][0]['data'][0]['itemStyle']['normal']['areaColor'] = color[3];
    option['series'][0]['data'][1]['itemStyle']['normal']['areaColor'] = color[2];
    option['series'][0]['data'][2]['itemStyle']['normal']['areaColor'] = color[0];
    option['series'][0]['data'][3]['itemStyle']['normal']['areaColor'] = color[1];
    map_kengzi.setOption(option);
}
function paint_pingshanjiedao(color){	
	var map_pingshanjiedao = echarts.init(document.getElementById('pingshanjiedao'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [{
            name: '坪山街道',
            type: 'map',
            mapType: '坪山街道',
            roam: false,
            top:'8%',
            zoom:1.2,
            x:'25%',
            selectedMode : 'single',//multiple多选
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'坪山社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'六和社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'六联社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'和平社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#88ddf5',
                            borderColor: '#88ddf5',
                        }
                    }
                },
                
            ]
        }]
    };
    option['series'][0]['data'][0]['itemStyle']['normal']['areaColor'] = color[3];
    option['series'][0]['data'][1]['itemStyle']['normal']['areaColor'] = color[0];
    option['series'][0]['data'][2]['itemStyle']['normal']['areaColor'] = color[2];
    option['series'][0]['data'][3]['itemStyle']['normal']['areaColor'] = color[1];
    map_pingshanjiedao.setOption(option);
}
function paint_biling(color){	
	var map_biling = echarts.init(document.getElementById('biling'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [{
            name: '碧岭',
            type: 'map',
            mapType: '碧岭',
            roam: false,
            top:'8%',
            zoom:1.2,
            x:'25%',
            selectedMode : 'single',//multiple多选
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'碧岭社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'沙湖社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'汤坑社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                
            ]
        }]
    };
    option['series'][0]['data'][0]['itemStyle']['normal']['areaColor'] = color[0];
    option['series'][0]['data'][1]['itemStyle']['normal']['areaColor'] = color[1];
    option['series'][0]['data'][2]['itemStyle']['normal']['areaColor'] = color[2];
    map_biling.setOption(option);
}
function paint_maluan(color){	
	var map_maluan = echarts.init(document.getElementById('maluan'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [{
            name: '马峦',
            type: 'map',
            mapType: '马峦',
            roam: false,
            top:'8%',
            zoom:1.2,
            x:'25%',
            selectedMode : 'single',//multiple多选
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'江岭社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'坪环社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'沙坣社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'马峦社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
            ]
        }]
    };
    option['series'][0]['data'][0]['itemStyle']['normal']['areaColor'] = color[2];
    option['series'][0]['data'][1]['itemStyle']['normal']['areaColor'] = color[0];
    option['series'][0]['data'][2]['itemStyle']['normal']['areaColor'] = color[3];
    option['series'][0]['data'][3]['itemStyle']['normal']['areaColor'] = color[1];
    map_maluan.setOption(option);
}
function paint_shijing(color){	
	var map_shijing = echarts.init(document.getElementById('shijing'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [{
            name: '石井',
            type: 'map',
            mapType: '石井',
            roam: false,
            top:'8%',
            zoom:1.2,
            x:'25%',
            selectedMode : 'single',//multiple多选
            itemStyle:{
                normal:{
                    label:{
                        show:true,
                        textStyle: {
                            color: "#231816"
                        }
                    },
                    areaStyle:{color:'#B1D0EC'},
                    color:'#B1D0EC',
                    borderColor:'#dadfde'//区块的边框颜色
                },
                emphasis:{//鼠标hover样式
                    label:{
                        show:true,
                        textStyle:{
                            color:'#fa4f04'
                        }
                    },
                    areaStyle:{color:'red'}
                }
            },
            data:[
                {name:'金龟社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'green',
                            borderColor: '#edce00'
                        }
                    }
                },
                {name:'田心社区',
                    itemStyle: {
                        normal: {
                            areaColor: 'yellow',
                            borderColor: '#0abcee'
                        }
                    }
                }, 
                {name:'田头社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
                {name:'石井社区',
                    itemStyle: {
                        normal: {
                            areaColor: '#92d050',
                            borderColor: '#1ca9f2'
                        }
                    }
                },
            ]
        }]
    };
    option['series'][0]['data'][0]['itemStyle']['normal']['areaColor'] = color[3];
    option['series'][0]['data'][1]['itemStyle']['normal']['areaColor'] = color[1];
    option['series'][0]['data'][2]['itemStyle']['normal']['areaColor'] = color[2];
    option['series'][0]['data'][3]['itemStyle']['normal']['areaColor'] = color[0];
    map_shijing.setOption(option);
}
}
//地图块结束
