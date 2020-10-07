//ES6 Class

/*
function Health(name) {
    this.name = name;
}

Health.prototype.showHealth = function() {
    console.log(this.name + "님 안녕하세요");
}

const h = new Health("crong");
h.showHealth();         //"crong님 안녕하세요"
*/

class Health {
    constructor(name, lastTime) {   //constructor가 명시적으로 있어서 new를 이용할 필요가 없음
        this.name = name;
        this.lastTime = lastTime;
    }

    showHealth() {                  //showHealth가 prototype에 저장됨
        console.log("안녕하세요" + this.name);
    }
}

const myHealth = new Health("crong");
myHealth.showHealth();              //"안녕하세요 crong"
console.log(myHealth);              //object Object
console.log(toString.call(Health))  //object Function