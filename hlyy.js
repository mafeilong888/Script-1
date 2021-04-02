/*
软件名称:葫芦音乐 商店搜索下载
更新时间：2021-04-02 @肥皂
脚本说明：葫芦音乐自动任务
脚本为自动完成葫芦音乐的日常任务
每日固定收益0.5元左右，1元提现，可多号撸。
当天可提0.6元秒到
自动提现默认提现一块钱，还没测试过，不知道行不行
本脚本以学习为主！
使用方法:打开葫芦音乐，完成一个任意任务获得数据
TG电报群: https://t.me/hahaha8028
boxjs地址 :  
https://raw.githubusercontent.com/age174/-/main/feizao.box.json
4.2更新,破解学知识任务,创意视频任务和分享任务的收益上限,学知识可以领取两次1500金币,创意视频可以领取两次2000金币,分享任务可领取两次68金币,自动提现好像还有点问题,到时候再看看
葫芦音乐
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#葫芦音乐
0,30 8-23 * * * https://raw.githubusercontent.com/age174/-/main/hlyy.js, tag=葫芦音乐, img-url=https://ae01.alicdn.com/kf/U49d941738c0c41569f7db55825943375f.jpg, enabled=true
[rewrite_local]
#葫芦音乐
https://play.gxhuancai.com/hlplay/task/doTasks url script-request-header https://raw.githubusercontent.com/age174/-/main/hlyy.js
#loon
https://play.gxhuancai.com/hlplay/task/doTasks script-path=https://raw.githubusercontent.com/age174/-/main/hlyy.js, requires-header=true, timeout=10, tag=葫芦音乐
#surge
葫芦音乐 = type=http-request,pattern=https://play.gxhuancai.com/hlplay/task/doTasks,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/hlyy.js,script-update-interval=0
[MITM]
hostname = play.gxhuancai.com
*/

