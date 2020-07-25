let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
/*你好，我是一名前端新人
接下里我要添加样式了*/
#div1{
    border:1px solid red;
    width:400px;
    height:400px;
}
/*接下来我要把div变成一个八卦图
*注意看好了
*首先，把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
*注入黑白颜色
*/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/*注入灵魂*/
#div1::before{
    width:200px;
    height:200px;
    border-radius:50%;
    top:0px;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width:200px;
    height:200px;
    border-radius:50%;
    bottom:0px;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}

`;

//demo.innerHTML = string.substring(0, n); //让字符从0到n显示
//string = string.replace(/\n/g, "<br>"); //将所有空格换成换行
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999); //滚动y轴99999像素
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 0);
};
step();
