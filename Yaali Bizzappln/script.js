let header = document.querySelector('nav');
let scrolBtn = document.querySelector('#scrolltotop');

window.addEventListener('scroll', () => {
  let scrolled = window.scrollY;
  if ((scrolled) >= 400) {

    header.style.backgroundColor = "black";
    header.style.opacity = "1";

    scrolBtn.style.display = 'block';

    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++){

      let windowHeight = window.innerHeight;
      let BoxTop = boxes[i].getBoundingClientRect().top;
      if (150 < windowHeight - BoxTop) {
        boxes[i].classList.add('active');
      }
      else {
        boxes[i].classList.remove('active');
      }
    }
    
  } else {
    header.style.backgroundColor = "transparent";
    scrolBtn.style.display = "none";
    
  }
  console.log(scrolled);
})     

// scroll btn Go to Top
scrolBtn.addEventListener('click', () => {
  window.scrollTo({
    top: "0",
    left: "0",
    behavior:"smooth"
  })
})