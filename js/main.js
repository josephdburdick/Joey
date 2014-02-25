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



var faceMask, btnClose, btnAbout, btnPrev, btnNext, btnDetail, nav, activeProject, currentSection,
    detailPane, sectionIndex, sectionDetail, sectionAbout, isMobile, scrollAlert, slideshowOptions;

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
    sectionAbout  = $('#about'),
    scrollAlert   = $('#mouse');

jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
function windowWidth(){ var wW = $(window).width(); return wW; }
function windowHeight(){ var wH = $(window).height(); return wH; }
function navTimer(){ setTimeout(function(){ nav.addClass('trans'); }, 5000); }

function showMouseNotify(b){
  if (b === true){
    if(mobile() === false && $(window).width <= 680){
      scrollAlert.addClass('active');
    }
  } else {
    if(mobile() === false && $(window).width <= 680){
      scrollAlert.removeClass('active');
    }
  }
}

function mobile(){
  if ($('html').hasClass('mobile')){
    isMobile = true;
    scrollAlert.hide();
  } else {
    isMobile = false;
  }
  return isMobile;
}

function keyboard(){
  $(document).keyup(function(e) {
    if (sectionIndex.hasClass('active')){
      if (e.keyCode === 37 || e.keyCode === 39)  {
        if (sectionIndex.find('.project').hasClass('hover')){
          activeProject = sectionIndex.find('.project.hover');
        } else if (sectionIndex.find('.project').hasClass('hover latest')) {
          activeProject = sectionIndex.find('.project.latest');
        } else {
          activeProject = sectionIndex.find('.project').first();
        }
        var projectWidth = $(activeProject).outerWidth(true)

        if (e.keyCode === 37){
          if (activeProject.index() === 0){
            activeProject.addClass('hover'); 
          } else {
            activeProject.removeClass('hover latest').prev('.project').toggleClass('hover'); 
            sectionIndex.stop().animate({scrollLeft: "-="+projectWidth}, 500)
          }   
        }
          
        if (e.keyCode === 39){
          if (activeProject.index() === 0){
            sectionIndex.find('.project').eq(0).addClass('hover');
          }
          if (activeProject.index() === sectionIndex.find('.project').length - 1){
            activeProject.addClass('hover'); 
          } else {
            activeProject.removeClass('hover latest').next('.project').toggleClass('hover');
            sectionIndex.stop().animate({scrollLeft: "+="+projectWidth}, 500)
          }
        }
        
      }
      if (e.keyCode === 27)
        $('.project.hover').removeClass('hover').addClass('latest');
      if (e.keyCode === 13){
        if ($('.project.hover a[href]').length > 0){
          var link = $('.project.hover a[href]').attr('href');
          hashLoad(link);
        }
      }
    } else {
      if (e.keyCode === 27) { $(btnClose).click(); }  // esc      
    }
  });
}

function projectPanes(){
  var projectPaneContainer, projectPane, projectCount, projectPaneWidth, projectPaneHeight;
  projectPaneWidth = $('#index .project').width(),
  projectPaneHeight = $('#index .project').height(),
  projectPaneContainer = $('.project-container'),
  projectPane = $('#index').find('.project'),
  projectCount = projectPane.length;

  $('#index .project .info').vertCenter({percentage: 1.75});

  if (!Modernizr.touch){
    if (windowWidth() >= 680){
      projectPaneContainer.width((projectCount * projectPaneWidth));
      sectionIndex.unbind('mousewheel').mousewheel(function(event, delta) {
        this.scrollLeft -= Math.round(parseInt(delta * 45));
        return false;
      });
    } else {
      sectionIndex.unbind('mousewheel');
    }
  } else {
      projectPaneContainer.width((projectCount * projectPaneWidth));
  }
  if (mobile() && windowWidth() <= 680){
    $('.project').addClass('hover');
  } else {
    $('.project').on('mouseenter',function(){
      $(this).addClass('hover latest').siblings().removeClass('hover latest');
    }).on('mouseleave',function(){
      $(this).removeClass('hover').addClass('latest');
    });
    nav.on('mouseenter',function(){
      $(this).click();
    });
  }
}

function loadIndex(){
  currentSection = $('section.active').attr('id');

  btnDetail.removeClass('active');
  btnPrev.removeClass('active');
  btnNext.removeClass('active');
  btnAbout.addClass('active');
  
  $('#' + currentSection).removeClass('active'); 
  setTimeout(function(){
    sectionIndex.addClass('active');
    setTimeout(function(){
      $('.project.active').removeClass('active').siblings('.project').removeClass('not-active').end().find('.project-link')
        .html('<i class="icon-angle-down"></i> View Project <i class="icon-angle-down"></i>');
        scrollAlert.addClass('active');
    },500);
  },500);

  projectPanes();
}

function slideshow(){
  if ($('.royalSlider').is('[class*="rs"]')){
    $('.royalSlider').royalSlider('destroy');
  }
  scrollAlert.removeClass('active');
  if (!Modernizr.touch){
    slideshowOptions = ({
      loop: true,
      imageAlignCenter: true,
      autoScaleSlider: false,
      imageScalePadding: 10,
      transitionType: 'fade',
      width: windowWidth(),
      height: windowHeight(),
      arrowsNav: false,
      slidesSpacing: 0,
      keyboardNavEnabled: true
    });
  } else {
    slideshowOptions = ({
      loop: true,
      imageAlignCenter: true,
      autoScaleSlider: false,
      imageScalePadding: 10,
      transitionType: 'move',
      width: windowWidth(),
      height: windowHeight(),
      arrowsNav: false,
      slidesSpacing: 0,
      keyboardNavEnabled: false
    });
  }

  $('#slideshow').royalSlider(slideshowOptions);
  var slider = $('#slideshow').data('royalSlider');
  $(window).trigger('resize');
  $(btnPrev).unbind('click').on('click',function(){ slider.prev(); });
  $(btnNext).unbind('click').on('click',function(){ slider.next(); });

  $('#slideshow').find('.vertical-center').vertCenter({cssWidth: true});
  $(window).trigger('resize');
}

