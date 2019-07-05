d3.js---大数据
three.js---游戏，3D
echarts.js ---百度大数据
满意的插件效果：
1.jquery.singlePageNav.min.js
2.wow.min.js
3.animate.css

IE678不识别opacity

'use strict';

s = "1214141";
s.endsWith('4');
false

/^[0-9]{3,10}/.test(s); // 正则匹配
true

/[^\s]{3,10}/.test(s);
true

isNaN? not a Number
NaN
isNaN()
唯一能判断NaN的方法是通过isNaN()函数：
isNaN(NaN); // true

INfinity;无限大

//要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true
1 / 3 == (1 - 2 / 3); //false，另外也请注意

toMD5 is not defined?
设置cookie.

贪婪匹配？
全局搜索？


obj.__proto__在低版本中的IE不支持

Babel（https://babeljs.io/）可以转换 ES6中的class为prototype型的传统代码；

<script type="text/javascript" src="1.js"></script>

js关闭a连接的跳转：
<a href="javascript:;">context</a>
<a href="javascript:void(0)">context</a>

--------------------question------------
1.setInterval如何避免重复调用？
全局设置var timer=null,在调用函数中第一步设置clearInterval(timer);

////////////////////////////////////js基础////////////////////////////////////////////

null,undefined
备注：
Undefined和任何数值计算为NaN;
NaN 与任何值都不相等，包括 NaN 本身
任何值和null运算，null可看做0运算。
false、0 、“”、undefined 、null的bool为false
console.log(undefined == null); //true
字符串的+，-，

typeof()查看类型
转换成数字：
Number() parseInt() parseFloat()
转换成BOOl:
Boolean()
var b = !!"123";
转换成字符串：
toString(), String()
null和undefined没有tostring方法
逻辑与&&或||

var
``
动态，静态语言
use strict的优点：var申明的变量不是全局变量
\x表示16进制
\u表示unicode

进制转化：
> parseInt(110,2)
6
> parseInt(110,8)
72
> parseInt(110,10)
110
> parseInt(110,16)
272


//toString();   无参转换成字符串。    带参进制转换。
//十进制转换成任意进制
var num = 10;
var trnum = num.toString(16);
console.log(trnum);
结果为a


alert(), prompt(), confirm()
console.log(), console.error(), console.warn()

交换值：
1.用temp,2.用两个数的和，差，或（具体可见hello.c的文件）

+----------------------------------------------------------程序结构
if..else if..else..
a>b? a:b
switch(num){
    case a:
        break;
    case b:
        break;
    default:
        statement
}
for ()
while()
do..wihle()
function(){alert("hell")} 匿名函数
无穷大：console.log(1/0);  Infinity
无穷小：console.log(-1/0); -Infinity
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

或且非的优先级：
! > && >||

+----------------------------------------------------------arguments
arguments是个伪数组，能直接修改其值，不是数组实例，也不能修改数组的长短；
fn(1,2);
fn(1,2,3);
fn(1,2,3,4,5);
function fn(a,b){
    //只在函数中使用，实参的数组。
   arguments[0] = 0;
   console.log(arguments);
    //伪数组：不能修改长短的数组。(可以修改元素，但是不能变长变短)
   // arguments.push(1);
   console.log(arguments instanceof Array);

   //形参个数
   console.log(fn.length);
   //实参个数
   console.log(arguments.length);

   //arguments.callee整个函数。函数名。
   console.log(arguments.callee);
}

+----------------------------------------------------------字符串String:
var str1=new String('abc'); //同样数字可以用： var a = new Number(22);
var str2='bdc';
console.log(typeof str1); //object
console.log(typeof str2); //string
console.log(str1 instanceof String); //true
console.log(str2 instanceof String); //false

var str = new String('abc');
var name = '小明';
var age = 20;
var message = '你好, ' + name + ', 你今年' + age + '岁了!';
alert(message);
// ES6
var name = '小明';
var age = 20;
var message = `你好, ${name}, 你今年${age}岁了!`;  //注意外面是反斜点
alert(message);

var s = 'Hello, world!';
s.length; // 13
s[0]; // 'H'
s[6]; // ' '
s[7]; // 'w'
s[12]; // '!'
s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined  ，，，，跟python有点像

var s = 'Test';
s[0] = 'X';
alert(s); // s仍然为'Test'   ，，，，，，字符串不可变，same as oc.


toUpperCase()
toLowerCase()
indexOf()
substring()
slice()
charAt()
substr()


'a'.toUpperCase()//对大小写敏感
'A'.toLowerCase()

s.indexOf('world'); // 返回7
s.indexOf('World'); // 没有找到指定的子串，返回-1
//search();  给字符差索引
var str = "abcdefg";
console.log(str.search(/bc/)); //1
console.log(str.indexOf("bc")); //1


var s = 'hello, world'
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
s.substring(7); // 从索引7开始到结束，返回'world'

var a = 'abdb'
a.slice(0,3)//"abd",这个同样可以用用于数组,，字符串；类似于切片,,,substring效果与slice等价，不包括后面的数，两个参数都是索引


slice 可以用于数组，和字符串,类似python中的切片，可以用负数
splice 用于数组,arrayObject.splice(index,howmany,item1,.....,itemX);
substring 用于字符串

name.charAt(n)获取name定义的字符串的第n个字符；
name.substr(0,2)获取name定义的字符串中,从第0个字符开始取，取2个字符；stringObject.substr(start,length)


+-----------------------------------------------------------------字符和数字的互转：
parseInt('3')
//3
String(3)
//"3"
Number('3')
//3
'8'-0
//8


// 字符串转为number类型，-0或者-'0',或者*1，/1
> s
'1234455'
> s-'0'
1234455
> s-0
1234455

typeof("23252"*1)
"number"

// number转为字符串类型，+'0'
> typeof(3+0)
'number'
> typeof(3+'0')
'string'
> 3+'0'
'30'

trim():移除前导空格、尾随空格和行终止符的原始字符串;IE9以下的版本没有trim()方法
' a hh \n'.trim()
"a hh"

// 把一个Array中的空字符串删掉，可以这么写：
'use strict';
var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
r; // ['A', 'B', 'C']

toString()
arr=[1,2,3,4,5]
arr.toString()//"1,2,3,4,5";用于数组
s='1234678ageg'
s.toString()//"1234678ageg";用于字符串
String(3) // "3"

> s
'1234455'
> s.split('')
[ '1', '2', '3', '4', '4', '5', '5' ]

> b=[1,2,3,4,5]
[ 1, 2, 3, 4, 5 ]
> b.join('')
'12345'

+-----------------------------------------------------------------数组Array：
var arr1 = [1,2,3];
console.log(arr1);
console.log(arr1.valueOf());  //结果同直接打印数组
console.log(typeof arr1.valueOf()); //Object

var c =new Array()
var c =new Array(1,2,3)
var d=[4,5,6]
var f=[[],[],[]];

var arr = [1, 2, 3];
arr.length; // 3
arr.length = 6;
arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length = 2;
arr; // arr变为[1, 2]


var arr=[10,20,30,'xyz']
arr.indexOf('10')//元素10的索引0，与字符串保持一致
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];//slice方法对应字符串的substring()
arr.slice(0,3) //从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
arr.slice(3)//从索引3开始到结束: ['D', 'E', 'F', 'G']
arr.slice(-2) //倒数两个[ 'F', 'G' ]


push(), pop()                 //数组末尾
unshift(),shift()             //数组开头
sort()                        //改变原数组值，返回新数组值
reverse()                     //改变原数组值，返回新数组值
concat()                      //不改变原来数组的值
join()                        //不改变原来数组的值
slice()                       //不改变原来数组的值
splice()                      //改变原数组值，返回删除的元素数组
indexOf()                     //从左往右找，返回找到的第一个索引，找不到返回-1
lastindexOf()                 //从右往左找，返回找到的第一个索引，找不到返回-1
every(), some(),forEach()     //forEach()是ES5.1引进
filter()

// push,unshift执行的结果返回新数组长度
// pop,shift返回弹出的元素

arr2[arr2.length] = 9; arr2[arr2.length] = 10; //添加元素,用length总比最大的下标大1

var arr = ["关羽","张飞","刘备"];
var str1 = arr.join(); //关羽,张飞,刘备
var str2 = arr.join(" ");//关羽 张飞 刘备
var str3 = arr.join("");//关羽张飞刘备
var str4 = arr.join("&");//关羽&张飞&刘备

//输入字符A的ASCII码
console.log('A'.charCodeAt());

自定义sort():
--------------
var arr= [ 'three', 'two', 'one', 'tarr'];
var arr= [6,6,3,590,434,4];  //自带sort对数字排序不准确

arr.sort(function(a,b){
    if (typeof a == 'string' && typeof b == 'string') {  //需要注意的是这儿的string不能用new String('')来定义
        x1=a.toUpperCase();
        x2=b.toUpperCase();        
    }else if(typeof a == 'number' && typeof b == 'number') {
        x1=a;
        x2=b;       
    }
    if (x1>x2) {
        return 1;
    }else if(x1<x2){
        return -1;
    }else
    return 0;
})


var arr2 = [7,6,15,4,13,2,1];
console.log(arr2.sort(function (a,b) {
    return a-b; //a-b:升序，b-a：降序
}));


sort():
--------------
> arr
[ 'three', 'two', 'one' ]
> arr.sort()
[ 'one', 'three', 'two' ]
> arr
[ 'one', 'three', 'two' ]


reverse():
--------------
> var arr = ['one', 'two', 'three'];
undefined
> arr.reverse()
[ 'three', 'two', 'one' ]
> arr
[ 'three', 'two', 'one' ]


indexOf(),lastindexOf():
--------------------------
var arr = ["a","b","c","d","c","b","a"];
console.log(arr.indexOf("a"));//0
console.log(arr.indexOf("x"));//-1
console.log(arr.lastIndexOf("a"));//6
console.log(arr.lastIndexOf("x"));//-1


every(), some():
--------------------
every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。
some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。

var arr = [ 1, 2, 3, 4, 5, 6 ];
console.log( arr.some( function( item, index, array ){ 
    console.log( 'item=' + item + ',index='+index+',array='+array ); 
    return item > 3; 
})); 
console.log( arr.every( function( item, index, array ){ 
    console.log( 'item=' + item + ',index='+index+',array='+array ); 
    return item > 3; 
}));

forEach()：
----------------------   
var a = [1, 5, 8, 6, 7];
sum=0;
a.forEach(function (element, index, array) {
    // console.log(element);
    sum=sum+element;
    return sum;
});
console.log(sum);

filter()：
-----------------
var arr1 = arr.filter(function (ele,index,array) {
    if(ele.length>1){
        return true;
    }
    return false;
});

