function func() {
    alert("Hello?");
}

func();
window.func();      //window : 객체 | func() : 속성(속성에 담겨있는 것이 함수이므로 메서드라고 부름)
//window라는 전역 객체를 생략해도 내부적으로는 window를 붙인것과 같이 동작함
//기본적으로 사용됨(암시적으로 명시)
//javascript의 모든 함수, 모든 변수가 전역함수, 전역변수라고 할지라도 사실은 window(전역객체)의 프로퍼티(속성)

var o = {
    'func' : function() {
        alert('Hello?');
    }
}

o.func();           //o라는 객체는 window객체의 프로퍼티
window.o.func();
//만약 node.js와 같은 서버측 js를 쓰고 있다면 window대신 global이 존재(global은 웹브라우저의 window와 같은 역할)
//호스트 환경에 따라서 달라짐


