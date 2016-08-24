/* =========================| Homepage |========================= */



var page = {
    projectsLength: 5,
    projects: function() {
        this.project = $.memoryroll({
            name: 'projects',
            rangeFrom: 1,
            rangeTo: this.projectsLength
        });

        var orientation = function() {
                if ($(window).width() >= $(window).height()) { $('body').addClass('land'); }
                else { $('body.land').removeClass('land'); }
            };

        orientation();
        $(window).resize(orientation);

        $('.bgr').attr('data-project', this.project);

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

        this.loadProjects();

        return this;
    },

    loadProjects: function() {
        var container = $('<div>').addClass('hidden');

        $('body').append(container);

        for(var i = 1; i <= this.projectsLength; i++) {
            if (i !== parseInt(this.project)) {
                container.append('<img src="assets/images/projects/project' + i + '.jpg">');
                container.append('<img src="assets/images/projects/blurred/project' + i + '.jpg">');
            }
        }

        this.rotateProjects();

        return this;
    },

    rotateProjects: function() {
        setInterval(function() {
            var currProject = parseInt(page.project),
                nextProject = currProject !== page.projectsLength ? currProject + 1 : 1,
                $body = $('body'),
                $section = $('section'),
                $activeBgr = $('.bgr.active');

            page.project = nextProject;
            localStorage.memoryroll_projects = page.project;
            $body.prepend('<div class="wallpaper new" data-project="' + nextProject + '">');
            $section.prepend('<div class="glass new" data-project="' + nextProject + '">');
            $activeBgr.fadeOut(1000, function() {
                $(this).prev().addClass('active bgr').removeClass('new');
                $(this).remove();
            });
        }, 10000);

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