//인자 : 원시 데이터 타입
var a = 1;
function func(b) {
    b = 2;
}
func(a);
console.log(a);     // 1

//인자 : 참조 데이터 타입
var c = {'id':1};
function func(d) {
    d = {'id':2};
}
func(a);
console.log(a.id);  //1

var e = {'id':1};
function func(f) {  //f와 e는 같은 객체를 참조하고 있음
    f.id = 2;
}
func(a);
console.log(a.id);  //2