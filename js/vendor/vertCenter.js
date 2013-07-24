/*


JOEY

vertCenter Build: v1
Use: vertically centered object by measuring height after DOM loads.


*/


(function($){  
    $.fn.vertCenter = function(options) {
        var
            defaults = {
                percentage  : 2,
                left        : '50%',
                cssWidth    : false,
                textAlign   : 'center'
            },
            settings = $.extend({}, defaults, options);

            this.each(function(){
                var $this = $(this),
                tH = $(this).height(),
                tW = $(this).width(),
                percentage = settings.percentage,
                left = settings.left;

                tW = Math.round(tW);
                tH = Math.round(tH/percentage);
                $this.css({
                    position:'absolute',
                    top:'50%', 
                    marginTop: -(tH)+'px',
                    textAlign: settings.textAlign,
                });
                if (settings.cssWidth == true){
                    $this.css({
                        width: tW,
                        left: settings.left,
                        marginLeft: -(tW/2)+'px',
                        opacity:1
                    });
                }
            });
            return this;
    }         
})(jQuery); 