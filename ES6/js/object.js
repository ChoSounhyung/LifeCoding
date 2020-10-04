function getObj() {
    const name = "crong";

    const getName = function() {
        return name;
    }

    const setName = function(newname) {
        name = newname;
    }

    const printName = function() {
        console.log(name);
    }

    /*
    return {
        getName : getName,
        setName : setName
    }
    */

    //key값과 value값의 이름이 같다면
    return {getName, setName, name}       //이렇게 쓰는것도 지원이 됨(+value도 넘길 수 있음)
}

var obj = getObj();
console.log(obj.getName());         //crong