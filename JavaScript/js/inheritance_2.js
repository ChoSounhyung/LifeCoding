function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My nickname is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}

function Designer(name){
    this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = function(){
    return "beautiful!";
}
 
var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br />");
document.write(p1.coding()+"<br />");

var p1 = new Designer('leezche');
document.write(p1.introduce()+"<br />");
document.write(p1.design()+"<br />");