function pullData(project){
  var url = 'inc/projects_export.php?project=' + project;
  var projectTags, projectImages;
  projectTags = [];
  projectImages = [];
  $.post(url, project, function(data) {
    $(data.tags).each(function(i, item){
      projectTags += "<span class='project-tag'>"+item+"</span>";
    });
  
    $(data.slides).each(function(i, item){
      var loFi = JSON.stringify(item);
      if ((mobile() === true && $(window).width() <= 680)){
        if (i !== 0){
          loFi = loFi.replace(/(.png)/g,'-lofi.png');
          loFi = $.parseJSON(loFi);
          item = loFi;
        }
      }
      projectImages += "<div class=\"slide-container\">" + item + "</div>";

    });
    btnAbout.removeClass('active');
    sectionDetail
      .attr('data-id', data.id)
      .find('.project-name').html(data.name).end()
      .find('.project-year').html(data.year).end()
      .find('.project-agency').html(data.agency).end()
      .find('.project-details').html(data.details).end()
      .find('.project-tags').html(projectTags).end()
      .find('#slideshow').html(projectImages);
    slideshow();
    setTimeout(function(){
      btnDetail.addClass('active');
      btnPrev.addClass('active');
      btnNext.addClass('active');
      btnClose.addClass('active');
      if ((mobile() === false && detailPane.hasClass('active') === false) || 
        (mobile() === true && windowWidth() >= 680 && detailPane.hasClass('active') === false)){
        btnDetail.trigger('click');
      }
    },500);
    

  }, "json")
  .fail(function(){
    alert("Data not found.");
    window.history.back();
  });
}

function processRoute(page, project){
  //("Processing route...")
  var currentSection = $('section.active').attr('id');

  if (project !== undefined){
    $('#index-'+project).addClass('active').siblings('.project').addClass('not-active').end().find('.project-link').html('<i class="icon-spinner spin"></i> Loading Project...');
    btnAbout.removeClass('active');
    setTimeout(function(){
      $('#' + currentSection).removeClass('active');
    },1000);
    setTimeout(function(){
      pullData(project);
      sectionDetail.removeClass('active').addClass('active');
    },1000);

  } else {
    setTimeout(function(){
      $('#' + currentSection).removeClass('active');
    },1000);
    setTimeout(function(){
      $(page).addClass('active');
    },1000);

    btnClose.addClass('active');
    scrollAlert.removeClass('active');
  }
}

function changeView(linkUrl, project){
  //("Executing changeView.")
  var urlHash = location.hash.replace(/^#!\//,"");

  if (urlHash !== undefined){
    if (project !== undefined){
      //('Change View. Project found. linkUrl: ' + linkUrl+ '. Project: ' +project);
      processRoute(linkUrl, project);
      showMouseNotify(false);
    } else {
      //('Change View. Project not found. linkUrl: ' + linkUrl +'.');  
      btnAbout.removeClass('active');
      processRoute(linkUrl);
      showMouseNotify(false);
    }
  }
}

function hashLoad(hash){
  if ("onhashchange" in window){ //initial load
    //("Determining whether URL initially includes hash...")
    if (hash){
      hash = hash.replace(/^#!\//,"");

      if (hash.indexOf('=') === -1){
        changeView(hash);
        
      } else {
        //('Route and project found.')
        var urlSplit = hash.split('=');
        changeView(urlSplit[0],urlSplit[1]);
      }
    } else {
      //('No hash detected. Loading Index.');
      loadIndex();
      showMouseNotify(true);
      btnClose.removeClass('active');
    }
  }
  $(window).trigger('onhashchange');
}

function interfaces(){
  $(btnAbout)
    .on('mouseenter',function(){
      $(this).addClass('hover');
    })
    .on('mouseleave',function(){
      $(this).removeClass('hover');
    });

  $(btnClose).on('click',function(){
    var currentSection = $('section.active').attr('id');
    $(this).removeClass('active');
    faceMask.removeClass('active');
    if (detailPane.hasClass('active')){
      btnDetail.trigger('click');
    }
    loadIndex(currentSection);
    if ($('.royalSlider').is('[class*="rs"]')){
      $('.royalSlider').royalSlider('destroy');
    }
  });

  btnDetail.on('click',function(){
    $(this).toggleClass('on');
    faceMask.toggleClass('active');
    detailPane.toggleClass('active');
  });

  faceMask.on('click',function(){
    btnDetail.click();
  });

  $('.cookie').on('click',function(){
    $.cookie('behaviorAlert', 'OK', { expires: 7 });
    $('.alert').removeClass('active');
    return false;
  });

  navTimer();
  
  nav.on('click',function(){
    $(this).removeClass('trans');
    setTimeout(function(){
      navTimer();
    }, 5000);
  });

  keyboard();
}

$(document).ready(function(){
  $(window)
    .on('hashchange', function(e) {
      hashLoad(location.hash);
      e.preventDefault();
    })
    .on('resize',function(){
      setTimeout(function(){
        projectPanes();
        $('#detail .vertical-center').vertCenter({cssWidth: true});
      }, 800);
    }).trigger('resize');

  hashLoad(location.hash);
  interfaces();
  
});


