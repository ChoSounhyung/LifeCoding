var list = document.querySelectorAll("li");
for(let i=0; i<list.length; i++) {
    list[i].addEventListener("click", function() {
        console.log(i + "번째 리스트 입니다.");     //var을 사용하면 클로저때문에 4만 출력됨 -> let
    });
}