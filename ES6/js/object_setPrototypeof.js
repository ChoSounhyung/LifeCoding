//Object setPrototypeOf로 객체만들기
//--의 prototype으로 세팅함
//object와 달리 prototype객체만 추가

const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 : " + this.healthTime);
    },

    setHealth : function(mewtime) {
        this.healthTime = newTime;
    }
}

const myHealth = {
    name : "crong",
    lastTime : "11:20"
};

Object.setPrototypeOf(myHealth, healthObj);      //myHealth객체의 prototype으로 healthObj를 지정

/*
const newobj = Object.setPrototypeOf({
    name : "crong",
    lastTime : "11:20"
}, healthObj);

console.log(newobj);
*/

console.log(myHealth); 
