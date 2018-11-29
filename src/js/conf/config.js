

requirejs.config({
    //baseUrl:"http://www.xxxxxxx",
    baseUrl:"http://localhost:8080",//拼接后面的地址，这里就是后面地址的前缀
    paths:{
        "jquery" : "./js/lib/jquery-1.11.3",
        "template":"./js/lib/template-web",
        "swiper":"./js/lib/swiper-4.3.5.min",
        "common":"./js/mylib/common"
    }
})
console.log("配置文件已加载")