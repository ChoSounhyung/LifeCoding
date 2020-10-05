var funcThis = null;         //functhis : 전역변수
 
function Func(){
    funcThis = this;
}

var o1 = Func();            //일반 함수로 호출

if(funcThis === window){
    console.log('window <br />');
}
 
var o2 = new Func();        //생성자로 호출
if(funcThis === o2){
    console.log('o2 <br />');       //생성자 안에서의 this는 생성자가 만든 객체를 가리킴
}

//this : 객체에 대한 초기화가 끝나서 식별자에 담기기 전에 객체를 참고할 수 있는 레퍼런스이기 때문에 this는 필수적으로 사용됨