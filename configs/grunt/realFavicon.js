module.exports = {
    options: {
        iconsPath: '/',
        design: {
            ios: {
                pictureAspect: 'backgroundAndMargin',
                backgroundColor: '#ffffff',
                margin: '14%'
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: '#ffffff',
                onConflict: 'override'
            },
            androidChrome: {
                pictureAspect: 'backgroundAndMargin',
                margin: '17%',
                backgroundColor: '#ffffff',
                themeColor: '#ffffff',
                manifest: {
                    name: 'Daniela’s webpage',
                    display: 'browser',
                    orientation: 'notSet',
                    onConflict: 'override',
                    declared: true
                }
            },
            safariPinnedTab: {
                pictureAspect: 'blackAndWhite',
                threshold: 20,
                themeColor: '#5bbad5'
            }
        },
        settings: {
            scalingAlgorithm: 'Lanczos',
            errorOnImageTooSmall: false
        }
    },

    task: {
        src: 'src/images/favicon.png',
        dest: 'dist/assets/favicons'
    }
};