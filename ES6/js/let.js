var name = "global var";

function home() {
    var homevar = "homevar";
    for(let i=0; i<100; i++) {
        console.log(i);
    }
    //let을 사용하면 밖에서 접근 불가
    // console.log(i);          error

    if(true) {
        let myif = "myif";
    }

    // console.log(myif);       error
}

home();