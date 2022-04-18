(function($) {

    $(document).ready(function() {

        $("#button").on("click", function() {

            alert("Klinięty!");

            $(this).off("click");

        });

    });

})(jQuery);


















