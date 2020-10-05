function Person(name) {
    this.name = name;
    this.introduce = function() {
        return "My name is " + this.name;
    }
}

// 생성자는 객체에 대한 초기화를 함
// 생성자가 만들어논 빈 객체가 어떤 프로퍼티, 메서드를 가져야하는지를 생성자 함수 안에 기술함으로써 객체가 하는 일 등을 초기화 함

var p1 = new Person('egoing');
document.write(p1.introduce() + '<br>');

var p2 = new Person('leezche');
document.write(p2.introduce() + '<br>');