module.exports = {
    options: {
        exclude: [
            //
        ],
        emitSuccess: true,
        config: 'configs/conventions/.scsslintrc.yml',
        colorizeOutput: true
    },

    target: [
        'src/styles/**/*'
    ]
};