类似：
arr.map(function callback(currentValue, index, array)

// 清空数组：
var arr = [1,3];
arr.splice(0);
arr.length=0; //伪数组？
arr = [];
console.log(arr);

+-----------------------------------------------------------------函数的定义：
var d = 1;e =2;f=3; //(分号相当于换行)
//第一种
function fn1(){
    console.log("我是第一种定义方法！");
}

//第二种(匿名函数)
var fn2 = function (){
    console.log("我是第二种定义方法！");
}

//第三种
var fn3 = new Function("console.log('我是第三种定义方法！')");


变量提升：
var num = 10;
fun();
function fun(){
    //变量声明提升    值提升变量名，不提升变量值。var num;
    console.log(num);
    var num = 20;
    var b = 9;
    console.log(b);
}
执行的结果为：
undefined
9

//隐式全局变量
function fn(){
    //b和c都是隐式全局变量
    var a = b = c = 1;
    //e和f都是隐式全局变量(分号相当于换行)
    var d = 1;e =2;f=3;
    //g和i都不是隐式全局变量
    var g = 1,h= 2,i=3;
}
a,g,h,i在函数外都不能访问；

var a = 18;   //先编辑，再运算，就近原则
f1();
function f1(){
    var b=9;
    console.log(a);
    console.log(b);
    var a = '123';
}
a为undefined，b为9

+-----------------------------------------------------------------对象object, if , while ：

delete xiaoming.school
'toString' in xiaoming   // true
xiaoming.hasOwnProperty('toString') //false

条件语句加括号
JavaScript把null、undefined、0、NaN和空字符串''视为false，其他值一概视为true

var height = parseFloat(prompt('请输入身高(m):'));
var weight = parseFloat(prompt('请输入体重(kg):'));
var userinput = window.prompt('商品价格')；

退出条件用break

for ..in 
for (var key in o) {    //用于对象属性
    if (o.hasOwnProperty(key)) {
        alert(key); // 'name', 'age', 'city'
    }
}

var a = ['A', 'B', 'C'];  //用书数组
for (var i in a) {    //对应元素用of
    alert(i); // '0', '1', '2'
    alert(a[i]); // 'A', 'B', 'C'
}

var a = '1234456';  //用于字符串
for(var i of a){
    console.log(i);
}


+-----------------------------------------------------------------typeof,prototype,setInterval,trim:
typeof
包装对象
parseInt,parseFloat
Number(),Boolean()
typeof 123; // 'number'
typeof NaN; // 'number'
typeof 'str'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof Math.abs; // 'function'

typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'

function fn(){
    console.log(1);
}
typeof fn; //function
typeof fn(); //undefined

typeof返回的是字符串
判断是否是数组Array要使用Array.isArray(arr)；
判断null请使用myVar === null；
判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
函数内部判断某个变量是否存在用typeof myVar === 'undefined'。

任何对象都有toString()方法吗？null和undefined就没有！
// number.toString()
123.toString(); // SyntaxError
123..toString(); // '123', 注意是两个点！
(123).toString(); // '123'

Array.prototype.show = function (){
    for (var i = 0; i < this.length; i++) {
        document.write(this[i]+"<br>");
    }
}

// 检测输入为空的的代码；
inp.onblur = function () {
        var val = this.value;
        if(trim(val) == ""){
            return alert("不能输入为空！");
        }
        alert("成功！:"+trim(val)+"1");
    }
function trim(str){
    return str.replace(/(^\s+)|(\s+$)/g,"");
}

//下面为去左右空格，左空格，右空格函数, js中需要定义这几个函数
String.prototype.trim=function(){
   return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.ltrim=function(){
   return this.replace(/(^\s*)/g,"");
}
String.prototype.rtrim=function(){
   return this.replace(/(\s*$)/g,"");
}

String.prototype.qu=function (){var char=this.replace(/\s+/g,"");}
去除所有空格:   
str=str.replace(/\s+/g,"");       
去除两头空格:   
str=str.replace(/^\s+|\s+$/g,"");
去除左空格：
str=str.replace( /^\s*/, '');
去除右空格：
str=str.replace(/(\s*$)/g, "");

outerHTML、innerText不是W3C标准


setTimeout(fun,1000);
clearTimeout()

t=setTimeout("count();",1000);//1000ms后调用自己
clearTimeout(t);

t1=setInterval("start();",1000);//间隔1000ms调用start();
//看样子setInterval执行function时，会每次把function中执行的结果存储起来。。。
//所以function中也不需要写return对应的值..
clearInterval(t1);

onclick,ondbclick,oncontextmenu,onfocus,onblur：

outerHTML、innerText不是W3C标准


+-----------------------------------------------------------------JSON .parse() .stringify() regExp
// json和对象的区别在于，json的key必须带有""

//制作一个json,然后输出
var json = {};
console.log(json);
for(var i=1;i<5;i++){
    json[i] = i*10;
}
console.log(json);
//输出：
for(var k in json){
    console.log(json[k]);
}


//json字符串转obj:
var jb=eval("("+jsonstr+")");//将json字符串转换为obj;
eval("var jb="+jsonstr); //也可以用这个表达式转换json为obj;


JSON.parse();
JSON.parse('{"name":"小明","age":14}', function (key, value) {
    // 把number * 2:
    if (key === 'name') {
        return value + '同学';
    }
    return value;
}); // Object {name: '小明同学', age: 14}

//obj转json字符串：
JSON.stringify(jsonobj);

JSON.stringify(xiaoming, ['name', 'skills'], '  '); // 第二个参数为过滤，第三个为格式化；
toJSON:精准化控制序列化
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};


正则表达式：
-----------------
匹配国内电话号码：
\d{3}-\d{8}|\d{4}-\d{7}
验证手机号：
/^((13[0-9])|(15[^4,\D])|(18[0,5-9]))\d{8}$/ 
1.验证QQ号：/^[1-9][0-9]{4,}$/
2.验证手机号：/^((13[0-9])|(15[^4,\D])|(18[0-9]))\d{8}$/
3.验证邮箱：/^[\w\-\.]+\@[\w]+\.[\w]{2,4}$/
4.验证座机号：/^0\d{2}-\d{8}$|^0\d{3}-\d{7}$/
5.验证用户名：/^[a-zA-Z0-9_-]{3,16}$/
6.验证密码：/^[a-zA-Z0-9_-]{6,18}/

匹配中国邮政编码：[1-9]\d{5}(?!\d)
评注：中国邮政编码为6位数字
匹配身份证：\d{15}|\d{18}
评注：中国的身份证为15位或18位
匹配ip地址：\d+\.\d+\.\d+\.\d+
评注：提取ip地址时有用
匹配密码： /^[a-zA-Z0-9_-]{6,18}/

/^([a-z].*[A-Z])|([A-Z].*[a-z])$/   
区分大小写英文字母

/^([a-z].*[0-9])|([A-Z].*[0-9])|[0-9].*[a-zA-Z]$/   
带有字母 和 数字 

/^[A-Za-z0-9]+[_][A-Za-z0-9]*$/   
字母数字中间 加有下划线（想要什么中括号中加）

匹配中文字符的正则表达式：
 /^[\u4e00-\u9fa5]{2,4}$/

匹配双字节字符(包括汉字在内)：
[^\x00-\xff]
评注：可以用来计算字符串的长度（一个双字节字符长度计2，ASCII字符计1）

匹配空白行的正则表达式：\n\s*\r
评注：可以用来删除空白行

匹配HTML标记的正则表达式：< (\S*?)[^>]*>.*?|< .*? />
评注：网上流传的版本太糟糕，上面这个也仅仅能匹配部分，对于复杂的嵌套标记依旧无能为力

匹配首尾空白字符的正则表达式：^\s*|\s*$
评注：可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式

匹配Email地址的正则表达式：
/^[\w\-\.]+\@[\w]+\.[\w]{2,4}$/
评注：表单验证时很实用

匹配网址URL的正则表达式：[a-zA-z]+://[^\s]*
评注：网上流传的版本功能很有限，上面这个基本可以满足需求

匹配帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：
/^[a-z0-9_-]{3,16}$/评注：表单验证时很实用

//g,i,m;
regExp.test()
'a,b;; c  d'.split(/[\s\,\;]+/); //正则分割

var re = /^(\d{3})-(\d{3,8})$/;// 用()表示的就是要提取的分组
re.exec('010-12345'); // ['010-12345', '010', '12345']
re.exec('010 12345'); // null

Date.parse('2015-06-24T19:49:22.875+08:00'); //1435146562875
var d = new Date(1435146562875); //Wed Jun 24 2015 19:49:22 GMT+0800 (中国标准时间) {}
d.toLocaleString();  // "2018/12/5 下午3:10:49"
d.toUTCString();  // "Wed, 05 Dec 2018 07:10:49 GMT"


// 获取时间戳，世界各地的时间戳是一致的；Date.now()获取的是时间戳
if (Date.now) {
    alert(Date.now()); // 老版本IE没有now()方法
} else {
    alert(new Date().getTime()); //1543994245316
}


function test(){
   var sum=0;
   for(var i=0;i<arguments.length;i++){
       sum+=arguments[i];
      }
      return sum;
}

<a href="javascript:selectAll();">全选</a> 
// BOM设置显示隐藏
document.getElementById("content").style.visibility="visible" //通过样式
document.getElementById("div1").style.display=type; //通过display
style.overflow
style.left/top


bt01.onclick=function(){}

oncontextmenu, onclick, onmouseover, onmouseout, onmouseup, onmousedown, onmousemove, onmouseenter, onmouseleave
onload, onunload, beforeunload
window.onresize, window.onscroll
onchange
onreadystatechange
onfocus, onblur
onrest, onsubmit
onscroll

ontouchstart, ontouchmove, ontouchend
keyup, keypress, keydown

event.KeyCode

case中用||不生效？--要分开写
case 65:
case 37:

// 事件：
function fun()
{
       var cx=event.clientX;    //相对于当前标签的X坐标
       var cy=event.clientY;
       var sx=event.screenX;   //相对于屏幕的X坐标
       var sy=event.screenY;
       var msg="clientX="+cx+" clientY="+cy+" screenX="+sx+" screenY="+sy;
       div.innerHTML=msg;     //设置div里面的内容
       window.status=msg;      //设置状态条内容
       window.document.title=msg;  //设置当前文档的标题
       img.style.top=cy+10;
       img.style.left=cx+10;
}

移动端图片跟随效果：
ontouchstart,ontouchmove,ontouchend
var touch = e.touches[0];
<script>
      var con=document.getElementById("content");
      var img=document.getElementById("img1");
      con.ontouchstart=function(e){
           var touch=e.touches[0];  //参数e是返回用户点的坐标
           var x=touch.clientX;
           var y=touch.clientY;
           img.style.left=x;
           img.style.top=y;
      }
      con.ontouchmove=function(e){
           e.preventDefault();  //把缺省的事件给屏蔽掉,否在会在微信里面发生滚动，这是H5里面都会有这句代码
           var touch=e.touches[0];//返回第一次触摸点的坐标
           var x=touch.clientX;
           var y=touch.clientY;
           img.style.left=x;
           img.style.top=y;
      }
      con.ontouchend=function(e){
            var touch=e.touches[0];
            img.style.left=0;
            img.style.top=0;
      }
</script>

onblur, onfocus
var us=document.f1.username.value
document.f1.password.focus();
var cityindex=document.forms[0].city.selectedIndex;

//打开一个新窗口
open("http://news.baidu.com/");
//关闭窗口
close();
document.bgColor=s; //设置dom背景颜色
window.location.href="https://www.baidu.com/"; // window可以省略不写；


test.call(dog); //call函数的使用
-----------------------
<html>  
<head>  
 <meta http-equiv="content-type" content="text/html; charset=UTF-8">  
  <script type="text/javascript" language="javascript">  
      
    var dog = {  //dog相当于一个obj;
      name: "kaka",
      age: 23
    };  
    function test() {  
       window.alert(this.name);  
    }   
   test.call(dog); //等价于dog.test();  
    
  </script>  
</head>  
<body>  
</body>  
</html> 


\ 可以折行

显示/隐藏：
content.style.visibility="hidden/visible"
content.style.display="block/none"
content.style.overflow="hidden/visible/scroll/auto"


parentNode 获取父节点
childNodes 获取所有子节点, children
firstChild 获取第一个子节点, firstElementChild
lastChild 获取最后一个子节点, lastElementChild
nextSibling 获取下一个同胞节点, nextElementSibling
previousSibling 获取上一个同胞节点, previousElementSibling

.nodeName
.nodeValue

document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()

var price=parseInt(Math.random()*100+200)  //随机取200到300间的整数,parsefloat
var userinput=window.prompt("请输入商品价格","");


==================================================================================

练习：不要使用JavaScript内置的parseInt()函数，利用map和reduce操作实现一个string2int()函数：
解答：
// 关键点是在map中用字符串做数字运算达到隐式转型，这里用 x-0
// x*1也可以，但是会被评论吞掉，x+0不行，会被进行字符串连接
function stingToint(s){
    return s.split('').map(x => x-0).reduce((x,y) => x*10 + y);
}

练习:请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。
解答：
// 先都小写，然后首字母大写，用正则表达式更简洁
function normolize(arr){
    return arr.map(x => x.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())); // 这个L什么鬼？L通前面的x
}


str.replace():
------------------------
name = "Doe, John";
name.replace(/(\w+)\s*, \s*(\w+)/, "$2 $1"); 
// "John Doe"

name = '"a", "b"';
name.replace(/"([^"]*)"/g, "'$1'"); 
// "'a', 'b'"

name = 'aAV BbD cfGGc';
uw=name.replace(/\b\w+\b/g, function(word){
  return word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase();}
  );
// "Aav Bbd Cfggc"


练习：小明希望利用map()把字符串变成整数，他写的代码很简洁：
解答：
// parseInt(value,index)，放map中下标从0自增，导致后面NaN（廖老师给的参考链接有详细说明），修正如下：
'use strict';
var arr = ['1', '2', '3'];
var r;
r = arr.map(Number);//用arr.map(parseInt)的结果为：1, NaN, NaN


