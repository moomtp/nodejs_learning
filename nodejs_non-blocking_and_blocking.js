// blocking processing
function updb1(){
    var start = new Date().getTime();
    while (new Date().getTime() < start + 3000);
}
updb1();
// finish update of database
console.log("updb1 success.");
console.log("Main processing")

// non-blocking processing
function updb2(done) {
    setTimeout(()=>{
        done();
    }, 3000);
}

updb2();
// finish update of database
console.log("updb2 success.");
console.log("Main processing");