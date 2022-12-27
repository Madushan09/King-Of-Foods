let menu =document.querySelector('#menu-bars');
let navbar =document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }

  document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
  }

  document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
  }

  var swiper = new Swiper('.home-slider', {
    slidesPerView:1,
    centeredSlides: true,
    spaceBetween: 250,
    autoplay:{
      delay:7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  loop:true,
  });

