$(function(){
	var index={
		init:function(){
			this.bindEvent();
			this.render();
			this.swiper();			
		},
		bindEvent:function(){
			var that=this;
			//点击几个小石头放大
			$(".zero ul li").hover(function(){
				$(this).css({
					"animation":"mymove 2s linear both",
					"-moz-animation":"mymove 2s linear both",
					"-webkit-animation":"mymove 2s linear both",
					"-o-animation":"mymove 2s linear both"
				});
			},function(){
				$(this).css({
					"animation":"mymoves2 5s linear both",
					"-moz-animation":"mymoves2 5s linear both",
					"-webkit-animation":"mymoves2 5s linear both",
					"-o-animation":"mymoves2 5s linear both"
				});
			});
			//点击奖励出现介绍
			$(".part2 ul li").hover(function(){
				$(this).find("p").stop().animate({"bottom":"0"});
			},function(){
				$(this).find("p").stop().animate({"bottom":"-110px"});
			});
			//划过领取奖励变颜色
			$(".part3 h6").hover(function(){
				$(this).find("img").addClass("hide");
				$(".active").removeClass("hide");
			},function(){
				$(".part3 h6").find("img").addClass("hide");
				$(".default").removeClass("hide");
			});
			//点击遮罩消失
			$(".mask").click(function (e) {
			    if (!$(e.target).closest(".denglu").length&&!$(e.target).closest(".select").length) {
//			        $(".gkfGZH").addClass("gkfGZHNone")
					$(".mask").fadeOut();
			    }
			});
			//点击差号弹窗消失
			$(".dr h2 em").on("click",function(){
				$(".mask").fadeOut();
			})
			$(".select h2 em").on("click",function(){
				$(".mask").fadeOut();
			})
			//点击登陆 弹出登录框
			$(".dllj").on("click",function(){
				$(".mask").fadeIn();
				$(".denglu").show().siblings().hide();
			});
			//点击登陆弹窗消失并在页面顶部显示个人信息
			$(".dl button").on("click",function(){
				$(".mask").fadeOut();
				$(".dllj").hide();
				$(".wj").show();
				sessionStorage.setItem("user","121");//例子
			});
			//点击领取奖励
			$(".active").on("click",function(){
				var user=sessionStorage.getItem("user");
				if(user){
					$(".mask").fadeIn();
					$(".denglu").hide().siblings().show();
				}else{
					alert("请登录")
				}
				
			});
			//点击领取礼包弹窗消失
			$(".select button").on("click",function(){
				$(".mask").hide();
//				$(".denglu").show().siblings().hide();
			});
			//点击退出登陆
			$(".wj em").on("click",function(){
				$(".wj").hide();
				$(".dllj").show();
				$(".denglu").show().siblings().hide();
				sessionStorage.removeItem("user");
			});
		},
		render:function(){
			var that=this;
			
		},
		swiper:function(){
			var mySwiper = new Swiper('.banner',{
			    pagination: '.pagination',
			    loop:true,
			    grabCursor: true,
			    paginationClickable: true,
			    updateOnImagesReady : true,//内嵌图像（img标签）加载完成后Swiper会重新初始化
			 });
		}
	};
	index.init();
})