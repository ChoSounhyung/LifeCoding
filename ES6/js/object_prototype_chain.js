//Object setPrototypeOf 로 객체간 prototype chain생성하기

//parent
const healthObj = {
    showHealth : function() {
        console.log("오늘 운동시간 : " + this.healthTime);
    },

    setHealth : function(mewtime) {
        this.healthTime = newTime;
    }
}

//child obj
const healthChildObj = {
    getAge : function() {
        return this.age;
    }
}

Object.setPrototypeOf(healthChildObj, healthObj);

const chidlObj = Object.setPrototypeOf( {
    age : 22
}, healthChildObj);

childObj.setHealth("11:55");
childObj.showHealth();          //"오늘 운동시간 : 11:55"
//console.log("childobj is ", childObj);

//다른 용도로 만든 객체를 쓰고 싶을 때

