// 各类函数
// 获取id
function id(obj) {
    return document.getElementById(obj);
}
// 增加class名称  sClass 要有引号
function addClass(obj, sClass) {
    // 获取对象本身的类名 split()  将字符串分隔成数组  
    var aClass = obj.className.split(' ');
    // 如果对象没有类名 则直接加类名
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    // 如果添加的类名 对象本身就有的话就直接退出函数
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    // 对象本来就有类名 用空格隔开 继续加上类名
    obj.className += ' ' + sClass;
}
// 移出class类名
function removeClass(obj, sClass) {
    var aClass = obj.className.split(' ');
    // 如果对象什么类名都没有  退出函数
    if (!obj.className) return;
    // 如果对象有类名 且相同 就删除一个
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            // splice(i, 1)删除数组元素，参数1：删除元素的索引号， 参数2：删除个数， 返回值 删除的项目
            aClass.splice(i, 1);
            // join(' ') 把数组中的所有元素 以第一个参数的分隔符和在一起（默认逗号） 放入一个字符串
            obj.className = aClass.join(' ');
            break;
        }
    }
}

// 判断浏览器是什么浏览器
function myBrowser() {
    var userAgent = navigator.userAgent; //获取浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}
// 可视窗口的宽高
function view() {
    return {
        // clientWidth 不包含border  
        w: document.documentElement.clientWidth || document.body.clientWidth,
        h: document.documentElement.clientHeight || document.body.clientHeight
    };
}
// 给每一个分页 按照可视窗口高度添加高度
var viewHeight = function() {
    // section对象集合 伪数组
    var section = document.getElementsByTagName("section");
    var iheight = view().h;
    for (var i = 0; i < section.length; i++) {
        section[i].style.height = iheight + "px";
    }
};

// 给首页 nav_bar_ul 中的后4个小li添加点击事件
var waited_develop = function() {
    // document.getElementsByClassName 一个元素时 返回的还是伪数组
    var waitedli = document.getElementsByClassName("nav_bar_ul")[0].children;
    for (var i = 1; i < waitedli.length; i++) {
        // if 判断此浏览器是否存在此方法
        // 兼容 firefox、chrome、IE、safari、opera；不兼容IE7、IE8
        if (waitedli[i].addEventListener) {
            waitedli[i].addEventListener("click", myfunction, false);

            function myfunction() {
                alert("待开发");
            }
        }
        // 兼容 IE7、IE8
        if (waitedli[i].attachEvent) {
            waitedli[i].attachEvent("onclick", myfunction);

            function myfunction() {
                alert("待开发");
            }
        }
    }
};

// 翻页事件: 右边栏点击 和 下一页按钮
var tagSwitch = function() {
    var navP = document.getElementById("nav_bar");
    var next = document.getElementsByClassName("scroll");
    var con = document.getElementsByTagName("section");
    var tag = document.getElementsByTagName("aside")[0].children;
    con[0].style.display = "block";
    tag[0].className = "cur_a";
    // 右边栏 点击事件
    for (var i = 0; i < tag.length; i++) {
        tag[i].index = i;
        tag[i].onclick = function() {
            // 排他
            for (var n = 0; n < tag.length; n++) {
                tag[n].className = "";
                con[n].style.display = "none";
            }
            tag[this.index].className = "cur_a";
            con[this.index].style.display = "block";
        }
    }
    // 每一页的下一页按钮 
    for (var i = 0; i < next.length; i++) {
        next[i].index = i;
        next[i].onclick = function() {
            for (var n = 0; n < next.length; n++) {
                tag[n].className = "";
                con[n].style.display = "none";
            }
            con[this.index + 1].style.display = "block";
            tag[this.index + 1].className = "cur_a";
        }
    }
}

// html5新增--canvas标签 图形标签 百分百图形制作  只有canvas标签对象才支持一下方法
// getContext("2d")  返回一个用于在画布上绘图的环境 当前唯一的合法值是 "2d"
var canvashtml5 = document.getElementById("html5").getContext("2d");
var canvascss3 = document.getElementById("css3").getContext("2d");
var canvasjs = document.getElementById("js").getContext("2d");
var canvasjq = document.getElementById("jq").getContext("2d");
var canvasbs = document.getElementById("bs").getContext("2d");
var canvasps = document.getElementById("ps").getContext("2d");
// console.log(canvashtml5);   //CanvasRenderingContext2D 对象
var canwidth = 150;
var radius = 65;
var canhtml5 = function() {
    var deg = 0;
    var html5T = function(deg) {
        // 以下是弧度制运算   不是角度值
        // 弧度rad = 角度 * Math.PI/180    （Math.PI / 180 == 1°） 前者是弧度  后者是角度
        // Math.PI 可以代表 π 或 180° 
        var r = deg * Math.PI / 180; // 角度 转化 弧度
        // clearRect(x,y,width,height)方法 清空给定矩形内的指定像素。
        // x,y	要清除的矩形左上角的 x y坐标;  width,height要清除的矩形的宽度 高度，以像素px计
        canvashtml5.clearRect(0, 0, canwidth, canwidth); // 全清
        // beginPath()方法 开始一条路径，或重置当前的路径。
        canvashtml5.beginPath();
        // strokeStyle属性 设置或返回用于笔触的颜色、渐变或模式。
        canvashtml5.strokeStyle = "#006BB0";
        // lineWidth属性 设置或返回当前线条的宽度，以像素px计。
        canvashtml5.lineWidth = 10;
        // arc(x,y,r,sAngle,eAngle,counterclockwise)方法 创建弧/曲线（用于创建圆或部分圆）。
        // x,y 中心点的的坐标位置  r 弧度的半径
        // sAngle,eAngle   起始角，以弧度计rad。（默认弧的圆形的三点钟位置即2d的x轴是 0 度）
        // counterclockwise 可选值 规定应该逆时针还是顺时针绘图 False = 顺时针，true = 逆时针。
        canvashtml5.arc(canwidth / 2, canwidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //
        // stroke()方法 会实际地绘制出 根据上面定义的 图形
        canvashtml5.stroke();
    };
    // 定时器 每0.02秒 加4° 加到360°的90% == 324° 为止 
    var time = setInterval(function() {
        var con = document.getElementsByTagName("section")[2];
        if (con.style.display == "block") {
            deg += 4;
            html5T(deg);
            if (deg > 324) {
                clearInterval(time);
            }
        }
    }, 20);
}
var cancss3 = function() {
    var deg = 0;
    var css3T = function(deg) {
        var r = deg * Math.PI / 180;
        canvascss3.clearRect(0, 0, canwidth, canwidth);
        canvascss3.beginPath();
        canvascss3.strokeStyle = "#EFA90D";
        canvascss3.lineWidth = 10;
        canvascss3.arc(canwidth / 2, canwidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //
        canvascss3.stroke();
    };
    var time = setInterval(function() {
        var con = document.getElementsByTagName("section")[2];
        if (con.style.display == "block") {
            deg += 4;
            css3T(deg);
            if (deg > 324) {
                clearInterval(time);
            }
        }
    }, 20);
}
var canjs = function() {
    var deg = 0;
    var jsT = function(deg) {
        var r = deg * Math.PI / 180;
        canvasjs.clearRect(0, 0, canwidth, canwidth);
        canvasjs.beginPath();
        canvasjs.strokeStyle = "#1D1815";
        canvasjs.lineWidth = 10;
        canvasjs.arc(canwidth / 2, canwidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //
        canvasjs.stroke();
    };
    var time = setInterval(function() {
        var con = document.getElementsByTagName("section")[2];
        if (con.style.display == "block") {
            deg += 4;
            jsT(deg);
            if (deg > 288) {
                clearInterval(time);
            }
        }
    }, 20);
}
var canjq = function() {
    var deg = 0;
    var jqT = function(deg) {
        var r = deg * Math.PI / 180;
        canvasjq.clearRect(0, 0, canwidth, canwidth);
        canvasjq.beginPath();
        canvasjq.strokeStyle = "#059341";
        canvasjq.lineWidth = 10;
        canvasjq.arc(canwidth / 2, canwidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //
        canvasjq.stroke();
    };
    var time = setInterval(function() {
        var con = document.getElementsByTagName("section")[2];
        if (con.style.display == "block") {
            deg += 4;
            jqT(deg);
            if (deg > 288) {
                clearInterval(time);
            }
        }
    }, 20);
}
var canbs = function() {
    var deg = 0;
    var bsT = function(deg) {
        var r = deg * Math.PI / 180;
        canvasbs.clearRect(0, 0, canwidth, canwidth);
        canvasbs.beginPath();
        canvasbs.strokeStyle = "#DC2F1F";
        canvasbs.lineWidth = 10;
        canvasbs.arc(canwidth / 2, canwidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //
        canvasbs.stroke();
    };
    var time = setInterval(function() {
        var con = document.getElementsByTagName("section")[2];
        if (con.style.display == "block") {
            deg += 4;
            bsT(deg);
            if (deg > 288) {
                clearInterval(time);
            }
        }
    }, 20);
}
var ps = function() {
    var deg = 0;
    var psT = function(deg) {
        var r = deg * Math.PI / 180;
        canvasps.clearRect(0, 0, canwidth, canwidth);
        canvasps.beginPath();
        canvasps.strokeStyle = "#f47983";
        canvasps.lineWidth = 10;
        canvasps.arc(canwidth / 2, canwidth / 2, radius, 0 - 1 / 2 * Math.PI, r - 1 / 2 * Math.PI, false); //
        canvasps.stroke();
    };
    var time = setInterval(function() {
        var con = document.getElementsByTagName("section")[2];
        if (con.style.display == "block") {
            deg += 4;
            psT(deg);
            if (deg > 252) {
                clearInterval(time);
            }
        }
    }, 20);
}

// 表单提示信息
// 姓名
var checkUsername = function() {
    var username = document.getElementById("username").value;
    var usernamecheck = document.getElementById("check_username");
    usernamecheck.innerText = "";
    // 2-20个中文字
    var myreg = /^[\u4e00-\u9fa5 ]{2,20}$/;
    // 2-20个字母和\/
    var myreg1 = /^[a-zA-Z\/ ]{2,20}$/;
    if (username.trim() == "") {
        usernamecheck.innerText = "姓名不能为空";
    } else if (myreg.test(username) || myreg1.test(username)) {
        usernamecheck.innerText = "";
    } else {
        usernamecheck.innerText = "姓名格式错误";
    }
};
// 邮箱
var checkMail = function() {
    var usermail = document.getElementById("usermail").value;
    var usermailcheck = document.getElementById("check_usermail");
    usermailcheck.innerText = "";
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (usermail.trim() == "") {
        usermailcheck.innerText = "邮箱不能为空";
    } else if (myreg.test(usermail)) {
        usermailcheck.innerText = "";
    } else {
        usermailcheck.innerText = "邮箱格式错误";
    }
};
// 主题
var checkTheme = function() {
    var usertheme = document.getElementById("usertheme").value;
    var userthemecheck = document.getElementById("check_usertheme");
    userthemecheck.innerText = "";
    if (usertheme.trim() == "") {
        userthemecheck.innerText = "主题不能为空";
    }
};
// 内容
var checkCon = function() {
    var usercon = document.getElementById("usercon").value;
    var userconcheck = document.getElementById("check_usercon");
    userconcheck.innerText = "";
    if (usercon.trim() == "") {
        userconcheck.innerText = "内容不能为空";
    }
};
// 表单失去焦点事件
var usernameon = document.getElementById("username");
usernameon.onblur = checkUsername;
var mymailon = document.getElementById("usermail");
mymailon.onblur = checkMail;
var mythemeon = document.getElementById("usertheme");
mythemeon.onblur = checkTheme;
var myconon = document.getElementById("usercon");
myconon.onblur = checkCon;


// 鼠标滑轮滚动 上下页
var scrollFunc = function(e) {
    var con = document.getElementsByTagName("section");
    var tag = document.getElementsByTagName("aside")[0].children;
    e = e || window.event;
    if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件   
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
            // 首页除外 给其他tag往上滚一个 之前类清空 隐藏  上一个添加类 显示
            for (var i = 1; i < tag.length; i++) {
                if (tag[i].className == "cur_a") {
                    tag[i].className = "";
                    con[i].style.display = "none";
                    tag[i - 1].className = "cur_a";
                    con[i - 1].style.display = "block";
                    break;
                }
            }
        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            // 尾页除外 给其他tag往下滚一个 之前类清空 隐藏  下一个添加类 显示
            for (var i = 0; i < tag.length - 1; i++) {
                if (tag[i].className == "cur_a") {
                    tag[i].className = "";
                    con[i].style.display = "none";
                    tag[i + 1].className = "cur_a";
                    con[i + 1].style.display = "block";
                    break;
                }
            }

        }
    } else if (e.detail) { // FF 浏览器使用的是 detail,向下滚动是正3,向上滚动-3
        if (e.detail < 0) { //当滑轮向上滚动时
            for (var i = 1; i < tag.length; i++) {
                if (tag[i].className == "cur_a") {
                    tag[i].className = "";
                    con[i].style.display = "none";
                    tag[i - 1].className = "cur_a";
                    con[i - 1].style.display = "block";
                    break;
                }
            }
        }
        if (e.detail > 0) { //当滑轮向下滚动时
            for (var i = 0; i < tag.length - 1; i++) {
                if (tag[i].className == "cur_a") {
                    tag[i].className = "";
                    con[i].style.display = "none";
                    tag[i + 1].className = "cur_a";
                    con[i + 1].style.display = "block";
                    break;
                }
            }
        }
    }
};
// 给页面绑定滑轮滚动事件  触发滚动函数
if (document.addEventListener) { // 火狐浏览器 滚动事件
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//以下是调用上面的函数myBrowser() 判断浏览器  ie和Chrome浏览器 滚动事件
var browser = myBrowser();
if ("IE" == browser) {
    document.onmousewheel = scrollFunc;
} else {
    window.onmousewheel = scrollFunc;
}

viewHeight();
waited_develop();
tagSwitch();
canhtml5();
cancss3();
canjs();
canjq();
canbs();
ps();