----------------------------------
函数内部声明变量的时候，一定要用var，不用的话，实际声明了一个全局变量
function f1(){
    n=999;
}
f1();
alert(n); // 999



统计频次
----------------------------------
var arr5 = ["c","a","x","a","x","a"];

var json = {};
// console.log(json["aflasdfasdf"]); //不存在的属性，返回值是undefined。
for(var i=0;i<arr5.length;i++){
    //判断数组中的元素，在json中是否存在属性值。
    if(json[arr5[i]]){
        json[arr5[i]] += 1;
    }else{
        json[arr5[i]] = 1;
    }
}
console.log(json);


数组去重：
----------------------------------
function fn(array){
    var newArr = [];
    for(var i=0;i<array.length;i++){
        //开闭原则
        var bool = true;
        //每次都要判断新数组中是否有旧数组中的值。
        for(var j=0;j<newArr.length;j++){
            if(array[i] === newArr[j]){
                bool = false;
            }
        }
        if(bool){
            newArr[newArr.length] = array[i];
        }
    }
    return newArr;
}
// 另外一种方法：
arr.filter(function(element,index,self){
  return self.indexOf(element)===index;
})

///////////////////////////////////////////////////////

//    width和height
//    offset带border
//    scroll不带border，内容的宽高
//    client不带border


//    top和left
//    offset距离父系盒子带有定位的盒子之间的距离
//    scroll被卷去的部分的距离
//    clientborder的宽高


//    clientX和clientY
//    event调用，鼠标距离浏览器的可视区域的距离


offset
-----------------
offsetHeight = height+padding+border;(不加margin)
offsetWidth = width+padding+border;(不加margin)

offsetLeft/offsetTop = 有定位(relative,fixed,absolute)的父级或者自身级别元素左边距+左边padding;(不加border)//返回为xx,只读
而.style.left/.style.top只能获取他自己的行内样式style中left的值，没有则返回为空"";//返回为xx px,可以读写;

offsetParent =返回带有定位的父级元素；//带标签输出


scroll
-----------------
1、scrollWidth/scrollHeight 内容的宽高
IE67可以比盒子小。 IE8+火狐谷歌不能比盒子小
// scrollWidth和scrollHeight不包括border和margin

// scrollWidth = width + padding;

// 高度有一个特点：如果文字超出了盒子，高度为超出盒子的内容的高。不超出是盒子本身高度
// IE8以下，不包括IE8为盒子本身内容的多少。


2、scrollLeft/scrollTop
被卷去的左侧和头部（浏览器无法显示的左/头部）
一般调用 document.body.scrollTop:
window.scroll = function(){}
window.onLoad = function(){}

兼容性：
未声明 DTD（谷歌只认识他）（IE9+认识他）document.body.scrollTop
已经声明DTD（IE678只认识他）(IE9+任何时候)
   document.documentElement.scrollTop
火狐/谷歌/ie9+以上支持的(不管DTD)
   window.pageYOffset

document.compatMode  // CSS1Compat



pc版本scroll
function scroll(){
  return {
      "top": window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
      "left":  window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
  }
}


/*
详细解释如下
if(window.pageYOffset !== undefined){ // 火狐/谷歌/ie9+以上支持的(不管DTD), 因为 window.pageYOffset默认的是0, 所以这里需要判断
    return {
        "top": window.pageYOffset,
        "left": window.pageXOffset
    };
}else if(document.compatMode === "CSS1Compat"){ // 来判断有没有声明DTD,CSS1Compat：已经声明， BackCompat  未声明
    return {
        "top": document.documentElement.scrollTop, // 已经声明DTD（IE678只识别CSS1Compat ）(IE9+任何时候)
        "left": document.documentElement.scrollLeft
    };
}else{  // 未声明 DTD（谷歌只认识他）（IE9+认识他）
    return {
        "top": document.body.scrollTop,
        "left": document.body.scrollLeft
    };
}
*/
缓动动画
----------------------------------
window.scrollTo(x,y);浏览器显示区域跳转到指定的坐标

rocket.onclick = function(){
  clearInterval(timer);
  timer = setInterval(function(){
    var step = (target-scrollTopVal)/10;
    step = step>0?Math.ceil(step):Math.floor(step);
    scrollTopVal = scrollTopVal +step;
    //显示区域移动
    window.scrollTo(0,scrollTopVal); // window.scrollTo(x,y);浏览器显示区域跳转到指定的坐标
    if (scrollTopVal === 0) {
      clearInterval(timer);
    }
  },15)   
}


olLiArr[i].onclick = function () {
    target = ulLiArr[this.index].offsetTop;
    clearInterval(timer);
    //利用缓动动画原理实现屏幕滑动
    timer = setInterval(function () {
        //(1).获取步长
        var step = (target-scrollTopVal)/10;
        //(2).二次处理步长
        step = step>0?Math.ceil(step):Math.floor(step);
        //(3).屏幕滑动
        scrollTopVal = scrollTopVal + step;
        window.scrollTo(0,scrollTopVal);
        //(4).清除定时器
        if(Math.abs(target-scrollTopVal)<=Math.abs(step)){
            window.scrollTo(0,target);
            clearInterval(timer);
        }
    },15);
}

事件：
--------------------------------------
document.onclick = function (event) {
    //兼容写法
   event = event || window.event;
   console.log(event);
   console.log(event.timeStamp);
   console.log(event.bubbles);
   console.log(event.button);
   console.log(event.pageX); //body,测试在一个page中，和client的值一致；但只要有滚动，那么两个值不一样，准确的应用page,不用client
   console.log(event.pageY);
   console.log(event.screenX); //屏幕
   console.log(event.screenY);
   console.log(event.target); 
   console.log(event.type);
   console.log(event.clientX); //浏览器可视区
   console.log(event.clientY);
}

event = event || window.event;
//鼠标在页面的位置 = 被卷去的部分+可视区域部分。
var pagey = event.pageY || scroll().top + event.clientY;
var pagex = event.pageX || scroll().left + event.clientX;


//不清楚下面这句啥子意思？当物体在被移动后进行的赋值
window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();


client
------------------------
//不包括margin和border
//padding+width
console.log(box.clientWidth);
//clientTop获取的是上border的宽度
console.log(box.clientTop);


//获取屏幕可视区域的宽高
------------------------
window.onresize = function () {
    document.title = client().width + "    "+ client().height;
}

function client(){
    if(window.innerHeight !== undefined){
        return {
            "width": window.innerWidth,
            "height": window.innerHeight
        }
    }else if(document.compatMode === "CSS1Compat"){
        return {
            "width": document.documentElement.clientWidth,
            "height": document.documentElement.clientHeight
        }
    }else{
        return {
            "width": document.body.clientWidth,
            "height": document.body.clientHeight
        }
    }
}



//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////面向对象编程////////////////////////////////////////


// 面向对象编程：


//类名的第一个字母要大写，以便区分普通函数：

/************************************************/
// 对象遍历用for...in

1.通过现成对象创建：
// obj.__proto__在低版本中的IE不支持
var robot = {
    name: 'Robot',
    height: 1.6,
    run: function () {
        console.log(this.name + ' is running...');
    }
};
// 赋值robot到student
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

var xiaoming = {
    name: '小明'
};

xiaoming.__proto__ = Student; // 小明从student中继承下来,集成的一种写法：xiaoming.__proto__ === Student;

// obj.__proto__在低版本中的IE不支持

xiaoming.name; // '小明'
xiaoming.run(); // 小明 is running...


/************************************************/

// 通过函数使用object.creat()
arr ----> Array.prototype ----> Object.prototype ----> null
foo ----> Function.prototype ----> Object.prototype ----> null

2.Object.create()
// 方法可以传入一个原型对象，并创建一个基于该原型的新对象，但是新对象什么属性都没有
// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;  //通过函数创建的对象需要返回对象；而通过构造函数，就不要return 对象
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
xiaoming.__proto__ === Student; // true

/************************************************/

3.构造函数：new, 不需要return this

function Student(name) {
    this.name = name;
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!

// 用new Student()创建的对象还从原型上获得了一个constructor属性，它指向函数Student本身：跟oc中的isa指针是一样的

/*
xiaoming.constructor === Student.prototype.constructor; // true
Student.prototype.constructor === Student; // true

Object.getPrototypeOf(xiaoming) === Student.prototype; // true
xiaoming instanceof Student; // true
*/


// 对象上共同的东西，就写在原型上就可以了，能节省内存空间
function Student(name) {
    this.name = name;
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

//或者如下这样写：
function alterview(){
    ....
}
Student.prototype.hello = alterview;
// 按照约定，构造函数首字母应当大写，而普通函数首字母应当小写，这样，一些语法检查工具如jslint将可以帮你检测到漏写的new。


// 一般常用的编程模式像这样：
function Student(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {})
}

/************************************************/

JavaScript的原型继承实现方式就是：

1.定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；
2.借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；
3.继续在新的构造函数的原型上定义新方法。

function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent, Student);

// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

//+---------------------------------------------
// class 继承：ES6才支持

