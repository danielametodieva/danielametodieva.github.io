/* =========================| Homepage |========================= */



(function app() {
  var
    // Number of backgrounds
    backgroundsLength = 5,

    // Lifecycle of a background
    loopDuration = 10000, // 10 seconds

    // Duration time of a background switch
    transitionDuration = 1000, // 1 second

    // First background
    currentBGR = $.memoryroll({
      name: 'daniela.pro_background',
      rangeFrom: 1,
      rangeTo: backgroundsLength
    }),

    // Utilities functions
    ut = {
      fnTrigger: function(list) {
        for (var f in list) {
          list[f]();
        }
      },

      setBackground: function(obj, bgr) {
        obj.attr('data-project', bgr ? bgr : currentBGR);

        return obj;
      }
    },

    // Functions that will be triggered one by one automatically when the DOM is loaded
    init = {
      setFirstBackground: function() {
        ut.setBackground($('.bgr')).addClass('js_active');

        return this;
      }
    },

    // Functions that will be triggered one by one automatically from the showtime() function
    features = {
      avatarZoom: function() {
        $('.avatar img').click(function() {
          $(this).toggleClass('focused');
        });

        return this;
      },

      contentToggle: function() {
        var $toggle = $('.toggle'),
            $body = $('body'),
            getMode = function() {
              return $body.attr('data-mode') === 'opened' ? 'closed' : 'opened';
            },
            toggle = function(mode) {
              mode = mode ? mode : getMode();

              var $toggleText = $('.toggle.text'),
                  $toggleArrow = $('.toggle.arrow');

              $body.attr('data-mode', mode);

              if (mode === 'closed') {
                var top = $toggleArrow.offset().top,
                    left = $toggleArrow.offset().left;

                $toggleText.css({top: top, left: left});

                setTimeout(function() {
                  $toggleText.addClass('show');
                }, 300);
              }
              else {
                $toggleText.removeClass('show');
              }
            };

        $toggle.click(function() { toggle(); });

        $(document).keyup(function(e) {
          var mode = e.keyCode === 27 || e.keyCode === 38 ? 'closed' :
              e.keyCode === 13 || e.keyCode === 40 ? 'opened' :
              e.keyCode === 32 ? getMode() : null;

          if (mode && $body.attr('data-mode') !== mode) { toggle(mode); }
        });

        return this;
      },

      slideshow: function() {
        var prepareNextBackground = function() {
            currentBGR = parseInt(currentBGR) !== backgroundsLength ?
            parseInt(currentBGR) + 1 : 1;

          var bgrs = ['wallpaper', 'glass'];

          for (var i in bgrs) {
            var new_bgr = ut.setBackground(
              $('<div class="bgr js_queue ' + bgrs[i] + '">')
            );

            $('.' + bgrs[i] + '-box').prepend(new_bgr);
          }

          return this;
        };

        prepareNextBackground();

        setInterval(function() {
          $('.bgr.js_active')
            .removeClass('js_active')
            .fadeOut(transitionDuration, function() {
              $(this).remove();
            });

          $('.bgr.js_queue').removeClass('js_queue').addClass('js_active bgr');

          localStorage.memoryroll_projects = currentBGR;

          prepareNextBackground();
        }, loopDuration);

        return this;
      },

      customScrollbar: function() {
        // Init custom scrollbar for short-height screens
        $('article').mCustomScrollbar();

        return this;
      },

      draggableContent: function() {
        var $section = $('section');

        // Init drag feature
        $section.draggable({
          axis: 'x',
          containment: 'parent',
          cursor: 'move',
          handle: !$('html').is('.mobile') ? '.dragzone' : false
        });

        // Stick content bar to the left when resizing
        $(window).resize(function() {
          if ($section.offset().left > 0) {
            $section.css({left: 0});
          }
        });

        return this;
      }
    },

    showtime = function() {
      // Show the scene
      $('body').attr('data-mode', 'opened')
        .removeClass('curtain');

      // Setup common features
      ut.fnTrigger(features);

      return this;
    };



  jQuery(document).ready(function() {
    // Transform 'click' event to 'tap' event for mobile
    FastClick.attach(document.body);

    // Initialize stage
    ut.fnTrigger(init);
  });



  // Reveal stage when all loaded
  $(window).on('load', function(){
    setTimeout(function() {
      showtime();
    }, 100);
  });

})();