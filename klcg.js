

/**
快乐猜歌每次运行猜歌答题10道，大约需要40次就会达到400，10元标准，每天运行3次左右打卡就好，0.3往上，需要邀请人提现，有能力要请人就是了，没能力普通提现0.3也不错，每天0.3

⚠️多开必黑，un越狱建议屏蔽

没有循环，运行太多会炸，几十次就会达到红包几百

[rewrite_local]
#快乐猜歌无限刷
https://bp-api.coohua.com/bubuduo-klcg/game/answer/reward? url script-request-body https://raw.githubusercontent.com/Ariszy/Private-Script/master/Scripts/klcg.js


[MITM]

hostname = bp-api.coohua.com

 */



const $ = new Env('快乐猜歌无限刷');
let status;
status = (status = ($.getval("ygkcstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const ygkcurlArr = [], ygkchdArr = [],ygkccount = ''
let num = ($.getval('num') || 5) //循环体
let times = Math.round(Date.now() / 1000)
let ygkcurl = $.getdata('ygkcurl')
let ygkchd = $.getdata('ygkchd')
let ids,anawer,d,a;
if ($.isNode()) {
    ygkcurlArr.push('https://bp-api.coohua.com/bubuduo-klcg/game/answer/reward?accessKey=5cb5f00d3246c2f632b7354e8b8aaa7f_209487383&anomy=0&appId=406&appVersion=1.0.1&blackBox=eyJ0b2tlbklkIjoiM0tuTEdyVUNjSHluUXdSU2NGVWxZMVBxY1FveHEwd0hEOXlKMFwvUHlZeW1oOXk3SXBPSWFVeTJhOGc5cUZRTGFCd1pDRTVpSjhHU3BnOEZhVXhZK0lRPT0iLCJvcyI6ImlPUyIsInNlcUlkIjoiMTYxOTQwNzI3NTExOTEwODg5OTciLCJwcm9maWxlVGltZSI6Mjk1LCJ2ZXJzaW9uIjoiMy41LjUifQ%3D%3D&brand=Apple&bs=CDMA&channel=AppStore&deviceId=6D904FEA-DCAE-494D-9CE0-B157E5B760E5&env=production&gps=30.45%2C120.66&id=1573&index=0&os=iOS&osVersion=iOS%2014.40&pkg=com.gy.klcg&pkgId=281&romVersion=iOS%2014.40&userId=209487383&version=1.0.1')
    ygkchdArr.push('{"bs":"CDMA","osVersion":"iOS 14.40","pkgId":"281","Host":"bp-api.coohua.com","Accept-Encoding":"gzip, deflate, br","deviceId":"6D904FEA-DCAE-494D-9CE0-B157E5B760E5","gps":"30.45,120.66","brand":"Apple","channel":"AppStore","Connection":"keep-alive","pkg":"com.gy.klcg","accessKey":"5cb5f00d3246c2f632b7354e8b8aaa7f_209487383","anomy":"0","appVersion":"1.0.1","version":"1.0.1","User-Agent":"klcg/1.0.1 (iPhone; iOS 14.4; Scale/2.00)","os":"iOS","Accept-Language":"zh-Hans-CN;q=1","romVersion":"iOS 14.40","Accept":"*/*","env":"production","appId":"406","Cookie":"sajssdk_2015_cross_new_user=1; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221790c33c47adbf-043eeec696d01a-754c1351-370944-1790c33c47bed7%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%221790c33c47adbf-043eeec696d01a-754c1351-370944-1790c33c47bed7%22%7D","blackBox":"eyJ0b2tlbklkIjoiM0tuTEdyVUNjSHluUXdSU2NGVWxZMVBxY1FveHEwd0hEOXlKMFwvUHlZeW1oOXk3SXBPSWFVeTJhOGc5cUZRTGFCd1pDRTVpSjhHU3BnOEZhVXhZK0lRPT0iLCJvcyI6ImlPUyIsInNlcUlkIjoiMTYxOTQwNzI3NTExOTEwODg5OTciLCJwcm9maWxlVGltZSI6Mjk1LCJ2ZXJzaW9uIjoiMy41LjUifQ==","userId":"209487383"}')
   

    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
  }
!(async () => {
  if (typeof $request !== "undefined") {
    await ygkcck()
   
  } else {ygkcurlArr.push($.getdata('ygkcurl'))
    ygkchdArr.push($.getdata('ygkchd'))
    let ygkccount = ($.getval('ygkccount') || '1');
  for (let i = 2; i <= ygkccount; i++) {
    ygkcurlArr.push($.getdata(`ygkcurl${i}`))
    ygkchdArr.push($.getdata(`ygkchd${i}`))
  }
    console.log(`------------- 共${ygkchdArr.length}个账号-------------\n`)
      for (let i = 0; i < ygkchdArr.length; i++) {
        if (ygkchdArr[i]) {
          let turn = 0;
          ygkcurl = ygkcurlArr[i];
          ygkchd = ygkchdArr[i];
          $.index = i + 1;
          console.log(`\n开始【快乐猜歌${$.index}】`)
    await search();
    await control();
    turn ++;
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//数据获取


function ygkcck() {
   if ($request.url.indexOf("reward") > -1) {
 const ygkcurl = $request.url
  if(ygkcurl)     $.setdata(ygkcurl,`ygkcurl${status}`)
    $.log(ygkcurl)
  const ygkchd = JSON.stringify($request.headers)
        if(ygkchd)    $.setdata(ygkchd,`ygkchd${status}`)
$.log(ygkchd)
   $.msg($.name,"",'快乐猜歌'+`${status}` +'数据获取成功！')
  }
}
async function control(){
for(let i = 0; i < ids.length; i++){
    d = ids[i].replace(/id":/,"")
    a = answer[i].replace(/correct":/,"")
$.log(d+"@"+a)
    await wkzztx(); 
    await $.wait(100)
}
}
function search(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://bp-api.coohua.com/bubuduo-klcg/game/res/list?"+ygkcurl.indexOf("?")[1],
        headers : JSON.parse(ygkchd),
        
}
      $.get(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n${data}`)
      ids = data.match(/id":\d+/g)
      
      answer = data.match(/correct":\d/g)
      
      $.log(id)
      $.log(answer)
await $.wait(100);
        
} else {
await $.wait(100);
        sjs = sjs+1
       console.log(result.message)
       
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

function wkzztx(timeout = 0) {
  return new Promise((resolve) => {

let id = ygkcurl.replace(/id=\d+&index=\d/,`id=${d}&index=${a}`)
//$.log(id)
let url = {
        url : id,
        headers : JSON.parse(ygkchd),
        
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)
        if(result.code == 0){
  $.log(`\n${data}`)
      //$done()
sjs = sjs+1
await $.wait(100);
        
} else {
await $.wait(100);
        sjs = sjs+1
       console.log(result.message)
       
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
