function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
Sub.prototype = new Super();
//Sub.prototype = Super.prototype  -->  이렇게 하지 않도록 주의(자식에게 일어나는 일이 부모에게도 반영됨)
 
var o = new Sub();
o.ultraProp = 1;
console.log(o.ultraProp);       // 1    o객체가 ultraProp라는 값을 갖고있는지 먼저 확인하기 때문 -> 없으면 그 부모로 올라감(o객체의 생성자를 알아냄(sub))