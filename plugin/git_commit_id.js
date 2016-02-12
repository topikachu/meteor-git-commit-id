var git = Npm.require('simple-git')(process.cwd());

Plugin.registerCompiler({
    filenames: ["git_rev.js"]
}, function () {
    return {
        processFilesForTarget: function (files) {
            files.forEach(function (file) {
                Meteor.wrapAsync(function (callback) {
                    git.revparse(['--short', 'HEAD'], callback)
                })(function (err, str) {
                    if (!err) {
                        var js = 'git_short=\'' + str.replace(/^\s+|\s+$/g, '') + '\';'
                        file.addJavaScript({data: js, path: file.getPathInPackage()});
                    }
                })
            });

        }
    }
});