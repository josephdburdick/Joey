<?php 

$projects = array();
$previews = array();

$previews["mtv"] = array(
   "id"       =>  "mtv",
   "name"     =>  "Secret MTV Project",
   "agency"   =>  "JOEY",
   "year"     =>  2013,
   "tags"     =>  array("Native App", "Visual Design", "UX"),
   "footer"   =>  "Launching Summer 2014"
);






$projects["macys"] = array(
   "id"       =>  "macys",
   "name"     =>  "Macy's",
   "agency"   =>  "Studiografica",
   "year"     =>  2013,
   "tags"     =>  array("Web App", "Project Management", "Front-end Development", ".NET implementation", "Touch Sensitive"),
   "details"  =>  "<p>
                     An in-store Macy's training app for employees specialized for the iPad 2. 
                     The first project was Macy's Diamonds educated 
                     employees on the physical properties of diamonds to improve 
                     sales tactics.
                  </p>
                  <p>
                     Tests were developed with customized Jquery Mobile forms to quiz and track employees' progress which were 
                     recorded live using a custom .Net framework.
                  </p>
                  <p>
                     This project was very successful which brought on many 
                     brands underneath the Macy's brand umbrella including 
                     Bulova, Caravelle, Tommy Hilfiger, and others. 
                     It also peaked interest with Citizen who later hired our services to implement a similar platform to 
                     show <a href=\"#!/work=citizen\">their digital campaigns</a>.
                  </p>
                     ",
   "slides"   =>  array(
                     
                     "<img width=\"300\" height=\"80\" class=\"vertical-center\" src=\"projects/macys/logo.png\" alt=\"Macy's\">",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/macys/slide-0.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/macys/slide-1.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/macys/slide-2.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/macys/slide-3.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/macys/slide-4.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/macys/slide-5.png\"></div>"
                  )
);


$projects["ciroc"] = array(
   "id"       =>  "ciroc",
   "name"     =>  "Cîroc Vodka",
   "agency"   =>  "Studiografica",
   "year"     =>  2011,
   "tags"     =>  array("Front-end Development", "Project Management", "Touch Sensitive"),
   "details"  =>  "<p>
                     P. Diddy's media team BlueFlame used Studiografica to build Ciroc.com to help promote the 
                     brand, so I had the opportunity to build a site for a well known vodka brand. This project 
                     ran smoothly on iPads and used hashbang address bar manipulation to seamlessly fade 
                     between different pages of the site. All code was written without a framework. 
                  </p>
                  <p>
                     My favorite part of this project was the drink detail view. When you clicked the next or previous
                     button it would change the URL hash to keep it bookmarkable and the drinks would slide into view horizontally.
                     I may 
                     or may not have embedded \"j0e\" somewhere in the source. ;)
                  </p>",
   "slides"   =>  array(
                     "<div class=\"vertical-center\"><img src=\"projects/ciroc/logo.png\" alt=\"David's Bridal\" width=\"300\" height=\"68\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/ciroc/slide-0.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/ciroc/slide-1.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/ciroc/slide-2.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/ciroc/slide-3.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/ciroc/slide-4.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/ciroc/slide-5.png\"></div>"
                  )
);

