console.log("准备加载main.js")
require(["js/conf/config.js"], function () { //加载config配置文件
    require(["jquery", "template", "swiper"], function ($, template, Swiper) { //加载各个模块
        //console.log("ok");
        //购物车
        $(".shop-box").mouseover(function () {
            $(this).css({
                "backgroundColor": "white"
            })
            $(".shopcart-container").show()
            $(".hiddenline").show()
        })
        $(".shop-box").mouseout(function () {
            $(this).css({
                "backgroundColor": "rgb(249, 249, 249)"
            })
            $(".shopcart-container").hide()
            $(".hiddenline").hide()
        })
        //弹出二维码
        $(".head-show").mouseover(function () {
            $(".app-erweima").css("width", "173")
            $(".app-erweoma-word").css("display", "table-cell")
        })
        $(".head-show").mouseout(function () {
            $(".app-erweima").css("width", "73")
            $(".app-erweoma-word").hide()
        })


        //左菜单弹出框
        $(".menulist").mouseover(function () {

            }),
            // 明星单品按钮
            $(".danpin-scroll").mouseover(function () {
                $(".prevbutton").css("display", "block")
                $(".nextbutton").css("display", "block")

            })

        $(".prevbutton").mouseover(function () {
            $(".icon-xiangzuo").css("color", "red")
            
        })
        $(".prevbutton").mouseout(function () {
            $(".icon-xiangzuo").css("color", "white")
            
        })
        $(".prevbutton").click(function () {
            $(".danpin-menu").animate({
                left: "0"
            }, 1000)
            console.log("ok")
        })
        $(".nextbutton").mouseover(function () {
            $(".icon-xiangyou").css("color", "red")
    
        })
        $(".nextbutton").mouseout(function () {
            $(".icon-xiangyou").css("color", "white")
    
        })
        $(".nextbutton").click(function () {
            $(".danpin-menu").animate({
                left: "-1240"
            }, 1000)
            console.log("ok")
        })
        $(".danpin-scroll").mouseout(function () {
            $(".prevbutton").css("display", "none")
            $(".nextbutton").css("display", "none")
        })
        //左边楼梯
        $(window).scroll(fangdou(
            function () {
                if ($(this).scrollTop() > 600) {
                    $(".louti-box").fadeIn(100);
                    $(".leader-totop").fadeIn(100);
                } else {
                    $(".louti-box").fadeOut(200);
                    $(".leader-totop").fadeOut(200);

                }
            }));

        $(window).scroll(fangdou(function () {
            if (($(this).scrollTop() > 650) && ($(this).scrollTop() < 960)) {
                $(".louti-list").eq(0).addClass("hover").siblings().removeClass("hover");
                $(".louti-list").eq(0).children().css("border-bottom", "solid 1px #23AC38").siblings().children().css("border-bottom", "solid 1px #41424e");
                console.log("11")
            }
            if (($(this).scrollTop() > 960) && ($(this).scrollTop() < 1360)) {
                $(".louti-list").eq(1).addClass("hover").siblings().removeClass("hover");
                $(".louti-list").eq(1).children().css("border-bottom", "solid 1px #23AC38").siblings().children().css("border-bottom", "solid 1px #41424e");
                console.log("22")
            }
            if ($(this).scrollTop() > 1360) {
                var index = Math.max(0, Math.min(Math.round(($(this).scrollTop() - 1360) / 726), 5)) + 2;
                $(".louti-list").eq(index).addClass("hover").siblings().removeClass("hover");
                $(".louti-list").eq(index).children().css("border-bottom", "solid 1px #23AC38").siblings().children().css("border-bottom", "solid 1px #41424e");
            }
        }))
        $(".louti-list").click(function () {
            var index = $(this).index();
            console.log(index);
            $("html,body").stop().animate({
                scrollTop: (726 * index - 96)
            }, 1000);
        })

        $(".louti-list-last").click(function () {
            $(this).siblings().removeClass("havor");
            $("html,body").animate({
                scrollTop: 0
            }, 1000);
        })

        function fangdou(callback) {
            var timer = null;
            return function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    callback();
                }, 18)
            };
        };
        //右按钮
        $(".leader-totop").click(function(){
            $("html,body").animate({
                scrollTop:0
            },1000)
        })
        //限时秒杀
        var intDiff = parseInt(60*60*3);//倒计时总秒数量
        function timer(intDiff){
            window.setInterval(function(){
            var 
                hour=3,
                minute=0,
                second=0;//时间默认值		
            if(intDiff > 0){
                hour = Math.floor(intDiff / (60 * 60)) ;
                minute = Math.floor(intDiff / 60) - (hour * 60);
                second = Math.floor(intDiff)  - (hour * 60 * 60) - (minute * 60);
            }
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            
            $('#hour_').html(hour);
            $('#minute_').html(minute);
            $('#second_').html(second);
            intDiff--;
            }, 1000);
        } 
        $(function(){
            timer(intDiff);
        });
        //商品列表
        $(function () {
            var data = {
                title: ["手机/配件", "智能数码", "汽车用品", "家用电器", "电脑周边", "手机配件"],
                imglefttop: ['//img.i360mall.com/e89059bb-cc84-4fc6-a23b-3412bda28682.jpg', '//img.i360mall.com/0cee1f1a-7a24-406e-a83a-8c83a168d68c.jpg', '//img.i360mall.com/e002ca77-43d0-4295-ae6e-d209090b4f9b.jpg', '//img.i360mall.com/1579f4c1-fea5-4d21-8fec-d3a146b84bd6.jpg', '//img.i360mall.com/65aa8732-bd16-49f2-aadf-adc625a5b65e.jpg', '//img.i360mall.com/5ea421a8-8f53-4063-933d-43683a989414.jpg'],
                imgleftbottom: ['//img.i360mall.com/baef45b0-7fc4-4a4a-9343-75fcb257f0a4.jpg', '//img.i360mall.com/dd6d0af7-b2ca-47e2-acf7-059e75aa00b9.jpg', '//img.i360mall.com/244d220c-283b-4a50-87a0-13f1e39ebada.jpg', '//img.i360mall.com/063de828-201f-44ea-98ef-94579dd867a4.jpg', '//img.i360mall.com/9d044714-57e8-471f-a21b-5089bb39caff.jpg', '//img.i360mall.com/5a0ae9df-6995-4857-9f3f-5462ad35450d.jpg'],
                imgright1: ['//img10.360buyimg.com/N2/jfs/t23527/195/2334339403/205734/6b7afbaf/5b7bb29cNf9abc1ed.jpg', '//img13.360buyimg.com/N2/jfs/t21307/138/587170656/94563/6bbee897/5b4dc852Nea1581ef.jpg', '//img12.360buyimg.com/N2/jfs/t6016/174/1173050689/105522/8ef291af/5930c9a1N050ba6c5.jpg', '//img14.360buyimg.com/N2/jfs/t20074/37/60006890/165536/1ddbdb3/5ae2c73eN34022cce.jpg', '//img13.360buyimg.com/N2/jfs/t3901/357/900118470/131650/d4d741d0/58621e76N390ea352.jpg', '//img13.360buyimg.com/N2/jfs/t18517/99/5135635/41312/ab584ab9/5a57300aN4094b023.jpg'],
                imgright2: ['//img10.360buyimg.com/N2/jfs/t24469/117/2285431038/198086/468e2dc5/5b7b9726Ncf06e222.jpg', '//img12.360buyimg.com/N2/jfs/t16870/365/1270354258/70466/bfa34a6c/5ac4ad7aN31959bfb.jpg', '//img13.360buyimg.com/N2/jfs/t3511/329/870984430/172906/bc3526bc/5817039cN5b5a9930.jpg', '//img13.360buyimg.com/N2/jfs/t19552/294/2511241118/86562/e3125faf/5afd1e99N0dbc903f.jpg', '//img13.360buyimg.com/N2/jfs/t18415/304/2664958284/63572/4b93b054/5b053dc8N07278e35.jpg', '//img10.360buyimg.com/N2/jfs/t17446/188/110879607/147488/3a2e09cc/5a5df6bcN98c1d354.jpg'],
                imgright3: ['//img12.360buyimg.com/N2/jfs/t16144/26/1961285948/224015/bf7e9cda/5a7c363cNe4b10968.jpg', '//img10.360buyimg.com/N2/jfs/t15304/201/2650927202/179597/f1a2040d/5aaf88dfN75d017c5.jpg', '//img13.360buyimg.com/N2/jfs/t2803/225/2369244403/272133/b5aeb8d9/57621511N5cbafb8a.jpg', '//img10.360buyimg.com/N2/jfs/t16543/341/1572554137/63791/e536f571/5a572f54Nc8ca386a.jpg', '//img11.360buyimg.com/N2/jfs/t22099/156/49482861/72578/e2cd5fd/5af7edbbNb19cc28b.jpg', '//img12.360buyimg.com/N2/jfs/t2515/45/552070955/88979/196f93bd/565680e9N79cfe1ec.jpg'],
                imgright4: ['//img12.360buyimg.com/N2/jfs/t25900/345/744918990/198377/2e0dea9e/5b7b93c7Na760c05c.jpg', '//img14.360buyimg.com/N2/jfs/t19201/84/1261088815/100236/91e5c7d6/5ac4a60eN87707404.jpg', '//img.i360mall.com/66d3f60d-ddb9-4b3d-b89b-17c5a5ec33dc.jpg', '//img14.360buyimg.com/N2/jfs/t16273/169/2188675046/39379/d19477ae/5aa65a9aNf3ce4895.jpg', '//img12.360buyimg.com/N2/jfs/t4351/293/3232533753/277108/4e153818/58dcd286Nddcdda2b.jpg', '//img13.360buyimg.com/N2/jfs/t1123/356/1547752231/332392/3542adea/5731552dN0fcc29c9.jpg'],
                imgright5: ['//img10.360buyimg.com/N2/jfs/t24925/224/461710812/195208/3e5cf555/5b712086Ncb2c24f4.jpg', '//img12.360buyimg.com/N2/jfs/t3547/262/2798701267/74986/eac9d3f0/585d4d50N41ecf8b7.jpg', '//img12.360buyimg.com/N2/jfs/t17980/181/2395461446/169113/56ffaea6/5af3b45aN3391392a.jpg', '//img13.360buyimg.com/N2/jfs/t17476/278/2061568568/155460/55ed86f/5ae2c6f1N146cae7d.jpg', '//img12.360buyimg.com/N2/jfs/t10558/327/1012623621/362138/3d20bba9/59db8e3bN55e3b5a2.jpg', '//img14.360buyimg.com/N2/jfs/t5989/266/6249167549/381957/d0ad8396/597171ebN616a3237.jpg'],
                imgright6: ['//img14.360buyimg.com/N2/jfs/t18553/215/2166686429/202737/c70bd2e1/5ae96417Nb01da1d6.jpg', '//img14.360buyimg.com/N2/jfs/t2638/331/2108458736/73645/db78a8cf/575779ddN0a18ded6.jpg', '//img14.360buyimg.com/N2/jfs/t3448/115/304606616/252246/a8e91519/58074aeaN63a3a8bb.jpg', '//img10.360buyimg.com/N2/jfs/t4786/356/2537318510/94806/cc5cd229/5901982dNf1ff3940.jpg', '//img10.360buyimg.com/N2/jfs/t4402/174/572302090/605882/dd1e029d/58d161baN6fba1a2d.jpg', '//img13.360buyimg.com/N2/jfs/t7297/115/1673880600/138892/2b89b919/599ec185Ndf4b7baa.jpg'],
                imgright7: ['//img12.360buyimg.com/N2/jfs/t15817/179/2112984449/213492/ad7d0774/5a7c3369Nbda10159.jpg', '//img13.360buyimg.com/N2/jfs/t5767/130/5926234876/77602/68b740d5/5966da63N242d73f6.jpg', '//img12.360buyimg.com/N2/jfs/t16933/28/1142030904/122715/79412bef/5abc9372N93640c16.jpg', '//img11.360buyimg.com/N2/jfs/t17089/311/1102613129/129500/1d9d180/5abcc0f1N6a048c42.jpg', '//img14.360buyimg.com/N2/jfs/t2071/293/2344193368/203724/ff45d60d/56cd2354N0751be84.jpg', '//img10.360buyimg.com/N2/jfs/t2392/344/1878316702/167804/b1337e3b/56e61ccbN79044202.jpg'],
                imgright8: ['//img14.360buyimg.com/N2/jfs/t16738/293/450474693/165314/7de5adfb/5a7c2888Na5f69fee.jpg', '//img10.360buyimg.com/N2/jfs/t20890/327/16838833/114413/2edfc797/5af56481N83583f3d.jpg', '//img13.360buyimg.com/N2/jfs/t2359/173/2756679901/169402/c873c0d7/56e8d561N90571c8c.jpg', '//img14.360buyimg.com/N2/jfs/t2818/176/3132265180/182140/16d87f3c/5784834dNe3e923ef.jpg', '//img10.360buyimg.com/N2/jfs/t2503/297/1984445390/108957/1a139d72/568f56f4N51dbec26.jpg', '//img11.360buyimg.com/N2/jfs/t3097/336/1623964072/167269/2fae3d1c/57d0cdcaNb7d59e47.jpg'],
                tip1: ['360手机 N7 Pro   玛瑙黑色', '360儿童手表7C抽照防水版天空蓝', '行车记录仪后视镜版M302黑色', '360扫地机器人黑色', '狼蛛鬼二代七彩游戏鼠标', '京造泰国天然乳胶枕头'],
                tip2: ['360手机N7 Pro珊瑚红色', '360儿童电话手表SE3 Plus', '360行车记录仪标准升级版J501C', '360安全路由器P4C别墅级穿墙', '京造苹果x无线充电器快充版', '京造埃及长绒棉毛巾2条装(灰绿+肉粉)'],
                tip3: ['N6 6GB+64GB碟金色', '360SE 3代W608B天空蓝', '360行车记录仪二代美猴王版', '京造精密电动螺丝刀套装维修 工具', '京造真无线立体声蓝牙耳机', '索尼ICD-UX565F数码录音棒'],
                tip4: ['360手机.N7 l ite幻影黑色', '360电话手表X1 Pro', '360行车记录仪G300迷你隐藏', '京造铝合金笔记本散热支架', '小鸡G4增强版蓝牙无线游戏,手柄', '得力72365多功能可调课桌挂袋'],
                tip5: ['360手机,N7月岩白色', '智能摄像机夜视版 哑白', '360行车记录仪S800', '360扫地机器人扫拖一体机S6 白色', '英特尔178700K酷睿六核', '朗客iPhone 8高清玻璃膜'],
                tip6: ['360手机N7石墨里色', '360智能摄像机大版D600', '行车记录仪二代J511黑灰色', '360安全路由器P3智能无线路由器', 'Apple iPad平板电脑', '小米(MI) 10000毫安充电宝'],
                tip7: ['360手机N6燧石黑色', '360智能摄像机云台版白色', '360行车记录仪G300P', '京造USB3.0透明分线器', '樱桃(Cherry)游戏办公机械键盘', '绍泽文化文房四宝水写布字帖 套装'],
                tip8: ['360手机,N6 Pro深海蓝色', '智能摄像机', '先科(SAST)车载充电器车充点烟器', '苏泊尔(SUPOR)榨汁机家用 果汁机', '罗技G502炫光自适应游戏鼠标', '倍思(Baseus)多功能手机支架'],
                price1: ['￥1999.00', '￥399.00', '￥349.00', '￥1549.00', '￥129.00', '￥199.00'],
                price2: ['￥2299.00', '￥289.00', '￥309.00', '￥244.00', '￥99.00', '￥59.90'],
                price3: ['￥1199.00', '￥169.00', '￥549.00', '￥119.00', '￥299.00', '￥1299.00'],
                price4: ['￥1199.00', '￥1399.00', '￥339.00', '￥88.00', '￥229.00', '￥27.80'],
                price5: ['￥1699.00', '￥159.00', '￥1499.00', '￥1549.00', '￥2999.00', '￥19.90'],
                price6: ['￥1899.00', '￥109.00', '￥449.00', '￥189.00', '￥3288.com', '￥149.00'],
                price7: ['￥1199.00', '￥249.00', '￥429.00', '￥49.com', '￥559.00', '￥79.00'],
                price8: ['￥1899.00', '￥249.00', '￥55.00', '￥129.00', '￥379.00', '￥35.00'],
            }
            var goodsstr = template("floorbox", data);
            //console.log(htmlstr);
            $(".mainbox").html(goodsstr);
            var danpinstr =template("danpin-list",data);
            console.log(danpinstr)
            $(".danpin-menu").html(danpinstr);

        })



        return {
            // 轮播图
            swiper: new Swiper('.swiper-container', {
                pagination: { //分页
                    el: '.swiper-pagination',
                    clickable: true, //是否可点击换页
                    type: "bullets",
                    bulletActiveClass: 'bulletsActiveColor swiper-pagination-bullet-active',
                    //bulletClass: 'bulletsNormalColor swiper-pagination-bullet',
                    renderBullet: function (index, bulletsActiveColor) {
                        return '<span class="' + bulletsActiveColor + '"> </span>';
                    },
                },
                navigation: { //切换
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                autoplay: {
                    delay: 3000, //轮播速度
                    stopOnLast: false, //最后一张图片不终止
                },

                effect: "fade",

            }),

        };
        
    })
})
console.log("main.js已执行，准备加载配置文件")