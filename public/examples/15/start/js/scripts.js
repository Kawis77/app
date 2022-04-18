(function ($) {

    $(document).ready(function () {

        var stars = $("#rating .rating__star"),
            radios = $(":radio[name='rating']");

        stars.hover(
            function () {

                var that = $(this)

                that.prevAll().andSelf.addClass("rating__star--hovered")


            },
            function () {

                var that = $(this)

                that.prevAll().andSelf.removeClass("rating__star--hovered")



            })


    });

})(jQuery);