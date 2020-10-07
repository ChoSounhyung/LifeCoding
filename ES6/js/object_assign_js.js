//Object assign 메서드

/*
const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 : " + this.healthTime);
    }
}

const myHealth = Object.create(healthObj);

myHealth.healthTime = "11:20";
myHealth.name = "crong";

console.log(myHealth);      //myHealth에 object 형태로 healthTime, name, __proto__안에 showHealth가 들어가있음
*/

const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 : " + this.healthTime);
    }
}

const myHealth = Object.assign(Object.create(healthObj), {
    name : "crong",
    lastTime : "11:20"
});

console.log(myHealth);      //object creat로 선언한것과 똑같은 결과를 가져옴