$projects["g-shock"] = array(
   "id"       =>  "g-shock",
   "name"     =>  "G-Shock",
   "agency"   =>  "Studiografica",
   "year"     =>  2012,
   "tags"     =>  array("Project Management", "Front-end Development"),
   "details"  =>  "
                  <p>
                     The G-Shock website was 1 of 3 websites that were made for Casio in a period spanning ~1 month. 
                     <a href=\"http://www.protrek.casio.com\">Protrek</a>, <a href=\"http://edifice.casio.com\">Edifice</a>, 
                     and <a href=\"http://www.baby-g.com\">Baby-G</a> were all developed nearly simultaneously. 
                  </p>
                  <p>
                     One of my favorite things about developing this site was the watches section. It was a serious step for Casio
                     towards progressive enhancement, so finally leaving many graphical elements behind and using CSS to do it's job. 
                     I also developed custom CSS and JS
                     so no matter what width and height the watch came in from the back-end it always fit perfectly into the grid views.
                  </p>",
   "slides"   =>  array(
                     "<div class=\"vertical-center\"><img src=\"projects/g-shock/logo.png\" alt=\"g-shock\" width=\"200\" height=\"197\"></div>",
                     "<img class=\"rsImg\" src=\"projects/g-shock/slide-0.png\">",
                     "<img class=\"rsImg\" src=\"projects/g-shock/slide-1.png\">",
                     "<img class=\"rsImg\" src=\"projects/g-shock/slide-2.png\">",
                     "<img class=\"rsImg\" src=\"projects/g-shock/slide-3.png\">",
                     "<img class=\"rsImg\" src=\"projects/g-shock/slide-4.png\">",
                     "<img class=\"rsImg\" src=\"projects/g-shock/slide-5.png\">"
                  )
);
$projects["tambaran"] = array(
   "id"       =>  "tambaran",
   "name"     =>  "Tambaran",
   "agency"   =>  "JOEY",
   "year"     =>  "2010 — 2013",
   "tags"     =>  array("Project Management", "Custom E-Blasts", "User Interface", "User Experience", "Front-end Development"),
   "details"  =>  "
                  <p>
                     As project manager I brought on visual designer <a target=\"_blank\" href=\"http://josephmueller.net\">Joseph Mueller</a> 
                     and web developer <a target=\"_blank\" href=\"http://efrat.me\">Efrat Weidberg</a> to create 
                     a site for Maureen Zarember using Joomla that was easy to look at and use for potential tribal art buyers. 
                     The site features a buyers-only section where Ms. Zarember can control what potential buyers see.
                     I continue to handle work for Tambaran for front-end changes to the site and custom e-blasts for art festivals and gallery shows.
                  </p>
                  <h3>Credits</h3>
                  <p><small>
                     Tambaran.com Visual Designer<br><a target=\"_blank\" href=\"http://josephmueller.net\">Joseph Mueller</a><br>
                     Tambaran.com Back-end Developer<br><a target=\"_blank\" href=\"http://efrat.me\">Efrat Weidberg</a>
                     </small>
                  </p>",
   "slides"   =>  array(
                     "<div class=\"vertical-center\"><img src=\"projects/tambaran/logo.png\" alt=\"TAMBARAN\" width=\"300\" height=\"\"></div>",
                     "<img class=\"rsImg\" src=\"projects/tambaran/slide-0.png\">",
                     "<img class=\"rsImg\" src=\"projects/tambaran/slide-1.png\">",
                     "<img class=\"rsImg\" src=\"projects/tambaran/slide-2.png\">",
                     "<img class=\"rsImg\" src=\"projects/tambaran/slide-3.png\">",
                     "<img class=\"rsImg\" src=\"projects/tambaran/slide-4.png\">",
                     "<img class=\"rsImg\" src=\"projects/tambaran/slide-5.png\">",
                     "<img class=\"rsImg\" src=\"projects/tambaran/slide-8.png\">",
                     "<img class=\"rsImg\" src=\"projects/tambaran/slide-9.png\">",
                     "<img class=\"rsImg\" src=\"projects/tambaran/slide-10.png\">",
                     "<img class=\"rsImg\" src=\"projects/tambaran/slide-12.png\">"
                  )
);
$projects["wwglass"] = array(
   "id"       =>  "wwglass",
   "name"     =>  "W&W Glass Pilkington",
   "agency"   =>  "Studiografica",
   "year"     =>  2011,
   "tags"     =>  array("Front-End Development", "User Interface", "User Experience", "Touch"),
   "details"  =>  "
                  <p>
                     <a href=\"http://wwglass.com/pilkington\">Pilkington Planar structural glass systems</a> have a proven track record in 
                     the most demanding applications. Architects know they can call on Pilkington 
                     to create roofs, canopies, soaring facades or even clad entire buildings in 
                     glass and receive a total commitment for the design, supply and warranty of 
                     the entire, integrated system.
                  </p>
                  <p>
                     W&W Glass came to Studiografica to create a cross 
                     platform web portfolio to show off their beautiful glass 
                     structures. They had wonderful photography of their work 
                     which always makes me excited. Once the design came through I made my own 
                     tweaks to the portfolio section to make sure there was a good experience on tablets. 
                  </p>
                  <p>
                     Aside from appropriately responding to all touch, the portfolio section also featured a list of locations 
                     that used W&W and Pilkington. With your finger you could easily move up and down the list then touch the 
                     different shots associated with that particular site. The animations between locations looked great and 
                     remains one of my favorite things I ever worked on at Studiografica.
                  </p>

                  ",
   "slides"   =>  array(
                     "<div class=\"vertical-center\"><img src=\"projects/wwglass/logo.png\" alt=\"wwglass\" width=\"300\" height=\"100\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/wwglass/slide-0.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/wwglass/slide-1-1.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/wwglass/slide-2.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/wwglass/slide-3.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/wwglass/slide-4.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/wwglass/slide-4-1.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/wwglass/slide-5.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/wwglass/slide-6.png\"></div>"
                  )
);

