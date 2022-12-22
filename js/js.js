let windows = document.documentElement
let btnContainer = document.querySelector(".myDIV");
let btns = btnContainer.querySelectorAll(".botton");
let white_h3 = document.querySelector(".white_h3");
let img = document.querySelector("img");
let btn = document.querySelector(".btn");
let btns2 = btn.querySelectorAll(".btn_fotter");
let dolar = document.querySelector(".dolar");
let black = document.querySelectorAll(".black");
let dark_mode = document.querySelector(".toggle_button");
let link = document.querySelector("link");
let p = document.querySelector('.header_p')
let bt = document.querySelector('.btn_p')

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.querySelectorAll(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.classList.add("active");
  });
  btns[0].onclick = () => {
    img.src = "img/Silver.png";
    whitey_h3.innerText = "White";
  };
  btns[1].onclick = () => {
    img.src = "img/White.png";
    white_h3.innerText = "Space Grey";
  };
}

for (let i = 0; i < btns2.length; i++) {
  btns2[i].addEventListener("click", function () {
    let current = document.querySelectorAll(".active2");
    current[0].className = current[0].className.replace(" active2", "");
    this.classList.add("active2");
  });
  btns2[0].onclick = () => {
    dolar.innerText = "$1,999";
  };
  btns2[1].onclick = () => {
    dolar.innerText = "$2,199";
  };
  btns2[2].onclick = () => {
    dolar.innerText = "$2,599";
  };
  btns2[3].onclick = () => {
    dolar.innerText = "$3,199";
  };
}

// dark_mode.onclick = function () {
//   console.log('1');
//   send2()
// }
// function send2(){
//   console.log('2');
// }

// dark_mode.onclick = () =>{
//     link.href = 'css/black.css'
//   dark_mode.onclick = () =>{
//     link.href = 'css/main.css'
//   }
// }

dark_mode.onclick = () => {
  if (link.getAttribute("href") == "css/main.css") {
    link.setAttribute("href", "css/black.css");
  } else {
    link.setAttribute("href", "css/main.css");
  }
};

if (window.innerWidth <= 700) {
  p.style.color = 'purple'
  white_h3.style.color = 'purple'
} 


let h = dark_mode.offsetTop
let h2 = white_h3.offsetTop
let h3 = bt.offsetTop

console.log(h);
console.log(h2);
console.log(h3);


