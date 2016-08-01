$(function(){
	//1.创建一个数组用来存放图片，管理连接
	var album=[
       {img:'img/9.jpg'},
       {img:'img/10.jpg'},
       {img:'img/11.jpg'},
       {img:'img/12.jpg'},
       {img:'img/13.jpg'},
       {img:'img/14.jpg'},
       {img:'img/15.jpg'},
       {img:'img/16.jpg'}
	]
	$('.button').on('click',function(){
		$('ul li img').attr('src',function(i){
		return album[i].img
	    })
	    $('ul li img').attr({alt:"这是样板图片"})
	})
	$('ul li').on('click',function(e){
		e.preventDefault()
		$('.rongqi').addClass('show')
//find是搜索所有与指定表达式匹配的元素。这个函数是找出正在处理的元素的后代元素的好方法。
		$('.rongqi .content img').attr('src',$(this).find('img').attr('src'));
		$('.rongqi').attr('index',$(this).index());
//给当前的容器一个下标，用来记录是第几个图片
	})
	$('.rongqi .close').on('click',function(){
		$('.rongqi').removeClass('show')
	})
    

    $('.rongqi').on('mousedown', function (e) {
		e.preventDefault();
	})
	var imgs = $('ul img');

	$('.rongqi').on('click',function(e){
		var index = parseInt($(this).attr('index'));


		if(e.clientX > $(this).outerWidth(true)/2){
			index += 1;
		}else{
			index -= 1;
		}
		if (index === imgs.length) {
			$('.rongqi .tishi').addClass('chuxian')
			var aa=function(){
			$('.rongqi .tishi').removeClass('chuxian')
			}
			setTimeout(aa,1000)
			return;
		};
		if (index === -1) {
			$('.rongqi .tishi').addClass('chuxian')
			var aa=function(){
			$('.rongqi .tishi').removeClass('chuxian')
			}
			setTimeout(aa,1000)
			return;
		};

		$('.rongqi').attr('index',index);
		//把点击事件发生后的index的坐标给容器
	    $('.content img').attr('src', imgs.eq(index).attr('src'));
	    //更换content下img的路径，以此来更换图片

	})
	$('.jieshao').on('click',function(){
		$('.shanping').addClass('xiaoshi')
	})
	
})