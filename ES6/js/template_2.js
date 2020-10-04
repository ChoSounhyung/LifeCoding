//Tagged Template literals

const data = [
    {
        name : 'coffee-bean',
        order : true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name : 'starbucks',
        order : false
    }
];

function fn(tags, name, items) {    //tags : 배열, name : tamplate으로 지정한 문자열, items : tamplate으로 지정한 문자열
    //console.log(tags);
    if(typeof items === "undefined") {
        items = "<span style='color:red'>주문가능한 상품이 없습니다.</span>";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}
/*
["<div>welcome ", " !!</div>
    <h2>주문가능항목</h2><div>", "</div>"]
*/

data.forEach((v) => {
    let template = fn`<h2>welcome ${v.name} !!</h2>
        <h4>주문가능항목</h4><div>${v.items}</div>`;
    document.querySelector("#message").innerHTML += template;
});

/*
const template = `<div>welcome ${data[0].name} !!</div>
        <h2>주문가능항목</h2><div>${data[0].items}</div>`;

    console.log(template);
*/

/*
"<div>welcome starbucks !!</div>
    <h2>주문가능항목</h2><div>주문가능한 상품이 없습니다.</div>"
*/