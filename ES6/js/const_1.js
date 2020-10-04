//const - 선언된 변수 지키기

function home() {
    const homename = 'my house';
    homename = "your house";
    console.log(homename);      // 재할당 금지

    //const를 기본으로 사용
    //변경이 될 수 있는 변수는 let 사용
    //var는 사용하지 않음
}

home();