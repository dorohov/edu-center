(function($) {
    "use strict"
    $(function() {
        $('.navbar__mobile--btn > .hamburger').on('click', function() {
            $('body').toggleClass('is--mobile_menu')
            $(this).toggleClass('is-active')
        })
    })
})(jQuery);