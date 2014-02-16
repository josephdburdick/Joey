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


*/function mobile(){var e;if($("html").hasClass("mobile")){e=!0;mouse.hide();windowWidth()<=1024?$("html").addClass("midCPU"):windowWidth()<=680&&$("html").addClass("lowCPU")}else e=!1;return e}function changeView(e,t){var n=location.hash.replace(/^#!\//,"");if(n==""||undefined)n=undefined;if(n!=undefined)if(t!=undefined)processRoute(e,t);else{btnAbout.removeClass("active");processRoute(e)}else loadIndex()}function slideshow(){var e;$("#slideshow").royalSlider("destroy");Modernizr.touch?e={loop:!0,imageAlignCenter:!0,autoScaleSlider:!1,imageScalePadding:10,transitionType:"move",height:$(window).height(),arrowsNav:!1,slidesSpacing:0,keyboardNavEnabled:!1}:e={loop:!0,imageAlignCenter:!0,autoScaleSlider:!1,imageScalePadding:10,transitionType:"fade",height:$(window).height(),arrowsNav:!1,slidesSpacing:0,keyboardNavEnabled:!0};$("#slideshow").royalSlider(e);var t=$("#slideshow").data("royalSlider");$("#slideshow").find(".vertical-center").vertCenter({cssWidth:!0})}function processRoute(e,t){var n=$("section.active").attr("id");if(t!=undefined){$("#index-"+t).addClass("active").siblings(".project").addClass("not-active").end().find(".project-link").html('<i class="icon-spinner spin"></i> Loading Project...');var r=$("#project");btnAbout.removeClass("active");var i="inc/projects_export.php?project="+t,s,o,u,a;a=[];projectImages=[];$.post(i,t,function(e,t){$(e.tags).each(function(e,t){a+="<span class='project-tag'>"+t+"</span>"});$(e.slides).each(function(e,t){var n=JSON.stringify(t);if(mobile()==1&&$(window).width()<=680&&e!=0){n=n.replace(/(.png)/g,"-lofi.png");n=$.parseJSON(n);t=n}projectImages+='<div class="slide-container">'+t+"</div>"});setTimeout(function(){btnAbout.removeClass("active");sectionDetail.attr("data-id",e.id).find(".project-name").html(e.name).end().find(".project-year").html(e.year).end().find(".project-agency").html(e.agency).end().find(".project-details").html(e.details).end().find(".project-tags").html(a).end().find("#slideshow").html(projectImages);btnDetail.addClass("active");btnPrev.addClass("active");btnNext.addClass("active");btnClose.addClass("active");$(btnPrev).unbind("click").on("click",function(){$("#slideshow").royalSlider("prev")});$(btnNext).unbind("click").on("click",function(){$("#slideshow").royalSlider("next")})},500);setTimeout(function(){slideshow()},500);setTimeout(function(){$("#"+n).removeClass("active")},1e3);setTimeout(function(){sectionDetail.removeClass("active").addClass("active")},1e3)},"json").fail(function(){alert("Section "+e+" failed to load. Please check your Internet connection and that the path is correct.");window.history.back()})}else{setTimeout(function(){$("#"+n).removeClass("active")},1e3);setTimeout(function(){$(e).addClass("active")},1e3);btnClose.addClass("active");mouse.removeClass("active")}}function hashLoad(e){if("onhashchange"in window)if(location.hash){var t=location.hash.replace(/^#!\//,"");if(t.indexOf("=")==-1){mouse.removeClass("active");changeView(t)}else{var n=t.split("=");mouse.removeClass("active");changeView(n[0],n[1])}}else{loadIndex();mobile()==0&&$(window).width<=680&&$("#mouse").addClass("active");btnClose.removeClass("active")}}function loadIndex(e){var e=$("section.active").attr("id");mobile()==0&&$.cookie("behaviorAlert")!="OK"&&$(".alert").addClass("active");slider=$("#slideshow").royalSlider("data");$(".rsSlide").length>0&&$("#slideshow").royalSlider("destroy");btnDetail.removeClass("active");btnPrev.removeClass("active");btnNext.removeClass("active");btnAbout.addClass("active");setTimeout(function(){$("#"+e).removeClass("active");setTimeout(function(){sectionIndex.addClass("active");setTimeout(function(){$(".project.active").removeClass("active").siblings(".project").removeClass("not-active").end().find(".project-link").html('<i class="icon-angle-down"></i> View Project <i class="icon-angle-down"></i>');mouse.addClass("active")},1500)},1500)},1e3);window.location.hash=""}function windowWidth(){var e=$(window).width();return e}function projectPanes(){var e,t,n,r,i,s;r=$("#index .project").width(),i=$("#index .project").height(),e=$(".project-container"),t=$("#index").find(".project"),n=t.length;$("#index .project .info").vertCenter({percentage:1.75});if(!Modernizr.touch)if(windowWidth()>=680){e.width(n*r);sectionIndex.mousewheel(function(e,t){this.scrollLeft-=t*45;e.preventDefault()})}else{e.width(r);sectionIndex.unbind("mousewheel")}else e.width(n*r)}function interfaces(){function e(){setTimeout(function(){nav.addClass("trans")},5e3)}projectPanes();$(btnClose).on("click",function(e){var t=$("section.active").attr("id");$(this).removeClass("active");loadIndex(t)});btnDetail.on("click",function(){$(this).toggleClass("on");faceMask.toggleClass("active");detailPane.toggleClass("off");mobile()==1&&$(window).width<=680&&sectionDetail.toggleClass("aside-open")});faceMask.on("click",function(){btnDetail.click()});$(".cookie").on("click",function(e){$.cookie("behaviorAlert","OK",{expires:7});$(".alert").removeClass("active");e.preventDefault});e();nav.on("click",function(){$(this).removeClass("trans");setTimeout(function(){e()},5e3)})}function touch(){$(".project-container").hammer().on("tap",".project",function(e){$(this).addClass("hover").siblings(".project").removeClass("hover");e.preventDefault}).on("tap",".project-link",function(e){$(this).click()})}function keyboard(){$(document).keyup(function(e){e.keyCode==27&&$(btnClose).click()});$(".project").on("mouseenter",function(){$(this).addClass("hover")}).on("mouseleave",function(){$(this).removeClass("hover")});nav.on("mouseenter",function(){$(this).click()})}var faceMask,btnClose,btnAbout,btnPrev,btnNext,btnDetail,nav,detailPane,sectionIndex,sectionDetail,sectionAbout,mobile,mouse;nav=$("#nav-main"),faceMask=$("#face-mask"),btnClose=$(".btnClose"),btnAbout=$(".btnAbout"),btnPrev=$(".btnPrev"),btnNext=$(".btnNext"),btnDetail=$(".btnDetail"),detailPane=$("#detail > aside"),sectionIndex=$("#index"),sectionDetail=$("#detail"),sectionAbout=$("#about"),mouse=$("#mouse");jQuery.rsCSS3Easing.easeOutBack="cubic-bezier(0.175, 0.885, 0.320, 1.275)";$(document).ready(function(){$(window).on("resize",function(){setTimeout(function(){projectPanes();$("#detail .vertical-center").vertCenter({cssWidth:!0})},800)});hashLoad();interfaces();$(window).on("hashchange",function(e){hashLoad(location.hash);e.preventDefault()});setTimeout(function(){window.scrollTo(0,1)},0)});