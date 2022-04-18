(function($) {

    $(document).ready(function() {

        var ul = $(".rte ul");

        ul.find("li").on("click" , function () {
            console.log("Klikniecie li numer " + $(this).index())

        })



    });

})(jQuery);


















