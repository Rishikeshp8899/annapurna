const bar= document.getElementById('bar');
const nav=document.getElementById('navbar');

if (bar) {
    console.log("in bar")
    bar.addEventListener('click',()=>{
        console.log("clicked")
        nav.classList.add('active');
    })
}