/*class不能普及用，现在用还早了点，因为不是所有的主流浏览器都支持ES6的class。
如果一定要现在就用上，就需要一个工具把class代码转换为传统的prototype代码，可以试试Babel（https://babeljs.io/）这个工具。*/
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {  //注意这儿没有function;
        alert('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
xiaoming.hello();

//+---------------------------------------------
class PrimaryStudent extends Student {  //继承用extend
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}


////////////////////////////////////////////////////////////////////////////////////// BOM操作
浏览器对象：BOM  //+-----Browser Object Model
/************************************************/


                             window
                                |
    +-------------------------------------------------+
    |          |          |             |             |
location    document    history      screen        status


window : alert, prompt, setTimeout, open, close
location: href
document: ...


// 获取浏览器窗口的大小：（除去工具栏，菜单栏，状态栏）
'use strict';
// 可以调整浏览器窗口大小试试:
console.log('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);

window对象有innerWidth和innerHeight属性，可以获取浏览器窗口的内部宽度和高度。
还有一个outerWidth和outerHeight属性，可以获取浏览器窗口的整个宽高。



navigator对象表示浏览器的信息，最常用的属性包括：

navigator.appName：浏览器名称；  // chrome为：appName = Netscape
navigator.appVersion：浏览器版本；
navigator.language：浏览器设置的语言；
navigator.platform：操作系统类型；
navigator.userAgent：浏览器设定的User-Agent字符串。

// navigator的信息可以很容易地被用户修改
// 针对不同的浏览器正确的方法是充分利用JavaScript对不存在属性返回undefined的特性，直接用短路运算符||计算：
var width = window.innerWidth || document.body.clientWidth;


screen
screen对象表示屏幕的信息，常用的属性有：

screen.width：屏幕宽度，以像素为单位；
screen.height：屏幕高度，以像素为单位；
screen.colorDepth：返回颜色位数，如8、16、24。
screen.pixelDepth:色彩深度, 大于8
screen.orientation


location
location对象表示当前页面的URL信息。例如，一个完整的URL：

//------http://www.example.com:8080/path/index.html?a=1&b=2#TOP

可以用location.href获取。
要获得URL各个部分的值，可以这么写：
location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'
要加载一个新页面，可以调用location.assign()。如果要重新加载当前页面，调用location.reload()方法非常方便。

'use strict'
if (confirm('重新加载当前页' + location.href + '?')) {
    location.reload();
} else {
    location.assign('/'); // 设置一个新的URL地址
}



document:DOM
----------------------------
document对象表示当前页面。
document的title属性是从HTML文档中的<title>xxx</title>读取的，但是可以动态改变
document.title = '努力学习JavaScript!';  // 这是title
document.getElementByID, ByTagName
document.cookie; //读取当前页面的cookie
为了确保安全，服务器端在设置Cookie时，应该始终坚持使用httpOnly


history:
back()
forward()
新手开始设计Web页面时喜欢在登录页登录成功时调用history.back()，试图回到登录前的页面。这是一种错误的方法。
任何情况，你都不应该使用history这个对象了。



///////////////////////////////////////////////////////////////////////////////////// DOM操作

DOM方法操作：
/************************************************/

选择方法一：
document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()

document.getElementById()可以直接定位唯一的一个DOM节点。
document.getElementsByTagName()和document.getElementsByClassName()总是返回一组DOM节点。



// 先定位ID为'test-div'的节点，再返回其内部所有class包含red的节点：
var reds = document.getElementById('test-div').getElementsByClassName('red');

// 获取节点test下的所有直属子节点:
var cs = test.children;

// 获取节点test下第一个、最后一个子节点：
var first = test.firstElementChild;
var last = test.lastElementChild;


选择方法二：
使用querySelector()和querySelectorAll()
注意：低版本的IE<8不支持querySelector和querySelectorAll。IE8仅有限支持：

// 通过querySelector获取ID为q1的节点：
var q1 = document.querySelector('#q1');
// 通过querySelectorAll获取q1节点内的符合条件的所有节点：
var ps = q1.querySelectorAll('div.highlighted > p')


/*
严格地讲，我们这里的DOM节点是指Element，但是DOM节点实际上是Node，
在HTML中，Node包括Element、Comment、CDATA_SECTION等很多种，以及根节点Document类型，
但是，绝大多数时候我们只关心Element，也就是实际控制页面结构的Node，其他类型的Node忽略即可。
根节点Document已经自动绑定为全局变量document。
*/

///***********************************更新：
1.innerHTML
用innerHTML时要注意，是否需要写入HTML。如果写入的字符串是通过网络拿到了，要注意对字符编码来避免XSS攻击；

2.innerText或textContent
两者的区别在于读取属性时，innerText不返回隐藏元素的文本，而textContent返回所有文本。另外注意IE<9不支持textContent
innerText 打印标签之间的纯文本信息，会将标签过滤掉，低版本的火狐浏览器不支持，而是支持textContent

function getText(element) {  
    if(element.innerText) {  
        return element.innerText;   //IE8及之前的浏览器支持，现在两者都支持  
    }else {  
        return element.textContent; //低版本的火狐支持  
    }  
}  


3.修改css：
// 获取<p id="p-id">...</p>
var p = document.getElementById('p-id');
// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px';  //js不能识别font-size,这儿用驼峰命名法
p.style.paddingTop = '2em';

//document.getElementById(id).attribute=new value

document.getElementById("p1").innerHTML="New text!";
document.getElementById("image").src="landscape.jpg";


//document.getElementById(id).style.property=new style

document.getElementById("p2").style.color="blue";


///***********************************插入：
1. appendChild
// 相当于移动了
<!-- HTML结构 -->
<p id="js">JavaScript</p>
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>

/// 命令：
var
    js = document.getElementById('js'),
    list = document.getElementById('list');
list.appendChild(js);


<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="js">JavaScript</p>
</div>


cloneNode() + appendChild;

var ulNewLi = ul.children[0].cloneNode(true); //true表示深度复制,包括下面的文本和元素的事件！
ul.appendChild(ulNewLi)；

replaceWith(): 将所有匹配的元素都替换为指定的HTML 或DOM 元素
replaceAll(): 颠倒了的replaceWith()方法.

2. createElement + appendChild:

// 创建：
var
    list = document.getElementById('list'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell);

<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="haskell">Haskell</p>
</div>

//用createTextNode也能创建？
<div id="div1">
<p id="p1">这是一个段落</p>
<p id="p2">这是另一个段落</p>
</div>
<script>
var para=document.createElement("p");
var node=document.createTextNode("这是新段落。");
para.appendChild(node);
    var element=document.getElementById("div1");
element.appendChild(para);
</script>


// 举个例子，下面的代码动态创建了一个<style>节点，然后把它添加到<head>节点的末尾，这样就动态地给文档添加了新的CSS定义：

var d = document.createElement('style');
d.setAttribute('type', 'text/css');
d.innerHTML = 'p { color: red }';
document.getElementsByTagName('head')[0].appendChild(d);


3.insertBefore

parentElement.insertBefore(newElement, referenceElement);，子节点会插入到referenceElement之前。


// 假定我们要把Haskell插入到Python之前：
<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>
可以这么写：

var
    list = document.getElementById('list'),
    ref = document.getElementById('python'),
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.insertBefore(haskell, ref);


新的HTML结构如下：

<!-- HTML结构 -->
<div id="list">
    <p id="java">Java</p>
    <p id="haskell">Haskell</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>


// 拿到所有的children:
var
    i, c,
    list = document.getElementById('list');
for (i = 0; i < list.children.length; i++) {
    c = list.children[i]; // 拿到第i个子节点
}


///***********************************删除：

1.removeChild
// 删除后还在内存中，可以随时添加到别的位置

// 拿到待删除节点:
var self = document.getElementById('to-be-removed');
// 拿到父节点:
var parent = self.parentElement;
// 删除:
var removed = parent.removeChild(self);
removed === self; // true

// 注意: children属性是一个只读属性，并且它在子节点变化时会实时更新。



//////////////////////////////////////////////////////////// 操作表单：

/************************************************/

获取值：
// <input type="text" id="email">
var input = document.getElementById('email');
input.value; // '用户输入的值'

// <label><input type="radio" name="weekday" id="monday" value="1"> Monday</label>
// <label><input type="radio" name="weekday" id="tuesday" value="2"> Tuesday</label>
var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
mon.value; // '1'
tue.value; // '2'
mon.checked; // true或者false，  获取用户是否勾选的值
tue.checked; // true或者false


设置值：
设置值和获取值类似，对于text、password、hidden以及select，直接设置value就可以：

// <input type="text" id="email">
var input = document.getElementById('email');
input.value = 'test@example.com'; // 文本框的内容已更新
对于单选框和复选框，设置checked为true或false即可。


HTML5控件：
HTML5新增了大量标准控件，常用的包括date、datetime、datetime-local、color等，它们都使用<input>标签：
<input type="date" value="2015-07-01">
<input type="datetime-local" value="2015-07-01T02:03:04">
<input type="color" value="#ff0000">
不支持HTML5的浏览器无法识别新的控件，会把它们当做type="text"来显示。



提交表单：
/************************************************/
方式一：
通过<form>元素的submit()方法提交一个表单，例如，响应一个<button>的click事件，在JavaScript代码中提交表单：

<!-- HTML -->
<form id="test-form">
    <input type="text" name="test">
    <button type="button" onclick="doSubmitForm()">Submit</button>
</form>

<script>
function doSubmitForm() {
    var form = document.getElementById('test-form');
    // 可以在此修改form的input...
    // 提交form:
    form.submit();
}
</script>



方式二：
是响应<form>本身的onsubmit事件，在提交form时作修改：

<!-- HTML -->
<form id="test-form" onsubmit="return checkForm()">
    <input type="text" name="test">
    <button type="submit">Submit</button>
</form>

<script>
function checkForm() {
    var form = document.getElementById('test-form');
    // 可以在此修改form的input...
    // 继续下一步:
    return true;
}
</script>

注意要return true来告诉浏览器继续提交，
如果return false，浏览器将不会继续提交form，这种情况通常对应用户输入有误，提示用户错误信息后终止提交form。



////////////////////////----<input type="hidden">的用法：MD5 password

// 
<!-- HTML -->
<form id="login-form" method="post" onsubmit="return checkForm()">
    <input type="text" id="username" name="username">
    <input type="password" id="input-password">   //这个没有name属性
    <input type="hidden" id="md5-password" name="password">
    <button type="submit">Submit</button>
</form>

<script>
function checkForm() {
    var input_pwd = document.getElementById('input-password');
    var md5_pwd = document.getElementById('md5-password');
    // 把用户输入的明文变为MD5:
    md5_pwd.value = toMD5(input_pwd.value);
    // 继续下一步:
    return true;
}
</script>

note:
注意到id为md5-password的<input>标记了name="password"，而用户输入的id为input-password的<input>没有name属性。

没有name属性的<input>的数据不会被提交。


操作文件：
/************************************************/
注意：
当一个表单包含<input type="file">时，表单的enctype必须指定为multipart/form-data，method必须指定为post，
浏览器才能正确编码并以multipart/form-data格式发送表单的数据。

出于安全考虑，浏览器只允许用户点击<input type="file">来选择本地文件，用JavaScript对<input type="file">的value赋值是没有任何效果的。
当用户选择了上传某个文件后，JavaScript也无法获得该文件的真实路径：

当上传文件的时候，可以对文件的扩展名进行检查，防止无效的文件上传；
var f = document.getElementById('test-file-upload');
var filename = f.value; // 'C:\fakepath\test.png'
if (!filename || !(filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.gif'))) {
    alert('Can only upload image file.');
    return false;
}


File API
/************************************************/
随着HTML5的普及，新增的File API允许JavaScript读取文件内容，获得更多的文件信息。

HTML5的File API提供了File和FileReader两个主要对象，可以获得文件信息并读取文件。


var
    fileInput = document.getElementById('test-image-file'),
    info = document.getElementById('test-file-info'),
    preview = document.getElementById('test-image-preview');
// 监听change事件:
fileInput.addEventListener('change', function () {
    // 清除背景图片:
    preview.style.backgroundImage = '';
    // 检查文件是否选择:
    if (!fileInput.value) {
        info.innerHTML = '没有选择文件';
        return;
    }
    // 获取File引用:
    var file = fileInput.files[0];
    // 获取File信息:
    info.innerHTML = '文件: ' + file.name + '<br>' +
                     '大小: ' + file.size + '<br>' +
                     '修改: ' + file.lastModifiedDate;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        alert('不是有效的图片文件!');
        return;
    }
    // 读取文件:
    var reader = new FileReader();
    reader.onload = function(e) {
        var
            data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'            
        preview.style.backgroundImage = 'url(' + data + ')';
    };
    // 以DataURL的形式读取文件:
    reader.readAsDataURL(file);
});

回调：
JavaScript中，执行多任务实际上都是异步调用：

reader.readAsDataURL(file);
就会发起一个异步操作来读取文件内容。因为是异步操作，
所以我们在JavaScript代码中就不知道什么时候操作结束，因此需要先设置一个回调函数：

reader.onload = function(e) {
    // 当文件读取完成后，自动调用此函数:
};





DOM  AJAX:
/************************************************/

'use strict';
function success(text) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = text;
}

function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}

var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();// 新建XMLHttpRequest对象，现代浏览器
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP'); // 新建Microsoft.XMLHTTP对象，对于低版本的IE;
}

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 请求是否成功完成
        // 判断响应结果:
        if (request.status === 200) {  // 是否有成功的响应
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/api/categories');
request.send();

alert('请求已发送，请等待响应...');

//注意：
XMLHttpRequest对象的open()方法有3个参数，第一个参数指定是GET还是POST，第二个参数指定URL地址，第三个参数指定是否使用异步，默认是true，所以不用写。
注意，千万不要把第三个参数指定为false，否则浏览器将停止响应，直到AJAX请求完成。如果这个请求耗时10秒，那么10秒内你会发现浏览器处于“假死”状态。
最后调用send()方法才真正发送请求。GET请求不需要参数，POST请求需要把body部分以字符串或者FormData对象传进去。



readyState
存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
0: 请求未初始化
1: 服务器连接已建立
2: 请求已接收
3: 请求处理中
4: 请求已完成，且响应已就绪



安全限制(跨域):
/************************************************/

默认情况下，JavaScript在发送AJAX请求时，URL的域名必须和当前页面完全一致。

// 跨域：
用JavaScript无法请求外域（就是其他网站）的URL方法：
一是通过Flash插件发送HTTP请求；
二是通过在同源域名下架设一个代理服务器来转发，JavaScript负责把请求发送到代理服务器：
'/proxy?url=http://www.sina.com.cn'
方式三：JSONP，它有个限制，只能用GET请求，并且要求返回JavaScript
JSONP通常以函数调用的形式返回，例如，返回JavaScript内容如下：
foo('data');

方式四：CORS
如果浏览器支持HTML5，那么就可以一劳永逸地使用新的跨域策略：CORS了。
CORS全称Cross-Origin Resource Sharing，是HTML5规范定义的如何跨域访问资源。

成功与否：Access-Control-Allow-Origin是否包含本域;

跨域能否成功，取决于对方服务器是否愿意给你设置一个正确的Access-Control-Allow-Origin
这种跨域请求，称之为“简单请求”。
简单请求包括GET、HEAD和POST（POST的Content-Type类型
仅限application/x-www-form-urlencoded、multipart/form-data和text/plain），并且不能出现任何自定义头（例如，X-Custom: 12345），通常能满足90%的需求。
由于以POST、PUT方式传送JSON格式的数据在REST中很常见，所以要跨域正确处理POST和PUT请求，服务器端必须正确响应OPTIONS请求。



Promise:（ES6）
/************************************************/

Promise有各种开源实现，在ES6中被统一规范，由浏览器直接支持。先测试一下你的浏览器是否支持Promise：

'use strict';
new Promise(function () {});
console.log('支持Promise!');


canvas:
/************************************************/
var canvas = document.getElementById('test-canvas');
if (canvas.getContext) {  // 在使用Canvas前，用canvas.getContext来测试浏览器是否支持Canvas：
    console.log('你的浏览器支持Canvas!');
} else {
    console.log('你的浏览器不支持Canvas!');
}


'use strict';

var
    canvas = document.getElementById('test-shape-canvas'),
    ctx = canvas.getContext('2d');
// 绘图；
ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
ctx.fillStyle = '#dddddd'; // 设置颜色
ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
// 利用Path绘制复杂路径:
var path=new Path2D();
path.arc(75, 75, 50, 0, Math.PI*2, true);
path.moveTo(110,75);
path.arc(75, 75, 35, 0, Math.PI, false);
path.moveTo(65, 65);
path.arc(60, 65, 5, 0, Math.PI*2, true);
path.moveTo(95, 65);
path.arc(90, 65, 5, 0, Math.PI*2, true);
ctx.strokeStyle = '#0000ff';
ctx.stroke(path);

// 绘制文本：
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.shadowColor = '#666666';
ctx.font = '24px Arial';
ctx.fillStyle = '#333333';
ctx.fillText('带阴影的文字', 20, 40);

/////////////////////////////////////// JQuery----start ////////////////////////////////////

JQuery:
/************************************************/

//原生js，入口函数。页面上所有内容加载完毕，会执行。
//不仅文本加载完毕，而且图片也要加载完毕，在执行函数。
window.onload = function () {
    alert(1);
}

//jquery的入口函数。  1.文档加载完毕，图片不加载的时候就可以执行这个函数。
$(document).ready(function () {
    alert(1);
})


// jquery的入口函数。  2.文档加载完毕，图片不加载的时候就可以执行这个函数。
$(function () {
    alert(1);
});


//jquery的入口函数。  3.文档加载完毕，图片也加载完毕的时候在执行这个函数。
$(window).ready(function () {
    alert(1);
})

$(document).ready(function (){}
$(function () {
    // init...
});

$(function(){
    $('.box p').html('this is JQ modified content!').css('background-color','green');
});


    
JQ 过滤器（Filter）
----------------------------
过滤器一般不单独使用，它通常附加在选择器上，帮助我们更精确地定位元素。观察过滤器的效果：
/*
<!-- HTML结构 -->
<div class="testing">
    <ul class="lang">
        <li class="lang-javascript">JavaScript</li>
        <li class="lang-python">Python</li>
        <li class="lang-lua">Lua</li>
    </ul>
</div>
*/
$('ul.lang li'); // 选出JavaScript、Python和Lua 3个节点
$('ul.lang li:first-child'); // 仅选出JavaScript
$('ul.lang li:last-child'); // 仅选出Lua
$('ul.lang li:nth-child(2)'); // 选出第N个元素，N从1开始
$('ul.lang li:nth-child(even)'); // 选出序号为偶数的元素
$('ul.lang li:nth-child(odd)'); // 选出序号为奇数的元素

$("li").css("color","#afafaf"); 
$("li:first").css("color","red"); 
$("li:last").css("color","green");
$("li:odd").css("color","blue");
$("li:eq(3)").css("color","red");
$("tr:odd").css("background-color","#7f7f7f");
$("tr:even").css("background-color","#afafaf"); 

// contains包含文本内容
$("div:contains('学习')").css("border","1px solid red");
// has 是否包含另外 jQuery包装集
$("div:has('p')").css("color","red");


/*
<!-- HTML结构 -->
<ul class="lang">
    <li class="js dy">JavaScript</li>
    <li class="dy">Python</li>
    <li id="swift">Swift</li>
    <li class="dy">Scheme</li>
    <li name="haskell">Haskell</li>
</ul>

*/

// 查找
find()
var ul = $('ul.lang'); // 获得<ul>
var dy = ul.find('.dy'); // 获得JavaScript, Python, Scheme
var swf = ul.find('#swift'); // 获得Swift
var hsk = ul.find('[name=haskell]'); // 获得Haskell

// 父节点
.parent()
var a = $('#swift').parent('.red'); // 获得Swift的上层节点<ul>，同时传入过滤条件。如果ul不符合条件，返回空jQuery对象


// 同级节点
.next()
.pre()

swift.prev(); // Python
swift.prev('.dy'); // Python


// 过滤
// 和函数式编程的map、filter类似，jQuery对象也有类似的方法。
filter():
var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
var a = langs.filter('.dy'); // 拿到JavaScript, Python, Scheme

var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
langs.filter(function () {
    return this.innerHTML.indexOf('S') === 0; // 返回S开头的节点 特别注意函数内部的this被绑定为DOM对象，不是jQuery对象
}); // 拿到Swift, Scheme


map():
map().get()
var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
var arr = langs.map(function () {
    return this.innerHTML;
}).get(); // 用get()拿到包含string的Array：['JavaScript', 'Python', 'Swift', 'Scheme', 'Haskell']

如果一个jQuery对象如果包含了不止一个DOM节点，first()、last()和slice()方法可以返回一个新的jQuery对象，把不需要的DOM节点去掉：

var langs = $('ul.lang li'); // 拿到JavaScript, Python, Swift, Scheme和Haskell
var js = langs.first(); // JavaScript，相当于$('ul.lang li:first-child')
var haskell = langs.last(); // Haskell, 相当于$('ul.lang li:last-child')
var sub = langs.slice(2, 4); // Swift, Scheme, 参数和数组的slice()方法一致


// 获取表单，变成key-value,然后序列化；
var elts = {};
form=$('#test-form :text, #test-form :password, #test-form input:checked, #test-form select')

for(var i=0;i<form.length;i++){
    elts[form[i].name]=form[i].value
}
json=JSON.stringify(elts)

或者：
var elts = {};
$('#test-form :text, #test-form :password, #test-form input:checked, #test-form select').map(function () {
    elts[this.name] = this.value;
});
json = JSON.stringify(elts);


each:
jQuery(function () {
    //设置不一样的盒子透明度逐渐递增
    $("ul li").each(function (index,element) {
        //console.log(index+"---"+element.tagName);
        $(element).css("opacity",(index+1)/10);
    });
});


JQ修改DOM:
---------------------------------------
修改Text和HTML:
/*
<ul id="test-ul">
    <li class="js">JavaScript</li>
    <li name="book">Java &amp; JavaScript</li>
</ul>
*/

// 有的浏览器只有innerHTML，有的浏览器支持innerText，有了jQuery对象，不需要考虑浏览器差异了，全部统一操作！
$('#test-ul li[name=book]').text(); // 'Java & JavaScript'  // text()参数为空就是获取，有参数就是设置；
$('#test-ul li[name=book]').html(); // 'Java &amp; JavaScript'




JQ修改css：
/************************************************/
$('#test-css li.dy>span').css('background-color', '#ffd351').css('color', 'red');

var div = $('#test-div');
div.css('color'); // '#000033', 获取CSS属性
div.css('color', '#336699'); // 设置CSS属性
div.css('color', ''); // 清除CSS属性

$("div").css({"width":"50px",
             "height":"50px"});  //设置两个属性

jqdiv.css({"width": 100,"height":100,"background-color":"red","margin":10});

为了和JavaScript保持一致，CSS属性可以用'background-color'和'backgroundColor'两种格式。


css()方法将作用于DOM节点的style属性，具有最高优先级。如果要修改class属性，可以用jQuery提供的下列方法：

var div = $('#test-div');
div.hasClass('highlight'); // false， class是否包含highlight
div.addClass('highlight'); // 添加highlight这个class
div.removeClass('highlight'); // 删除highlight这个class
div.toggleClass('highlight'); // 切换class,在原来的和highlight样式之间切换



显示和隐藏DOM:
---------------------------------
要隐藏一个DOM，我们可以设置CSS的display属性为none，利用css()方法就可以实现。
不过，要显示这个DOM就需要恢复原有的display属性，这就得先记下来原有的display属性到底是block还是inline还是别的值。


jQuery直接提供show()和hide()方法:
var a = $('a[target=_blank]');
a.hide(); // 隐藏
a.show(); // 显示
连写：
$("#center li").eq($(this).index()).show().siblings("li").hide();



JQ和DOM互转：
/************************************************/
// 详细见JQ文件夹
$("#bt03").click(
    function()
    {//DOM对象转为JQuery
       var nowp=document.getElementById("p2"); 
       var jq_nowp=$(nowp);//$(DOM对象)
       jq_nowp.html("哈哈哈");
    }
    );   
$("#bt04").click(function(){
    var nowp=$("#p2")[0];//对象[0] 从JQ对象中获取DOM对象
    nowp.innerHTML="我是DOM改的!!!!";
})  ;   

//DOM转JQuery
var box = document.getElementById("box");
var jqbox = $("#box");
//jquery对象转换成js对象
jqdiv[0].style.backgroundColor = "black";
jqdiv.get(4).style.backgroundColor = "pink";




JQ获取DOM信息：
// 无需要针对浏览器做适配
/***********************************/
// 浏览器可视窗口大小:
$(window).width(); // 800
$(window).height(); // 600

// HTML文档大小:
$(document).width(); // 800
$(document).height(); // 3500

// 某个div的大小:
var div = $('#test-div');
div.width(); // 600
div.height(); // 300
div.width(400); // 设置CSS属性 width: 400px，是否生效要看CSS是否有效
div.height('200px'); // 设置CSS属性 height: 200px，是否生效要看CSS是否有效

// 坐标值获取：
$(selector).offset();
$(selector).offset({left:100, top: 150});

// 作用：获取相对于其最近的具有定位的父元素的位置。
// 获取，返回值为对象：{left:num, top:num}
$(selector).position(); // 只能获取，不能设置。


// 可获取可以设置
$(selector).scrollTop(100);
$(selector).scrollLeft(100);

// 表单处理
attr()和removeAttr()
方法用于操作DOM节点的属性：

// <div id="test-div" name="Test" start="1">...</div>
var div = $('#test-div');
div.attr('data'); // undefined, 属性不存在
div.attr('name'); // 'Test'
div.attr('name', 'Hello'); // div的name属性变为'Hello'
div.removeAttr('name'); // 删除name属性
div.attr('name'); // undefined



prop()方法和attr()类似，
但是HTML5规定有一种属性在DOM节点中可以没有值，只有出现与不出现两种，例如：

<input id="test-radio" type="radio" name="test" checked value="1">
等价于：
<input id="test-radio" type="radio" name="test" checked="checked" value="1">

attr()和prop()对于属性checked处理有所不同：
var radio = $('#test-radio');
radio.attr('checked'); // 'checked'
radio.prop('checked'); // true

prop()返回值更合理一些。不过，用is()方法判断更好：
var radio = $('#test-radio');
radio.is(':checked'); // true

类似的属性还有selected，处理时最好用is(':selected')。




JQ操作表单:
/***********************************/
$(selector).attr("title", "传智播客");
$(selector).attr("title");
$(selector).removeAttr("title");
$(selector).val();
$(selector).val("具体值");
$(selector).text();
$(selector).text("我是内容");


对于表单元素，jQuery对象统一提供val()方法获取和设置对应的value属性：

/*
    <input id="test-input" name="email" value="">
    <select id="test-select" name="city">
        <option value="BJ" selected>Beijing</option>
        <option value="SH">Shanghai</option>
        <option value="SZ">Shenzhen</option>
    </select>
    <textarea id="test-textarea">Hello</textarea>
*/
var
    input = $('#test-input'),
    select = $('#test-select'),
    textarea = $('#test-textarea');

input.val(); // 'test'
input.val('abc@example.com'); // 文本框的内容已变为abc@example.com

select.val(); // 'BJ'
select.val('SH'); // 选择框已变为Shanghai

textarea.val(); // 'Hello'
textarea.val('Hi'); // 文本区域已更新为'Hi'
可见，一个val()就统一了各种输入框的取值和赋值的问题。


JQ修改DOM:
/***********************************/
$(selector).append($node);
/*
不常用：
$(selector).appendTo(node);
$(selector).prepend(node);
$(selector).after(node);
$(selector).before(node);
*/
$(selector).html('<span>传智播客</span>');
$(selector).html();
$(selector).empty(); //清空所有
$(selector).html("");
$(selector).remove(); //移除第一个
$(selector).clone();

// append()
//增加（节点不在文章当中）或者移动（节点已经存在文章当中）：

<div id="test-div">
    <ul>
        <li><span>JavaScript</span></li>
        <li><span>Python</span></li>
        <li><span>Swift</span></li>
    </ul>
</div>

var ul = $('#test-div>ul');
ul.append('<li><span>Haskell</span></li>');  // 除此之外可以用jq html,DOM的方法为appendChild();



// append()还可以传入原始的DOM对象，jQuery对象和函数对象：

// 创建DOM对象:
var ps = document.createElement('li');
ps.innerHTML = '<span>Pascal</span>';
// 添加DOM对象:
ul.append(ps);

// 添加jQuery对象:
ul.append($('#scheme'));

// 添加函数对象:
ul.append(function (index, html) {
    return '<li><span>Language - ' + index + '</span></li>';
});


// append()把DOM添加到最后，prepend()则把DOM添加到最前。

// 同级节点可以用after()或者before()方法。
var js = $('#test-div>ul>li:first-child');
js.after('<li><span>Lua</span></li>');

// 删除节点；（一个或者多个）
var li = $('#test-div>ul>li');
li.remove(); // 所有<li>全被删除


//-------------------------------实践：

<!--需求：请再添加Pascal、Lua和Ruby，然后按字母顺序排序节点：-->
<!DOCTYPE html>
<html>  
    <head>  
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">  
    <title>JQ添加内容和排序</title>  
<script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery/jquery-3.1.1.min.js"></script>
    </head>   
<body>   
<div id="test-div">
    <ul>
        <li><span>JavaScript</span></li>
        <li><span>Python</span></li>
        <li><span>Swift</span></li>
    </ul>
</div>

</body> 
<script language="JavaScript" type="text/javascript">   
var ul = $("#test-div>ul");
ul.append("<li><span>Pascal</span></li>","<li><span>Lua</span></li>","<li><span>Ruby</span></li>");
var li = $('#test-div>ul li'); //取出来的每个元素是DOM对象
// var arr = obj.find("li");
//此处用JavaScript的innerText来取值是说明JQ.find之后获得是JavaScript对象？用text()或html()会报错。
li.sort((x,y) => {return (x.innerText>y.innerText)? 1:-1}); 
ul.append(li);

/*
var ul = $('#test-div>ul');
ul.append('<li><span>Pascal</span></li>');
ul.append('<li><span>Lua</span></li>');
ul.append('<li><span>Ruby</span></li>');

var arr = [];
var span = $('#test-div>ul span');
for (var i = 0; i<span.length; i++){
arr.push(span[i].innerText); //这儿不能用html()，因为是一个dom对象，可以用innerHtml,innerText
}
arr.sort();
for (var i = 0; i<span.length; i++){
 span[i].innerText = arr[i];
}
*/
</script>   
</html>


JQ事件:
/***********************************/
// 不需要对不同的浏览器的差异，Jq已经帮忙给适配了；
/* HTML:
 *
 * <a id="test-link" href="#0">点我试试</a>
 *
 */

// 获取超链接的jQuery对象:
var a = $('#test-link');
a.on('click', function () {  // on方法用来绑定一个事件，我们需要传入事件名称和对应的处理函数。
    alert('Hello!');
});

// 简写：
a.click(function () {
    alert('Hello!');
});


jQuery能够绑定的事件主要包括：

鼠标事件
click: 鼠标单击时触发；
dblclick：鼠标双击时触发；
mouseenter：鼠标进入时触发；
mouseleave：鼠标移出时触发；
mousemove：鼠标在DOM内部移动时触发；
hover：鼠标进入和退出时触发两个函数，相当于mouseenter加上mouseleave。

键盘事件
键盘事件仅作用在当前焦点的DOM上，通常是<input>和<textarea>。

keydown：键盘按下时触发；
keyup：键盘松开时触发；
keypress：按一次键后触发。

其他事件
focus：当DOM获得焦点时触发；
blur：当DOM失去焦点时触发；
change：当<input>、<select>或<textarea>的内容改变时触发；
submit：当<form>提交时触发；
ready：当页面被载入并且DOM树完成初始化后触发。

文档就绪事件：
/*
$(document).on('ready', function () {
    $('#testForm).on('submit', function () {
        alert('submit!');
    });
});

//进化：
$(document).ready(function () {
// on('submit', function)也可以简化:
$('#testForm).submit(function () {
    alert('submit!');
});
});
*/

// 进化：
$(function () {
    // init...
});


可以反复绑定事件处理函数，它们会依次执行：

$(function () {
    console.log('init A...');
});
$(function () {
    console.log('init B...');
});
$(function () {
    console.log('init C...');
});


// 事件参数：

$(function () {
    $('#testMouseMoveDiv').mousemove(function (e) {  // e是事件；
        $('#testMouseMoveSpan').text('pageX = ' + e.pageX + ', pageY = ' + e.pageY);
    });
});

JQ bind函数用法：
/***********************************/
$(document).ready(function(){
    $("#bt01").bind("click",function(){
        $("#divmsg").hide();
    });
    //也可以如下写
    // $("#bt01").click(function(){
    //     $("#divmsg").hide();
    // });
    $("#bt02").bind("click",function(){
        $("#divmsg").show();
    })
    $("#bt03").bind("click",function(){
        $("#divmsg").html("你好 baidu"); 
    });
});



取消绑定：
/***********************************/
一个已被绑定的事件可以解除绑定，通过off('click', function)实现：

function hello() {
    alert('hello!');
}

a.click(hello); // 绑定事件

// 10秒钟后解除绑定:
setTimeout(function () {
    a.off('click', hello);
}, 10000);



// note:需要特别注意的是，下面这种写法是无效的：

// 绑定事件:
a.click(function () {
    alert('hello!');
});

// 解除绑定:
a.off('click', function () {
    alert('hello!');
});
这是因为两个匿名函数虽然长得一模一样，但是它们是两个不同的函数对象，off('click', function () {...})无法移除已绑定的第一个匿名函数。

为了实现移除效果，可以使用off('click')一次性移除已绑定的click事件的所有处理函数。

同理，无参数调用off()一次性移除已绑定的所有类型的事件处理函数。


事件触发条件：
/***********************************/
// 监控文本框的内容改动：

var input = $('#test-input');
input.change(function () {
    console.log('changed...');
});

// 但是，如果用JavaScript代码去改动文本框的值，将不会触发change事件：

var input = $('#test-input');
input.val('change it!'); // 无法触发change事件
input.change(); // 直接调用无参数的change(),手动来触发
// input.change()相当于input.trigger('change')，它是trigger()方法的简写。

浏览器安全限制:
/***********************************/
在浏览器中，有些JavaScript代码只有在用户触发下才能执行，例如，window.open()函数：

// 无法弹出新窗口，将被浏览器屏蔽:
$(function () {
    window.open('/');
});


// 作业：

选项：全选，全不选，反选：



JQ动画:
/***********************************/
//括号中的参数为：毫秒，或者slow ,fast
/* slow：600ms、normal：400ms、fast：200ms */
show() / hide() / toggle()
slideUp() / slideDown() / slidetoggle()
fadeIn() / fadeOut()  /fadeToggle()
上面函数接受两个参数，例：show(speed, function(){})
fadeTo()
// 用法有别于其他动画效果
// 第一个参数表示：时长
// 第二个参数表示：不透明度值，取值范围：0-1
$(selector).fadeTo(1000, .5); //  0全透，1全不透
// 第一个参数为0，此时作用相当于：.css(“opacity”, .5);
$(selector).fadeTo(0, .5);
stop()
$(selector).stop(clearQueue,jumpToEnd);

// 自定义动画：
animate()  // 接受三个参数：动画，时间，回调

var div = $('#test-animate');
div.animate({
    opacity: 0.25,
    width: '256px',
    height: '256px'
}, 3000, function () {
    console.log('动画已结束');
    // 恢复至初始状态:
    $(this).css('opacity', '1.0').css('width', '128px').css('height', '128px');
});


// 串行动画：
var div = $('#test-animates');
// 动画效果：slideDown - 暂停 - 放大 - 暂停 - 缩小
div.slideDown(2000)
   .delay(1000)  //暂停
   .animate({
       width: '256px',
       height: '256px'
   }, 2000)
   .delay(1000)
   .animate({
       width: '128px',
       height: '128px'
   }, 2000);

为什么有的动画没有效果
你可能会遇到，有的动画如slideUp()根本没有效果。这是因为jQuery动画的原理是逐渐改变CSS的值，如height从100px逐渐变为0。
但是很多不是block性质的DOM元素，对它们设置height根本就不起作用，所以动画也就没有效果。

此外，jQuery也没有实现对background-color的动画效果，用animate()设置background-color也没有效果。这种情况下可以使用CSS3的transition实现动画效果。



JQ  AJAX:
/************************************************/

jQuery在全局对象jQuery（也就是$）绑定了ajax()函数，可以处理AJAX请求。ajax(url, settings)函数需要接收一个URL和一个可选的settings对象，常用的选项如下：

async：是否异步执行AJAX请求，默认为true，千万不要指定为false；

method：发送的Method，缺省为'GET'，可指定为'POST'、'PUT'等；

contentType：发送POST请求的格式，默认值为'application/x-www-form-urlencoded; charset=UTF-8'，也可以指定为text/plain、application/json；

data：发送的数据，可以是字符串、数组或object。如果是GET请求，data将被转换成query附加到URL上，如果是POST请求，根据contentType把data序列化成合适的格式；

headers：发送的额外的HTTP头，必须是一个object；

dataType：接收的数据格式，可以指定为'html'、'xml'、'json'、'text'等，缺省情况下根据响应的Content-Type猜测



var jqxhr = $.ajax('/api/categories', {
    dataType: 'json'
}).done(function (data) {
    ajaxLog('成功, 收到的数据: ' + JSON.stringify(data));
}).fail(function (xhr, status) {
    ajaxLog('失败: ' + xhr.status + ', 原因: ' + status);
}).always(function () {
    ajaxLog('请求完成: 无论成功或失败都会调用');
});


//get: jq会自动拼接url
var jqxhr = $.get('/path/to/resource', {
    name: 'Bob Lee',
    check: 1
});

//post:
var jqxhr = $.post('/path/to/resource', {
    name: 'Bob Lee',
    check: 1
});

//getJSON:
由于JSON用得越来越普遍，所以jQuery也提供了getJSON()方法来快速通过GET获取一个JSON对象：

var jqxhr = $.getJSON('/path/to/resource', {
    name: 'Bob Lee',
    check: 1
}).done(function (data) {
    // data已经被解析为JSON对象了
});

//安全限制:
jQuery的AJAX完全封装的是JavaScript的AJAX操作，所以它的安全限制和前面讲的用JavaScript写AJAX完全一样。

如果需要使用JSONP，可以在ajax()中设置jsonp: 'callback'，让jQuery实现JSONP跨域加载数据。


编写jQ插件：
/************************************************/
//通过扩展$.fn对象实现的
// highlight插件：
$.fn.highlight1 = function () {
    // this已绑定为当前jQuery对象:
    this.css('backgroundColor', '#fffceb').css('color', '#d85030');
    return this; //为什么最后要return this;？因为jQuery对象支持链式操作，我们自己写的扩展方法也要能继续链式下去
}

$('span.hl').highlight1().slideDown(); //链式传递

//--------------------------------------------
// 方法名中要自己传递参数；options为传入对象
$.fn.highlight2 = function (options) {
    // 要考虑到各种情况:
    // options为undefined
    // options只有部分key
    var bgcolor = options && options.backgroundColor || '#fffceb';   // a||b = a;
    var color = options && options.color || '#d85030';
    this.css('backgroundColor', bgcolor).css('color', color);
    return this;
}
// 调用：
$('#test-highlight2 span').highlight2({
    backgroundColor: '#00f8e6',
    color: '#ffffff'
});
//--------------------------------------------


jQuery提供的辅助方法$.extend(target, obj1, obj2, ...)，它把多个object对象的属性合并到第一个target对象中，遇到同名属性，总是使用靠后的对象的值，也就是越往后优先级越高：

// 把默认值和用户传入的options合并到对象{}中并返回:
var opts = $.extend({}, {
    backgroundColor: '#00a8e6',
    color: '#ffffff'
}, options);

//--------------------------------------------
// highlight最终版：
$.fn.highlight = function (options) {
    // 合并默认值和用户设定值:
    var opts = $.extend({}, $.fn.highlight.defaults, options);
    this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
    return this;
}

// 程序设定默认值:
$.fn.highlight.defaults = {
    color: '#d85030',
    backgroundColor: '#fff8de'
}
// 用户设定默认值：或者缺省处理；
$.fn.highlight.defaults.color = '#fff';
$.fn.highlight.defaults.backgroundColor = '#000';
// 调用：
$('xx').highlight({
    color: '#d85037'
});
//--------------------------------------------
最终，我们得出编写一个jQuery插件的原则：

给$.fn绑定函数，实现插件的代码逻辑；
插件函数最后要return this;以支持链式调用；
插件函数要有默认值，绑定在$.fn.<pluginName>.defaults上；
用户在调用时可传入设定值以便覆盖默认值。

/////////////////////////////////////// JQuery----end ////////////////////////////////////


// 异常：
try {
    ...
} catch (e) {
    ...
} finally {
    ...
}

错误类型:
JavaScript有一个标准的Error对象表示错误，还有从Error派生的TypeError、ReferenceError等错误对象。我们在处理错误时，可以通过catch(e)捕获的变量e访问错误对象：

try {
    ...
} catch (e) {
    if (e instanceof TypeError) {
        alert('Type error!');
    } else if (e instanceof Error) {
        alert(e.message);
    } else {
        alert('Error: ' + e);
    }
}
使用变量e是一个习惯用法，也可以以其他变量名命名，如catch(ex)。



抛出错误:
抛出错误使用throw语句。
JavaScript允许抛出任意对象，包括数字、字符串。但是，最好还是抛出一个Error对象。
var r, n, s;
try {
    s = prompt('请输入一个数字');
    n = parseInt(s); // 接收进来的是一个字符串？跟python中的raw_input类似？
    if (isNaN(n)) {
        throw new Error('输入错误');
    }
    // 计算平方:
    r = n * n;
    console.log(n + ' * ' + n + ' = ' + r);
} catch (e) {
    console.log('出错了：' + e);
}


当我们用catch捕获错误时，一定要编写错误处理语句：不然捕获错误没有意义；
var n = 0, s;
try {
    n = s.length;
} catch (e) {
    console.log(e);
}
console.log(n);


错误传播：
如果在一个函数内部发生了错误，它自身没有捕获，错误就会被抛到外层调用函数，如果外层函数也没有捕获，
该错误会一直沿着函数调用链向上抛出，直到被JavaScript引擎捕获，代码终止执行。


涉及到异步代码，无法在调用时捕获，原因就是在捕获的当时，回调函数并未执行；

// 如下： 调用setTimeout()的时候，没有抛出异常，要捕获printTime()的错误，需要在外层捕获；
function printTime() {
    throw new Error();
}

try {
    setTimeout(printTime, 1000);
    console.log('done');
} catch (e) {
    console.log('error');
}




/////////////////////////////////////// new start 2018.11.21 ////////////////////////////////////

cookie编程：
// refer:https://www.cnblogs.com/Darren_code/archive/2011/11/24/Cookie.html
---------------------------------
document.cookie = "username=Darren;path=/;domain=qq.com"  //同域名之间访问，/问放跟目录下
document.cookie = "username=Darren;secure" // 设置为secure时，是https传输

<html>
<head></head>
<body onLoad="checkCookie()">
</body>
<script type="text/javascript">

function setCookie(c_name,value,expiredays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+ ((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
    console.log(document.cookie);
}

function getCookie(c_name){
    if (document.cookie.length>0){ 
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1){ 
            c_start=c_start + c_name.length+1 ;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) {
              c_end=document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
          } 
      }else{
        return "";
      }    
}

function checkCookie(){
  username=getCookie('username')
  if (username!=null && username!=""){
    alert('Welcome again '+username+'!');
  }else {
    username=prompt('Please enter your name:',"");
    if (username!=null && username!=""){
      setCookie('username',username,365);
    }
  }
}

function clearCookie(name) {  
    setCookie(name, "", -1);  
}
</script>
</html>
/*
refer:https://blog.csdn.net/l1028386804/article/details/51691035
+-----------------------------------------------------
//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//清除cookie  
function clearCookie(name) {  
    setCookie(name, "", -1);  
}  
function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
checkCookie(); 
+-----------------------------------------------------
*/


ajax编程
+-----------------------------------------------------------

<html>
    <head>
        <meta charset="utf-8">
        <title>AJAX</title>
    </head>
    <body>
        手机号 ：<input type="text" id="mobile"><br>
        <input id="bt01" type="button" value="查询">
    <script>
    var xmlHttp;
    function geturl()
    {
        //创建请求对象
        createXMLHttpRequest();
        //发送请求
        var url="http://www.h5edu.cn/Public/weixin/test01.php";
        var param="tel="+document.getElementById("mobile").value;
        send(url,"get",param);
        //调用回调函数处理返回结果 
    }
    //创建请求对象封装
    function createXMLHttpRequest() 
    {
        if(window.ActiveXObject)
        {
            xmlHttp=new ActiveXObject("Microsoft.XMLHTTP"); //微软浏览器
        }else{
            xmlHttp=new XMLHttpRequest();  //google,safari浏览器，手机浏览器
        }
    }
    //发送网络请求封装
    function send(url,method,param)
    {xmlHttp.open(method,url,true);
     xmlHttp.onreadystatechange=callback;//设置回调
     xmlHttp.send(param);
    }
    //回调函数封装
    function callback()
    {
        var result;
        if(xmlHttp.readyState==4)
        {
            if(xmlHttp.status==200)//返回状态码
            {
                result=xmlHttp.responseText;
                alert(result);
            }
        }
    }
    document.getElementById("bt01").onclick=geturl;
    </script>
    </body>
</html>


/////////////////////////////////////////////////////////////////////////////////////////

DOM事件监听：
https://github.com/chenxiaochun/blog/issues/9
document.hidden//mac 缩小到状态栏，或者滑动到第二屏幕不能监听到；
document.visibilityState
// visible：当页面没有被最小化，并且是可见状态时
// hidden：当页面已经被最小化，或者不是可见状态时，或者是操作系统处于锁屏状态时
// prerender：页面已经被预渲染完毕，还没有展示给用户时
// unloaded：页面没有从内存中被加载出来时
document.addEventListener('visibilitychange', function(){
  if(document.hidden){
    console.log('hidden')
    clearInterval(timer1);
 }else{
    console.log('visible')
    timer1 = setInterval(autoplay,1000);
  }
}, false);



不过事件监听一般用这个监听器：
requestAnimationFrame

var progress = 0;
//回调函数
function render() {
    progress += 1; //修改图像的位置
    if (progress < 100) {
           //在动画没有结束前，递归渲染
           window.requestAnimationFrame(render);
    }
}
//第一帧渲染
window.requestAnimationFrame(render);

https://github.com/darius/requestAnimationFrame
兼容优化后：
if (!Date.now)
    Date.now = function() { return new Date().getTime(); };
(function() {
    'use strict';
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                   || window[vp+'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function() { callback(lastTime = nextTime); },
                              nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());


js动画：
-------------------
1.平移动画：
// 动画函数.（移动元素，目标位置）
function animate(ele,target){
  clearInterval(ele.timer);
  var speed = target>ele.offsetLeft?10:-10;
  ele.timer = setInterval(function(){
    var distance = target - ele.offsetLeft;
    ele.style.left = ele.offsetLeft + speed + "px";
    if (Math.abs(distance)<Math.abs(speed)) {
      ele.style.left = target+"px";
      clearInterval(ele.timer);
    }
  },10)
}
2.弹簧动画：
//缓动动画封装
function animate(ele,target) {
    //要用定时器，先清定时器
    //一个萝卜一个坑儿，一个元素对应一个定时器
    clearInterval(ele.timer);
    //定义定时器
    ele.timer = setInterval(function () {
        //获取步长
        //步长应该是越来越小的，缓动的算法。
        var step = (target-ele.offsetLeft)/10;
        //对步长进行二次加工(大于0向上取整,最小单位为1px;小于0项下取整,最小单位为-1px)
        step = step>0?Math.ceil(step):Math.floor(step);
        //动画原理： 目标位置 = 当前位置 + 步长
        ele.style.left = ele.offsetLeft + step + "px";
        //检测缓动动画有没有停止
        // console.log(1);
        if(Math.abs(target-ele.offsetLeft)<=Math.abs(step)){
            //处理小数赋值
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },30);
}



//兼容方法获取元素样式
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}

// 弹簧动画封装属性：参数变为3个
function animate(ele,attr,target){
    //先清定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //四部
        var leader = parseInt(getStyle(ele,attr)) || 0;
        //1.获取步长
        var step = (target - leader)/10;
        //2.二次加工步长
        step = step>0?Math.ceil(step):Math.floor(step);
        leader = leader + step;
        //3.赋值
        ele.style[attr] = leader + "px";
         //4.清除定时器
        if(Math.abs(target-leader)<=Math.abs(step)){
            ele.style[attr] = target + "px";
            clearInterval(ele.timer);
        }

    },25);
}


animate(div,json1, function () {
    animate(div,json2, function () {
        animate(div,json1);
    });
});
// 动画封装，多个参数，直接传json字段；
function animate(ele, json, fn){
  clearInterval(ele.timer);
  ele.timer = setInterval(function(){
    //开闭原则
    var bool = true;
    for(var k in json){
      //原位置
      var leader = parseInt(getStyle(ele,k)) || 0;
      var step = (json[k] -leader)/10;
      step = step>0?Math.ceil(step):Math.floor(step);
      leader = leader + step;
      ele.style[k] = leader +'px';
      if (json[k] !== leader) {
        bool = false;
      }
    }
    if (bool) {
      clearInterval(ele.timer);
      if(fn){
          fn(); //fn 为回调函数
      }
    }
  },25);
}

href="javascript:void(0);"
--------------------------
可以避免跳到的空连接
href="javascript:void(0);"这句话的意思，是执行js函数，而不是跳链接，函数内容为返回为空；
<li><a href="javascript:void(0);">企业文化</a></li>
<li><a href="javascript:;">其他事件</a></li>
<li><a href="#">招聘信息</a></li>


阻止冒泡：
-------------------------
w3c的方法是：（火狐、谷歌、IE11）
  event.stopPropagation()
IE10以下则是使用：
  event.cancelBubble = true

兼容代码如下：
var event = event || window.event;
 if(event && event.stopPropagation){
      event.stopPropagation();
  }else{
      event.cancelBubble = true;
  }

冒泡：
IE 6.0: 
div -> body -> html -> document
其他浏览器: 
div -> body -> html -> document -> window

不是所有的事件都能冒泡。以下事件不冒泡：blur、focus、load、unload



隐藏模态框
-------------------------
判断当前对象
IE678         event.srcElement
火狐/谷歌等     event.target

兼容写法获取元素ID：
var event = event || window.event;
var target = event.target? event.target : event.srcElement;
var targetId =  event.target ?  event.target.id : event.srcElement.id;
//类似还有tagName;


获得用户选择内容
-------------------------
window.getSelection().toString();         标准浏览器   w3c

document.selection.createRange().text;    ie678


变量属性获取/赋值方法
-------------------------
传统给属性赋值：（既能获取又能赋值）
div.style.width             单个赋值
div.style[“width”]          变量赋值

获取属性值：（只能获取）
div.currentStyle.width;      IE678    单个获取
window.getComputedStyle(div,null).width;
div.currentStyle[“width”];   IE678    变量获取
window.getComputedStyle(div,null)[“width”];
  参数1：获取属性的元素。
  参数2：伪元素，C3学习。

 //获取行内式和内嵌式
console.log(typeof window.getComputedStyle(div,null)); //object
console.log(window.getComputedStyle(div,null).border);
console.log(window.getComputedStyle(div,null)["background-color"]);


//兼容方法获取元素样式
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}
console.log(getStyle(div,"padding"));
console.log(getStyle(div,"background-color"));


//style属性的赋值
--------------------
var div = document.getElementsByTagName("div")[0];

div.style.cssText = "width:100px;height:100px;background-color: pink";

div.style["border-radius"] = "50px";
div.style["zIndex"] = "1";

 //很多浏览器支持的是
div.style.borderTopLeftRadius =  "50px";
div.style.borderBottomRightRadius =  "50px";


表单提交：
--------------------
/*
<form action="01.php" method="get"> //get
<form action="02.php" method="post"> //post
<form action="03.fileUpdate.php" method="post" enctype="multipart/form-data"> //文件提交
  <label for="">姓名:
      <input type="text" name= "userName"></label>
      <br/>
  <label for="">邮箱:
      <input type="text" name= "userEmail"></label>
      <br/>
      <input type="submit" name="">
</form>


<?php 
    echo "<h1>GET_PAGE</h1>";
    echo 'userName:'.$_GET['userName'];
    echo '<br/>';
    echo 'userEmail:'.$_GET['userEmail'];
?>
*/

POST&GET错误处理
--------------------
array_key_exists(key, 数组)

if(array_key_exists('name', $_GET)){
       //如果有数据 再去读取
   }else{
       // 反之 可以执行一些 其他的逻辑
}



localstorage.js
-------------------
// sessionStorage and localstorage
// https://www.cnblogs.com/xmoomoo/p/5757464.html
// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Gates");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "抱歉！您的浏览器不支持 Web Storage ...";
}
// 检查页面浏览次数
if (localStorage.pagecount)
  {
  localStorage.pagecount=Number(localStorage.pagecount) +1;
  }
else
  {
  localStorage.pagecount=1;
  }
document.write("Visits: " + localStorage.pagecount + " time(s).");

// vue localstorage.js
const STORAGE_KEY = 'studentName-vuejs'
export default {
  fetch: function() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)
     || '[]')
  },
  save:function(items) {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}