$projects["davids-bridal"] = array(
   "id"       =>  "davids-bridal",
   "name"     =>  "David's Bridal",
   "agency"   =>  "JOEY",
   "year"     =>  2012,
   "tags"     =>  array("Project Management", "Front-End Design", "Front-End Development", "User Interface", "User Experience"),
   "details"  =>  "
                  <p>
                     During my tenure at a startup called OurWeddingDay I helped design the original Vendor Platform what would 
                     later be purchased by David's Bridal. I changed my focus to development after OurWeddingDay and 
                     David's Bridal but once David's Bridal got around to using what I helped build they hired me to help. 
                     I designed, developed, and 
                     helped implement the brand new bride-facing and admin-facing Vendor Platform that is currently in use.
                  </p>
                  ",
   "slides"   =>  array(
                     "<div class=\"vertical-center\"><img src=\"projects/davids-bridal/logo.png\" alt=\"David's Bridal\" width=\"300\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/davids-bridal/slide-2.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/davids-bridal/slide-0.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/davids-bridal/slide-1.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/davids-bridal/slide-3.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/davids-bridal/slide-4.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/davids-bridal/slide-5.png\"></div>"
                  )
);
$projects["citizen"] = array(
   "id"       =>  "citizen",
   "name"     =>  "Citizen",
   "agency"   =>  "Studiografica",
   "year"     =>  2013,
   "tags"     =>  array("Web App", "Project Management", "Front-end Development", ".NET implementation", "Touch Sensitive"),
   "details"  =>  "<p>
                     Focusing on Citizen's Eco-Drive line, Studiografica created a touch-interactive presentation for Citizen's digital 
                     campaigns to organize and showcase Citizen's outdoor, in-store, direct and digital advertising.
                  </p>
                  <p>
                     This web app was specialized for the Windows Surface Pro and presented high definition videos, 
                     touch-sensitive 3D image rotators, and front/back ad flipping animations.
                     Built using extending Jquery Mobile, customizing a CSS3/JS touch slider, and copious amounts of Fig Newtons.
                  </p>
                     ",
   "slides"   =>  array(
                     
                     "<img width=\"264\" height=\"184\" class=\"vertical-center\" src=\"projects/citizen/logo.png\" alt=\"Citizen\">",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-0.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-1.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-2.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-3.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-4.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-5.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-6.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-7.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-8.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-9.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-10.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-11.png\"></div>",
                     "<div class=\"bg-slide\"><img class=\"rsImg\" src=\"projects/citizen/slide-12.png\"></div>"
                  )
);

$projects["hard"] = array(
   "id"       =>  "hard",
   "name"     =>  "Hard Energy Drink",
   "agency"   =>  "Studiografica",
   "year"     =>  2012,
   "tags"     =>  array("Project Management", "Front-end Development", ".NET Implementation"),
   "details"  =>  "The guys from Hard Energy wanted a website to display his alcoholic mixers with visuals and also inform fans of his sponsored parties. The site features an animated header on the front page that flips to the top once you scroll past the main section and also a calendar that displays events for his parties.",
   "slides"   =>  array(
                     "<div class=\"vertical-center\"><img src=\"projects/hard/logo.png\" alt=\"HARD\" width=\"300\" height=\"96\"></div>",
                     "<img class=\"rsImg\" src=\"projects/hard/slide-0.png\">",
                     "<img class=\"rsImg\" src=\"projects/hard/slide-1.png\">",
                     "<img class=\"rsImg\" src=\"projects/hard/slide-2.png\">",
                     "<img class=\"rsImg\" src=\"projects/hard/slide-3.png\">",
                     "<img class=\"rsImg\" src=\"projects/hard/slide-4.png\">",
                     "<img class=\"rsImg\" src=\"projects/hard/slide-5.png\">"
                  )
);
$projects["aoa-ny"] = array(
   "id"       =>  "aoa-ny",
   "name"     =>  "AOA NY",
   "agency"   =>  "JOEY",
   "year"     =>  "2010&mdash;2013",
   "tags"     =>  array("Project Management", "Custom E-Blasts", "Front-end Development"),
   "details"  =>  "The Africa Oceania Americas Tribal Art Fair is a client that came about after my work for <a href=\"#!/work=tambaran\">Tambaran Gallery</a>. The site was designed and developed in less than a week. It works across all browsers and features a subtle fading background that changes between examples of art featured at the fair every year. They also use me for graphical e-blasts that appear correct in every email platform.",
   "slides"   =>  array(
                     "<div class=\"vertical-center\"><img src=\"projects/aoa-ny/logo.png\" alt=\"AOANY\" width=\"300\" height=\"275\"></div>",
                     "<img class=\"rsImg\" src=\"projects/aoa-ny/slide-0.png\">",
                     "<img class=\"rsImg\" src=\"projects/aoa-ny/slide-1.png\">",
                     "<img class=\"rsImg\" src=\"projects/aoa-ny/slide-2.png\">",
                     "<img class=\"rsImg\" src=\"projects/aoa-ny/slide-3.png\">"
                  )
);

?>


