/*


JOEY

vertCenter Build: v1
Use: vertically centered object by measuring height after DOM loads.


*/(function(e){e.fn.vertCenter=function(t){var n={percentage:2,left:"50%",cssWidth:!1,textAlign:"center"},r=e.extend({},n,t);this.each(function(){var t=e(this),n=e(this).height(),i=e(this).width(),s=r.percentage,o=r.left;i=Math.round(i);n=Math.round(n/s);t.css({position:"absolute",top:"50%",marginTop:-n+"px",textAlign:r.textAlign});r.cssWidth==1&&t.css({width:i,left:r.left,marginLeft:-(i/2)+"px",opacity:1})});return this}})(jQuery);