window.onload = function () {
	var arr = [
        {   //  1
            width:400,
            top:50,
            left:50,
            opacity:20,
            zIndex:2
        },
        {  // 2
            width:600,
            top:100,
            left:0,
            opacity:80,
            zIndex:3
        },
        {   // 3
            width:800,
            top:80,
            left:200,
            opacity:100,
            zIndex:4
        },
        {  // 4
            width:600,
            top:100,
            left:600,
            opacity:80,
            zIndex:3
        },
        {   //5
            width:400,
            top:50,
            left:750,
            opacity:20,
            zIndex:2
        }
    ];

    var slide = document.getElementById('slide');
    var liArr = slide.getElementsByTagName('li'); //可以通过slide获取？
    var arrow = slide.children[1];
    var arrowArr = arrow.children;

    //鼠标放置在轮播图上时，按钮显示，移开隐藏。
    slide.onmouseenter = function(){
    	//arrow.style.opacity = 1;
    	animate(arrow,{"opacity":100}); //这儿换成1不生效，？？100是1，50是0.5，这是因为在animate中放大了参数，让有个过渡动画；
    }
    slide.onmouseleave = function(){
    	//arrow.style.opacity = 0.5;
    	animate(arrow,{"opacity":0});
    }

    //设置一个开闭原则，点击按钮后修改这个值；
    var flag = true;
    //绑定两侧按钮的事件
    arrowArr[0].onclick = function(){
    	if (flag) {
    		flag = false;  //这儿判断flag和修改flag的值，为什么，待考究？？避免在点击的时候，第一个动画没执行完的情况
    		move(true);
    	}
    	// move(true);
    }
    arrowArr[1].onclick = function(){
    	if (flag) {
    		flag = false;
    		move(false);
    	}
    }

    //move函数，初始化先执行一次
    move();
    function move(bool){
    	//如果等于undefined,那么不执行if语句
    	if (bool === true || bool === false) {
    		if (bool) {
    			arr.unshift(arr.pop());//左边按钮效果json
    		}else{
    			arr.push(arr.shift());//右边按钮效果json
    		}
    	}
    	//为页面中所有的li赋值，并利用缓动动画进行移动
    	for (var i = 0; i < liArr.length; i++) {
    		animate(liArr[i],arr[i],function(){
    			flag = true;
    		});
    	}
    }
}