/*
软件名称:视频号互助 复制链接下载
更新时间：2021-04-20 @肥皂
脚本说明：视频号互助自动任务
脚本为自动完成视频号互助的关注任务
每天几块钱不确定。五块提现秒到。
脚本提交的截图全部是同一张。咱们玩的是平台bug
平台的审核机制为任务主两小时没审核的话平台会自动通过
咱们大批量的玩。任务主很少审核(也审核不过来)让平台自动放行开撸。

使用方法:随便完成一个任务截图提交获得数据

微信扫码登录 https://ae01.alicdn.com/kf/Uccf50cf269fe450895113b7c39bbb669o.jpg

本脚本以学习为主！
TG通知群:https://t.me/Ariszy_Scripts
TG电报群: https://t.me/hahaha8028

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json

视频号互助
圈X配置如下，其他软件自行测试
[task_local]
#视频号互助
10 8 * * * https://raw.githubusercontent.com/age174/-/main/sphz.js, tag=视频号互助, img-url=https://ae01.alicdn.com/kf/U6fe8c098a65740039ac7767867746c4aK.jpg, enabled=true

[rewrite_local]
#视频号互助
http://huzhu.ssjann.com/task/participate url script-request-body https://raw.githubusercontent.com/age174/-/main/sphz.js

#loon
http://huzhu.ssjann.com/task/participate script-path=https://raw.githubusercontent.com/age174/-/main/sphz.js, requires-body=true, timeout=10, tag=视频号互助

#surge
视频号互助 = type=http-request,pattern=http://huzhu.ssjann.com/task/participate,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/sphz.js,script-update-interval=0

[MITM]
hostname = huzhu.ssjann.com


*/

const $ = new Env('视频号互助');
let status;
status = (status = ($.getval("sphzstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const sphzurlArr = [], sphzhdArr = [],sphzbodyArr = [],sphzcount = ''
let times = Math.round(Date.now())
let sphzurl = $.getdata('sphzurl')
let sphzhd = $.getdata('sphzhd')
let sphzbody = $.getdata('sphzbody')
let sphzkey = '',id = '',uid='',tid='',name=''
if ($.isNode()) {
    sphzurlArr.push('http://huzhu.ssjann.com/task/participate')
    sphzhdArr.push('{"Origin":"http://huzhu.sqipr.net.cn","Accept-Encoding":"gzip, deflate","Connection":"keep-alive","Content-Type":"application/json","Accept":"*/*","Host":"huzhu.ssjann.com","User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.3(0x1800032c) NetType/WIFI Language/zh_CN","Referer":"http://huzhu.sqipr.net.cn/","Content-Length":"178","Accept-Language":"zh-cn"}')
   sphzbodyArr.push('{"unionId":"RuGjUB08z38YlA0YlVDlIl/gsLl13k/K8AhXcpZ48y8=","taskId":19162,"voucherPicture":"https://miniimages.tuantuanzhuanvip.com/20210421/b34ca6c2454d43f7ac774bce0aa1cf52.jpg"}')


    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
  }

!(async () => {
  if (typeof $request !== "undefined") {
    await sphzck()
   
  } else {sphzurlArr.push($.getdata('sphzurl'))
    sphzhdArr.push($.getdata('sphzhd'))
    sphzbodyArr.push($.getdata('sphzbody'))
    let sphzcount = ($.getval('sphzcount') || '1');
  for (let i = 2; i <= sphzcount; i++) {
    sphzurlArr.push($.getdata(`sphzurl${i}`))
    sphzhdArr.push($.getdata(`sphzhd${i}`))
    sphzbodyArr.push($.getdata(`sphzbody${i}`))
  }
    console.log(`------------- 共${sphzhdArr.length}个账号-------------\n`)
      for (let i = 0; i < sphzhdArr.length; i++) {
        if (sphzhdArr[i]) {
          sphzbody = sphzbodyArr[i];
          sphzurl = sphzurlArr[i];
          sphzhd = sphzhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【视频号互助${$.index}】`)
          await sphzdz();
          await $.wait(1000);
          
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//视频号互助数据获取


function sphzck() {
   if ($request.url.indexOf("task/participate") > -1) {
 const sphzurl = $request.url
  if(sphzurl)     $.setdata(sphzurl,`sphzurl${status}`)
    $.log(sphzurl)
  const sphzhd = JSON.stringify($request.headers)
        if(sphzhd)    $.setdata(sphzhd,`sphzhd${status}`)
$.log(sphzhd)
    const sphzbody = $request.body
        if(sphzbody)    $.setdata(sphzbody,`sphzbody${status}`)
$.log(sphzbody)
   $.msg($.name,"",'视频号互助'+`${status}` +'数据获取成功！')
  }
}






//视频号互助列表
function sphzdz(timeout = 0) {
  return new Promise((resolve) => {
const uid = JSON.parse(sphzbody)
tid = uid.voucherPicture
id = uid.unionId
let url = {
        url : "http://huzhu.ssjann.com/index/list",
        headers : JSON.parse(sphzhd),
        body : `{"data":{"unionId":"${id}","type":4},"pageNo":1,"pageSize":10}`,
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.code == 200){
name = result.data.list[0].taskId
        console.log(`\n【视频号互助】获取任务成功\n当前任务:${result.data.list[0].taskId}`)
await sphz1();
        
} else {
       console.log('\n【视频号互助】获取任务失败'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//视频号互助任务
function sphz1(timeout = 0) {
  return new Promise((resolve) => {
let sj = Math.floor(Math.random() * 5000); //生成随机数
let url = {
        url : 'http://huzhu.ssjann.com/task/participate',
        headers : JSON.parse(sphzhd),
        body : `{"unionId":"${id}","taskId": ${name},"voucherPicture":"${tid}"}`,
}
      $.post(url, async (err, resp, data) => {
        try {
    const result = JSON.parse(data)

        if(result.code == 200){

        console.log('\n【视频号互助】'+result.msg)
        await sphzdz();
        await $.wait(1000);
} else {
       console.log('\n【视频号互助】'+result.msg)
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
