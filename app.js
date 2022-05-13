const p1s=document.querySelectorAll('.p1')
const p2s=document.querySelectorAll('.p2')
const arrs=document.querySelectorAll('.arrow-down')

for (let i=0;i<p1s.length;i++){
       p1s[i].addEventListener('click',evt=>{
              p1s[i].classList.toggle('p1')
              // p1s[i].classList.toggle('red')
              p2s[i].classList.toggle('p2')
              arrs[i].classList.toggle('rotate')
       })
}

