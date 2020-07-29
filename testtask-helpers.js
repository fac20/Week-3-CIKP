function test(name,testFunction){

    function equal(a,b,emessage){
        const emessage = `Expected ${a} to equal ${b}`;
        if(x===y){
            console.info('pass' + emessage);
        }else {
            console.error('fail' + emessage )
        }
    }
    function notequal (a,b,nemessage){
        const nemessage = `Expected ${a} is not equal to ${b}`;
        if(x!==y){
            console.info('pass' + nemessage);
        }else {
            console.error('fail' + nemessage )
        }
    }
    const assertions = {
        equal,
        notequal
    }
    console.group(name);
    testFunction(assertions);
    console.groupEnd(name);
}


