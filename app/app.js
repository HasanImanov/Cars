// This code is property of Conor McNamara:
// https://codepen.io/conorjmcnamara/:

 

$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
  
    sync1.owlCarousel({
      items : 1,
      slideSpeed : 2000,
      nav: true,
      autoplay: false,
      dots: true,
      loop: false,
      rewind: true,
      responsiveRefreshRate : 200,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);
  
    sync2
      .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
      items : slidesPerPage,
      dots: true,
      nav: true,
      smartSpeed: 200,
      slideSpeed : 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate : 100
    }).on('changed.owl.carousel', syncPosition2);
  
    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;
      
      //if you disable loop you have to comment this block
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      
      if(current < 0) {
        current = count;
      }
      if(current > count) {
        current = 0;
      }
      
      //end block
  
      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();
      
      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }
    
    function syncPosition2(el) {
      if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }
    
    sync2.on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
    });
    
    var App = (function () {

      //=== Use Strict ===//
      'use strict';
    
      //=== Private Variables ===//
      var gallery = $('#js-gallery');
      // $('.gallery__hero').zoom();
      
    
      //=== Gallery Object ===//
      var Gallery = {
        zoom: function(imgContainer, img) {
          var containerHeight = imgContainer.outerHeight(),
          src = img.attr('src');
        
        },
        switch: function(trigger, imgContainer) {
          var src = trigger.attr('href'),
          thumbs = trigger.siblings(),
          img = trigger.parent().prev().children();
          
          // Add active class to thumb
          trigger.addClass('is-active');
          
          // Remove active class from thumbs
          thumbs.each(function() {
            if( $(this).hasClass('is-active') ) {
              $(this).removeClass('is-active');
            }
          });
    
      
          // Switch image source
          img.attr('src', src);
        }
      };
    
      //=== Public Methods ===//
      function init() {
    
     
       // Listen for clicks on anchors within gallery
        gallery.delegate('a', 'click', function(event) {
          var trigger = $(this);
          var triggerData = trigger.data("gallery");
    
          if ( triggerData === 'zoom') {
            var imgContainer = trigger.parent(),
            img = trigger.siblings();
            Gallery.zoom(imgContainer, img);
          } else if ( triggerData === 'thumb') {
            var imgContainer = trigger.parent().siblings();
            Gallery.switch(trigger, imgContainer);
          } else {
            return;
          }
    
          event.preventDefault();
        });
      }
    
      //=== Make Methods Public ===//
      return {
        init: init
      };
    
    })();
    
    App.init();



  });
  
  /*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2019 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.9
*/
