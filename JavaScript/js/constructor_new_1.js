function Person(){}

// var p = Person();    -->     undefined
var p1 = new Person();           //Person{}  :   비어있는 객체   (new가 붙으면 객체의 생성자)
//java : 클래스 안에 생성자 존재(생성자를 호출함을 통해 클래스의 인스턴스(객체)를 만들어냄)
//javascript : 생성자가 어딘가에 소속되어있지 않음, 그냥 함수일 뿐, 함수에 new를 붙이면 객체를 만들어냄

p1.name = 'egoing';
p1.introduce = function(){       //익명 함수를 프로퍼티에 넣으면 메서드라고 불리게 됨
    return 'My name is '+this.name; 
}

document.write(p1.introduce()+"<br />");
/*
var p2 = new Person();
p2.name = 'leezche';
p2.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p2.introduce());
*/
//--> 여전히 중복 존재(object.js와 별로 달라진 것이 없음)