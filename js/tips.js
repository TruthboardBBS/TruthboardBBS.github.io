/*
请在最后一条tips后面加上英文逗号，换行，按照下面格式加上内容：
"foo",
"bar",
"foobar",
"这是最后一条tips"
*/
var randomStrings = [
"这是第一条Tips！",
"「我今天也要翻滚了。」"
//在上一条tips后面加上英文逗号，然后从这里添加tips
];
window.onload = function() {

var text = randomStrings[Math.floor(Math.random() * randomStrings.length)]
document.getElementById("demo").innerHTML = "tips：" + text;
}
