const jsname = '腾讯自选股'
const $ = Env(jsname)
const logs = 0; //0为关闭日志，1为开启,默认为0
const notifyInterval = 1; //0为关闭通知，1为所有通知,默认为0
const notify = $.isNode() ? require('./sendNotify') : '';
let rndtime = Math.round(new Date().getTime()) //毫秒
let signday = formatDateTime(new Date());
let tz = '';
let cash = $.getval('cash') || 5; //0为不自动提现,1为自动提现1元,5为自动提现5元,

const userheaderArr = [];
let userheaderVal = "";
//let userheader = $.getdata('userheader')
let USERHEADER = [];

const userkeyArr = [];
let userkeyVal = "";
//let userkey = $.getdata('userkey')
let USERKEY = [];

const signheaderArr = [];
let signheaderVal = "";
//let signheader = $.getdata('signheader')
let SINGHEADER = [];

const signkeyArr = [];
let signkeyVal = "";
//let signkey = $.getdata('signkey')
let SINGKEY = [];

const taskheaderArr = [];
let taskheaderVal = "";
//let taskheader = $.getdata('taskheader')
let TASKHEADER = [];

const taskkeyArr = [];
let taskkeyVal = "";
//let taskkey = $.getdata('taskkey')
let TASKKEY = [];

const wxtaskkeyArr = [];
let wxtaskkeyVal = "";
//let wxtaskkey = $.getdata('wxtaskkey')
let WXTASKKEY = [];
////////////////////////////////////////////////////////////////////


