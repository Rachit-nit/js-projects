let colorBtn=document.querySelector("#colorBtn");

colorBtn.onclick=()=>{
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
}