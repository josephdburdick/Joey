    </div> <!-- /.container -->
    <div id="face-mask"></div>
    <script src="js/vendor/jquery-1.10.1.min.js"></script>

    <?php 
        if($ismobile) { echo '<script src="js/vendor/hammer.jquery.min.js"></script>'."\n";}
        else { echo '<script src="js/vendor/jquery.mousewheel.min.js"></script>'."\n";} 
    ?>
    <script src="js/vendor/jquery.easing-1.3.js"></script>
    <script src="js/vendor/jquery.royalslider.min.js"></script>
    <script src="js/vendor/jquery.cookie.js"></script>
    <script src="js/vendor/vertCenter-ck.js"></script>
    <script src="js/main-ck.js"></script>


    <script>
    	if (mobile() == true) touch();
    	else keyboard();
    </script>

    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-42649535-1', 'joeylabs.com');
      ga('send', 'pageview');

    </script>
    
  </body>
</html>
