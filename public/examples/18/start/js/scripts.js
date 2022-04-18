(function($) {

    $(document).ready(function() {

        var button = $("#button"),
            text = button.text()

        button.on("click", function() {

            var text = $(".rte ul li:first-child").html()

            return text.toUpperCase()



        });

    });

})(jQuery);


















