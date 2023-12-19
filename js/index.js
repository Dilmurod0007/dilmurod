var x = document.querySelector('.fa-xmark');
var xmarka = document.querySelector('.fa-x')
var madal = document.querySelector('.modal');
var modallogin = document.querySelector('.modal_login')
var log = document.querySelector('.logout');
var bntlog = document.querySelector('.btn');
var cod = document.querySelector(".cod");
var btnhh = document.querySelector('.btn_loggin');
let swiperStatus = document.querySelector('.swiper-wrapper')

let name = document.querySelector('#name')
let fname = document.querySelector('#fname')
let e_mail = document.querySelector('#e_mail')
let pass = document.querySelector('#pass')
let pass_q = document.querySelector('#pass_q')
let statusbek = document.querySelector('.statusbek')

// name = name.value
// fname = fname.value
// e_mail = e_mail.value
// pass = pass.value
// pass_q = pass_q.value

// if(name == ' ' && fname == ' ' && e_mail == ' ' && pass ==' ' && pass_q == ' '){
//   btnhh.setAttribute("disabled", "");
// }
;(
  async ()=>{
    let status = await fetch('https://iqitlive.onrender.com/api/v1/status/getStatus')
    status = await status.json()
    for (const stat of status) {
      swiperStatus.innerHTML += `
      <div class="swiper-slide"> ${stat.name}<br> Lvl5</div>
    `
    statusbek.innerHTML += `<option value=${stat.id}>${stat.name}</option>`
  }
  }
)()


btnhh.addEventListener("click", async function(){
  name = name.value
  fname = fname.value
  e_mail = e_mail.value
  pass = pass.value
  pass_q = pass_q.value
  let status = statusbek.value

 let register = await fetch("https://itlivetest.onrender.com/api/v1/auth/register",{
  method:"POST",
  headers:{
    "Content-Type": "application/json",
  },
  body:JSON.stringify({name,surname:fname,status,email:e_mail,password:pass})
 })
 let res = await register.json()
console.log(res);
})

x.addEventListener('click', function(){
  madal.style.top = '100vh';
});

log.addEventListener("click", function(){
  madal.style.top = '0'
});

xmarka.addEventListener('click', function(){
  modallogin.style.top = '-100vh';
});

bntlog.addEventListener("click", function(){
  modallogin.style.top = '0'
});
