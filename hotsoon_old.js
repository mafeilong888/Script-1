/*
github：https://github.com/ZhiYi-N/script
boxjs：https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/ZhiYi-N.boxjs.json
转载留个名字，谢谢
作者：执意ZhiYi-N
目前包含：
签到
看广告获取金币
看视频获取金币
随机宝箱
脚本初成，非专业人士制作，欢迎指正
#签到详情获取signheader and signkey，一定要签到详情界面获取到的
#看广告获取adheader and adkey
#看一个视频获取readheader and readkey

[mitm]
hostname = *.snssdk.com
#圈x
[rewrite local]
/luckycat/hotsoon/v1/task/done/daily_read_\d+m? url script-request-header https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon_old.js
/luckycat/hotsoon/v1/task/done/draw_excitation_ad? url script-request-header https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon_old.js
/luckycat/hotsoon/v1/task/sign_in_detail? script-request-header https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon_old.js
#loon
http-request /luckycat/hotsoon/v1/task/done/daily_read_\d+m? script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon_old.js, requires-body=true, timeout=10, tag=hotsoonread
http-request /luckycat/hotsoon/v1/task/done/draw_excitation_ad? script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon_old.js, requires-body=true, timeout=10, tag=hotsoonad
http-request /luckycat/hotsoon/v1/task/sign_in_detail? script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon_old.js, requires-body=true, timeout=10, tag=hotsoonsign
#surge
hotsoonsign = type=http-request,pattern=/luckycat/hotsoon/v1/task/sign_in_detail?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon_old.js,script-update-interval=0
hotsoonad = type=http-request,pattern=/luckycat/hotsoon/v1/task/done/draw_excitation_ad?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon_old.js,script-update-interval=0
hotsoonread = type=http-request,pattern=/luckycat/hotsoon/v1/task/done/daily_read_\d+m?,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ZhiYi-N/Private-Script/master/Scripts/hotsoon_old.js,script-update-interval=0
*/
const jsname='火山视频极速版'
const $ = Env(jsname)
const notify = $.isNode() ?require('./sendNotify') : '';
$.idx = ($.idx = ($.getval("hotsooncount") || "1") - 1) > 0 ? `${$.idx + 1}` : ""; // 账号扩展字符
const hotsoonsignheaderArr = [],hotsoonsignkeyArr=[]
const hotsoonadheaderArr = [],hotsoonadkeyArr=[]
const hotsoonreadheaderArr = [],hotsoonreadkeyArr=[]
let hotsoonsignheader = $.getdata('hotsoonsignheader')
let hotsoonsigncookie = $.getdata('hotsoonsigncookie')

let hotsoonadheader = $.getdata('hotsoonadheader')
let hotsoonadkey = $.getdata('hotsoonadkey')
let no = 1,cash=1;
let hotsoonreadheader = $.getdata('hotsoonreadheader')
let hotsoonreadkey = $.getdata('hotsoonreadkey')
let hotsoonaccount = ($.getval('hotsoonaccount') || 0);
let tz = ($.getval('tz') || '1');//0关闭通知，1默认开启
const logs =0;//0为关闭日志，1为开启
var hour=''
var minute=''

if ($.isNode()) {
   hour = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getHours();
   minute = new Date( new Date().getTime() + 8 * 60 * 60 * 1000 ).getMinutes();
}else{
   hour = (new Date()).getHours();
   minute = (new Date()).getMinutes();
}
//CK运行

