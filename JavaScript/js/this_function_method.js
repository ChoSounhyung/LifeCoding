//this : 함수 내에서 함수 호출 맥락(context)을 의미 : 맥락(상황에 따라 달라짐)
//--> 함수를 어떻게 호출하느냐에 따라 this가 가리키는 대상이 달라짐

function func() {
    if(window === this) {
        console.log("window === this");
    }
}

func();     // window === this
            // --> this가 함수 안에서 전역객체를 의미함

            
var o = {
    func : function() {
        if(o === this) {
            console.log("o === this");      //객체를 담고있는 변수 o와 메소드 안의 this가 같은지 판단
        }
    }
}

o.func();       // o === this

// --> 어떤 객체 안의 메소드를 호출하면 그 메소드가 소속되어있는 객체를 this로 접근 가능


//window.func()     //func는 window객체의 메소드이므로 func안의 this는 window임
//o.func()          //func는 o객체의 메소드이므로 func안의 this는 o임