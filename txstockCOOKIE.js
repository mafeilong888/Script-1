
//独立COOKIE文件     ck在``里面填写，多账号换行
let userheaderVal= ``

let userkeyVal= ``

let cashheaderVal= ``

let signheaderVal= `_request_from=web&version_code=13.2.0&js_sdk_version=1.77.0.2&tma_jssdk_version=1.77.0.2&app_name=douyin_lite&app_version=13.2.0&vid=08454242-1565-42FF-839E-2349815547D7&device_id=3306984110565176&channel=App%20Store&mcc_mnc=46000&aid=2329&screen_width=828&openudid=76d0b7492653a8ec3188d6ccef0eccc79978d7f9&cdid=E50EC771-42EE-4868-A9CD-366F294A3CED&os_api=18&ac=WIFI&os_version=13.4.1&client_niu_ready=0&device_platform=iphone&build_number=132004&iid=4485660576590487&device_type=iPhone12,1&idfa=00000000-0000-0000-0000-000000000000&in_sp_time=0`

let signkeyVal= `{"X-SS-DP":"35","Connection":"keep-alive","x-tt-trace-id":"00-9f663ef40db2fa06fb0621d834c40023-9f663ef40db2fa06-01","X-SS-Cookie":"sessionid=94231204898ce5224036f451ca3ca1d7; sessionid_ss=94231204898ce5224036f451ca3ca1d7; sid_guard=94231204898ce5224036f451ca3ca1d7%7C1612565925%7C5182534%7CTue%2C+06-Apr-2021+22%3A34%3A19+GMT; sid_tt=94231204898ce5224036f451ca3ca1d7; uid_tt=16f328e73f2c5ec1270e1ed78f90d696; uid_tt_ss=16f328e73f2c5ec1270e1ed78f90d696; install_id=1969962044368280; ttreq=1$3ca6dc686a0e307d2908a5d224e05c5eb5bbf420; ssr_fs=m; ssr_sbh__=44; ssr_tz=Asia/Shanghai; MONITOR_WEB_ID=3148590858920477; FRM=new; PIXIEL_RATIO=2; WIN_WH=414_795; d_ticket=4830e43b757fc8b698e5df1f2c1689fd0e766; n_mh=sS1gaGw52xzBsOqocJ0fQhcneconSWFAPOiQrwVi4Hk; odin_tt=b8a5937604630b4a42d25a904813050dea8b8ad11febd349c81980e97098f5d2e08a3de4c65ba6cfc5c00e0377049384","sdk-version":"2","Accept-Encoding":"gzip, deflate","Content-Type":"application/json; encoding=utf-8","x-Tt-Token":"0094231204898ce5224036f451ca3ca1d701d70cd848d5f2db23a8e77513c7c8440200eb98aaf8d81f2adcd8a155ecd8a04e8e7b48686759f269c09bd90cff12101c997ee642671f96f0ec3ab5da8aa52b3bc16bd96aa4507b0b9331645711f02cb6f-1.0.1","X-SS-STUB":"D41D8CD98F00B204E9800998ECF8427E","X-Khronos":"1613287013","User-Agent":"NewsLite 7.6.6 rv:7.6.6.07 (iPhone; iOS 13.4.1; zh_CN) Cronet","tt-request-time":"1613287013756","Cookie":"d_ticket=4830e43b757fc8b698e5df1f2c1689fd0e766; n_mh=sS1gaGw52xzBsOqocJ0fQhcneconSWFAPOiQrwVi4Hk; odin_tt=b8a5937604630b4a42d25a904813050dea8b8ad11febd349c81980e97098f5d2e08a3de4c65ba6cfc5c00e0377049384; FRM=new; PIXIEL_RATIO=2; WIN_WH=414_795; ssr_fs=m; ssr_sbh__=44; ssr_tz=Asia/Shanghai; install_id=1969962044368280; ttreq=1$3ca6dc686a0e307d2908a5d224e05c5eb5bbf420; MONITOR_WEB_ID=15dfb3ed-cfea-43d0-b538-2c24a5754e74; sessionid=94231204898ce5224036f451ca3ca1d7; sessionid_ss=94231204898ce5224036f451ca3ca1d7; sid_guard=94231204898ce5224036f451ca3ca1d7%7C1612565925%7C5182534%7CTue%2C+06-Apr-2021+22%3A34%3A19+GMT; sid_tt=94231204898ce5224036f451ca3ca1d7; uid_tt=16f328e73f2c5ec1270e1ed78f90d696; uid_tt_ss=16f328e73f2c5ec1270e1ed78f90d696","Host":"api3-normal-c-lq.snssdk.com","passport-sdk-version":"5.12.1","X-Gorgon":"8402c0d2200017535b0e237e2eafc0e17e23bf26a71c781af42f","Accept":"application/json","Content-Length":"0"}`

let taskheaderVal= `&_dev=iPhone12,1&_devId=53597e56884443fe0d0b383b463447bdb79d35b2&_appver=8.7.1&_ifChId=&_isChId=1&_osVer=13.4.1&openid=oA0GbjiKR455nYgNc6xo_Z2Qs0UQ&fskey=v0aaf63c2215ffe6224e7798cf6879c8&appid=wxcbc3ab3807acb685&access_token=41_4EJg7ET5rMLJLP0an9ggkg7XhKXiRG6Ky9f-imKykFeWy2hlsD18dQA8G1nLZt8OlSVWmVJjuHrahB3Xc39CQrEI8lwNSoK10IcKT6FIcwY&buildType=store&check=11&_idfa=00000000-0000-0000-0000-000000000000&lang=zh_CN`

let taskkeyVal= ``

let wxtaskkeyVal= ``


let cookieArr = {
  userheaderVal: userheaderVal,
  userkeyVal: userkeyVal,
  cashheaderVal: cashheaderVal,
  signheaderVal: signheaderVal,
  signkeyVal: signkeyVal,
  taskheaderVal: taskheaderVal, 
  taskkeyVal: taskkeyVal,
  wxtaskkeyVal: wxtaskkeyVal, 
}

module.exports =  cookieArr
