// blocking processing
function updb1(){
    var start = new Date().getTime();
    while (new Date().getTime() < start + 3000);
}
updb1();
// finish update of database
console.log("updb1 success.");
console.log("Main processing1")


// non-blocking processing
function updb2(done) {
    setTimeout(()=>{
        null;
    }, 3000);
}

updb2(function(){
    console.log("updb2 success.")
});
// finish update of database
updb2();
console.log("Main processing2");