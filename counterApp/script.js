let count=document.querySelector("#count");

let inc=document.querySelector("#inc");
let res=document.querySelector("#res");
let dec=document.querySelector("#dec");

inc.onclick= ()=>{
    count.textContent++;
}

res.onclick= ()=>{
    count.textContent=0;
}

dec.onclick= ()=>{
    count.textContent--;
}





// 1. ❌ Logic Bug (Hidden but Important)

// Right now you’re directly modifying the DOM value, not a real number variable.

// count.textContent++;


// This works because JS auto-converts, but it’s bad practice.

// ✅ Correct Way (VERY IMPORTANT)

// Use a state variable:

// let value = 0;

// inc.onclick = () => {
//     value++;
//     count.textContent = value;
// };

// dec.onclick = () => {
//     value--;
//     count.textContent = value;
// };

// res.onclick = () => {
//     value = 0;
//     count.textContent = value;
// };
