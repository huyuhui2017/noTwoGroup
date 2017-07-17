<template>
	<div id="news">
		<div class="container">
			<div class="re text-center index_text">
				<div class="recommend_list inline-block bg1">
					<h4>母婴知识</h4>
				</div>
				<div class="recommend_list inline-block bg2">
					<h4>媒体报道</h4>
				</div>
				<div class="recommend_list inline-block bg2">
					<h4>网站公告</h4>
				</div>		
			</div>
			<ul class="list-item">
		    	<li class="item">
		    		<a href="#newsclassify"><img src="../assets/images/news/news_01.jpg"></a>
		    	</li>
		    	<li class="item">
		    		<a href="#newsclassify"><img src="../assets/images/news/news_02.jpg"></a>
		    	</li>
		    	<li class="item">
		    		<a href="#newsclassify"><img src="../assets/images/news/news_03.jpg"></a>
		    	</li>
		    	<li class="item">
		    		<a href="#newsclassify"><img src="../assets/images/news/news_04.jpg"></a>
		    	</li>
		    	<li class="item">
		    		<a href="#newsclassify"><img src="../assets/images/news/news_05.jpg"></a>
		    	</li>
		    	<li class="item">
		    		<a href="#newsclassify"><img src="../assets/images/news/news_06.jpg"></a>
		    	</li>
		    </ul>
		</div>
		<!-- 二维码 -->
		<div class="footer">
			<div class="footer_top">
				<div class="footer_top_center">
					<div class="box_img margin-right">
						<img src="../assets/images/icon/index_102.jpg" class="pre">
						<span>关注官方微信</span>
					</div>
					<div class="box_img">
						<img src="../assets/images/icon/index_104.jpg" class="pre">
						<span>关注官方微博</span>
					</div>
					<span style="font-size: 0.6rem; display: block; margin-top: 0.8rem;">Copyright©2011 仕馨月子会所 （粤ICP备17008523号-1）</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.index_text{
		margin-top: 1.5rem;
	}
	.re{
		margin-bottom: 1.5rem;
	}
	.recommend_list{
		width: 4.125rem;
		height: 1.25rem;
		/*margin-right: 0.75rem;*/
	}
	.recommend_list h4{
		font-size: 0.65rem;
		text-align: center;
		line-height: 1.25rem;
		color: white;
	}
	.bg1,.bg2{
		/*background-size: 100%;*/
		
		border-bottom-left-radius: 0.7rem;
		border-top-right-radius: 0.7rem;
		text-align: center;
	}
	.bg1{
		/*background: url("images/index_35.png") no-repeat;*/
		background: #EE8FB3;
		border: 0.05rem solid #EE8FB3;
	}
	.bg2{
		/*background: url("images/index_38.png") no-repeat;*/
		background: #74C5BE;
		border: 0.05rem solid #74C5BE;
	}
	.container .list-item{
		font-size: 0;
	}
	.container .list-item .item{
		width: 49%;
		margin-bottom: 1rem;
	}
	.container .list-item .item:nth-child(2n){
	    margin-left: 2%;
	}
	.footer{
		height: 9rem;
	}
	.footer_top{
		height: 7rem;
		padding-top: 1.5rem;
	}
	.footer_top_center{
		/*width: 18rem;*/
		text-align: center;
	}
	.box_img{
		width: 4.5rem;
		height: 5.5rem;
		display: inline-block;
		position: relative;			
	}
	.box_img span{
		font-size: 0.7rem;
		display: inline-block;
		position:absolute;
		width: 4.5rem;
		height: 1rem;
		left: 0rem;
		bottom: -0.4rem;
	}
</style>