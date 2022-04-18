(function ($) {

    $(document).ready(function () {

        var titles = $(".accordion__title"),
            texts = $(".accordion__text");

        texts.hide()

        titles.on("click", function () {

            var that = $(this);

            var text = that.next(".accordion__text"),
               isVislible = text.is(":visible")

            if (!isVislible){
                text.stop().slideDown(300)
            }else {
                text.stop().slideUp(300)
            }

                })


    });

})(jQuery);


















