
//navbaronScroll colorChange
window.onscroll = () => {
  const nav = document.querySelector('#Navbar');
  
  if(this.scrollY <= 10) 
  nav.className = '' ; 
  else 
  nav.className = 'scroll';

};

//Aos animation library
AOS.init({
  offset: 200,
   duration: 1500,
     easing: 'ease-out-back',
   delay: 100,
});

//slide in-out contact form
$(document).ready(function(){
  $('.toggle').click(function(){
    $('.sidebar-contact').toggleClass('active')
    $('.toggle').toggleClass('active')
  })
})


