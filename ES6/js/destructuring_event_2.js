document.querySelector("div").addEventListener("click", function({type, target}) {
    console.log(type, target.tagName);        //"click"  "DIV"   |  target.innerText : lorem20
});