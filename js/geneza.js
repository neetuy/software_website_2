
   $(document).ready(function() {

            $('a').hover(
            
               function () {
                  $(this).css({"color":"red"});
               }, 
            
               function () {
                  $(this).css({"color":""});
               }
            );
            $("button").click(function(event){
               $(".toggle").toggle('slow', function(){
                 
               });
            });

   });

