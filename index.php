

<?php 
$page = "index";
include "inc/head.php";
include "inc/nav.php"; 
?>
  <section id="index" class="scroll-horizontal">
    <ul class="project-container">
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
                  str_repeat(" ", 9). '<span class="project-tags">'. "\n"; 
                  foreach ($project["tags"] as $tag){
                    echo str_repeat(" ", 10).  '<span class="project-tag">' . $tag . '</span>'. "\n";
                  } 
                echo  str_repeat(" ", 9). '</span>'. "\n" .
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
    <aside class="off">
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
        <span class="project-tags"> 
          <span class="project-tag"></span>
        </span>
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
        <a class="first" target="_blank" href="work/JoeBurdick_2013-RESUME.pdf"><i class="icon-file-text-alt"></i> View Resume</a>
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
      <p>
        Hi, I'm Joe. I live in Brooklyn, I'm currently seeking projects as a user experience/front-end developer, and I'm taking <a href="https://generalassemb.ly/education/back-end-web-development">a 10-week back-end Ruby programming course at General Assembly</a>.
      </p>
      <p>
        I freelance under the guise Joey because it’s what everyone called me 
        when I was a kid.<br/>It reminds me of a time when I 
        built time machines out of appliances and furniture. I strive to be that kid today with my work — creative and curious. 
      </p>
      <p>
        I’ve tinkered with computers for 15 years; got my start on a Tandy back in the 80's
        and webpages on Angelfire in the 90's, after moving a brazillion times with my family I ended up with a degree in 
        Mass Communications/Creative Advertising
        where I learned the art of grabbing people's attention. Today I continue learning new ways to grab 
        people’s attention on the Web, wherever the Web happens to be. 
      </p>
      <p>
        When I'm not learning random facts on the Net I'm riding around on my bike, DJing, drawing <em>fine</em> arts, and 
        maxxin' out with my homies.
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
        Please scroll up and down with your mouse/trackpad to pan 
        through all projects.
      </p>
      
      <!--[if IE]>
      <p>
        While I am able to develop sites compatible with Internet Explorer this site provides 
        an experience too rich to be viewed properly in your browser. Please view the site in <a href="http://browsehappy.com" target="_blank">one of these excellent alternatives</a>.
      </p>
      <![endif]-->
      <br>
        <a href="#" class="cookie button" data-cookie="OK">OK, GOT IT</a>
      
    </article>
  </div>

</div><!-- /.container -->

<?php include "inc/footer.php"; ?>