vue.js
============================================
架构从MVC向Rest API+前端MV*迁移
MV*(MVC,MVP,MVVM)

mvp: model, view, presenter

MVVM: angular, react, vue
  view = viewmodel = model
   |         |         |
  视图      通讯       数据
  DOM      观察者     JS对象

// 面向数据去编程：
// 
// 
// https://cn.vuejs.org/v2/guide/
// <!-- 开发环境版本，包含了有帮助的命令行警告 -->
// <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
// <!-- 生产环境版本，优化了尺寸和速度 -->
// <script src="https://cdn.jsdelivr.net/npm/vue"></script>


// html:
绑定：v-bind:title="message"  简写:title
可见：
v-if="seen"  //会移除dom元素
v-show="seen" //会把dom元素的display设置为none;

数组：v-for="todo in todos"
监听：v-on:click="reverseMessage"   简写@click
双向：v-model="message"

显示的文档：
v-text='number'
v-html='content'

v-once,表示只在内存中渲染一次，不用每次创建，如果在重复利用的需求中，可以极大的节省内存开销；
如果需要复用DOM的时候，需要在不同的标签中加上不同的key值  :key="value" 
<ul>
 //引用组件
  <todo-item v-for="(item, index) of list" :key="index" :content="item"></todo-item>
</ul>

