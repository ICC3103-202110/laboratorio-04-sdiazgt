function view(counter){
    return `count: ${counter} \n\n (+) (-) \n\n (q) for quit\n`;
}
function update(msg,counter){
    if(msg === "+"){
        return counter + 1;
    }
    if(msg === "-"){
        return counter - 1;
    }
    
}
function app(counter){
    while(true){
        console.log(view(counter));
        //console.clear();
        var prompt = require('prompt-sync')();
        let action = prompt('What would you do? ');
        
    }
}
//console.log("ayuda");
app(0);


