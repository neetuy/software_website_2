
$(document).ready(function() {

            $('a').hover(
            
               function () {
                  $(this).css({"color":"red"});
               }, 
            
               function () {
                  $(this).css({"color":"#000"});
               }
            );
            // $('.active').css({"color":"#1BBD36"});
         });