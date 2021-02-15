/*软件名：金钱豹  扫码下载  
注意，必须扫码使用我贴在下面的二维码扫码打开软件，否则不会加载出任务界面
本脚本以学习为主，出现任何情况与本人无关，大佬见笑，技术有限
脚本包含除了试玩任务外的所有任务
任务完成每天收益0.5元左右
两元可提现
作者：@肥皂  最后更新时间 2021.02.15
我的邀请码：30008347  感谢大佬们的填写----
食用方法：
1、进入软件，点击看视频，共五个视频任务，每个任务观看一次视频共获取五个视频body
2、进入转盘红包，转一次，获取转盘抽奖body
3、点击现金福利，点击签到，获取签到body
4、点击看广告，看完一组广告，获取广告body和headers
5、现在可以先跑一次脚本，跑完脚本之后，进入现金福利-每日任务-领取每日任务的奖励-获得每日任务的body
脚本每天运行一次就可以了。
金钱豹下载二维码地址： https://raw.githubusercontent.com/age174/-/main/0DCC1893-7EEB-4E15-9EE9-F6A3AEC52070.jpeg
圈X配置如下，其他软件自行测试，金钱豹没有任务界面请务必复制上面的二维码链接到浏览器打开保存扫码，然后到扫码结果上打开
[task_local]
#金钱豹
15 0 * * * https://raw.githubusercontent.com/age174/-/main/jqb.js, tag=金钱豹, img-url=https://ftp.bmp.ovh/imgs/2021/02/9e6d449acb9b6889.png, enabled=true
[rewrite_local]
#金钱豹
^http://jqb.iphonezhuan.com/ url script-request-body https://raw.githubusercontent.com/age174/-/main/jqb.js
#loon
^http://jqb.iphonezhuan.com/ script-path=https://raw.githubusercontent.com/age174/-/main/jqb.js, requires-body=true, timeout=10, tag=金钱豹
#surge
金钱豹 = type=http-request,pattern=^http://jqb.iphonezhuan.com/,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/jqb.js,script-update-interval=0
[MITM]
hostname = jqb.iphonezhuan.com
*/
const $ = new Env('金钱豹');
//let jqburl = $.getdata('jqburl')
let jqburl = '"http://jqb.iphonezhuan.com/submitsign"'
//let jqbhd = $.getdata('jqbhd')
let jqbhd = '{"Accept":"*/*","Accept-Encoding":"gzip, deflate","Connection":"keep-alive","Content-Type":"application/x-www-form-urlencoded","Host":"jqb.iphonezhuan.com","User-Agent":"%E6%99%BA%E8%83%BD%E4%BC%98%E9%80%89/1.03 CFNetwork/1125.2 Darwin/19.4.0","Content-Length":"28","Accept-Language":"zh-cn"}'
//let jqbggbody = $.getdata('jqbggbody')
let jqbggbody = 'sign=59e5106c36588596fb54341defd24fdf&channelID=2&timestamp=1613358143454&type=2&uid=8505&ver=103'
//let jqbqdbody = $.getdata('jqbqdbody')
let jqbqdbody = 'channelID=2&uid=8505&ver=103'
//let jqbbody1 = $.getdata('jqbbody1')
let jqbbody1 = 'sign=f3eef20e1cac1d03fdc1a9f7911a2fd5&adconfigid=6&channelID=2&timestamp=1613359381776&type=3&uid=8505&ver=103'
//let jqbbody2 = $.getdata('jqbbody2')
let jqbbody1 = 'sign=c08a4c9d8c6573a2d0be4af79591c6d6&adconfigid=7&channelID=2&timestamp=1613361592290&type=3&uid=8505&ver=103'
//let jqbbody3 = $.getdata('jqbbody3')
let jqbbody1 = 'sign=49500b63ecb2eb343faffa1ce78e5f7a&adconfigid=8&channelID=2&timestamp=1613360966735&type=3&uid=8505&ver=103'
//let jqbbody4 = $.getdata('jqbbody4')
let jqbbody1 = 'sign=8e40192200e65cf119195f11edb87d6c&adconfigid=9&channelID=2&timestamp=1613361015494&type=3&uid=8505&ver=103'
//let jqbbody5 = $.getdata('jqbbody5')
let jqbbody1 = 'sign=df01c4e8b045451457f9f21c090f7362&adconfigid=10&channelID=2&timestamp=1613360824066&type=3&uid=8505&ver=103'
//let jqbrwbody = $.getdata('jqbrwbody')
let jqbrwbody = 'uid=8505&channelID=2&type=1&ver=103'
//let jqbzpbody = $.getdata('jqbzpbody')
let jqbzpbody = 'sign=68efdad3e45b1cefd5659442abac1dc8&channelID=2&timestamp=1613358233507&type=4&uid=8505&ver=103'

