/* 객체로서의 함수 */
function sum(x, y) {return x + y;}      //함수 리터럴(Literal)  |  함수를 쉽게 작성할 수 있도록 문법적으로 작성해 js해석기에 제출하면 함수 객체를 만들어줌
//var sum = new Function('x', 'y', 'return x+y;');

var a = {}          //객체 리터럴 | var a = new Object를 쉽게 작성한 것

var b = [1, 2, 2];  //배열 리터럴 | new Array(1, 2, 3)을 쉽게 작성한 것

/* apply와 this */

var o = {}
var p = {}

function func() {
    switch(this) {      //this : window
        case o:
            document.write('o<br>');
            break;
        case p:
            document.write('p<br>');
            break;
        case window:
            document.write('window<br>');   // 실행됨
            break;
    }
}

func();             //window
func.apply(o);      //apply의 첫번째 인자 : 함수 호출 context   |   실행하면 o가 func()안의 this가 됨   |   o
func.apply(p);      //p

//기존 객체지향
//메소드는 객체에 종속되어있음  |  객체 : 주인(master), 메소드 : 노예(slave)

//javascript
//js는 하나의 함수가 여러개의 객체(window, o, p)에 대해 각 객체의 메소드가 된 것처럼 호출 됨
//객체와 함수는 개별적인 것(대등함)