
   $(document).ready(function() {

            $('a').hover(
            
               function () {
                  $(this).css({"color":"#0FA377"});
               }, 
            
               function () {
                  $(this).css({"color":""});
               }
            );
            $("button").click(function(event){
               $(".collapse").collapse('slow', function(){
               
               });
            });

   });

