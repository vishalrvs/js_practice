// Immediately Invoked Function Expression (IIFE)
//Named IIFE
(function chai(){
    console.log("DB Connected");    
})();

// Simple IIFE
((name)=> {
    console.log(`DB Connected ${name}`);    
})('Vishal');