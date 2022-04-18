(function($) {

    console.time("Dom Content")
    console.time("Window Loaded")

    $(window).load(function () {

        console.timeEnd("Window Loaded")

    })

    $(document).ready(function () {
        console.timeEnd("DOM")

    })



})(jQuery);


















