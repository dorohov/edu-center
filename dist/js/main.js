(function($) {
    "use strict"
    $(function() {
        $('.navbar__mobile--btn > .hamburger').on('click', function() {
            $('.navbar').toggleClass('is--open').toggleClass('is--mobile_menu')
            $('body').toggleClass('is--menuopen')
            $(this).toggleClass('is-active')
        })

        let userScroll = $(window).scrollTop()
        fixedNavbar()

        $(document).scroll(function(e) {
            userScroll = $(document).scrollTop()
            fixedNavbar()
        })

        function fixedNavbar() {
            const   navbar = $('.navbar'),
                    body = $('body'),
                    classes = {
                        fixed: 'is--fixed'
                    }

            if(userScroll > navbar.outerHeight()) {
                body.addClass(classes.fixed)
            }
            if(userScroll < navbar.outerHeight()) {
                body.removeClass(classes.fixed)
            }
        }

    })
})(jQuery);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9uYXZiYXIuanMiLCJfb3RoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLm5hdmJhcl9fbW9iaWxlLS1idG4gPiAuaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5uYXZiYXInKS50b2dnbGVDbGFzcygnaXMtLW9wZW4nKS50b2dnbGVDbGFzcygnaXMtLW1vYmlsZV9tZW51JylcclxuICAgICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdpcy0tbWVudW9wZW4nKVxyXG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCB1c2VyU2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpXHJcbiAgICAgICAgZml4ZWROYXZiYXIoKVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB1c2VyU2Nyb2xsID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKClcclxuICAgICAgICAgICAgZml4ZWROYXZiYXIoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpeGVkTmF2YmFyKCkge1xyXG4gICAgICAgICAgICBjb25zdCAgIG5hdmJhciA9ICQoJy5uYXZiYXInKSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5ID0gJCgnYm9keScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkOiAnaXMtLWZpeGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHVzZXJTY3JvbGwgPiBuYXZiYXIub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5hZGRDbGFzcyhjbGFzc2VzLmZpeGVkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHVzZXJTY3JvbGwgPCBuYXZiYXIub3V0ZXJIZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVDbGFzcyhjbGFzc2VzLmZpeGVkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuZG9jdW1lbnRzX19zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIHByZXZBcnJvdzogJy5kb2N1bWVudHNfX2Fycm93LmlzLS1wcmV2JyxcclxuICAgICAgICBuZXh0QXJyb3c6ICcuZG9jdW1lbnRzX19hcnJvdy5pcy0tbmV4dCcsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbnN2ZzRldmVyeWJvZHkoKTtcclxuJCgnZm9ybScpLnBhcnNsZXkoKTtcclxuXHJcbnZhciBtYXA7XHJcbiAgICAgICAgREcudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1hcCA9IERHLm1hcCgnbWFwJywge1xyXG4gICAgICAgICAgICAgICAgY2VudGVyOiBbNTIuOTc0MjA4LCAzNi4wNTg5OTVdLFxyXG4gICAgICAgICAgICAgICAgem9vbTogMTMsXHJcbiAgICAgICAgICAgICAgICBmdWxsc2NyZWVuQ29udHJvbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB6b29tQ29udHJvbDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgREcubWFya2VyKFs1Mi45NzQyMDgsIDM2LjA1ODk5NV0pLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG52YXIgcGhvbmVNYXNrID0gbmV3IElNYXNrKFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZScpLCB7XHJcbiAgICBtYXNrOiAnK3s3fSgwMDApMDAwLTAwLTAwJ1xyXG4gIH0pOyJdfQ==