if ($.isNode()) {
      userheaderArr.push('oA0GbjiKR455nYgNc6xo_Z2Qs0UQ&_appName=ios&_dev=iPhone12,1&_devId=53597e56884443fe0d0b383b463447bdb79d35b2&_appver=8.8.5&_ifChId=&_isChId=1&_osVer=14.4&openid=oA0GbjiKR455nYgNc6xo_Z2Qs0UQ&fskey=v0aaf63c22060540310fc8e1c4b3ed23&appid=wxcbc3ab3807acb685&access_token=43_Ren3aYG-yx2mEYVKcLcyAV2BxmD3SaI9lKFNUk1Vqb2xoPttFbXBGQ29xe8SbGKL6IlhNPC_2BSb68zG3v58skDzjlIH6Rf7jEeVUcCz0ts&buildType=store&check=11&_idfa=6D904FEA-DCAE-494D-9CE0-B157E5B760E5&lang=zh_CN')
    //  userkeyArr.push('pgv_pvid=219589345; ts_last=/activity/page/welwareCenter/; ts_sid=7518948295; ts_uid=3425668675; ts_refer=zqact.tenpay.com/activity/page/activityForward/')
      signheaderArr.push('_request_from=web&version_code=13.2.0&js_sdk_version=1.77.0.2&tma_jssdk_version=1.77.0.2&app_name=douyin_lite&app_version=13.2.0&vid=08454242-1565-42FF-839E-2349815547D7&device_id=3306984110565176&channel=App%20Store&mcc_mnc=46000&aid=2329&screen_width=828&openudid=76d0b7492653a8ec3188d6ccef0eccc79978d7f9&cdid=E50EC771-42EE-4868-A9CD-366F294A3CED&os_api=18&ac=WIFI&os_version=13.4.1&client_niu_ready=0&device_platform=iphone&build_number=132004&iid=4485660576590487&device_type=iPhone12,1&idfa=00000000-0000-0000-0000-000000000000&in_sp_time=0')
      signkeyArr.push('{"X-SS-DP":"35","Connection":"keep-alive","x-tt-trace-id":"00-9f663ef40db2fa06fb0621d834c40023-9f663ef40db2fa06-01","X-SS-Cookie":"sessionid=94231204898ce5224036f451ca3ca1d7; sessionid_ss=94231204898ce5224036f451ca3ca1d7; sid_guard=94231204898ce5224036f451ca3ca1d7%7C1612565925%7C5182534%7CTue%2C+06-Apr-2021+22%3A34%3A19+GMT; sid_tt=94231204898ce5224036f451ca3ca1d7; uid_tt=16f328e73f2c5ec1270e1ed78f90d696; uid_tt_ss=16f328e73f2c5ec1270e1ed78f90d696; install_id=1969962044368280; ttreq=1$3ca6dc686a0e307d2908a5d224e05c5eb5bbf420; ssr_fs=m; ssr_sbh__=44; ssr_tz=Asia/Shanghai; MONITOR_WEB_ID=3148590858920477; FRM=new; PIXIEL_RATIO=2; WIN_WH=414_795; d_ticket=4830e43b757fc8b698e5df1f2c1689fd0e766; n_mh=sS1gaGw52xzBsOqocJ0fQhcneconSWFAPOiQrwVi4Hk; odin_tt=b8a5937604630b4a42d25a904813050dea8b8ad11febd349c81980e97098f5d2e08a3de4c65ba6cfc5c00e0377049384","sdk-version":"2","Accept-Encoding":"gzip, deflate","Content-Type":"application/json; encoding=utf-8","x-Tt-Token":"0094231204898ce5224036f451ca3ca1d701d70cd848d5f2db23a8e77513c7c8440200eb98aaf8d81f2adcd8a155ecd8a04e8e7b48686759f269c09bd90cff12101c997ee642671f96f0ec3ab5da8aa52b3bc16bd96aa4507b0b9331645711f02cb6f-1.0.1","X-SS-STUB":"D41D8CD98F00B204E9800998ECF8427E","X-Khronos":"1613287013","User-Agent":"NewsLite 7.6.6 rv:7.6.6.07 (iPhone; iOS 13.4.1; zh_CN) Cronet","tt-request-time":"1613287013756","Cookie":"d_ticket=4830e43b757fc8b698e5df1f2c1689fd0e766; n_mh=sS1gaGw52xzBsOqocJ0fQhcneconSWFAPOiQrwVi4Hk; odin_tt=b8a5937604630b4a42d25a904813050dea8b8ad11febd349c81980e97098f5d2e08a3de4c65ba6cfc5c00e0377049384; FRM=new; PIXIEL_RATIO=2; WIN_WH=414_795; ssr_fs=m; ssr_sbh__=44; ssr_tz=Asia/Shanghai; install_id=1969962044368280; ttreq=1$3ca6dc686a0e307d2908a5d224e05c5eb5bbf420; MONITOR_WEB_ID=15dfb3ed-cfea-43d0-b538-2c24a5754e74; sessionid=94231204898ce5224036f451ca3ca1d7; sessionid_ss=94231204898ce5224036f451ca3ca1d7; sid_guard=94231204898ce5224036f451ca3ca1d7%7C1612565925%7C5182534%7CTue%2C+06-Apr-2021+22%3A34%3A19+GMT; sid_tt=94231204898ce5224036f451ca3ca1d7; uid_tt=16f328e73f2c5ec1270e1ed78f90d696; uid_tt_ss=16f328e73f2c5ec1270e1ed78f90d696","Host":"api3-normal-c-lq.snssdk.com","passport-sdk-version":"5.12.1","X-Gorgon":"8402c0d2200017535b0e237e2eafc0e17e23bf26a71c781af42f","Accept":"application/json","Content-Length":"0"}')
      taskheaderArr.push('&_dev=iPhone12,1&_devId=53597e56884443fe0d0b383b463447bdb79d35b2&_appver=8.7.1&_ifChId=&_isChId=1&_osVer=13.4.1&openid=oA0GbjiKR455nYgNc6xo_Z2Qs0UQ&fskey=v0aaf63c2215ffe6224e7798cf6879c8&appid=wxcbc3ab3807acb685&access_token=41_4EJg7ET5rMLJLP0an9ggkg7XhKXiRG6Ky9f-imKykFeWy2hlsD18dQA8G1nLZt8OlSVWmVJjuHrahB3Xc39CQrEI8lwNSoK10IcKT6FIcwY&buildType=store&check=11&_idfa=00000000-0000-0000-0000-000000000000&lang=zh_CN')
   //   taskkeyArr.push('pgv_pvid=219589345; ts_last=/activity/page/welwareCenter/; ts_sid=7518948295; ts_uid=3425668675; ts_refer=zqact.tenpay.com/activity/page/activityForward/')
  //    wxtaskkeyArr.push('wzq_channel=fm_wzq_wx_v1_unknow_01..; qlappid=wx9cf8c670ebd68ce4; qlskey=v09582974106005ce142308db47e2863; qluin=085e9858e3837b54abc0f3ff0@wx.tenpay.com; qq_logtype=16; wx_session_time=1610993172000; wzq_qlappid=wx9cf8c670ebd68ce4; wzq_qlskey=v09582974106005ce142308db47e2863; wzq_qluin=os-ppuFO70xst-ZRh6q_bVqu-Zvg')

 console.log(`============ 共${taskheaderArr.length}个账号  =============\n`)
 console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
 console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)

} else {
  userheaderArr.push($.getdata('userheader'));
  userkeyArr.push($.getdata('userkey'));
  signheaderArr.push($.getdata('signheader'));
  signkeyArr.push($.getdata('signkey'));
  taskheaderArr.push($.getdata('taskheader'));
  taskkeyArr.push($.getdata('taskkey'));
  wxtaskkeyArr.push($.getdata('wxtaskkey'));
}


///////////////////////////////////////////////////////////////////

