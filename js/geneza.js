
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
               $(".toggle").toggle('slow', function(){
               
               });
            });

               // $(function(){
               // $('fadeIn').fadeIn(2000);
               // setTimeout(function(){
               //  $('.fadeIn').fadeOut(2000, function(){
               //    location.reload(true);
               //  });
               // } 60000);
               // });
                 faders = $(".fadeIn").fadeTo(0,1);
                $(window).scroll(function(){
                    faders.each(function(){
                        a = $(this).offset().top + $(this).height();
                        b = $(window).scrollTop() + ($(window).height());
                        c = $(window).scrollTop() + $(this).height();
                        if (c > $(this).offset().top){
                            $(this).fadeTo(0,1);
                        }
                        else if (a < b) {
                            $(this).fadeTo(0,1);
                        }
                        else { 
                            $(this).fadeTo(0,0);
                        }
                    });
                });
   });

