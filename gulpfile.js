let gulp = require("gulp");
let minifyJS = require("gulp-babel-minify");
let minifyCSS = require("gulp-clean-css");
let connect = require("gulp-connect");
let sass = require("gulp-sass");

//定义一个叫build的任务
gulp.task("build", () => {


    gulp.src("./src/**/*.js") //读取内容
        .pipe(minifyJS()) //压缩js
        .pipe(gulp.dest("./dist")) //将压缩处理后的文件复制到新文件夹

    gulp.src("./src/**/*.html") //读取内容
        .pipe(gulp.dest("./dist")) //复制 HTML到新文件夹

    gulp.src("./src/**/*.css") //读取内容
        .pipe(minifyCSS()) //压缩css
        .pipe(gulp.dest("./dist")) //将压缩处理后的文件复制到新文件夹
    gulp.src("./src/**/*.scss")//读取内容
        .pipe(sass())//编译
        .pipe(gulp.dest("./dist"))//将转成css的文件复制到根目录文件夹css文件夹下
});

gulp.task("refreshHTML", () => { //更新html内容
    gulp.src("./src/**/*.html") //读取src中的html后缀文件
        .pipe(gulp.dest("./dist")) //将处理后的文件复制到dist文件夹
        .pipe(connect.reload()) //服务器热加载即时更新
})

gulp.task("refreshJS", () => { //更新JS
    gulp.src("./src/**/*.js") //读取src中的html后缀文件
        .pipe(minifyJS()) //压缩读取的js文件
        .pipe(gulp.dest("./dist")) //将处理后的文件复制到dist文件夹
        .pipe(connect.reload()) //服务器热加载即时更新

})

gulp.task("refreshCSS", () => { //更新css
    gulp.src("./src/**/*.css") //读取src中的css后缀文件
        .pipe(minifyCSS()) //压缩读取的css文件
        .pipe(gulp.dest("./dist")) //将处理后的文件复制到dist文件夹
        .pipe(connect.reload()) //服务器热加载即时更新

})

gulp.task("sass", () => { //通过scss更新css
    gulp.src("./src/**/*.scss") //读取src中的scss后缀文件
        .pipe(sass({
            outputStyle: "expanded"
        })).on("error", sass.logError)
        .pipe(gulp.dest("./dist")) //将处理后的文件复制到dist文件夹
        .pipe(connect.reload()) //服务器热加载即时更新
        

})

gulp.task("server", () => {
    //创建一个服务器
    connect.server({
        root: "dist", //制定服务器根目录
        port: 8080, //端口
        livereload: true ,//热加载
        middleware: function (server, opt) {
            var Proxy = require('gulp-connect-proxy');
            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        }
    })
    //监听所有文件变化
    gulp.watch("./src/**/*.html", ["refreshHTML"]);
    gulp.watch("./src/**/*.js", ["refreshJS","refreshHTML"]);
    gulp.watch("./src/**/*.css", ["refreshCSS","refreshHTML"]);
    gulp.watch("./src/**/*.scss", ["sass","refreshHTML"]);
})
