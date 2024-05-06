const br=document.getElementById('br');
const nav=document.getElementById('navbar');
const  close=document.getElementById('close');

if(br){
br.addEventListener('click',()=>{
nav.classList.add('active')
})
}
if(close){
    close.addEventListener('click',()=>{
    nav.classList.remove('active')
    })
    }
//shop