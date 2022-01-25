$(".slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false,
      },
    },
  ],
});

$(".clients-slider").slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
  ],
});