let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
   GetCookie();
   $.done()
} 
if ($.isNode()) {
//sign
//   if (process.env.HOTSOONSIGNHEADER && process.env.HOTSOONSIGNHEADER.indexOf('#') > -1) {
//    hotsoonsignheader = process.env.HOTSOONSIGNHEADER.split('#');
//    console.log(`您选择的是用"#"隔开\n`)
//   }
//   else if (process.env.HOTSOONSIGNHEADER && process.env.HOTSOONSIGNHEADER.indexOf('\n') > -1) {
//    hotsoonsignheader = process.env.HOTSOONSIGNHEADER.split('\n');
//    console.log(`您选择的是用换行隔开\n`)
//   } else {
//    hotsoonsignheader = process.env.HOTSOONSIGNHEADER.split()
//   };
//   if (process.env.HOTSOONSIGNKEY&& process.env.HOTSOONSIGNKEY.indexOf('#') > -1) {
//    hotsoonsignkey = process.env.HOTSOONSIGNKEY.split('#');
//   }
//   else if (process.env.HOTSOONSIGNKEY && process.env.HOTSOONSIGNKEY.split('\n').length > 0) {
//    hotsoonsignkey = process.env.HOTSOONSIGNKEY.split('\n');
//   } else  {
//    hotsignkey = process.env.HOTSOONSIGNKEY.split()
//   };
// //AD
// if (process.env.HOTSOONADHEADER && process.env.HOTSOONADHEADER.indexOf('#') > -1) {
//    hotsoonadheader = process.env.HOTSOONADHEADER.split('#');
//    console.log(`您选择的是用"#"隔开\n`)
//   }
//   else if (process.env.HOTSOONADHEADER && process.env.HOTSOONADHEADER.indexOf('\n') > -1) {
//    hotsoonadheader = process.env.HOTSOONADHEADER.split('\n');
//    console.log(`您选择的是用换行隔开\n`)
//   } else {
//    hotsoonadheader = process.env.HOTSOONADHEADER.split()
//   };
//   if (process.env. HOTSOONADKEY&& process.env.HOTSOONADKEY.indexOf('#') > -1) {
//    hotsoonadkey = process.env.HOTSOONADKEY.split('#');
//   }
//   else if (process.env.HOTSOONADKEY && process.env.HOTSOONADKEY.split('\n').length > 0) {
//    hotsoonadkey = process.env.HOTSOONADKEY.split('\n');
//   } else  {
//    hotsoonadkey = process.env.HOTSOONADKEY.split()
//   };
// //video
// if (process.env.HOTSOONREADHEADER && process.env.HOTSOONREADHEADER.indexOf('#') > -1) {
//    hotsoonreadheader = process.env.HOTSOONREADHEADER.split('#');
//    console.log(`您选择的是用"#"隔开\n`)
//   }
//   else if (process.env.HOTSOONREADHEADER && process.env.HOTSOONREADHEADER.indexOf('\n') > -1) {
//    hotsoonreadheader = process.env.HOTSOONREADHEADER.split('\n');
//    console.log(`您选择的是用换行隔开\n`)
//   } else {
//    hotsoonreadheader = process.env.HOTSOONREADHEADER.split()
//   };
//   if (process.env. HOTSOONREADKEY&& process.env.HOTSOONREADKEY.indexOf('#') > -1) {
//    hotsoonreadkey = process.env.HOTSOONREADKEY.split('#');
//   }
//   else if (process.env.HOTSOONREADKEY && process.env.HOTSOONREADKEY.split('\n').length > 0) {
//    hotsoonreadkey = process.env.HOTSOONREADKEY.split('\n');
//   } else  {
//    hotsoonreadkey = process.env.HOTSOONREADKEY.split()
//   };
// //sign
//   Object.keys(hotsoonsignheader).forEach((item) => {
//         if (hotsoonsignheader[item]) {
//           hotsoonsignheaderArr.push(hotsoonsignheader[item])
//         }
//     });
//     Object.keys(hotsoonsignkey).forEach((item) => {
//         if (hotsoonsignkey[item]) {
//           hotsoonsignkeyArr.push(hotsoonsignkey[item])
//         }
//     });
// //step
// Object.keys(hotsoonadheader).forEach((item) => {
//         if (hotsoonadheader[item]) {
//           hotsoonadheaderArr.push(hotsoonadheader[item])
//         }
//     });
//     Object.keys(hotsoonadkey).forEach((item) => {
//         if (hotsoonadkey[item]) {
//           hotsoonadkeyArr.push(hotsoonadkey[item])
//         }
//     });
// //read
// Object.keys(hotsoonreadheader).forEach((item) => {
//         if (hotsoonreadheader[item]) {
//           hotsoonreadheaderArr.push(hotsoonreadheader[item])
//         }
//     });
//     Object.keys(hotsoonreadkey).forEach((item) => {
//         if (hotsoonreadkey[item]) {
//           hotsoonreadkeyArr.push(hotsoonreadkey[item])
//         }
//     });
	
       hotsoonsignheaderArr.push('version_code=7.6.2&app_name=live_stream_lite&vid=9C92096D-5FEE-4FA2-A148-8E7EE2CB4EA3&device_id=3306984110565176&new_nav=0&channel=App%20Store&aid=1350&ab_group=1568500&screen_width=828&client_request_id=736738d3b74355040725155263cacf65&openudid=04fee11eb513656d66ca544e7d3f0fb69f16918a&live_sdk_version=7.6.2&update_version_code=7621&os_api=18&ws_status=CLOSED&ac=WIFI&mccmnc=46000&os_version=14.4&client_version_code=762&device_platform=iphone&iid=1582950568695319&device_type=iPhone12,1&idfa=6D904FEA-DCAE-494D-9CE0-B157E5B760E5')

       hotsoonsignkeyArr.push('{"Accept-Encoding":"gzip, deflate","x-Tt-Token":"00322a3a865e11eb380d3913778955a4b104d3369a4f165172471483b831607a7b8b1b5b640f203845eaa72630c03092e3415b75e53add150beffae95ee20c3fb4ebd75e2e0171724c2c93deb6a84f1abad74fcdcc5e5768cd22a9e1eeee108d212f9-1.0.1","Connection":"keep-alive","Cookie":"install_id=1582950568695319; ttreq=1$8f45acf804c1bd295d126ab58982e37a1ba29ac4; n_mh=sS1gaGw52xzBsOqocJ0fQhcneconSWFAPOiQrwVi4Hk; d_ticket=34cff78d0228bf189c72ad157e09d7113befd; sid_guard=322a3a865e11eb380d3913778955a4b1%7C1616072343%7C5184000%7CMon%2C+17-May-2021+12%3A59%3A03+GMT; uid_tt=214f7d3a25e97d6de9921e5fb22155b0; uid_tt_ss=214f7d3a25e97d6de9921e5fb22155b0; sid_tt=322a3a865e11eb380d3913778955a4b1; sessionid=322a3a865e11eb380d3913778955a4b1; sessionid_ss=322a3a865e11eb380d3913778955a4b1; odin_tt=730b65e8b4e699a5a25a0e69a41f429caa39012092dec20eb197877a59648c82830854128e6bc3a392f7490d8c5cefa1481d3170a91cec453323105a10801b58; excgd=20210327","Host":"ib.snssdk.com","User-Agent":"HotsoonLite 7.6.2 rv:7621 (iPhone; iOS 14.4; zh_CN) Cronet","X-Khronos":"1616980000","sdk-version":"1","x-tt-trace-id":"00-7b84c0c00dbbfaf3d302738e0dfc0546-7b84c0c00dbbfaf3-01","X-Gorgon":"8402c02d0000151c936961e47b8325ed8fa950292e470f2333bf"}')
       hotsoonreadheaderArr.push('version_code=7.6.2&app_name=live_stream_lite&vid=9C92096D-5FEE-4FA2-A148-8E7EE2CB4EA3&device_id=3306984110565176&new_nav=0&channel=App%20Store&aid=1350&ab_group=1568500&screen_width=828&client_request_id=862598a5ad283571b9146f86201cd477&openudid=04fee11eb513656d66ca544e7d3f0fb69f16918a&live_sdk_version=7.6.2&update_version_code=7621&os_api=18&ws_status=CONNECTED&ac=WIFI&mccmnc=46000&os_version=14.4&client_version_code=762&device_platform=iphone&iid=1582950568695319&device_type=iPhone12,1&idfa=6D904FEA-DCAE-494D-9CE0-B157E5B760E5')

       hotsoonreadkeyArr.push('{"x-tt-trace-id":"00-3401f70b0d85061ec580a887001807af-3401f70b0d85061e-01","Connection":"keep-alive","Accept-Encoding":"gzip, deflate","X-SS-DP":"1967","sdk-version":"2","x-Tt-Token":"00506aba8b2312957bf670e1526a423d0e02f97d8757929aea93f85c016755a72494f2727268a5b0fa03a2abc658cdb24e3e77c038a0f703dacd51ab8ffd9ce322e1d0c4b5c62262064159e7fd91b6291d5e934536399a31a72b28c9b132ea8842625-1.0.1","X-Khronos":"1615780246","User-Agent":"Reading 4.0.5 rv:4.0.5.32 (iPhone; iOS 14.4; zh_CN) Cronet","x-vc-bdturing-sdk-version":"2.0.0","Cookie":"excgd=20210315; passport_csrf_token=c52f98d2063b6b6c0717c4f5a2f1b2dd; passport_csrf_token_default=c52f98d2063b6b6c0717c4f5a2f1b2dd; d_ticket=df7c17636cefa67c2b63e0eb3687a5d9857a3; n_mh=sS1gaGw52xzBsOqocJ0fQhcneconSWFAPOiQrwVi4Hk; odin_tt=d4f016880696ad0af41ff12624fedd13cdf477721f32447c014590a60bf4019c2a7c381c7c255a2d04784d01b1fe4c46; sessionid=506aba8b2312957bf670e1526a423d0e; sessionid_ss=506aba8b2312957bf670e1526a423d0e; sid_guard=506aba8b2312957bf670e1526a423d0e%7C1615512598%7C5184000%7CTue%2C+11-May-2021+01%3A29%3A58+GMT; sid_tt=506aba8b2312957bf670e1526a423d0e; uid_tt=28f6f643ad99dfd22fa5a39a37016eac; uid_tt_ss=28f6f643ad99dfd22fa5a39a37016eac; install_id=1390215082287416; ttreq=1$a16911f38838f83f3aaa50a0512c98133fe5febd","Host":"i-lq.snssdk.com","X-Tyhon":"JgrUCyG43xVLsuMNOPvDIxGRpQQD5aUUNq7cr98=","passport-sdk-version":"5.13.3","X-Gorgon":"8404c0a70000f69d1dea125cb0227754107516e9dd3a3c2f4df6"}')
  
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
 } else {
    hotsoonsignheaderArr.push($.getdata('hotsoonsignheader'))
    hotsoonsignkeyArr.push($.getdata('hotsoonsignkey'))
    hotsoonadheaderArr.push($.getdata('hotsoonadheader'))
    hotsoonadkeyArr.push($.getdata('hotsoonadkey'))
    hotsoonreadheaderArr.push($.getdata('hotsoonreadheader'))
    hotsoonreadkeyArr.push($.getdata('hotsoonreadkey'))
    let hotsooncount = ($.getval('hotsooncount') || '1');
  for (let i = 2; i <= hotsooncount; i++) {
    hotsoonsignheaderArr.push($.getdata(`hotsoonsignheader${i}`))
    hotsoonsignkeyArr.push($.getdata(`hotsoonsignkey${i}`))
    hotsoonadheaderArr.push($.getdata(`hotsoonadheader${i}`))
    hotsoonadkeyArr.push($.getdata(`hotsoonadkey${i}`))
    hotsoonreadheaderArr.push($.getdata(`hotsoonreadheader${i}`))
    hotsoonreadkeyArr.push($.getdata(`hotsoonreadkey${i}`))
  }
}
!(async () => {
if (!hotsoonsignheaderArr[0]) {
    $.msg($.name, '【提示】请先获取火山视频极速版一cookie')
    return;
  }
   console.log(`------------- 共${hotsoonsignheaderArr.length}个账号----------------\n`)
  for (let i = 0; i < hotsoonsignheaderArr.length; i++) {
    if (hotsoonsignheaderArr[i]) {
      message = ''
      hotsoonsignheader = hotsoonsignheaderArr[i];
      hotsoonsignkey = hotsoonsignkeyArr[i];
      hotsoonadheader = hotsoonadheaderArr[i];
      hotsoonadkey = hotsoonadkeyArr[i];
      hotsoonreadheader = hotsoonreadheaderArr[i];
      hotsoonreadkey = hotsoonreadkeyArr[i];
      $.index = i + 1;
      console.log(`\n开始【火山视频极速版${$.index}】`)
      //await userinfo()
      await sign_in()
      await treasure_task()
      await control()
      await profit()
      await watch_video(no)
      await showmsg()
  }
 }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
function GetCookie() {
 if($request&&$request.url.indexOf("hotsoon"&&"sign_in_detail")>=0) {
  const hotsoonsignheader = $request.url.split(`?`)[1]
    if (hotsoonsignheader) $.setdata(hotsoonsignheader,`hotsoonsignheader${$.idx}`)
    $.log(`[${jsname}] 获取sign请求: 成功,hotsoonsignheader: ${hotsoonsignheader}`)
    $.msg(`获取hotsoonsignheader: 成功🎉`, ``)
   const hotsoonsignkey = JSON.stringify($request.headers)
  if(hotsoonsignkey)        $.setdata(hotsoonsignkey,`hotsoonsignkey${$.idx}`)
    $.log(`[${jsname}] 获取sign请求: 成功,hotsoonsignkey: ${hotsoonsignkey}`)
    $.msg(`获取hotsoonsignkey: 成功🎉`, ``)
 }
 if($request&&$request.url.indexOf('hotsoon'&&"daily_read")>=0) {
	  const hotsoonreadheader = $request.url.split(`?`)[1]
	    if (hotsoonreadheader) $.setdata(hotsoonreadheader,`hotsoonreadheader${$.idx}`)
	    $.log(`[${jsname}] 获取read请求: 成功,hotsoonreadheader: ${hotsoonreadheader}`)
	    $.msg(`获取hotsoonreadheader: 成功🎉`, ``)
	   const hotsoonreadkey = JSON.stringify($request.headers)
	  if(hotsoonreadkey)        $.setdata(hotsoonreadkey,`hotsoonreadkey${$.idx}`)
	    $.log(`[${jsname}] 获取read请求: 成功,readkey: ${hotsoonreadkey}`)
	    $.msg(`获取hotsoonreadkey: 成功🎉`, ``)
	 }
 if($request&&$request.url.indexOf('hotsoon' && "draw_excitation_ad")>=0) {
	  const hotsoonadheader = $request.url.split(`?`)[1]
	    if (hotsoonadheader) $.setdata(hotsoonadheader,`hotsoonadheader${$.idx}`)
	    $.log(`[${jsname}] 获取AD请求: 成功,hotsoonadheader: ${hotsoonadheader}`)
	    $.msg(`获取hotsoonadheader: 成功🎉`, ``)
	   const hotsoonadkey = JSON.stringify($request.headers)
	  if(hotsoonadkey)        $.setdata(hotsoonadkey,`hotsoonadkey${$.idx}`)
	    $.log(`[${jsname}] 获取AD请求: 成功,hotsoonadkey: ${hotsoonadkey}`)
	    $.msg(`获取hotsoonadkey: 成功🎉`, ``)
	 }
    }
//签到
function sign_in() {
return new Promise((resolve, reject) => {
  let sign_inurl ={
    url: `https://ib-hl.snssdk.com/luckycat/hotsoon/v1/task/done/sign_in?${hotsoonsignheader}`,
    headers: JSON.parse(hotsoonsignkey),
}
   $.post(sign_inurl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
          message += '📣签到\n'
      if(result.err_no == 0) {
          message += result.err_tips+'\n'
      }else{
          message +='⚠️异常'+result.err_tips+'\n'
           }
          resolve()
    })
   })
  } 
//随机宝箱
function treasure_task() {
return new Promise((resolve, reject) => {
  let treasure_taskurl ={
	url: `https://ib-hl.snssdk.com/luckycat/hotsoon/v1/task/done/treasure_task?${hotsoonsignheader}`,
    headers: JSON.parse(hotsoonsignkey),
}
   $.post(treasure_taskurl,(error, response, data) =>{
     const result = JSON.parse(data)
      if(logs) $.log(data)
      message += '📣随机宝箱\n'
      if(result.err_no == 0) {
           message += result.err_tips+result.data.tips+'\n'
       }else{
    	   message += '⚠️异常'+result.err_tips+'\n'
       }
          resolve()
    })
   })
  } 
async function control(){
   if(hotsoonadkey){
      await ad();
   }else{
     $.log("跳过广告收益，您没有此活动")
     }
    if(hotsoonaccount){
     await profits()
     }
}
//广告
function ad() {
return new Promise((resolve, reject) => {
  let adurl ={
      url: `https://ib-hl.snssdk.com/luckycat/hotsoon/v1/task/done/draw_excitation_ad?${hotsoonadheader}`,
      headers: JSON.parse(hotsoonadkey),
      body:`{

}`,
	 timeout: 60000,
}
   $.post(adurl,(error, response, data) =>{
     const result = JSON.parse(data)
     if(logs) $.log(data)
     message += '📣广告收益\n'
     if(result.err_no == 0) {
          message += '🎉'+result.err_tips+"获得:"+result.data.amount+'\n'
      }else{
   	   message += '⚠️异常'+result.err_tips+'\n'
      }
         resolve()
   })
  })
 } 
//profit
async function profit() {
return new Promise((resolve, reject) => {
  let profiturl ={
    url: `https://ib-hl.snssdk.com/luckycat/hotsoon/v1/wallet/profit_detail_page?income_type=2&num=80&${hotsoonsignheader}`,
    headers :JSON.parse(hotsoonsignkey),
}
   $.get(profiturl,async(error, response, data) =>{
     const result = JSON.parse(data)
        if(logs)$.log(data)
for(let i =0;i<=result.data.profit_detail.score_income_list.length;i++){
if(result.data.profit_detail.score_income_list[i].desc.match(/视频\d+/)) {
         no = result.data.profit_detail.score_income_list[i].desc.match(/\d+/)          
$.log(no)
     if(cash == 1 && coins >= 20){
     no = 1;
     await withdraw()
     }
         break;
}
}
          resolve()
    })
   })
  } 

//看视频
function watch_video(no) {
let now = new Date().getTime()
let header = hotsoonreadkey.replace(/X-Khronos":"\d+/,`X-Khronos":"${now}`)
return new Promise((resolve, reject) => {
  let watch_videourl ={
    url: `https://ib.snssdk.com/luckycat/hotsoon/v1/task/done/daily_read_${no}m?${hotsoonreadheader}`,
    headers: JSON.parse(hotsoonreadkey),
}
   $.post(watch_videourl,(error, response, data) =>{
     const result = JSON.parse(data)
       if(logs) $.log(data)
       message += '📣看视频\n'
      if(result.err_no == 10012){
          message += '⚠️异常:'+no+'时段任务完成\n'
        if(no==2){
           no=5
         return watch_video(no);
       }
       else if(no == 20){
            no= 30
          return watch_video(no);
        }
      else if(no == 1 || no == 5 || no == 10 || no == 30){
           no=2*no
         return watch_video(no);
          }
      else if(no == 60){
           message += '视频任务全部完成\n'
           if(hour >= 0){
           no = 1;
           return watch_video(no);
   }
 }
        else{
           return showmsg();
     }}
      else if(result.err_no == 0) {
          message +='🎉'+result.err_tips+'获得:'+result.data.amount+"\n"
          //return showmsg();
        }
      else{
          message += '⚠️异常:'+result.err_tips+'\n'+'请重新获取readkey\n'
          let other = '⚠️异常:'+result.err_tips+'请重新获取readkey\n'
          //$.msg(jsname,'',other)
      }
          resolve()
    })
   })
  } 
//profit page
function profits() {
return new Promise((resolve, reject) => {
  let profitsurl ={
    url: `https://ib-hl.snssdk.com/luckycat/hotsoon/v1/wallet/profit_detail_page?&aid=1350&profit_type=score&polaris_version=2.0.0&income_type=1&${hotsoonsignheader}`,
    headers: JSON.parse(hotsoonsignkey),
}
   $.get(profitsurl,async(error, response, data) =>{
     const result = JSON.parse(data)
     if(logs) $.log(data)
     let time = Math.round(new Date(new Date().toLocaleDateString()).getTime()/1000)
coins = result.data.income_data.cash_balance
if(result.data.profit_detail.cash_income_list.find(item => item.time >= time) && result.data.profit_detail.cash_income_list.find(item => item.task_id == '215')){
     cash = 0;
     }
          resolve()
    })
   })
  } 
//withdraw
function withdraw() {
return new Promise((resolve, reject) => {
  let withdrawurl ={
    url: `https://ib-hl.snssdk.com/luckycat/hotsoon/v1/wallet/take_cash?polaris_version=2.0.0&${hotsoonreadheader}`,
    headers: JSON.parse(hotsoonreadkey),
    body:`{
  "task_id" : 215,
  "account" : "${hotsoonaccount}",
  "cash_amount" : -20,
  "is_auto" : true,
  "name" : "",
  "take_cash_way" : "alipay"
}`
}
   $.post(withdrawurl,(error, response, data) =>{
     const result = JSON.parse(data)
        $.log(data)
       message += '📣提现0.2元\n'
      if(result.err_no == 0){
          console.log(result.err_tips+'提现0.2元\n')
          message += result.err_tips+'提现0.2元\n'
      }
      else{
          console.log(result.err_tips+"\n")
        }
          resolve()
    })
   })
  }
async function showmsg(){
if(tz==1){
    if ($.isNode()){
     $.log(message)
    if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
       await notify.sendNotify($.name,message)
     }
   }else{
      $.log(message)
    if ((hour == 12 && minute <= 20) || (hour == 23 && minute >= 40)) {
       $.msg(jsname,'',message)
}
}
   }else{
       $.log(message)
    }
 }
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
