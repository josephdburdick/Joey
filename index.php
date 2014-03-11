<?php 
$page = "index";
include "inc/head.php";
include "inc/nav.php"; 
?>
  <section id="index" class="scroll-horizontal">
    <ul class="project-container">
      <?php 
      $number = 1;
      foreach ($previews as $preview) {
        echo "\n". str_repeat(" ", 5). '<li class="project" id="index-'. $preview["id"] .'">'. "\n" . 
            str_repeat(" ", 6). '<div class="vertical-block">'. "\n" . 
              str_repeat(" ", 7). '<div class="bg"></div>'. "\n" . 
              str_repeat(" ", 7). '<div class="info">'. "\n" . 
                str_repeat(" ", 8). '<header>'. "\n" .
                  str_repeat(" ", 9). '<span class="project-number">&bull;</span>'. "\n" .
                  str_repeat(" ", 9). '<span class="project-name">'. $preview["name"] .'</span>'. "\n" .
                  str_repeat(" ", 9). '<hr>'. "\n" .
                  str_repeat(" ", 9). '<div class="project-tags">'. "\n"; 
                  foreach ($preview["tags"] as $tag){
                    echo str_repeat(" ", 10).  '<span>' . $tag . '</span>'. "\n";
                  } 
                echo  str_repeat(" ", 9). '</div>'. "\n" .
                str_repeat(" ", 8). '</header>'. "\n" .
                str_repeat(" ", 8). '<footer>'. "\n" .
                  str_repeat(" ", 9). '<span class="project-link">'. $preview["footer"] .'</span>'. "\n" .
                str_repeat(" ", 8). '</footer>'. "\n" . 
              str_repeat(" ", 7). '</div>'. "\n" .
            str_repeat(" ", 6). '</div>'. "\n" .
        str_repeat(" ", 5). '</li>'."\n"; 
      $number++;
      
      } ?>
      <?php 
      $number = 1;

      foreach ($projects as $project) {
        echo "\n". str_repeat(" ", 5). '<li class="project" id="index-'. $project["id"] .'">'. "\n" . 
            str_repeat(" ", 6). '<div class="vertical-block">'. "\n" . 
              str_repeat(" ", 7). '<div class="bg"></div>'. "\n" . 
            	str_repeat(" ", 7). '<div class="info">'. "\n" . 
                str_repeat(" ", 8). '<header>'. "\n" .
                  str_repeat(" ", 9). '<span class="project-number">'. sprintf ("%02u", $number) .'</span>'. "\n" .
                  str_repeat(" ", 9). '<span class="project-name">'. $project["name"] .'</span>'. "\n" .
                  str_repeat(" ", 9). '<hr>'. "\n" .
                  str_repeat(" ", 9). '<div class="project-tags">'. "\n"; 
                  foreach ($project["tags"] as $tag){
                    echo str_repeat(" ", 10).  '<span>' . $tag . '</span>'. "\n";
                  } 
                echo  str_repeat(" ", 9). '</div>'. "\n" .
                str_repeat(" ", 8). '</header>'. "\n" .
                str_repeat(" ", 8). '<footer>'. "\n" .
                  str_repeat(" ", 9). '<a href="#!/work='. $project["id"] .'" class="project-link"><i class="icon-angle-down"></i> View Project <i class="icon-angle-down"></i></a> '. "\n" .
                str_repeat(" ", 8). '</footer>'. "\n" . 
              str_repeat(" ", 7). '</div>'. "\n" .
            str_repeat(" ", 6). '</div>'. "\n" .
        str_repeat(" ", 5). '</li>'."\n"; 
      $number++;
      
      } ?>
    </ul>
  </section> <!-- /#index -->
  <section id="detail" data-id="">
    <aside>
      <div class="content">
        <h3>Project</h3>
        <span class="project-name"></span>
        <h3>Date</h3>
        <span class="project-year"></span>
        <h3>Agency</h3>
        <span class="project-agency"></span>
        <h3>Description</h3>
        <span class="project-details"></span>
        <h3>Tags</h3>
        <div class="project-tags"> 
          <span></span>
        </div>
      </div>
    </aside>
    <article>
      <div id="slideshow" class="royalSlider"></div>
    </article>
  </section>

  <section id="about">
    <article>
      <header>
        <div id="about-logo"></div>

        Made in Brooklyn, New York.
        <div class="fb-like" data-href="http://joeylabs.com" data-send="true" data-width="300" data-show-faces="true"></div>      
      </header>
        
      <nav id="social">
        <a class="first" target="_blank" href="work/JoeBurdick_resume2014.pdf"><i class="icon-file-text-alt"></i> View Resume</a>
        <a target="_blank" href="mailto:jb@joeylabs.com?subject=Sup brah, rad site."><i class="icon-envelope"></i> Email Joe</a>
        <?php if($ismobile){ echo "<a href=\"tel:(646)481-1065\"><i class=\"icon-phone-sign\"></i> Phone Joe</a>";} ?>
        <hr class="large-screen">
        <a target="_blank" href="https://github.com/josephdburdick"><i class="icon-github-sign"></i> Github</a>
        <a target="_blank" href="http://www.linkedin.com/in/joeburdick"><i class="icon-linkedin-sign"></i> LinkedIn</a>
        <a target="_blank" href="http://j0e.me"><i class="icon-tumblr-sign"></i> Tumblr</a>
        <a target="_blank" href="http://fb.me/joeburdick"><i class="icon-facebook-sign"></i> Facebook</a>
        <a target="_blank" href="http://instagram.com/josephdburdick/"><i class="icon-instagram"></i> Instagram</a>
        <a class="last" target="_blank" href="https://twitter.com/jftf"><i class="icon-twitter"></i> Twitter</a>
      </nav>
      <div id="about-img">
        <img src="img/about_joeyBaby.png" alt="Joey as a wee lad!">
      </div>
      <h2 class="text-center">
        Sup! I'm Joe, the guy behind Joey.
      </h2>
      <p>
        I'm a front-end designer/developer with a degree in advertising and a knack for user experience. 
        Earlier this year I finished General Assembly's 
        <a href="https://generalassemb.ly/education/back-end-web-development">back-end Ruby/Ruby on Rails programming 
          course</a>, spearheaded the visual design for MTV's upcoming music video streaming app, finished a front-end development
          project for <a href="http://carrot.is">Carrot</a> while learning Stylus, Jade, Coffeescript and Git's rebase technique. 
          I'm currently looking for a full-time dev position where I'd work on a team and I'm available for freelance so hit me up!
      </p>
      <p>
        I’ve tinkered with computers for 15 years; got my start on a Tandy back in the late 80's,
        built webpages on Angelfire in the 90's, built Linux servers out of scraps in the 00's, and 
        after moving a bunch of times I ended up at Virginia Commonwealth University
        where I learned the art of grabbing people's attention. Today I continue learning new ways to grab 
        people’s attention on the Web, wherever the Web happens to be. 
      </p>
      <p>
        When I'm not learning random facts on the Net or working I'm 
        <a href="http://j0e.me">blogging around Brooklyn</a>, 
        <a href="http://instagram.com/josephdburdick">taking pictures on Instagram</a>, 
        DJing, sketching out app ideas, hanging out with friends talking about science 
        or my collegues about code and design.
      </p>

      <p>
        <small>
          JOEY is a one-page, responsive portfolio powered by an associative 
          array that feeds projects from a PHP foreach loop to on-demand JSON 
          data. Javascript watches hashchanges in the browser’s address bar 
          and the logic decides what data to show and where from. <br><br>

          <a href="https://github.com/josephdburdick/JOEY-2013">View the source in Github.</a>
 
        </small>
      </p>
    </article>
  </section>
  <div class="alert">
    <article>
      <i class="icon-check-sign"></i>
      <hr>
      <p>
        Joey is not compatible with your browser.<br>
        I did not code Joey for versions of IE lower than 11. 
      </p>
      <p>
        Using an outdated browser makes your computer unsafe. Learn about 
        alternative browsers that may fit you even better than the one you 
        are currently using at <a href="http://browsehappy.com/">Browse Happy</a>.
      </p>
      <br>
        <a href="#" class="cookie button" data-cookie="OK">YUP, GOT IT</a>
    </article>
  </div> 


<?php include "inc/footer.php"; ?>
