// ==UserScript==
// @name         Bilibili Live Random LikeReport
// @namespace    https://github.com/iamspark1e/my-tampermonkey-scripts/blob/main/bilibili-live-like.js
// @version      2024-03-29
// @description  Press Ctrl + like, save your keyboard.
// @author       https://github.com/iamspark1e
// @match        *://live.bilibili.com/*
// @grant        none
// @require      https://scriptcat.org/lib/637/1.3.3/ajaxHooker.js
// ==/UserScript==

(function() {
	'use strict';
	// 简易版本，阻止B站PCDN
	delete window.RTCPeerConnection
	delete window.mozRTCPeerConnection
	delete window.webkitRTCPeerConnection
	delete window.RTCDataChannel
	delete window.DataChannel
	
	// Global States
	let gain = 50;
	let totalCount = 0; // 单人1000赞以上为上限，增加一个计数器用来取消hook
	let likeReportCracker = false;
	let hookEnable = false;

	ajaxHooker.filter([{
		type: 'xhr',
		url: 'api.live.bilibili.com/xlive/app-ucenter/v1/like_info_v3/like/likeReportV3',
		method: 'POST',
		async: true
	}]);
	// 已开启状态下，通过ajaxHooker来重写likeReport的POST请求
	ajaxHooker.hook(request => {
		if (request.url === '//api.live.bilibili.com/xlive/app-ucenter/v1/like_info_v3/like/likeReportV3' && hookEnable) {
			console.log("当前翻倍系数：" + gain);
			let randomLike = Math.floor(Math.random() * gain);
			console.log("已经开启随机多赞模式，本次赞的数量为：" + randomLike);
			totalCount += randomLike;
			let parsedData = new URLSearchParams(request.data);
			parsedData.set("click_time", randomLike);
			request.data = parsedData.toString();
		}
	});

	function keyDownHandler(e) {
		if (totalCount >= 1000) {
			window.alert("单人单个直播间最多点赞1000个！（如已开启随机多赞，已经关闭）");
			ajaxHooker.unhook();
			hookEnable = false;
			window.removeEventListener('keydown', keyDownHandler);
			return;
		}
		if (
			(e.ctrlKey && e.keyCode === 75) || 
			(e.metaKey && e.keyCode === 75) // MacOS的Command键兼容，未测试
		) {
			if (!hookEnable) {
				let enteredGain = window.prompt('是否开启随机多赞模式？建议在50-100，取消则不开启。', '50')
				if (enteredGain) {
					enteredGain = parseInt(enteredGain);
					if (enteredGain > 0) {
						hookEnable = true;
					}
				}
			}
		}
	}

	// 监听按下时间
	window.addEventListener('keydown', keyDownHandler)
})();
