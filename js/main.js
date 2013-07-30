 
/*


                 ___           ___                 
    ___         /\  \         /\__\                
   /\__\       /::\  \       /:/ _/_         ___   
  /:/__/      /:/\:\  \     /:/ /\__\       /|  |  
 /::\  \     /:/  \:\  \   /:/ /:/ _/_     |:|  |  
 \/\:\  \   /:/__/ \:\__\ /:/_/:/ /\__\    |:|  |  
  ~~\:\  \  \:\  \ /:/  / \:\/:/ /:/  /  __|:|__|  
     \:\__\  \:\  /:/  /   \::/_/:/  /  /::::\  \  
     /:/  /   \:\/:/  /     \:\/:/  /   ~~~~\:\  \ 
    /:/  /     \::/  /       \::/  /         \:\__\
    \/__/       \/__/         \/__/           \/__/   
  




 Made in Brooklyn, New York.

  Joey
  UX, DEV, DESIGN

  - j0e.me
  - jb@joeylabs.com
  - fb.me/joeburdick
  - 646 481 1065


*/



var faceMask, btnClose, btnAbout, btnPrev, btnNext, btnDetail, nav,
    detailPane, sectionIndex, sectionDetail, sectionAbout, mobile;

    nav           = $('#nav-main'),
    faceMask      = $('#face-mask'),
    btnClose      = $('.btnClose'),
    btnAbout      = $('.btnAbout'),
    btnPrev       = $('.btnPrev'),
    btnNext       = $('.btnNext'),
    btnDetail     = $('.btnDetail'),
    detailPane    = $('#detail > aside'),
    sectionIndex  = $('#index'),
    sectionDetail = $('#detail'),
    sectionAbout  = $('#about')


jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';

function mobile(){
  var mobile;
  if ($('html').hasClass('mobile')){
    mobile = true;
    if (windowWidth() <= 1024){
      $('html').addClass('midCPU');
    }
    else if (windowWidth() <= 680){
      $('html').addClass('lowCPU');
    }
  } else {
    mobile = false;
  }
  return mobile;
}

function changeView(linkUrl, project){
  //console.log("Executing changeView.")
  var urlHash = location.hash.replace(/^#!\//,"");
  if (urlHash == "" || undefined )
    urlHash = undefined;

  if (urlHash != undefined){
    if (project != undefined){
      //console.log('Change View. Project found. linkUrl: ' + linkUrl+ '. Project: ' +project);
      processRoute(linkUrl, project);
    } else {
      //console.log('Change View. Project not found. linkUrl: ' + linkUrl +'.');  
      btnAbout.removeClass('active');
      processRoute(linkUrl);
    }
  } else {
    //console.log('Both linkUrl and project are undefined. Load index page.');
    loadIndex();
  } 
}

function slideshow(){
  var sliderOptions;
  $('#slideshow').royalSlider('destroy');
  if (!Modernizr.touch){
    sliderOptions = ({      
      loop: true,
      imageAlignCenter: true,
      autoScaleSlider: false,
      imageScalePadding: 10,
      transitionType: 'fade',
      height: $(window).height(),
      arrowsNav: false,
      slidesSpacing: 0,
      keyboardNavEnabled: true
    });
  } else {
    sliderOptions = ({      
      loop: true,
      imageAlignCenter: true,
      autoScaleSlider: false,
      imageScalePadding: 10,
      transitionType: 'move',
      height: $(window).height(),
      arrowsNav: false,
      slidesSpacing: 0,
      keyboardNavEnabled: false
    });
  }
  $('#slideshow').royalSlider(sliderOptions);
  var slider = $("#slideshow").data('royalSlider');
  $('#slideshow').find('.vertical-center').vertCenter({cssWidth: true});
}

function processRoute(page, project){
  //console.log("Processing route...")

  if (project != undefined){
    $('#index-'+project).addClass('active').siblings('.project').addClass('not-active').end().find('.project-link').html('<i class="icon-spinner spin"></i> Loading Project...');
    var projectColor = $('#project')
    btnAbout.removeClass('active');
    var url = 'inc/projects_export.php?project=' + project;
    var data,tags,dataObject,projectTags;
    projectTags = [];
    projectImages = [];
    $.post(url, project, function(data, textStatus) {
      $(data.tags).each(function(i, item){
        projectTags += "<span class='project-tag'>"+item+"</span>";
      });
    
      $(data.slides).each(function(i, item){
        var loFi = JSON.stringify(item);
        if ((mobile() == true && $(window).width() <= 680)){
          if (i != 0){
            loFi = loFi.replace(/(.png)/g,'-lofi.png')
            loFi = $.parseJSON(loFi);
            item = loFi;
          }
        }
        //console.log(item);
        projectImages += "<div class=\"slide-container\">" + item + "</div>";

      });
      setTimeout(function(){
        btnAbout.removeClass('active');
        sectionDetail
          .attr('data-id', data.id)
          .find('.project-name').html(data.name).end()
          .find('.project-year').html(data.year).end()
          .find('.project-agency').html(data.agency).end()
          .find('.project-details').html(data.details).end()
          .find('.project-tags').html(projectTags).end()
          .find('#slideshow').html(projectImages);

        btnDetail.addClass('active');
        btnPrev.addClass('active');
        btnNext.addClass('active');
        btnClose.addClass('active');

        $(btnPrev).unbind('click').on('click',function(){
          $('#slideshow').royalSlider('prev');
        });
        $(btnNext).unbind('click').on('click',function(){
          $('#slideshow').royalSlider('next');
        });

        },500);
      
        setTimeout(function(){
          slideshow();
        },500);
        setTimeout(function(){
          //sectionIndex.removeClass('active');
          $('section.active').removeClass('active');
          setTimeout(function(){
            $('section.active').addClass('out');
          },1000);
        },1000);
        setTimeout(function(){
          sectionDetail.removeClass('active').addClass('active');
        },1000);
        
    }, "json")
    .fail(function(){
      alert('Section '+page+' failed to load. Please check your Internet connection and that the path is correct.');
      window.history.back();
    });

  } else {
    //console.log('Not loading a project page. Load the following section: '+ page);
    // if (!$(page).length > 0){
    //   //alert('Section '+page+' not found. Please check that the path is correct.');
    //   loadIndex();
    //   $(btnClose).removeClass('active');
    //   window.history.back();
    // } else {

      setTimeout(function(){
        $('section.active').removeClass('active'); 
        setTimeout(function(){
          $('section.active').addClass('out');
        },1000);
      },1000);
      setTimeout(function(){
        $(page).addClass('active');
      },1000);

      $(btnClose).addClass('active');
    //}
  }  
}

function hashLoad(newUrl){
  //console.log("Changing hash...");
  if ("onhashchange" in window){ //initial load
    //console.log("Determining whether URL initially includes hash...")
    if (location.hash){
      var urlHash = location.hash.replace(/^#!\//,"");
      if (urlHash.indexOf('=') == -1){
        //console.log('Route found.')
        changeView(urlHash);  
      } else {
        //console.log('Route and project found.')
        var urlSplit = urlHash.split('=');
        //console.log(urlSplit);
        changeView(urlSplit[0],urlSplit[1]);
      }  
    } else {
      //console.log('No hash detected. Loading Index.');
      loadIndex();
      //console.log('Index loaded.')
      btnClose.removeClass('active');
    }
  }
}

function loadIndex(currentSection){
  if (mobile() == false && ($.cookie('behaviorAlert') != "OK")){
    $('.alert').addClass('active');
  }
  slider = $('#slideshow').royalSlider('data');
  if ($('.rsSlide').length > 0){
    $('#slideshow').royalSlider('destroy');
    //console.log("Slideshow destroyed.")
  }
  btnDetail.removeClass('active');
  btnPrev.removeClass('active');
  btnNext.removeClass('active');
  btnAbout.addClass('active');

  setTimeout(function(){
    $('section.active').removeClass('active').addClass('out'); 
    setTimeout(function(){
      sectionIndex.addClass('active');
      setTimeout(function(){
        $('.project.active').removeClass('active').siblings('.project').removeClass('not-active').end().find('.project-link')
          .html('<i class="icon-angle-down"></i> View Project <i class="icon-angle-down"></i>');
      },1500);
    },1500);
  },1000);

  window.location.hash = '';
}
function windowWidth(){
  var wW = $(window).width();
  return wW;
}
function projectPanes(){
  var projectPaneContainer, projectPane, projectCount, projectPaneWidth, projectPaneHeight, projectPaneMargins;
  projectPaneWidth = $('#index .project').width(),
  projectPaneHeight = $('#index .project').height(),
  projectPaneContainer = $('.project-container'),
  projectPane = $('#index').find('.project'),
  projectCount = projectPane.length;

  $('#index .project .info').vertCenter({percentage: 1.75});
  if (!Modernizr.touch){
    if (windowWidth() >= 680){     
      projectPaneContainer.width((projectCount * projectPaneWidth));
      sectionIndex.mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 45);
        event.preventDefault();
      });
    } else {
      projectPaneContainer.width((projectPaneWidth)); //.height(projectCount * projectPaneHeight);
      sectionIndex.unbind('mousewheel');
    }
  } else {
      projectPaneContainer.width((projectCount * projectPaneWidth));
  }
}

