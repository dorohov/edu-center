$(document).ready(function() {
    $('.documents__slider').slick({
        slidesToShow: 5,
        infinite: true,
        prevArrow: '.documents__arrow.is--prev',
        nextArrow: '.documents__arrow.is--next',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

svg4everybody();
$('form').parsley();

var map;
        DG.then(function () {
            map = DG.map('map', {
                center: [52.974208, 36.058995],
                zoom: 13,
                fullscreenControl: false,
                zoomControl: false
            });
    
            DG.marker([52.974208, 36.058995]).addTo(map);
        });

var phoneMask = new IMask(
  document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00'
  });