// 挂载点，模板，实例
// js:

//定义一个全局组件
Vue.component('todo-item',{
  props:['content'],
  template:'<li>{{content}}</li>'
})

//定义一个局部组件
var TodoItem = {
  template:'<li>item</li>'
}
var app = new vue({
  el:'#app',
  template: '<div>item</div>', //vue中如果不定义模板，则默认为绑定的el的内容部分
  //局部组件注册
  components:{
    'todo-item':TodoItem
  },
  data: {
    message:'hello, Vue!',
    seen:true,
    todo:[{text:'js'},{text:'vue'},{text:'niu'}]
  },
  methods:{
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  },
  //通react中的reselect
  //计算属性
  computed:{
    fullName: function(){
      return this.firstName + ' ' + this.lastName
    }
  },
  //监听器
  watch:{
    fullName: function(){
      this.count++
    }
  }

})

Note:
1.组件也是一个vue的实例
2.父组件往子组件通信通过属性，去传值
3.子组件往父组件通信通过$emit，通过事件去传值
4.Object.freeze(obj),会阻止修改现有的属性，也意味着响应系统无法再追踪变化。
5.created,mounted、updated 和 destroyed。

样式：可以用对象，或者数组来定义



vue-cli
-----------------------
/*
最新的：
npm uninstall vue-cli -g
npm install -g @vue/cli
vue --version
vue create my-project
cd my-project
npm run serve
 */

