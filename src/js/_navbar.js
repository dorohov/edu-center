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