//WeakMap 클래스 인스턴스 변수 보호하기
//WeakMap 활용

const wm = new WeakMap();

function Area(height, width) {
    wm.set(this, {height, width});   //현재 객체에 두가지 값을 숨겨놓음(WeakMap에 객체에 대한 추가 정보를 담음 --> 이 클래스는 이 객체에 대한 인스턴스 변수를 갖고있지 않음)
}

Area.prototype.getArea = function() {
    const {height, width} = wm.get(this);
    return height * width;
}

let myarea = new Area(10, 20);
console.log(myarea.getArea());      //200
console.log(myarea.height);         //10  -->  undefined

myarea = null
console.log(wm);                //{height: 10, width: 20}
console.log(wm.has(myarea));    //false     가비지 컬렉션 대상이 됐기 때문
