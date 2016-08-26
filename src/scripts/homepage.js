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
        commonFeatures = {
            setAvatarZoomFeature: function() {
                $('.avatar img').click(function() {
                    $(this).toggleClass('focused');
                });

                return this;
            },

            setContentToggleFeature: function() {
                var $toggle = $('.toggle'),
                    $body = $('body');

                $toggle.click(function() {
                    var mode = $body.attr('data-mode') === 'opened' ? 'closed' : 'opened',
                        $toggleText = $('.toggle.text'),
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
                });

                return this;
            },

            setSlideshow: function() {
                var prepareNextBackground = function() {
                    currentBGR = parseInt(currentBGR) !== backgroundsLength ?
                    parseInt(currentBGR) + 1 :
                        1;

                    var bgrs = [ [$('body'), 'wallpaper'], [$('section'), 'glass'] ];

                    for (var i in bgrs) {
                        var new_bgr = ut.setBackground(
                            $('<div class="bgr js_queue ' + bgrs[i][1] + '">')
                        );

                        bgrs[i][0].prepend(new_bgr);
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
            }
        },

        // Functions that will be triggered one by one automatically from the showtime() function
        desktopFeatures = {
            customScrollbar: function() {
                // Init custom scrollbar for short-height screens
                $('article').mCustomScrollbar();

                return this;
            },

            draggingContent: function() {
                // Init drag feature
                $('section').draggable({
                    axis: 'x',
                    containment: 'parent',
                    cursor: 'move',
                    handle: '.dragzone'
                });

                return this;
            },

            restoringContentOnResize: function() {
                var $section = $('section');

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
            ut.fnTrigger(commonFeatures);

            // Setup desktop features
            if (!$('html').is('.mobile')) {
                ut.fnTrigger(desktopFeatures);
            }

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