(function($) {

   $(document).ready(function() {

        var rte = $(".rte");

        var links = rte.find("a");




        var longString = rte.find("p").filter(function (i , element) {

            return $(element).text().length > 100


        })


       var first = links.first();

        first.hl()



    });

})(jQuery);


















