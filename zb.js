/*

20210418  tom

应用商店下载：左边  搜索结果显示：ZEALER

邀请码：JQ6BWT    感谢大佬们填写

打开软件点击右上角“能量”
点击宝箱即可获取ck

多账号需要卸载app重新登入新账号，具体自测，退出登入是不行的。

脚本为4小时开启一次宝箱获取能量币

额，新品抽奖和众测， 我试了一下，以小弟我目前的水平，写不出来

能量币可兑换：苹果耳机，充电宝，手机支架等

TG频道：https://t.me/Ariszy_Scripts
TG群：@hahaha8028
 

圈X配置如下，其他软件自行测试
[task_local]
#左边
0 0 0/4 * * * https://raw.githubusercontent.com/xl2101200/-/main/zb.js, tag=左边, enabled=true


[rewrite_local]
#左边
https://app.zaaap.cn/points/home/openbox url script-request-body https://raw.githubusercontent.com/xl2101200/-/main/zb.js


[MITM]
hostname = app.zaaap.cn

*/

const $ = new Env('ZEALER');
let status;
status = (status = ($.getval("zbstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const zburlArr = [], zbbodyArr = [],zbhdArr = [],zbcount = ''
let times = Math.round(Date.now() / 1000)
let zburl = $.getdata('zburl')
let zbbody = $.getdata('zbbody')
let zbhd = $.getdata('zbhd')
if ($.isNode()) {
   zburlArr.push('https://app.zaaap.cn/points/home/openbox')
 //  zbbodyArr.push('{"Accept-Encoding":"gzip, deflate","Cookie":"ar=true; newuseract=1; newzb_u1957=%7B%22uid_code%22%3A%22x053cr3e90x994bz7d35rf88ct90edc0dafe05b3pebeccbcrtc%22%2C%22login_token%22%3A%2253%5D%28%5D3435545675%5D%28%5D64%5D%28%5D62%3B6753%5D%28%5D53%22%7D","Connection":"keep-alive","Referer":"http://v1uxnzj.cn/user1/tasks?check=","Accept":"application/json","Host":"v1uxnzj.cn","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.3(0x18000329) NetType/WIFI Language/zh_CN","Accept-Language":"zh-cn","X-Requested-With":"XMLHttpRequest"}')
   zbhdArr.push('{"Connection":"keep-alive","Accept-Encoding":"gzip, deflate, br","accessToken":"2a882c6c7bab246bc1eae6d2f149d7c2","Content-Type":"multipart/form-data; boundary=----WebKitFormBoundaryLA7vNQriR9yApOOf","Origin":"https://activity.zaaap.cn","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/zealer/3.0.0","Host":"app.zaaap.cn","Referer":"https://activity.zaaap.cn/integral/index.html?token=2a882c6c7bab246bc1eae6d2f149d7c2&theme=light&time=1618790277036","vesioncode":"3.0.0","Accept-Language":"zh-cn","Accept":"application/json, text/plain, */*","Content-Length":"44"}')


    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
  }

!(async () => {
  if (typeof $request !== "undefined") {
    await zbck()
  } else {zburlArr.push($.getdata('zburl'))
    zbhdArr.push($.getdata('zbhd'))
    zbbodyArr.push($.getdata('zbbody'))
    let zbcount = ($.getval('zbcount') || '1');
  for (let i = 2; i <= zbcount; i++) {
    zburlArr.push($.getdata(`zburl${i}`))
    zbbodyArr.push($.getdata(`zbbody${i}`))
    zbhdArr.push($.getdata(`zbhd${i}`))
  }
    console.log(`------------- 共${zbhdArr.length}个账号-------------\n`)
      for (let i = 0; i < zbhdArr.length; i++) {
        if (zbhdArr[i]) {
          zburl = zburlArr[i];
          zbbody = zbbodyArr[i];
          zbhd = zbhdArr[i];
          $.index = i + 1;
          console.log(`\n开始ZEALER【${$.index}】`)
    await zbbx();
  }
}}
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
function zbck() {
   if ($request.url.indexOf("openbox") > -1) {
 const zburl = $request.url
  if(zburl)     $.setdata(zburl,`zburl${status}`)
    $.log(zburl)
 const zbbody = $request.body
  if(zbbody)   $.setdata(zbbody,`zbbody${status}`)
    $.log(zbbody)
 const zbhd = JSON.stringify($request.headers)
  if(zbhd)    $.setdata(zbhd,`zbhd${status}`)
$.log(zbhd)
   $.msg($.name,"",'ZEALER'+`${status}` +'数据获取成功！')
  }
}

function zbbx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://app.zaaap.cn/points/home/openbox`,
        headers : JSON.parse($.getdata('zbhd')),
        body : zbbody,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)
        if(result.status == 200){

        $.log('\n开启宝箱'+result.msg+'\n获得能量币：'+result.data.energy+'个')
} else {
       // $.log('\n开启宝箱'+result.msg)
       console.log(result.msg)
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