!(async () => {
  if (typeof $request !== "undefined") {
	await jqbck()
  }else {
       console.log(`\n金钱豹开始执行签到任务！💦\n`)
       await jqbqd();
    for (let i = 0; i < 5; i++) {
      $.index = i + 1      
       console.log(`\n金钱豹已执行第一个看视频任务！💦\n等待10秒开始执行第二个看视频任务`)
       await jqbsp1();
       await $.wait(10000);
       console.log(`\n金钱豹已执行第二个看视频任务！💦\n等待10秒开始执行第三个看视频任务`)
       await jqbsp2();
       await $.wait(10000);
	  console.log(`\n金钱豹已执行第三个看视频任务！💦\n等待10秒开始执行第四个看视频任务`)
       await jqbsp3();
	  await $.wait(10000);  
	  console.log(`\n金钱豹已执行第四个看视频任务！💦\n等待10秒开始执行第五个看视频任务`)
       await jqbsp4();
	  await $.wait(10000);
	  console.log(`\n金钱豹已执行第五个看视频任务！💦\n等待10秒开始，准备执行下一轮视频任务`)
	  await jqbsp5();
       await $.wait(10000);
       console.log(`\n金钱豹视频任务已执行完第${i+1}轮视频任务！💦\n共有五轮视频任务，开始执行下一轮视频任务`)
  }for (let j = 0; j < 3; j++) {
	  $.index = j + 1
	  console.log(`\n金钱豹开始执行第${j+1}广告任务！💦\n等待10秒开始执行下一次广告任务`)
	  await jqbgg();
	  await $.wait(10000);
  }for (let x = 0; x < 20; x++) {
	  $.index = x + 1
	  console.log(`\n金钱豹开始执行第${x+1}转盘抽奖！💦\n等待10秒开始执行下一次转盘抽奖`)
	  await jqbzp();
	  await $.wait(10000);
	  }
	  console.log(`\n金钱豹执行转盘抽奖完成！💦\n等待10秒开始执行每日任务奖励领取`)
	  await $.wait(10000);
	  await jqbrw();
	  await $.wait(3000);
$.msg("","","金钱豹任务已全部完成！")
  }
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//金钱豹数据获取
function jqbck() {
if ($request.url.indexOf("submitsign") > -1){
  $.setdata(JSON.stringify($request.url),'jqburl')
    $.log(jqburl)
$.setdata(JSON.stringify($request.headers),'jqbhd');   $.msg($.name,"","金钱豹headers获取成功！")
    $.log(jqbhd)
  $.setdata($request.body,'jqbqdbody')
   $.msg($.name,"","金钱豹签到body获取成功！")
  }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("type=2") > -1){
    $.setdata($request.body,'jqbggbody')
$.log(jqbggbody)
   $.msg($.name,"","金钱豹广告body获取成功！")
  }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=6") > -1){
  $.setdata($request.body,'jqbbody1')
$.log(jqbbody1)
   $.msg($.name,"","金钱豹视频body1获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=7") > -1){
  $.setdata($request.body,'jqbbody2')
$.log(jqbbody2)
   $.msg($.name,"","金钱豹视频body2获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=8") > -1){
  $.setdata($request.body,'jqbbody3')
$.log(jqbbody3)
   $.msg($.name,"","金钱豹视频body3获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=9") > -1){
  $.setdata($request.body,'jqbbody4')
$.log(jqbbody4)
   $.msg($.name,"","金钱豹视频body4获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("adconfigid=10") > -1){
  $.setdata($request.body,'jqbbody5')
$.log(jqbbody5)
   $.msg($.name,"","金钱豹视频body5获取成功！")
    }else if ($request.url.indexOf("getintegrals") > -1&&$request.body.indexOf("type=4") > -1){
  $.setdata($request.body,'jqbzpbody')
$.log(jqbzpbody)
   $.msg($.name,"","金钱豹转盘body获取成功！")
    }else if ($request.url.indexOf("finishdailytask") > -1&&$request.body.indexOf("type=1") > -1){
  $.setdata($request.body,'jqbrwbody')
   $.msg($.name,"","金钱豹每日任务body获取成功！")
  }
}



//金钱豹视频1     
function jqbsp1(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbbody1,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频1回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频1回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹视频2
function jqbsp2(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbbody2,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频2回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频2回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹视频3
function jqbsp3(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbbody3,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频3回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频3回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹视频4
function jqbsp4(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbbody4,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频4回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频4回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹视频5
function jqbsp5(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbbody5,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹看视频5回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹看视频5回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹转盘
function jqbzp(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbzpbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹转盘抽奖回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹转盘抽奖回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹广告
function jqbgg(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/getintegrals',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbggbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹广告任务回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 407){
        console.log('金钱豹广告任务回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹每日任务
function jqbrw(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : 'http://jqb.iphonezhuan.com/finishdailytask',
        headers : JSON.parse($.getdata('jqbhd')),
        body :  jqbrwbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹每日任务回执:成功🌝 '+result.msg)
}
if(result.statuscode == 400 || result.statuscode == 401){
        console.log('金钱豹每日任务回执:失败🚫 '+result.msg)}

        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//金钱豹签到
function jqbqd(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('jqburl') === "undefined") {
        $.msg($.name,"",'请先签到获取金钱豹body和headers!😓',)
        $.done()
      }
let url = {
        url : 'http://jqb.iphonezhuan.com/submitsign',
        headers : JSON.parse($.getdata('jqbhd')),
        body : jqbqdbody,}
      $.post(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.statuscode == 200){
        console.log('金钱豹签到回执:成功🌝 '+result.msg+'等待10秒开始执行视频任务')
}
if(result.statuscode == 400 || result.statuscode == 401){
        console.log('金钱豹签到回执:失败🚫 '+result.msg)}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}


























