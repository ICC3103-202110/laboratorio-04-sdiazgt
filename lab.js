function view(counter){
    return `count: ${counter} \n\n (+) (-) \n\n (q) for quit\n`;
}
function update(msg,counter){
    if(msg === "+"){
        return counter + 1;
    }
    else if(msg === "-"){
        return counter - 1;
    }
    else return counter;
    
}
function app(counter){
    while(true){
        console.log(view(counter));
        //console.clear();
        var prompt = require('prompt-sync')();
        let action = prompt('What would you do? ');
        if(action==="q"){
            console.log("\nExiting Program\n");
            break;
        }
        counter = update(action,counter);
        console.clear();
    }
}
//console.log("ayuda");
app(0);


