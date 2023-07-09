<template>
	<view class="content">
	<uni-collapse>
	<uni-collapse-item title="社区" :open="true">
		<button type="default"  @click="goto('/pages/community/community')">社区首页</button>
		<button type="default" @click="goto('/pages/index/index2')">侧边栏展示及详情页</button>
		
	</uni-collapse-item>
	<uni-collapse-item title="框架">
		<button type="default" @click="goto('/pages/framework/frame')" >框架首页</button>
	</uni-collapse-item>
	<uni-collapse-item title="指南" >
		<button type="default"  @click="goto('/pages/guidelines/guide')">指南首页</button>
	</uni-collapse-item>
</uni-collapse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '左侧leftwindow',
				url:'',
			}
		},
		onLoad:function(option) {
			console.log(option.id);
			console.log(option.name)
		},
		methods: {
			goto(url) {
				console.log("进入goto方法")
				uni.navigateTo({
					url:url
				})
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		/*align-items: center;*/
		/*justify-content: center;*/
		background: #f0eeef;
		height: 600px;
	
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
