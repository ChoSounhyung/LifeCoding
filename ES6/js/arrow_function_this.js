//this context of Arrow function

/*
const myObj = {
    runTimeout() {
        setTimeout(function() {
            console.log(this === window);       //true
            this.parintData();                  //this가 이 객체를 가리키는 것이 아니라 window를 가리키고 있으므로 error
        }.bind(this), 200);                     //--> 따라서 bind로 this를 감쌈
    },

    printData() {
        console.log("hi codesquad!");
    }
}

myObj.runTimeout();

*/

/*
const myObj = {
    runTimeout() {
        setTimeout(() => {                      //arrow를 사용하면 그 컨텍스트를 유지함
            console.log(this === window);       //false
            this.printData();                   //"hi codesquad!"가 잘 출력됨
        }, 200);                                //bind 생략한 상태
    },

    printData() {
        console.log("hi codesquad!");
    }
}

myObj.runTimeout();
*/

const el = document.querySelector("p");

/*
el.addEventListener("click", function(evt) {
    console.log(this);      //p태그를 가리킴
});
*/

/*
const myObj = {
    register() {
        el.addEventListener("click", function(evt) {
            this.printData();
        });
    },

    printData() {
        console.log('clicked!!');
    }
}

myObj.register();       //error -> html paragraphelement(p) 이기 때문
*/

const myObj = {
    register() {
        el.addEventListener("click", (evt) => {
            this.printData(evt.target);             //"clicked!!"
        });
    },

    printData(el) {
        console.log('clicked!!', el.innerText);     //"mydiv"
    }
}

myObj.register();