/*
老的:
npm install --global vue-cli
vue init webpack my-project
cd my-project
npm run dev
 */
note:
1.data在单页面中是一个对象，在脚手架中是一个函数，可以用ES6的语法，它会自动转译成ES5的语法。
2.methods没有变，还是一个对象
3.组件的style一般是加上：scoped是局部作用域
4.子组件中data是一个function,不能是一个object,而在母组件vue中可以是一个object
5.在vue中操作dom,需要用引用$ref来获取对应的引用名字
6.子组件可以接收来自父组件的内容，但一般不能去修改它，这就是单向数据流的概念。
如果修改了控制台会报错；一般如果要修改父组件的数据，我们可以复制一份数据到子组件，再到子组件里面去修改；



vue中改变数组的值的方法：
改变引用或pop,push,shift,unshift,splice,sort,reverse
或者用set：
Vue.set(vm.userInfo, 1, 5) //1为index,全局方法
vue.$set(vm.userInfo, 2, 3) //2为index,实例方法

vue改变对象的方法：改变引用或者：
Vue.set(vm.userInfo, "address","beijing")//全局引用
vm.$set(vm.userInfo, "address","beijing")//实例方法


// 组件参数的校验器：
props:{
 content:[Number,String]   //传入的content的类型为number或者string，这个跟的是一个数组
 content: Number   //传入的content为number类型，这个是对传进来的数据进行一个校验，这个跟的是一个值
 content:{   //还可以传入一个object
   type:String, //传入的类型
   requried:false, //是否必传
   default:'defalut value', //默认值
   validator: function(value){ //自定义的校验
     return (value.length>5)  //校验传入的值的长度需要>5
   }
 },
 index:Number
},

