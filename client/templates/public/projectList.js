Template.projectList.onCreated(() => {
  Template.instance().subscribe('allProjects');
});

Template.projectList.helpers({
  projects() {
    return Projects.find();
  }
});

Template.projectList.events({
  'mouseenter .projectPane': (ev) => {
    $(ev.currentTarget).toggleClass('hover');
  },
  'mouseleave .projectPane': (ev) => {
    $(ev.currentTarget).toggleClass('hover');
  },
  'mousewheel .projects-container': (ev, template) => {
    console.log(ev);
    var projectPaneContainer, projectPane, projectCount, projectPaneWidth, projectPaneHeight;
    projectPaneWidth = template.find('.projectPane').width(),
    projectPaneHeight = template.find('.projectPane').height(),
    projectPaneContainer = $('.project-container'),
    projectPane = $('#index').find('.project'),
    projectCount = projectPane.length;

    template.find('.projectPane .info').vertCenter({percentage: 1.75});

    if (!Modernizr.touch){
      if (windowWidth() >= tabletBreakPoint){
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
    if (mobile() && windowWidth() <= tabletBreakPoint){
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
});
