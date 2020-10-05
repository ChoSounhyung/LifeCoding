function cal1(func, num){
    return func(num);
}
function increase(num){
    return num+1;
}
function decrease(num){
    return num-1
}

function cal2(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}

var process = [
    function(input){ return input + 10;},       //1+10
    function(input){ return input * input;},    //11*11
    function(input){ return input / 2;}         //121/2
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}