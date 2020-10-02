//정규표현식 릳터럴
var pattern = /a/;
//정규표현식 객체 생성자
//var pattern = new RegExp('a');

//문자열 'abcde'안에 (pattern)'a'가 있는지 판별
pattern.exec('abcde');      //["a"]

pattern = /a./              //. : 하나의 문자(어떠한 문자가 오든 상관 없음)
pattern.exec('abcde');      //["ab"]

pattern.exec('bcdef');      //null

pattern = /a/;
//test : 첫번째 인자에 pattern이 존재하면 true, 그렇지 않으면 false
pattern.test('abcde');      //true
pattern.test('bcdef');      //false

var str = 'abcdef';
str.match(pattern);         //["a"]
str = 'bcdef';
str.match(pattern);         //null

str = 'abcdef';
str.replace(pattern, 'A');  //문자열에서 pattern에 해당하는 것을 찾아 A로 치환

var xi = /a/;
"Abcde".match(xi);          //null

//i를 붙이면 대소문자 구분 안함
var oi = /a/i;
"Abcde".match(oi);          //["A"]

var xg = /a/;
"abcdea".match(xg);         //["a"]

//g를 붙이면 검색된 모든 결과 리턴
var og = /a/g;
"abcdea".match(og);         //["a", "a"]

var ig = /a/ig;
"AabcdAa".match(ig);        //["A", "a", "A", "a"]

//캡처
//w : world | + : A~Z or a~z or 0~9중 아무거나 | s : space
var pattern = /(\w+)\s(\w+)/;
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");    //$2 : 두번째 그룹, $1 : 첫번째 그룹 => \w+ : $2 | \s : , | \w+ : $1
console.log(result);        //everybody, coding