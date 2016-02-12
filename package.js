Package.describe({
    name: 'topikachu:meteor-git-commit-id',
    summary: "Get the git commit id at build time",
    version: '1.0.0'
});

Package.onUse(function (api) {
    api.addFiles('git_rev.js', 'client');
    api.addFiles('git_rev.js', 'server');
    api.use('isobuild:compiler-plugin@1.0.0')
    api.export('git_short');
});


Package.registerBuildPlugin({
    name: "git-commit-id",
    use: [
        "meteor",
    ],
    sources: [
        'plugin/git_commit_id.js'
    ],
    npmDependencies: {
        'simple-git': '1.22.0'
    }
});