o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}
function sum(){
    var _sum = 0;
    for(name in this){          //this : 무엇인지 정해져 있지 않음(호출할 때 정해짐)
        _sum += this[name];      //this 객체에 담긴 값을 _sum에 넣음
    }
    return _sum;
}
alert(sum.apply(o1)) // 6       sum.apply(null)이 아니라 o1객체를 첫번째 인자로 넘겨줌
alert(sum.apply(o2)) // 185     o2가 sum의 this가 됨    o2.sum(sum함수가 o2라는 객체의 속성인 것처럼)