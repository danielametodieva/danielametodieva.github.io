/* =========================| Homepage |========================= */



var page = {
    projects: function() {
        var number = $.memoryroll({
                name: 'projects',
                rangeFrom: 1,
                rangeTo: 5
            }),
            orientation = function() {
                if ($(window).width() >= $(window).height()) { $('body').addClass('land'); }
                else { $('body.land').removeClass('land'); }
            };

        orientation();
        $(window).resize(orientation);

        $('body').addClass('project' + number);

        return this;
    },

    sidebar: function() {
        var $toggle = $('.toggle'),
            $body = $('body');

        $toggle.click(function() {
            var mode = $body.attr('data-mode') === 'opened' ? 'closed' : 'opened';
            $body.attr('data-mode', mode);
        });

        $('.avatar img').click(function() {
            $(this).toggleClass('focused');
        });

        return this;
    },

    reveal: function() {
        $('body').removeClass('curtain');
        $('html:not(.mobile) article').mCustomScrollbar();

        return this;
    }
};

jQuery(document).ready(function() {

    // Transform 'click' event to 'tap' event for mobile
    FastClick.attach(document.body);

    // Prepare stage
    page.projects()
        .sidebar();

});

// Reveal stage when all loaded
$(window).on('load', function(){
    setTimeout(function() {
        page.reveal();

        $('body').attr('data-mode', 'opened');
    }, 100);
});