function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
Sub.prototype = new Super();
 
var o = new Sub();
console.log(o.ultraProp);   //ultraProp는 sub, super의 부모인 ultra가 갖고있음

//생성자 : 비어있는 객체를 생성하는 것이 아니라 객체를 만들 때 그 객체가 갖고 있어야되는 메서드와 데이터인 속성을 기본적으로 갖고 주어짐
//우리가 얻고자 하는 객체의 원형(객체가 갖고있는 메소드, 프로퍼티)이 저장되어있는 곳이 prototype프로퍼티임
//prototype안에 객체가 있음
//생성자의 prototype프로퍼티에 저장되어있는 객체에 key를 저장시킴