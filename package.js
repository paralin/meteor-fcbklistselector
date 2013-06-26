Package.describe({
    summary: "A facebook list style selector."
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/fcbklistselection.min.js',
        'lib/fcbklistselection.css',
        'lib/checked.gif',
        'lib/checked.png',
        'lib/multi_selector_bg.gif'
    ], 'client'
    );

});