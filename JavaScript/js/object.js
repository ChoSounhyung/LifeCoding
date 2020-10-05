var person1 = {
    'name' : 'egoing',                      //객체 내의 변수 : 프로퍼티
    'introduce' : function(){               //객체 내의 함수 : 메소드
        return 'My name is '+this.name;     //this : 함수가 속해있는 변수가 담고있는 객체(person) 
    }
}

var person2 = {
    'name' : 'leezche',
    'introduce' : function(){               //중복 발생
        return 'My name is '+this.name;
    }
}

document.write(person.introduce());     //My name is egoing