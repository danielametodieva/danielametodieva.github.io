module.exports = {
    dev : {
        app: 'Google Chrome',
        path: 'http://localhost:8000'
    },

    prod : {
        app: 'Google Chrome',
        path: '<%= pkg.homepage %>'
    },

    build: {
        app: 'Google Chrome',
        path: 'https://travis-ci.org/danielametodieva/danielametodieva.github.io/builds'
    },

    repo: {
        app: 'Google Chrome',
        path: 'https://github.com/danielametodieva/danielametodieva.github.io'
    }
};