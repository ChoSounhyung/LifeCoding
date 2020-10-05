function Person(name) {
    this.name = name;
}

Person.prototype.name = null;           //Person객체에 prototype프로퍼티가 있고, 그 안에 객체가 있고, 그 객체의 속성인 name의 값을 null로 지정
Person.prototype.introduce = function() {
    return 'My name is' + this.name;
}

var p1 = new Person('egoing');
document.write(p1.introduce() + '<br>');

function Programmer(name) {
    this.name = name;
}

Programmer.prototype = new Person();    // Programmer가 갖고있는 프로퍼티 중에 prototype이라는 특수한 속성의 값으로 new Person에 의해 객체를 생성하면서 객체가 prototype이라는 속성을 생성자 함수가 갖고있는지 확인
                                        // 후 생성자 함수 안에 들어있는 객체와 똑같은 객체를 만들어 생성자의 결과로 return
                                        // new Person을 통해 만든 객체는 name프로퍼티, introduce메서드를 갖고있는 객체가 prototype안에 들어가 있으므로 name, introduce를 갖고있는 객체가 됨 
                                        // 그러면 그 객체가 prototype이라고 하는 속성의 값이 됨
var p2 = new Programmer('leezche');     // p2는 prototype 생성자의 프로퍼티에 들어있는 객체와 같음
document.write(p2.introduce() + '<br>');