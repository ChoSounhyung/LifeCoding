Object.prototype.contain = function(needle) {
    for(var name in this){  //this : 메서드가 소속되어있는 객체 --> o | a
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}

var o = {'name':'egoing', 'city':'seoul'}
console.log(o.contain('egoing'));   //true  |   객체.contain : 전달한 인자에 해당하는 값(value)이 있다면 true 없다면 false return

var a = ['egoing','leezche','graphittie'];
console.log(a.contain('leezche'));  //true

//모든 객체에 영향을 주기 때문에 신중해야함

for(var name in o) {
    console.log(name);      //name, city, contain (prototype에 추가한 메서드인 contain이 포함되어 있음)
}

for(var name in a) {
    if (a.hasOwnProperty(name)) {  //name에 해당하는 prperty를 a가 가지고 있는지 체크
        //
        console.log(name);  //0, 1, 2
    }
    console.log(name);      //0, 1, 2, contain
}

//contain은 부모로부터 상속받은 프로퍼티이므로 for in문을 통해 열거해도 되지만 hasOwnProperty를 통해 name이 a객체의 직접적으로 정의되어있는지 확인하는 것이 필요함