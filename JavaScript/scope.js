var vscope = 'global';
function fscope(){
    var vscope = 'local';
    alert('함수안 '+vscope);
}

/*
var vscope = 'global';
function fscope(){
    var vscope = 'local';
    vscope = 'local variables'      //지역변수 사용
}
*/

//유효범위
function a() {
    //i = 0;  //var을 붙이지 않았으므로 전역변수
    var i = 0;
}

//정적 유효범위
var j = 5;
 
function b(){
    var j = 10;
    c();
}
 
function c(){
    document.write(j);
}