!(async () => {
  if (!taskheaderArr[0]) {
    console.log($.name, '【提示】请把CK填入Github 的 Secrets 中，请以回车隔开')
    return;
  }
  for (let i = 0; i < taskheaderArr.length; i++) {
  if (taskheaderArr[i]) {
  await Jsname()
  O = (`🥦${jsname}任务执行通知🔔`);
  userheaderVal = userheaderArr[i];
  userkeyVal = userkeyArr[i];
  signheaderVal = signheaderArr[i];
  signkeyVal = signkeyArr[i];
  taskheaderVal = taskheaderArr[i];
  taskkeyVal = taskkeyArr[i];
  wxtaskkeyVal = wxtaskkeyArr[i];
  console.log(`\n✅ 查询目前账户金币\n`)
  await userhome(); //金币查询
  console.log(`\n✅ 执行【签到】任务\n`)
  await signtask(); 
  console.log(`\n✅ 执行【App】日常任务\n`)
  await task1();
  await task2();
  await task3();
  await task4();
  await task5();
  await task6();
  await task7();
  await task8();
  await task9();
  console.log(`\n✅ 执行【微信小程序】日常任务\n`)
  await wxtask1();
  await wxtask2();
  await wxtask3();
  await wxtask4();
  await wxtask5();
  await wxtask6();
  await wxtask7();
  await wxtask8();
  await wxtask9();
  await wxtask10();
  await wxtask11();
  await cashorder(cash, money);
  await showmsg();
    }  
    }  
  console.log(`🏃‍♂️🏃‍♂️🏃‍♂️所有任务已完成🏃‍♂️🏃‍♂️🏃‍♂️`)    
})()
.catch((e) => $.logErr(e))
  .finally(() => $.done())

