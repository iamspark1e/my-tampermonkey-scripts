// ==UserScript==
// @name         Bilibili Live Random LikeReport
// @namespace    http://tampermonkey.net/
// @version      2024-03-27
// @description  try to take over the world!
// @author       You
// @match        *://live.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net.cn
// @grant        none
// @require      https://scriptcat.org/lib/637/1.3.3/ajaxHooker.js
// ==/UserScript==

(function() {
	'use strict';
	// Global States
	let kPressedCount = 0;
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
					let randomLike = Math.floor(Math.random() * 67);
					console.log("已经开启随机多赞模式，本次赞的数量为：" + randomLike);
					totalCount += randomLike;
					let parsedData = new URLSearchParams(request.data);
					parsedData.set("click_time", randomLike);
					request.data = parsedData.toString();
				}
			});

	// 监听按下时间
	window.addEventListener('keydown', (e) => {
		if (totalCount >= 1000) {
			window.alert("单人单个直播间最多点赞1000个！（如已开启随机多赞，已经关闭）");
			ajaxHooker.unhook();
			return;
		}
		if (!likeReportCracker) {
			if (e.keyCode === 75) {
				kPressedCount += 1;
			}
			if (kPressedCount > 3) {
				likeReportCracker = window.confirm("是否开启随机多赞模式？");
			}
		} else {
			hookEnable = true;
		}
	})
})();
