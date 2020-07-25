let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
/*如何  制作太极两仪图
佛说得先有个池*/
#div1{
  width:300px;
  height:300px;
    border-radius: 50%;
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
}
/*
*放鱼进池

*/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}

/*
好了，开始注入灵魂
*（灵魂拷问：是先有黑鱼还是先有白鱼呢？）
*/
#div1::before,
#div1::after{
    width:150px;
    height:150px;
    border-radius:50%;
    left:50%;
    transform:translateX(-50%);
    
}
#div1::before{
  top:0px;
  background:#000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
  bottom:0px;
  background:#fff;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}

/* 这俩鱼似乎有点呆
*那就让它活起来吧
*/
@keyframes rotation {
    0% {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
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
  }, 30);
};
step();
