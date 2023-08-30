// ==UserScript==
// @name         Docker Hub Mirrors
// @namespace    https://gist.github.com/iamspark1e/xxx
// @version      0.1
// @description  Show other mirrors to pull current docker image.
// @author       iamspark1e
// @license      AGPL-3.0-or-later
// @match        *://hub.docker.com/_/*
// @match        *://hub.docker.com/_/*/tags
// @match		 *://hub.docker.com/search?q=*
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

// ref: https://juejin.cn/post/7022654292880424991
// - 阿里云（杭州）   https://registry.cn-hangzhou.aliyuncs.com
// - 阿里云（上海）   https://registry.cn-shanghai.aliyuncs.com
// - 阿里云（青岛）   https://registry.cn-qingdao.aliyuncs.com
// - 阿里云（北京）   https://registry.cn-beijing.aliyuncs.com
// - 阿里云（张家口）   https://registry.cn-zhangjiakou.aliyuncs.com
// - 阿里云（呼和浩特）   https://registry.cn-huhehaote.aliyuncs.com
// - 阿里云（乌兰察布）   https://registry.cn-wulanchabu.aliyuncs.com
// - 阿里云（深圳）   https://registry.cn-shenzhen.aliyuncs.com
// - 阿里云（河源）   https://registry.cn-heyuan.aliyuncs.com
// - 阿里云（广州）   https://registry.cn-guangzhou.aliyuncs.com
// - 阿里云（成都）   https://registry.cn-chengdu.aliyuncs.com
// - 腾讯云   https://mirror.ccs.tencentyun.com
// - 微软云   https://dockerhub.azk8s.com
// - 网易   https://hub-mirror.c.163.com
// - 上海交通大学   https://mirror.sjtu.edu.cn/docs/docker-registry
// - ❤❤❤南京大学   https://docker.nju.edu.cn
// - 道客 DaoCloud   https://f1361db2.m.daocloud.io
// - 阿里云（香港）   https://registry.cn-hongkong.aliyuncs.com
// - 阿里云（日本-东京）   https://registry.ap-northeast-1.aliyuncs.com
// - 阿里云（新加坡）   https://registry.ap-southeast-1.aliyuncs.com
// - 阿里云（澳大利亚-悉尼）   https://registry.ap-southeast-2.aliyuncs.com
// - 阿里云（马来西亚-吉隆坡）   https://registry.ap-southeast-3.aliyuncs.com
// - 阿里云（印度尼西亚-雅加达）   https://registry.ap-southeast-5.aliyuncs.com
// - 阿里云（印度-孟买）   https://registry.ap-south-1.aliyuncs.com
// - 阿里云（德国-法兰克福）   https://registry.eu-central-1.aliyuncs.com
// - 阿里云（英国-伦敦）   https://registry.eu-west-1.aliyuncs.com
// - 阿里云（美国西部-硅谷）   https://registry.us-west-1.aliyuncs.com
// - 阿里云（美国东部-弗吉尼亚）   https://registry.us-east-1.aliyuncs.com
// - 阿里云（阿联酋-迪拜）   https://registry.me-east-1.aliyuncs.com
// - 谷歌云   https://gcr.io
// - 官方   https://registry.hub.docker.com

(function() {
    'use strict';
    const ALTER_HUBS = [
    	{"url": "registry.cn-hangzhou.aliyuncs.com", "name": "阿里云（杭州）"},
    ]

    // Your code here...
})();
