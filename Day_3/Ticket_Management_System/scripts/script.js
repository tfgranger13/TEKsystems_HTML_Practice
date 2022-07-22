console.log("3"==3);
console.log("3"===3);


function printProps(p){
    for(var o in p)
    console.log(o+":"+p[o]+"\n");
}

var person = {
    first_name: "Luke",
    last_name: "Lance",
    age: 23
};

printProps(person);