//非props特性：：
1.props没有接受传进来的参数，那么在组件中用这个参数就不可用
2.在组件中用的内容是非props参数，那么显示出来的标签中会带有props的参数的属性；
而在props特性中，则不会显示props的属性；



监听父组件的原生事件：
第一种方法呢：就是先监听子组件的事件，然后子组件传递给父组件一个事件，然后父组件执行这个事件；
第二种方法呢：就是直接监听父组件的原生事件：@click.native="handleClick"


slot:
父组件向子组件传递dom的内容，包含一些常见的标签，那么这时候一般用slot；
在子组件中需要定义对应的slot,才能在DOM中显示出来，对于具体结构的slot可以定义名字来使用;

父组件如果要用子组件传递过来的值，并定义成不同的dom，需要用到作用域插槽中的template模板;


<component :is=type></component> 
//切换组件，决定去展示哪一个



vue动画：
----------------
vue自动增加的class:
最前面的v是根据对应transition绑定的name值保持一致，默认不写name是v

进场和出场的class钩子：
---------------------
v-enter            v-enter>       v-enter-active>
v-enter-active     v-enter-to     v-enter-to>

v-leave            v-leave>       v-leave-active>
v-leave-active     v-leave-to     v-leave-to>

动画需要用<transition>标签去包裹


appear为加载的入场动画，前面需要加appear,后面需要appear-active-class
<transition
  appear
  enter-active-class="animated bounceInDown"
  leave-active-class="animated fadeOutDown"
  appear-active-class="animated bounceInDown"
>
  <div v-if="show">hello,world!</div>   
</transition>



入场和出场动画的钩子：
--------------------
<transition
    @before-enter="handleBeforeEnter"
    @enter="handleEnter"   //handleEnter:这其中动画执行完之后，需要执行done()
    @after-enter="handleAfterEnter" 

    @before-leave="handleBeforeLeave"
    @leave="handleLeave"   //handleLeave:这其中动画执行完之后，需要执行done()
    @after-leave="handleAfterLeave" 
></transition>


两个元素或者组件的切换，都可以先定义所有出入场的动画，（通过class或者函数钩子）
然后在transition中指定mode，即进出的先后，来实现组件切换的动画


// <router-link to='./list'></router-link>



1.解决移动端因为初始化带来的问题，可以用reset.css
2.解决移动端因为retina屏幕带来的1px问题，可以引入border.css
3.解决移动端设备点击300ms延迟的问题，可以引入fastclick.js库，进入项目，
npm install fastclick --save
然后再次main.js引入：
import fastClick from 'fastclick'
fastClick.attach(document.body)   //绑定事件到body中
4.字体图标： iconfont
https://www.iconfont.cn/
5.快速编写css: 进入项目：
npm install stylus --save
npm install stylus-loader --save


6.使用vue-router:
cd project
npm install vue-router
main.js中引入：
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

@是src的目录
在style中引用，需要前面加上~，import前面加@
@import '~@/assets/styles/varibles.styl'

webpack.base.config.js中的alias,在vue3.7中如何设置？
axios返回的结果是一个promise对象，这个需要复习下？
vue 3.x的moco数据放在哪里？ 以前是放在static目录下的的moco目录


vue-awesome-swiper
npm install vue-awesome-swiper@2.6.7 --save
https://segmentfault.com/a/1190000014609379

.wrapper
  width: 100%
  height: 0 //如果这儿直接写26.67%的话，会取父级元素的宽度为标准
  padding-bottom: 26.67% //表示高度的26.67%
  overflow: hidden
  background: #eee //给没有显示出来的背景给一个灰色
  //上面的内容可以简写成如下内容：但下面的兼容性不好
  width: 100%
  height: 26.67%vm // vm 表示viewport的宽度

.wrapper >>> .swiper-pagination-bullet-active   //样式穿透
  background: red !important

.icons >>> .swiper-container   //可以设置swiper指示器的高度
    height: 0
    padding-bottom: 60%

//这两个是监控父级元素刷新的话会重新刷新下swiper
swiperOption:{
    observer: true, 
    observeParents: true
  }


vue ajax:
1.浏览器自带的fetch函数
2.vue以前推荐的vue-resource模块
3.官方推荐的axios
项目中：
npm install axios --save

一个page发送一个ajax请求即可
import axios from 'axios'
在mounted(){}中进行执行

better-scroll插件：
项目中安装：
npm install better-scroll --save

this.scroll = new BScroll(this.$refs.wrapper,{click: true})
{click: true}表示获取dom元素中的点击事件，如果为false则不开启点击事件

<keep-alive></keep-alive>包裹的router-link，返回的时候，可以keep住原来的位置

其他组件：
1.五星好评组件
2.scroll组件



vue中scroll监听：这个在better-scroll中不能运用
https://segmentfault.com/q/1010000009119633

window.addEventListener('scroll', () => {
  let scrollTop = document.documentElement.scrollTop ||
                   document.body.scrollTop ||
                   document.querySelector('.list').scrollTop;
  console.log(scrollTop);
}, true);

或者mounted()里面：
window.addEventListener('scroll', this.handleScroll, true)
methods里面写对应handleScroll()



vuex的高级属性：
-------------------------
import {mapState, mapMutations, mapGetters} from 'vuex'
//在计算属性中进行state映射
computed:{
    ...mapState(['city'])
    ...mapState({
     currentCity: 'city' //可以是数组，也可以是一个对象，即city映射到currentCity
    })
    ...mapGetters(['doublecity'])
},
//在方法中进行mutations的映射
methods:{
  ...mapMutations(['changeCity'])
}

keep-alive之后，mounted()只会执行一次，如果要每次执行，可以添加一个属性 exclude='vue的名字'

当router-view进行keep-alive的时候，会多一个activated() 生命周期函数。当发生页面切换的时候，都会进行加载。
当页面进行keep-alive的时候，会多两个生命周期函数；
会在加载页面的时候，多一个activated的生命周期函数；
同时，在页面消失或者页面替换为新的页面的时候，会有一个deactivated的生命周期函数；
activated(){
  window.addEventListener('scroll', this.handleScoll)
},
deactivated(){
  window.removeEventListener('scroll', this.handleScoll)
}

router-link会把标签变成一个a标签，如果在router-link中加一个tag属性，那么标签的最终样式还是tag的值的类型

<router-link tag="li" :/to="'/details/'+item.name"></router-link>


组件的名字什么时候会用到？
1.递归组件
2.keep-alive排除缓存
3.vue工程中查看结构

联调：
一、局域网ip不能访问的时候
在package.json中有一段： 
"dev": "webpack-dev-server --inline --progress --config"
修改为：
"dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config"

二、联调的时候，部分手机出现白屏的状况，
1.有可能不支持promise特性，这时候需要安装三方插件： 
npm install babel-polyfill --save
然后在main.js中引入：
import 'babel-polyfill'

三、在触摸的过程中出现，上拉或者下拉出现伸缩动画时候
touch事件加上prevent
@touchstart.prevent

// https://github.com/vuejs/awesome-vue
awesome-vue是基本支持的插件资源都列在里面