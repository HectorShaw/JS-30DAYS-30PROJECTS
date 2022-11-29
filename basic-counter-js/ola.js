const add = document.getElementById('inc');
const less = document.getElementById('dec');
const zero = document.getElementById('res');


let count = document.getElementById('counter');
let update = 0;



add.addEventListener( 'click' , (e)=> {
    update += 1;
    
    count.innerHTML = update;
});

less.addEventListener( 'click' , ()=> {
    if (update <= 0){
        update = 0;
    }
    update -= 1;
    count.innerHTML = update;

});

zero.addEventListener( 'click' , ()=> {
    update =0;
    count.innerHTML = update;
});