//通知
function showmsg() {
  if (notifyInterval != 1) {
    console.log(O + '\n' + tz);
  }

  if (notifyInterval == 1) {
    if ($.isNode()){
       notify.sendNotify($.name,tz)
   }else{
    $.msg(O, '\n', tz);
      }
  }
}
///////////////////////////////////////////////////////////////////
//猜涨跌时间
function guesstime() {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact.tenpay.com/cgi-bin/guess_home.fcgi?channel=1&source=2&new_version=2&_=${rndtime}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://zqact.tenpay.com/activity/page/guessRiseFall/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            guessnum = (data.T_info[0].T_endts)*1000
            nextguessnum = (data.T_info[0].next_T)*1000
            $.log(`本次猜涨跌日期：`+ formatDateTime(guessnum));
            $.log(`下次猜涨跌日期：`+ formatDateTime(nextguessnum));
            guessdate = formatDateTime(guessnum);

          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//提现票据
function cashticket() {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact.tenpay.com/cgi-bin/shop.fcgi?action=order_ticket&channel=1&type=2&_=${rndtime}&openid=${signheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://zqact.tenpay.com/activity/page/guessRiseFall/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`本次验证时间🕐：` + time(rndtime));
            $.log(`本次验证票据🎫：${data.ticket}\n`);
            cashticket = data.ticket
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//提现请求
function getcash1(cashticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact.tenpay.com/cgi-bin/shop.fcgi?action=order&type=2&channel=1&ticket=${cashticket}&item_id=202003102146152a9e8885&_=${rndtime}&openid=${signheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://zqact.tenpay.com/activity/page/guessRiseFall/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【提现1元结果】:${data.retmsg}🎉`);
            tz += `【提现1元结果】:${data.retmsg}🎉\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function getcash5(cashticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact.tenpay.com/cgi-bin/shop.fcgi?action=order&type=2&channel=1&ticket=${cashticket}&item_id=202003102147152ecaa605&_=${rndtime}&openid=${signheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://zqact.tenpay.com/activity/page/guessRiseFall/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【提现5元结果】:${data.retmsg}🎉`);
            tz += `【提现5元结果】:${data.retmsg}🎉\n`
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//猜涨跌
function guessop(guessdate) {
  return new Promise((resolve) => {
    let url = {
      url: `https://zqact.tenpay.com/cgi-bin/guess_op.fcgi?action=2&act_id=3&user_answer=1&date=${guessdate}&channel=1&_=${rndtime}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://zqact.tenpay.com/activity/page/guessRiseFall/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if (data.retcode == 0) {
              $.log(`【自动猜涨跌】:成功🎉\n`);
              tz += `【自动猜涨跌】:成功🎉\n`
            } else {
              console.log(`任务完成失败，错误信息：${JSON.stringify(data)}\n`)
              tz += `【自动猜涨跌】:${data.retmsg}\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//猜涨跌每日礼包
function guessred() {
  return new Promise((resolve) => {
    let guessredurl = {
      url: `https://zqact.tenpay.com/cgi-bin/activity.fcgi?channel=1&activity=guess_new&guess_act_id=3&guess_date=${signday}&guess_reward_type=1&_=${rndtime}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://wzq.tenpay.com/activity/page/welwareCenter/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(guessredurl, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if (data.retcode == 0) {
              $.log(`【猜涨跌每日礼包】:获得 ${data.reward_desc}`);
              tz += `【猜涨跌每日礼包】:获得 ${data.reward_desc}\n`
            } else {
              console.log(`任务完成失败，错误信息：${JSON.stringify(data)}`)
              tz += `【猜涨跌每日礼包】:${data.retmsg}\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

//////////////////////////////////////////////////////////////////

async function cashorder(cash, money) {
  console.log(`开始【自动提现】任务`)
  if (cash == 1 && money.icon_amount > 10000) {
    console.log(`开始申请票据...`)
    await cashticket(); //申请票据
    console.log(`开始申请提现1元...`)
    await getcash1(cashticket);
  } else if (cash == 5 && money.icon_amount > 48000){
    console.log(`开始申请票据...`)
    await cashticket(); //申请票据
    console.log(`开始申请提现5元...`)
    await getcash5(cashticket);
  } else if (cash == 0 ){
    console.log(`请到BOXJS设置,目前设置为0,不自动提现...`)
    tz += `请到BOXJS设置,目前设置为0,不自动提现...\n`
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【自动提现】:已执行or账户提现余额不足\n`
  }
}

async function task1() {
  console.log(`开始验证【股票添加到自选】任务状态`)
  await statuid2()
  if (statuid2.done == 0) {
    console.log(`开始申请票据...`)
    await taskticket(); //申请票据
    console.log(`执行【股票添加到自选】任务`)
    await taskid2(ticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【添加自选】:已执行\n`
  }
}
async function wxtask1() {
  console.log(`开始验证【WX股票添加到自选】任务状态`)
  await wxstatuid2()
  if (wxstatuid2.done == 0) {
    console.log(`开始申请票据...`)
    await wxtaskticket(); //申请票据
    console.log(`执行【WX股票添加到自选】任务`)
    await wxtaskid2(wxticket);
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【WX股票添加到自选】:已执行\n`
  }

}
async function task2() {
  console.log(`开始验证【阅读资讯】任务状态`)
  await statuid1()
  if (statuid1.done == 0) {
    console.log(`开始申请票据...`)
    await taskticket(); //申请票据
    console.log(`执行【阅读资讯】任务`)
    await taskid1(ticket);
  } else {
    console.log(`准备执行下一个任务\n`)
    tz += `【阅读资讯】:已执行\n`
  }
}
async function wxtask2() {
  console.log(`开始验证【WX阅读资讯】任务状态`)
  await wxstatuid1()
  if (wxstatuid1.done == 0) {
    console.log(`开始申请票据...`)
    await wxtaskticket(); //申请票据
    console.log(`执行【WX阅读资讯】任务`)
    await wxtaskid1(wxticket);
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【WX阅读资讯】:已执行\n`
  }

}
async function task3() {
  console.log(`开始验证【分享股票行情】任务状态`)
  await statuid12()
  if (statuid12.done == 0) {
    console.log(`开始申请票据...`)
    await taskticket(); //申请票据
    console.log(`执行【分享股票行情】任务`)
    await taskid12(ticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【分享行情】:已执行\n`
  }
}
async function wxtask3() {
  console.log(`开始验证【WX分享股票行情】任务状态`)
  await wxstatuid12()
  if (wxstatuid12.done == 0) {
    console.log(`开始申请票据...`)
    await wxtaskticket(); //申请票据
    console.log(`执行【WX分享股票行情】任务`)
    await wxtaskid12(wxticket);
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【WX分享股票行情】:已执行\n`
  }

}
async function task4() {
  console.log(`开始验证【分享福利中心】任务状态`)
  await statuid11()
  if (statuid11.done == 0) {
    console.log(`开始申请票据...`)
    await taskticket(); //申请票据
    console.log(`执行【分享福利中心】任务`)
    await taskid11(ticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【分享福利中心】:已执行\n`
  }
}
async function wxtask4() {
  console.log(`开始验证【WX分享福利中心】任务状态`)
  await wxstatuid11()
  if (wxstatuid11.done == 0) {
    console.log(`开始申请票据...`)
    await wxtaskticket(); //申请票据
    console.log(`执行【WX分享福利中心】任务`)
    await wxtaskid11(wxticket);
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【WX分享福利中心】:已执行\n`
  }

}
async function task5() {
  console.log(`开始验证【分享一篇资讯】任务状态`)
  await statuid14()
  if (statuid14.done == 0) {
    console.log(`开始申请票据...`)
    await taskticket(); //申请票据
    console.log(`执行【分享一篇资讯】任务`)
    await taskid14(ticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【分享资讯】:已执行\n`
  }
}
async function wxtask5() {
  console.log(`开始验证【WX分享一篇资讯】任务状态`)
  await wxstatuid14()
  if (wxstatuid14.done == 0) {
    console.log(`开始申请票据...`)
    await wxtaskticket(); //申请票据
    console.log(`执行【WX分享一篇资讯】任务`)
    await wxtaskid14(wxticket);
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【WX分享一篇资讯】:已执行\n`
  }

}
async function task6() {
  console.log(`开始验证【分享一篇社区帖子】任务状态`)
  await statuid15()
  if (statuid15.done == 0) {
    console.log(`开始申请票据...`)
    await taskticket(); //申请票据
    console.log(`执行【分享一篇社区帖子】任务`)
    await taskid15(ticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【分享帖子】:已执行\n`
  }
}
async function wxtask6() {
  console.log(`开始验证【WX分享一篇社区帖子】任务状态`)
  await wxstatuid15()
  if (wxstatuid15.done == 0) {
    console.log(`开始申请票据...`)
    await wxtaskticket(); //申请票据
    console.log(`执行【WX分享一篇社区帖子】任务`)
    await wxtaskid15(wxticket);
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【WX分享一篇社区帖子】:已执行\n`
  }

}
async function task7() {
  console.log(`开始验证【猜涨跌活动】任务状态`)
  await statuid3()
  if (statuid3.done == 0) {
    console.log(`查询猜涨跌活动时间...`)
    await guesstime()
    console.log(`开始自动猜涨跌...`)
    await guessop(guessdate)
    console.log(`开始申请票据...`)
    await taskticket(); //申请票据
    console.log(`执行【猜涨跌分享】任务`)
    await taskshare(ticket)
    console.log(`执行【猜涨跌每日礼包】任务`)
    await guessred()
    console.log(`开始申请票据...`)
    await taskticket(); //申请票据
    console.log(`执行【完成猜涨跌】任务`)
    await taskid3(ticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【猜涨跌活动】:已执行\n`
  }
}
async function wxtask7() {
  console.log(`开始验证【WX猜涨跌】任务状态`)
  await wxstatuid3()
  if (wxstatuid3.done == 0) {
    console.log(`开始申请票据...`)
    await wxtaskticket(); //申请票据
    console.log(`执行【WX猜涨跌】任务`)
    await wxtaskid3(wxticket);
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【WX猜涨跌】:已执行\n`
  }

}
async function task8() {
  console.log(`开始验证【点赞一条社区评论】任务状态`)
  await statuid4()
  if (statuid4.done == 0) {
    console.log(`开始申请票据...`)
    await taskticket(); //申请票据
    console.log(`执行【点赞一条社区评论】任务`)
    await taskid4(ticket);
  } else {
    console.log(`准备执行下一个任务...\n`)
    tz += `【点赞评论】:已执行\n`
  }

}
async function wxtask8() {
  console.log(`开始验证【WX点赞一条社区评论】任务状态`)
  await wxstatuid4()
  if (wxstatuid4.done == 0) {
    console.log(`开始申请票据...`)
    await wxtaskticket(); //申请票据
    console.log(`执行【WX点赞一条社区评论】任务`)
    await wxtaskid4(wxticket);
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【WX点赞一条社区评论】:已执行\n`
  }

}
async function task9() {
  console.log(`开始验证【模拟炒股交易一笔】任务状态`)
  await statuid6()
  if (statuid6.done == 0) {
    console.log(`开始申请票据...`)
    await taskticket(); //申请票据
    console.log(`执行【模拟炒股交易一笔】任务`)
    await taskid6(ticket);
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【模拟炒股】:已执行\n`
  }

}
async function wxtask9() {
  console.log(`开始验证【WX模拟炒股交易一笔】任务状态`)
  await wxstatuid6()
  if (wxstatuid6.done == 0) {
    console.log(`开始申请票据...`)
    await wxtaskticket(); //申请票据
    console.log(`执行【WX模拟炒股交易一笔】任务`)
    await wxtaskid6(wxticket);
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【WX模拟炒股】:已执行\n`
  }

}
async function wxtask10() {
  console.log(`开始验证【WX浏览社区帖子】任务状态`)
  await wxstatuid16()
  if (wxstatuid16.done == 0) {
    console.log(`开始申请票据...`)
    await wxtaskticket(); //申请票据
    console.log(`执行【WX浏览社区帖子】任务`)
    await wxtaskid16(wxticket);
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【WX浏览社区帖子】:已执行\n`
  }
}

async function wxtask11() {
  console.log(`开始验证【WX专属红包🧧】任务状态`)
  await wxstatuid10()
  if (wxstatuid10.done == 0) {
    console.log(`开始申请票据...`)
    await wxtaskticket(); //申请票据
    console.log(`执行【WX专属红包🧧】任务`)
    await wxtaskid10(wxticket);
  } else {
    console.log(`准备执行下一个任务...`)
    tz += `【WX专属红包🧧】:已执行\n`
  }
}


//////////////////////////////////////////////////////////////////

//签到
async function signtask() {
  return new Promise((resolve) => {
    let signurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_sign_task.fcgi?actid=2002&action=signdone&channel=1&date=${signday}&_=${rndtime}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://wzq.tenpay.com/activity/page/welwareCenter/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    };
    $.get(signurl, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if (data.retcode == 51091020) {
              $.log(`【签到】:${data.retmsg}\n`);
              tz += `【签到】:${data.retmsg}\n`
            } else {
              $.log(`【签到】:获得${data.amount}金币`);
              $.log(`【签到时间】:` + time(rndtime));
              tz += `【签到】:获得${data.amount}金币\n`
              await $.wait(5000); //等待5秒
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//猜涨跌分享奖励
function taskshare(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://zqact.tenpay.com/cgi-bin/activity_task.fcgi?actid=1103&tid=18&id=1&channel=1&task_ticket=${ticket}&action=taskdone&_=${rndtime}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${signkeyVal}`,
        'Accept': `application/json, text/plain, */*`,
        'Connection': `keep-alive`,
        'Referer': `https://zqact.tenpay.com/activity/page/guessRiseFall/`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Host': `zqact.tenpay.com`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 qqstock/8.7.1`,
        'Accept-Language': `zh-cn`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
        data = JSON.parse(data)
      if (data.retcode == 0) {
        $.log(`【猜涨跌分享】:获得 ${data.reward_desc}\n`);
        tz += `【猜涨跌分享】:获得 ${data.reward_desc}\n`
        await $.wait(10000); //等待10秒
      } else {
        console.log(`任务完成失败，错误信息：${JSON.stringify(data)}\n`)
        tz += `【猜涨跌分享】:${data.retmsg}\n`
      }
      resolve()
    })
  })
}
//金币查询
async function userhome() {
  return new Promise((resolve) => {
    let signurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_usercenter.fcgi?channel=1&g_openid=${userheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${userkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.1 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Encoding': `gzip,deflate`,
        'Accept-Language': `zh-Hans-CN;q=1`
      },
    };
    $.get(signurl, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            money = JSON.parse(data);
            $.log(`【账户金币】:${money.icon_amount}金币\n`);
            tz += `【账户金币】:${money.icon_amount}金币\n`;
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
//添加股票到自选
function taskid2(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=2&id=2&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【添加自选股】:获得 ${task.reward_desc}\n`);
      tz += `【添加自选股】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function statuid2() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1101&tid=2&id=2&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      statuid2 = JSON.parse(data)
      if (statuid2.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

function wxtaskid2(wxticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&tid=2&id=2&task_ticket=${wxticket}&action=taskdone`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【WX添加自选股】:获得${data.reward_desc}`);
            tz += `【WX添加自选股】:获得${data.reward_desc}\n`
          } else {
            console.log(`任务完成失败，错误信息：${JSON.stringify(data)}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function wxstatuid2() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&id=2&tid=2&action=taskstatus`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    }
    $.post(url, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      wxstatuid2 = JSON.parse(data)
      if (wxstatuid2.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//阅读一篇资讯
function taskid1(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=5&id=1&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【阅读资讯】:获得 ${task.reward_desc}\n`);
      tz += `【阅读资讯】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function statuid1() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1101&id=1&tid=5&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      statuid1 = JSON.parse(data)
      if (statuid1.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

function wxtaskid1(wxticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&tid=5&id=1&task_ticket=${wxticket}&action=taskdone`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【WX阅读资讯】:获得${data.reward_desc}`);
            tz += `【WX阅读资讯】:获得${data.reward_desc}\n`
          } else {
            console.log(`任务完成失败，错误信息：${JSON.stringify(data)}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function wxstatuid1() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&id=1&tid=5&action=taskstatus`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    }
    $.post(url, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      wxstatuid1 = JSON.parse(data)
      if (wxstatuid1.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//分享股票行情
function taskid12(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=22&id=12&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【分享行情】:获得 ${task.reward_desc}\n`);
      tz += `【分享行情】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function statuid12() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1101&id=12&tid=22&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      statuid12 = JSON.parse(data)
      if (statuid12.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

function wxtaskid12(wxticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&tid=22&id=12&task_ticket=${wxticket}&action=taskdone`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if(data.retcode == 0){
              $.log(`【WX分享行情】:获得${data.reward_desc}`);
              tz += `【WX分享行情】:获得${data.reward_desc}\n`
              await $.wait(5000); //等待5秒
            }else{
              console.log(`任务完成失败，错误信息：${JSON.stringify(data)}\n`)
              tz += `【WX分享行情】:${data.retmsg}\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function wxstatuid12() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&id=12&tid=22&action=taskstatus`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    }
    $.post(url, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      wxstatuid12 = JSON.parse(data)
      if (wxstatuid12.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//分享福利中心
function taskid11(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=7&id=11&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【分享福利中心】:获得 ${task.reward_desc}\n`);
      tz += `【分享福利中心】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function statuid11() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1101&id=11&tid=7&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      statuid11 = JSON.parse(data)
      if (statuid11.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

function wxtaskid11(wxticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&tid=7&id=11&task_ticket=${wxticket}&action=taskdone`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if(data.retcode == 0){
              $.log(`【WX分享福利中心】:获得${data.reward_desc}`);
              tz += `【WX分享福利中心】:获得${data.reward_desc}\n`
              await $.wait(5000); //等待5秒
            }else{
              console.log(`任务完成失败，错误信息：${JSON.stringify(data)}\n`)
              tz += `【WX福利中心】:${data.retmsg}\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function wxstatuid11() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&id=11&tid=7&action=taskstatus`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    }
    $.post(url, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      wxstatuid11 = JSON.parse(data)
      if (wxstatuid11.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//分享一篇资讯
function taskid14(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=28&id=14&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【分享资讯】:获得 ${task.reward_desc}\n`);
      tz += `【分享资讯】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function statuid14() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1101&id=14&tid=28&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      statuid14 = JSON.parse(data)
      if (statuid14.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

function wxtaskid14(wxticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&tid=28&id=14&task_ticket=${wxticket}&action=taskdone`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if(data.retcode == 0){
              $.log(`【WX分享资讯】:获得${data.reward_desc}`);
              tz += `【WX分享资讯】:获得${data.reward_desc}\n`
              await $.wait(5000); //等待5秒
            }else{
              console.log(`任务完成失败，错误信息：${JSON.stringify(data)}\n`)
              tz += `【WX分享资讯】:${data.retmsg}\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function wxstatuid14() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&id=14&tid=28&action=taskstatus`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    }
    $.post(url, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      wxstatuid14 = JSON.parse(data)
      if (wxstatuid14.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//分享一篇社区帖子
function taskid15(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=29&id=15&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【分享社区帖子】:获得 ${task.reward_desc}\n`);
      tz += `【分享社区帖子】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function statuid15() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1101&id=15&tid=29&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      statuid15 = JSON.parse(data)
      if (statuid15.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

function wxtaskid15(wxticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&tid=29&id=15&task_ticket=${wxticket}&action=taskdone`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            if(data.retcode == 0){
              $.log(`【WX分享社区帖子】:获得${data.reward_desc}`);
              tz += `【WX分享社区帖子】:获得${data.reward_desc}\n`
              await $.wait(5000); //等待5秒
            }else{
              console.log(`任务完成失败，错误信息：${JSON.stringify(data)}\n`)
              tz += `【WX分享社区帖子】:${data.retmsg}\n`
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function wxstatuid15() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&id=15&tid=29&action=taskstatus`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    }
    $.post(url, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      wxstatuid15 = JSON.parse(data)
      if (wxstatuid15.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//完成一次猜涨跌游戏
function taskid3(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://zqact.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=9&id=3&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【猜涨跌】:获得 ${task.reward_desc}\n`);
      tz += `【猜涨跌】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function statuid3() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1101&id=3&tid=9&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      statuid3 = JSON.parse(data)
      if (statuid3.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

function wxtaskid3(wxticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&tid=9&id=3&task_ticket=${wxticket}&action=taskdone`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【WX猜涨跌】:获得${data.reward_desc}`);
            tz += `【WX猜涨跌】:获得${data.reward_desc}\n`
          } else {
            console.log(`任务完成失败，错误信息：${JSON.stringify(data)}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function wxstatuid3() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&id=3&tid=9&action=taskstatus`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    }
    $.post(url, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      wxstatuid3 = JSON.parse(data)
      if (wxstatuid3.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//点赞
function taskid4(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=4&id=4&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【点赞评论】:获得 ${task.reward_desc}\n`);
      tz += `【点赞评论】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function statuid4() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1101&id=4&tid=4&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      statuid4 = JSON.parse(data)
      if (statuid4.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

function wxtaskid4(wxticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&tid=4&id=4&task_ticket=${wxticket}&action=taskdone`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【WX点赞评论】:获得${data.reward_desc}`);
            tz += `【WX点赞评论】:获得${data.reward_desc}\n`
          } else {
            console.log(`任务完成失败，错误信息：${JSON.stringify(data)}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function wxstatuid4() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&id=4&tid=4&action=taskstatus`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    }
    $.post(url, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      wxstatuid4 = JSON.parse(data)
      if (wxstatuid4.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//模拟炒股
function taskid6(ticket) {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskdone&channel=1&actid=1101&tid=13&id=6&task_ticket=${ticket}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let task = JSON.parse(data)
      $.log(`【模拟炒股】:获得 ${task.reward_desc}\n`);
      tz += `【模拟炒股】:获得 ${task.reward_desc}\n`
      await $.wait(10000); //等待10秒
      resolve()
    })
  })
}

function statuid6() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskstatus&channel=1&actid=1101&id=6&tid=13&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      statuid6 = JSON.parse(data)
      if (statuid6.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}

function wxtaskid6(wxticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&tid=13&id=6&task_ticket=${wxticket}&action=taskdone`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【WX模拟炒股】:获得${data.reward_desc}`);
            tz += `【WX模拟炒股】:获得${data.reward_desc}\n`
          } else {
            console.log(`任务完成失败，错误信息：${JSON.stringify(data)}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function wxstatuid6() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&id=6&tid=13&action=taskstatus`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    }
    $.post(url, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      wxstatuid6 = JSON.parse(data)
      if (wxstatuid6.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//浏览社区帖子
function wxtaskid16(wxticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&tid=31&id=16&task_ticket=${wxticket}&action=taskdone`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【WX浏览社区帖子】:获得${data.reward_desc}`);
            tz += `【WX浏览社区帖子】:获得${data.reward_desc}\n`
          } else {
            console.log(`任务完成失败，错误信息：${JSON.stringify(data)}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function wxstatuid16() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&id=16&tid=31&action=taskstatus`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    }
    $.post(url, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      wxstatuid16 = JSON.parse(data)
      if (wxstatuid16.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//WX专属红包🧧
function wxtaskid10(wxticket) {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&tid=25&id=10&task_ticket=${wxticket}&action=taskdone`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`【WX专属红包🧧】:获得${data.reward_desc}`);
            tz += `【WX专属红包🧧】:获得${data.reward_desc}\n`
          } else {
            console.log(`任务完成失败，错误信息：${JSON.stringify(data)}`)
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function wxstatuid10() {
  return new Promise((resolve, reject) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&id=10&tid=25&action=taskstatus`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    }
    $.post(url, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      wxstatuid10 = JSON.parse(data)
      if (wxstatuid10.done == 1) {
        $.log(`验证状态失败,任务已执行🚫`);
      } else {
        $.log(`验证状态成功,可执行任务🎉`);
      }
      resolve()
    })
  })
}
//票据申请
function taskticket() {
  return new Promise((resolve, reject) => {
    let testurl = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?action=taskticket&channel=1&actid=1101&_rndtime=${rndtime}&_appName=ios${taskheaderVal}`,
      //body: ``,
      headers: {
        'Cookie': `${taskkeyVal}`,
        'Accept': `*/*`,
        'Connection': `keep-alive`,
        'Referer': `http://zixuanguapp.finance.qq.com`,
        'Accept-Encoding': `gzip,deflate`,
        'Host': `wzq.tenpay.com`,
        'User-Agent': `QQStock/8.7.0 (iPhone; iOS 14.1; Scale/2.00)`,
        'Accept-Language': `zh-Hans-CN;q=1, en-CN;q=0.9`
      },
    }
    $.get(testurl, async (error, resp, data) => {
      if (logs == 1) $.log(data)
      let test2 = JSON.parse(data)
      $.log(`本次验证时间🕐：` + time(rndtime));
      $.log(`本次验证票据🎫：${test2.task_ticket}`);
      ticket = test2.task_ticket
      //tz += `【现金余额】：¥ ${task.data.activity_money.money}元\n`

      resolve()
    })
  })
}

function wxtaskticket() {
  return new Promise((resolve) => {
    let url = {
      url: `https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=${rndtime}`,
      body: `_h5ver=2.0.1&actid=1100&action=taskticket`,
      headers: {
        'Accept': `application/json, text/plain, */*`,
        'Origin': `https://wzq.tenpay.com`,
        'Accept-Encoding': `gzip, deflate, br`,
        'Cookie': `${wxtaskkeyVal}`,
        'Content-Type': `application/x-www-form-urlencoded`,
        'Host': `wzq.tenpay.com`,
        'Connection': `keep-alive`,
        'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/7.0.20(0x1700142b) NetType/4G Language/zh_CN`,
        'Referer': `https://wzq.tenpay.com/mp/v2/index.html`,
        'Accept-Language': `zh-cn`
      },
    };
    $.post(url, async (err, resp, data) => {
      try {
        if (err) {
          console.log("腾讯自选股: API查询请求失败 ‼️‼️");
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            if (logs == 1) $.log(data)
            data = JSON.parse(data);
            $.log(`本次验证时间🕐：` + time(rndtime));
            $.log(`本次验证票据🎫：${data.task_ticket}`);
            wxticket = data.task_ticket
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

////////////////////////////////////////////////////////////////////
function Jsname() {
  $.log(`╭┉┉╮╭╮╭╮╭┉┉╮╭┉┉╮╭┉┉╮╭┉┉╮╭╮╭╮`)
  $.log(`╰╮╭╯┋╰╯┋┋╭┉╯╰╮╭╯┋╭╮┋┋╭┉╯┋╰╯┋`)
  $.log(` ┋┋ ╰╮╭╯┋╰┉╮ ┋┋ ┋┋┋┋┋┋  ┋ ╭╯`)
  $.log(` ┋┋ ╭╯╰╮╰┉╮┋ ┋┋ ┋┋┋┋┋┋  ┋ ╰╮`)
  $.log(` ┋┋ ┋╭╮┋╭┉╯┋ ┋┋ ┋╰╯┋┋╰┉╮┋╭╮┋`)
  $.log(` ╰╯ ╰╯╰╯╰┉┉╯ ╰╯ ╰┉┉╯╰┉┉╯╰╯╰╯`)
}

function time(time) {
  var date = new Date(time + 8 * 3600 * 1000);
  return date.toJSON().substr(0, 19).replace('T', ' ').replace(/-/g, '.');
}

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return y + m + d;
};

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s)
        })
      })
    }
    get(t) {
      return this.send.call(this.env, t)
    }
    post(t) {
      return this.send.call(this.env, t, "POST")
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports
    }
    isQuanX() {
      return "undefined" != typeof $task
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon
    }
    isLoon() {
      return "undefined" != typeof $loon
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t)
      } catch {
        return e
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t)
      } catch {
        return e
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t))
      } catch {}
      return s
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e)
      } catch {
        return !1
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i))
      })
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"), a = {
          url: `http://${h}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": o,
            Accept: "*/*"
          }
        };
        this.post(a, (t, e, i) => s(i))
      }).catch(t => this.logErr(t))
    }
    loaddata() {
      if (!this.isNode()) return {}; {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {}; {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i))
          } catch (t) {
            return {}
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i)
        if (r = Object(r)[t], void 0 === r) return s;
      return r
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
        }
      }
      return e
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
        }
      } else s = this.setval(t, e);
      return s
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
    }
    get(t, e = (() => {})) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
          }
        } catch (t) {
          this.logErr(t)
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body)
      }))
    }
    post(t, e = (() => {})) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
      });
      else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o)
      }, t => e(t));
      else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o)
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body)
        })
      }
    }
    time(t) {
      let e = {
        "M+": (new Date).getMonth() + 1,
        "d+": (new Date).getDate(),
        "H+": (new Date).getHours(),
        "m+": (new Date).getMinutes(),
        "s+": (new Date).getSeconds(),
        "q+": Math.floor(((new Date).getMonth() + 3) / 3),
        S: (new Date).getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            }
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            }
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            }
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}