function interfaces(){

  projectPanes();
    
  $(btnClose).on('click',function(e){
    var currentSection = $('section.active').attr('id');
    //console.log('Closing current section... '+currentSection);
    $(this).removeClass('active');
    loadIndex(currentSection);
  });
  btnDetail.on('click',function(){
    $(this).toggleClass('on');
    faceMask.toggleClass('active');
    detailPane.toggleClass('off');
    if(mobile() == true && $(window).width <= 680){
      sectionDetail.toggleClass('aside-open');
    }
  });
  faceMask.on('click',function(){
    btnDetail.click();
  });
  $('.cookie').on('click',function(event){
    $.cookie('behaviorAlert', 'OK', { expires: 7 });
    $('.alert').removeClass('active');
    //loadIndex();
    event.preventDefault;
  });

  function navTimer(){
    setTimeout(function(){
      nav.addClass('trans');
    }, 5000);  
  }
  navTimer();
  
  nav.on('click',function(){
    $(this).removeClass('trans');
    setTimeout(function(){
      navTimer()
    }, 5000);
  })
}

function touch(){
  $('.project-container').hammer()
    .on('tap', '.project', function(event) {
        $(this).addClass('hover').siblings('.project').removeClass('hover');
        event.preventDefault;
    })
    .on('tap', '.project-link', function(event) {
        $(this).click();
    });
}

function keyboard(){
  $(document).keyup(function(e) {
    if (e.keyCode == 27) { $(btnClose).click(); }   // esc
  });
  $('.project').on('mouseenter',function(){
    $(this).addClass('hover');
  }).on('mouseleave',function(){
    $(this).removeClass('hover');
  });
  nav.on('mouseenter',function(){
    $(this).click();
  })
}

$(document).ready(function(){
  $(window).on('resize',function(){
    setTimeout(function(){
      projectPanes();
      $('#detail .vertical-center').vertCenter({cssWidth: true});
    }, 800);
  });
  hashLoad();
  interfaces();
  $(window).on('hashchange', function(e) {
    hashLoad(location.hash);
    e.preventDefault();
  });
  setTimeout(function(){ window.scrollTo(0, 1); }, 0);
});


