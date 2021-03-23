var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  function toggleMenu(){
      const menutoggle = document.querySelector('.toggle');
      const navigation = document.querySelector('.navigation');
      menutoggle.classList.toggle('active');
      navigation.classList.toggle('active');
  }