const $ = new Env('葫芦音乐');
let status;
status = (status = ($.getval("hlyystatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const hlyyurlArr = [], hlyyhdArr = [],hlyybodyArr = [],hlyycount = ''
let times = Math.round(Date.now())
let hlyyurl = $.getdata('hlyyurl')
let hlyyhd = $.getdata('hlyyhd')
let hlyybody = $.getdata('hlyybody')
let ut = '',id = '',qd='',qdfb='',gg='',sp='',fx='',zs='',tg='',wz=''

if ($.isNode()) {
    hlyyurlArr.push('https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=DeyJlbmNvZGUiOjMsIm9zIjoiaW9zIiwiY29tcHJlc3MiOjEsIm9yZ2FuaXphdGlvbiI6InFER21pTFRUWFBhV2VMazNsMnRHIiwiZGF0YSI6InNIODI3Q3VzZzBSSlg4QkhJVXVHczhnQmhCTFdIZU1hT1FJMDFJWXFVaFd5a0E1T2NGOEJJeVlXM2VQXC9ZSXBzelwvY1dwcWZCSDdUNHNTRzYxYStOVjVmUHUzMndTY0VIZkhSN3lOVlwvcjVxeVJtaHZoQW1pNnJYVkp1VTV0TGhmUmhCTm5kM1RDNkd6OTBQNmFcLzdQdTh1elI0SlNcL1A1MlJ5WHFsN2Z0dEpqVHV2QnFxajVOR2QyTnkydUNwQ0tnRUI3XC9jWUZtcDRJQVhtQlwvUDRGQVZwSGpnSlwvNURlUlpGUFNmS29BTHZmT012SmErd010UERHZlQ1N0VVaHpHMUZWTlNRNmxWWlNvTGN3QjZpcXNiZ29FbGl2YWw3V2NObjZtOE1NNjRJQUpzTkZJXC94RXQ4dmhSbmxDV0E0ZWNObmtYdno0c3ZCeUlVNUlOdmZKbFwvU3A4eFhhNUpxNEMrd0FHNHVMQXI2emZhYVNrS0V3dEk4aDAwM1Y2XC9RQUxRNG81NDFwTUtDeGZJcDM0blFhNm5pcnMrMytrNkYrODN1eWt2REROdTJzWWhKMjRpeEJwc2J0aUw5U2IzYXZJNllSaVZPYlRkd3pHXC9LbnJVWDduWkVEbnUxcHFWQzB5RXFhZG40MG9rVWl4Q1ZtbjZOMEgwUkw2RWxBNFUzakhQN1dSWHA0anJnQlBwdmptZUY4OHhsRVB6NnZvQVNwTTd4N1kyaDZiU1ZmUnNSZFBIWVo3T2pZTmdVRzlVdDJ6aE96TG9wY21RRFBVTHA3ajlkeUhXRE96SXdZK1lEMlpsT2xVb0hvbzVLRDdhRXRVTmdTamJZUmZBVW8rSjNLaURhdFdFMHpjUE05Rm13cDdnUVBmSGdvQ2ROR0d3TTVGWGNNXC9KNU8yUllVUXlvSEdyQ0NLRHVIU0Q0V0paYXJEdkd2VWlVdzZ0SGRiN3pmZ1NlcUFPS3hCbW9XRjlzUTNsN3hUWUk4UWphOThsZVBoQXpGVFIwYTY0UVhrRXBGQ1wvSW1XamxMZHVMKzZcL3pIZjVQU25HYkg3cnE1ZGJTeDFKN00yZkpCazFGSmEwTmxZS0hvSGd0SUxVKzFQSlwvdlwvdm14c2ExYzhVUmEzTjZHdWpFWGROM1hxR2xVeEx1V3lHZUpGNm9od3drcDFPYWdkeDZTOTlCMzVhSUdKQ2lmM0ppRDJIYW0wdzFaWFBnVGJtYmQ4aEE1K0RrdmhnUE9rR2ZoWm5wcUNSTER5R2R5WUVoaWRqQUVSenFpR0JIa3VNTmNYcFlvUmRzMVRvanFZbHBTaDkwV0NQMHpRV2N2MmhDSEgrU0xJZWdFdnRMeGZRbG5YODJHdUFNZFwvSGltQ0NSOXRidnNZelwvZU91QmdNZHViQU9PNkpYVERtcWRYYlE4S3NGSXNmdFJmYkRaWThRcm1oMlU0Yk5oM2hTdWlzcGFSV1hrYVZPSFpEVmdESDkzbFVuNklPTnB4R0U3aUhMM0IzWFk2RitWM2VRZTBcL1pTNXdWZmZDRkxMMTRXU1k1YVpBY1I4WW5xT2xzVzZ0a05aeFRWa1pDbUp2djQwS1wvZWtQaWRtUElKbGx2b09hSEZPSlFwWTZJWkxUZjVma0lMa2hWXC93eVI4ZTVaY2tZejFmb0JadldiMTF1cHB5MHVOVDhVVEo1eTZvdldsc29acCtBMjFlQnV4eWZYM25JY1liS1YyajZXM28wT3JQYWl1WEoxbUYxTUZDaVZhOWMyREJCcjYyaEsrNWx4SFZlNXlZZk1MVjlkS2xBbXBBSVJXUkJOOWlzWDRleVlhMllybW5UWXY3VnhRKzg4K0ZCbklzQUN1bG1uaThiejViR1JPTEJXNVhyR3Ztamd0bThQandtbDlcL0U4M3FLZVBPZEJCYko1NDZKa29ta3NLdzRRTGtpak1MNnZqK0E5QmJoQ3E4YkM4TkJZUTRXdHlVSEk1MkJRTUZoSGNSMktIeHVXWXp5WjhhUTdENFBiZ0ZXYzFHdGFBTG14RjRNaEpSMm05OU81MjE4cHlvN2ZuRW9LVVMwQU5NK2VRU0dYSFhuY2I3TGpxdWY3OHFCcWRVcVEyV3gxYVFLa2pKK1lONTl0dmttUklSZEFSak41VG1wMVQ0TENtVE1nakoyWEkzWmxiaFwvOVRkSVNTR3JCS1RBVG9mbGVJYlBPTWtJZG9LY2VUa3pzVVJFU0VGbXBLb1hwQjNlWldxYmhETmNIYU1IWVZPVlVwakY3eVQ4RWNKd0kzeHJQU0pcLzFCSDBqUVN1dDNlQjg3ZHh6ZFdmbzl3T0tGTnprSkVsZDR1dVU5eE9MQ0ZSY1BCeXRKcnVcL1lUSkc4VlJMTE9wc2VSQU5obVVQNmdwTHA1Vko4U2IxaFlMRWZKWGdua0RjanRkQzVoVFZlNEk2WHNOSUdqVmM2ditQRzBPcHlQeFcwbEpKRHVEOFBPQUtYOVwvWDJZK0dFWUdteUlqZDUzYlZld1BReTArUlZLbkdqVVpJcDhZcWtXdlwvM092Mm9haVJlVnVxeDFIV0dxQ1BkblIxTGNVUVFyeDZEeU1mSEZSOUhOZnhNbmVna0Q2VnoxbnlZdTJyUEoyT0MwMGp5OW9WUU4za2NRQlBNYWFmZkVnSDlLRFwveDc5UE9RNUVqQ05QbWh4ZTFqWXlpSGdWb25YWnpYUHg0RjlOVk1pRlRNbE40U0xoVnpIMHg4eTkrakpEaTFtTHJzQ1dJU2R5Z3R0dU5YRlF3NFJvajFhNTdRVHY1VWp4TjVFVmZvTEppREw5ZFMyVkZ4QTVJQ1NXMEZnbmZ5d3pYbUNSdUZGYUVUQVc0aEZTSVQzTnUwdkJXdmlcL0FYclMzZk1JVUowckY5Vko2c1IrQzAycDVIc3NsUUp3cjRYaEszQTk1SFwvd3RhVDhDMFRMRTlMaUpQRnE2RnNJNis0bE5IZTdGdkNSWXhBS2lRSUpLMTdwdW9KRnZVZ1dpYUQ5RkpcL3RHZ3BcL3RIYWZxdjRlY2VMVkg5VHBIMkd4WFVMcHNXM3Zpc3VJdnRjYWdFQUtJQ1wvanVVUjA4czAwV1RtVkJLMW15c1ZhSVNZNWJLUjJVK1RhZjJCYjRsTjFqU0ZDc2FxVlNwNjJ1V0FleVRiWVpMbUtXRnhSQTRIN1czVU1rTCtleUQyY3FQREF4RmRqN004ZUdLeVRPU2s5SWkrcTJWWnhqVHBnNmhYTVpab3ExSUtZZ1k3VTFTZ1dnSVhOSldWVm1sbXFDY3VnWEZjTndtbEpWSkhOeHMwbkdYNVpMSWxPWnhmVjE4d0lvOXV6bFk2Z1VZVEdKZ2lia1R3S3BodXZIMFZjcHJwRTFReGNscXROZzZHQk9JMDVyb09QUmp2SlA5XC9hWVJrU1ZCMmd6Q2dJUVwvNkhUZHpoYXBkeWh1UlFvNzVpaE1lNytBM1wvcjRnWDAxOW52MlwvT0hpMU85Zm5rc1U5Qk9XM093a3FnRjhBakRReXd1eDRGbEp4Vlwvc0J3VWxnV3pubnY3UjlaN0dyVmlXcnRmSlpcLzNnNUdmaHduN2J3Zk16anRUR3R4WllPbWttTmoxZU5BOUlsRmJQRUFkRWoyQXFIWThpd2dnR3RxZ05waElhWjNQbjQ5bHVlVGJqSTJLTTFXVWZEUVlPVmZ6UkZmSkRxUTJzekJ2R0JLUmlmcEhlSGl6alFBWndxOXI5S3d4NDRqQWZBOURuT0RxT1FWOXRvMEpWS1lJODM0RVwvMWQyTHlIRnZmajBRaHczVytUYUducjF2XC9NSXZLVEs2UzlHZUpEWGNkT2k1VGVMamxIRG9hWHg0c2RtdTZXeVljb3dlSEk3T0ZGbUFHM1RQT1g0Ris0VmtOXC9tdlpJODN5Z0YzRmxJb1wvOFlHYkxMTlVGZExieWlRbDNzRjFEcEhKYlpJZXhpemdyVDVSWTdqSHZXSFhhaWttbGE1Um04ZmdWK29SRDJOODJJbWZXU2ZnMGZTYkZkeFZmNWp4ZFExNzlyeGtIYk93MU9wQjlMUnhjaW04UDl1eFV4OVlOSXVZZlFLSHlFTW15SDM2Q0JrQkJPaGUwUTBmZ25LVEM2V2FRS1dSbzUzOXJPVzVCakNRaG5rZzlaYXEyM04yNFdIRnY1XC9hU04yQ2xPQTA5VW1PRHRESzhmTzJ3QTR1bHduV3kyOHFpeEFpWHVRZ0tReXFMUStXZ0VXaDFJNzF2eFZ6N2ZlY0lnTCtHTkhWQmlvQXdCNXdZRGtUeG1Ndld0dTNHbXVTektLenJNM3ZBS1wvMVhxak53MWhyZGdSWXpPdlA4VDNpSmFLdzlXV0F5cHFXOE9UMDJ5S2dJZ2VQMXFaeG0xNjdKc3E1MTJOcG5WMGpBa3hcL2ZEbHgrWkFWNCszR3JyS0tNQlJVT2N3Y1BHY0tEKzRLR3hLY3l3cnV1dTVvNFdmVFhTZ3BwQUNSQXVBV1F0ZjVDK3VxM216YmFyZFgyNlh3cDYxNWdxeldOV0RhNjFRbDZuQ3RnK1E0eWhCRUsyc0MzY2JFR1BiN0IrMjMzV2VjN3BaMVl6SW5RVmVCa2VKYXNycElFckt4clJOd2IxTG5QVGhRM3ZaNHlXXC81dWFON2NRZkNkNnU0UmJyMlpuRmFrcVgyalQwZUpsQTc5NjZIaEhTVVB3dW5ER0lOWkgzUzNGK0hna1wvXC9NMDhWVU1WekJ5Y3hSSHVSQThtMklROHd0cG1Ec1BIeWNwN1B3cm90OUJQZ2Z5cWVzbGFST0xLd2VFVDl2c3UxZlJrTEJJRVwvdnk5K1FWY2x4bHV6dWplVWNMWHBDY2RJdjZlaDYxTXFKQmUyRkMxaFc3UUJjdmVYaFJmQTdSd2NvYm81cFJpc05nUjZ3TDRiMWxBcnMzT3BJblhaMHFjU0RcL0pMNjRtaUlEWVBuWUZsa1ZMZTdRRzJhTW5BRHJNNkU2djc1bGdyTUM3cFN5V2VVT1pWbFBQa1NTd095dXdkYXJjazlLMHc2Mnl0dDBvbDl0SUVURmVMQThabjMyXC9qWnhDc1RyenZwbTVoekRLTDUzVG0rTE5nanZWY2hGd2xHZlUyZVMyRVFjZjFXWklYMXpROWtVV3ZWS3VtXC9ueXI1SEVvNnJ1QTJtb2RvTHFUazlTNTh5bmVMZ2cxTVFUdlpYZWFBdjVBYUhuVVwvaFU4akVHN3RydlNGXC9CbEpRUXRpR0tSZUlGeE5IRWJOdmIwTXdPWjV4cE1mVmg1WFB1d3doODFkUmZtckd2Y2NNYXRmZzdtU0dZSTl4REFLZWtnZERsNlB5clRVcXUyYnpFb003ZmJUOU5OcXZDQUpvNm85bFwvMVpcL0J0anNnSEJUOFk3eXJKYTdscTVXWlU9IiwidG4iOiJSeTQ4ZTJsWUVKa3djSnZjTEsyQ2ZaQWpcLzNWR0tiN1dXUk56d2sxdUxOaUNTSUsxSVg3bThPWUpOVlZzMmZ6WDhveUZYU04xTDhISUJOeEFtUU5ZQnpkUko2MnJPdGJoK3RuMkYzM0VzYktlWTR4Y1pcL0FCSnJGUjlBMWRWN0xLRU1lR2dSZDhWaXM1REUrZzB6Y3lwRVwvRVRrRnVaNU83WHhcL2J6NTJ1UEg4PSIsImVwIjoiUm95RVJLWW1vbHh2TEtXS1NHa1QrT1RWcFFmMHAwWXphTTJ0MEhNRG5tMk15XC8xZURoWWZhZkZ1VHZjaDNLTysrZTNTblF6M2Vsd1wvaklqdDRaaEEyaTFiQkFFOHNaS0FHdEhZeVVxZkFERmR6NER0d0xVeU9abnpvbVFuZ1NRT2JYaHZWZDFidE9LY3NMVWxwR1VzdVlKQU5cLzlZbUpMR012QTB2VG5UQmxNPSIsImFwcElkIjoiZGVmYXVsdCJ9&os=ios&tc=fyrEegQJ_ucKhlDJg2uKpQ1WbWzmM5gRg&ut=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDY1NzU3MjIxMTgzODgxMjE2Iiwic3ViIjoiM2ZWOW5KVG1RNklwV2h1QlJTZVVSQTFXYld6bU01Z1JnIiwiaWF0IjoxNjE3MjM2NTg5LCJleHAiOjE2MjUwMTI1ODl9.mlbEfbtjpxQdIOcHzrGFHIIqw4CNdrE3OJaCgYj4xBA')
    hlyyhdArr.push('{"Accept":"*/*","Accept-Encoding":"br;q=1.0, gzip;q=0.9, deflate;q=0.8","Connection":"keep-alive","Host":"play.gxhuancai.com","User-Agent":"hulumusic/1.1.3 (com.xiaoniu.hulumusic; build:22; iOS 14.4.0) Alamofire/5.4.1","app_info":"1.1.3,ios,14.4,appstore,com.xiaoniu.hulumusic","Accept-Language":"zh-Hans-CN;q=1.0","Content-Length":"0"}')
   


    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
    console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
  }
!(async () => {
  if (typeof $request !== "undefined") {
    await hlyyck()
   
  } else {hlyyurlArr.push($.getdata('hlyyurl'))
    hlyyhdArr.push($.getdata('hlyyhd'))
    hlyybodyArr.push($.getdata('hlyybody'))
    let hlyycount = ($.getval('hlyycount') || '1');
  for (let i = 2; i <= hlyycount; i++) {
    hlyyurlArr.push($.getdata(`hlyyurl${i}`))
    hlyyhdArr.push($.getdata(`hlyyhd${i}`))
    hlyybodyArr.push($.getdata(`hlyybody${i}`))
  }
    console.log(`------------- 共${hlyyhdArr.length}个账号-------------\n`)
      for (let i = 0; i < hlyyhdArr.length; i++) {
        if (hlyyhdArr[i]) {
          hlyybody = hlyybodyArr[i];
          hlyyurl = hlyyurlArr[i];
          hlyyhd = hlyyhdArr[i];
          $.index = i + 1;
          console.log(`\n 开始【葫芦音乐${$.index}】`)
          await hlyylb();
          await $.wait(1000);
          await hlyyqd()
          await $.wait(3000);
          await hlyyqdfb()
          await $.wait(3000);
          await hlyygg()
          await $.wait(3000);
          await hlyysp()
          await $.wait(3000);
          await hlyyfx()
          await $.wait(3000);
          await hlyyfxpj()
          await $.wait(3000);
          await hlyytg()
          await $.wait(3000);
          await hlyyzslb()
          await $.wait(3000);
          await hlyyzs()
          await $.wait(3000);
          await hlyyxx()
          await hlyyme()
          await hlyytx()
  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//葫芦音乐数据获取


function hlyyck() {
   if ($request.url.indexOf("task/doTasks") > -1) {
 const hlyyurl = $request.url
  if(hlyyurl)     $.setdata(hlyyurl,`hlyyurl${status}`)
    $.log(hlyyurl)
  const hlyyhd = JSON.stringify($request.headers)
        if(hlyyhd)    $.setdata(hlyyhd,`hlyyhd${status}`)
$.log(hlyyhd)
    const hlyybody = $request.body
        if(hlyybody)    $.setdata(hlyybody,`hlyybody${status}`)
$.log(hlyybody)
   $.msg($.name,"",'葫芦音乐'+`${status}` +'数据获取成功！')
  }
}



//葫芦音乐列表
function hlyylb(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('hlyyhd') === "undefined") {
        $.msg($.name,"",'请先获取葫芦音乐数据!😓',)
        $.done()
      }

ut = hlyyurl.match(/ut=(.*)/)[1]
id = hlyyurl.match(/deviceId=(.+?)&/)[1]
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/getTaskList?av=1.1.3&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.get(url, async (err, resp, data) => {
        try {
       
    const result = JSON.parse(data)
        if(result.errCode == 00){
        console.log(`\n〔葫芦音乐〕获取任务列表成功🚬`)    
qd = result.data.pagelist[0].taskCode 
qdfb = result.data.pagelist[0].secTaskVoList[0].taskCode
gg = result.data.pagelist[2].taskCode
sp = result.data.pagelist[3].taskCode
fx = result.data.pagelist[4].taskCode
zs = result.data.pagelist[1].taskCode
tg = result.data.pagelist[5].taskCode      
                  
} else {
$.log(data)
console.log('葫芦音乐获取用户信息失败 已停止当前账号运行!')

}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}


//葫芦音乐签到
function hlyyqd(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${qd}&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)
        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐签到翻倍
function hlyyqdfb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${qdfb}&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐创意视频
function hlyygg(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${gg}&tl=10000&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)
if (result.data.pagelist[0].taskGoldCoin == 0){
$.log('\n〔葫芦音乐〕检测到创意视频任务已完成,尝试破解收益上限')
await $.wait(3000);
await hlyyggpj()
}        
        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐创意视频破解
function hlyyggpj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${gg}&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//葫芦音乐短视频
function hlyysp(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${sp}&tl=10000&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//葫芦音乐分享
function hlyyfx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${fx}&tl=10000&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐分享破解
function hlyyfxpj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${fx}&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐破解〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//葫芦音乐听歌
function hlyytg(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&deviceId=${id}&os=ios&tc=${tg}&tl=10000&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐学知识列表
function hlyyzslb(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/rumor/getRumorList?page=1&size=10&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐学知识〕获取列表成功🚬\n 文章code:${result.data.pagelist[0].code}\n 文章标题:${result.data.pagelist[0].rumorTitle}`)
wz = result.data.pagelist[0].code
        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//葫芦音乐学知识列表破解
function hlyyzslbpj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/rumor/getRumorList?page=1&size=10&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐学知识〕获取列表成功🚬\n 文章code:${result.data.pagelist[0].code}\n 文章标题:${result.data.pagelist[0].rumorTitle}`)
wz = result.data.pagelist[0].code
        await $.wait(3000);
        await hlyyzspj()
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐知识
function hlyyzs(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&bc=${wz}&deviceId=${id}&os=ios&tc=${zs}&tl=10000&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){
        console.log(`\n〔葫芦音乐〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)
   if (result.data.pagelist[0].taskGoldCoin == 0){
$.log('\n〔葫芦音乐〕检测到学知识任务已完成,尝试破解收益上限')
await $.wait(3000);
await hlyyzslbpj()
}        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//葫芦音乐知识破解
function hlyyzspj(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/doTasks?appVersion=1.1.3&bc=${wz}&deviceId=${id}&os=ios&tc=${zs}&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐破解〕${result.data.pagelist[0].taskTitle}获得${result.data.pagelist[0].taskGoldCoin}💰`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐信息
function hlyyxx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/task/getUserCoins?av=1.1.3&ut=${ut}`,
        headers : JSON.parse(hlyyhd),
}
      $.get(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音用户信息〕\n当前金币余额:${result.data.pagelist[0]} 约等于:${result.data.pagelist[2]}元`)

        
} else {
       console.log('\n葫芦音乐错误'+data)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}
//葫芦音乐tx名额
function hlyyme(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/withdrawal/checkWithDrawal?av=1.1.3&ut=${ut}&wdiCode=BsjB-5WE54sKKCP0kIMORs1WbWzmM5gRg`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.data == false){

        console.log(`\n〔葫芦音乐提现名额领取成功〕`)

        
} else {
       console.log('\n葫芦音乐提现名额领取失败')

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}

//葫芦音乐tx
function hlyytx(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : `https://play.gxhuancai.com/hlplay/withdrawal/confirmWithDrawalWithWX?av=1.1.3&ut=${ut}&wdiCode=BsjB-5WE54sKKCP0kIMORs1WbWzmM5gRg`,
        headers : JSON.parse(hlyyhd),
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.errCode == 00){

        console.log(`\n〔葫芦音乐提现成功〕`)

        
} else {
       console.log('\n葫芦音乐提现失败'+result.errMsg)

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
