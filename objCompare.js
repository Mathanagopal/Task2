//Compare two JSON have the same Properties
var obj1 = {"name":"Mathan","age":36};
var obj2 = {"age":36,"name":"Mathan"};

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(prop in obj1) { 
        if(obj1[prop] == obj2[prop]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("Is JSON object equal? "+flag);