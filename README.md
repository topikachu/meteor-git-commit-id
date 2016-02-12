# meteor-git-commit-id
Get the git commit id at build time. Based on the NPM [simple-git](https://www.npmjs.com/package/simple-git).

**NOTE** Need to run **meteor** command under the project folder.
## Installation

    meteor add topikachu:meteor-git-commit-id

## Usage

This package gives you a *git_short* global variable on both client and server.
```javascript
Meteor.startup(function (){
    console.log('build@' + git_short);
});
```


### TODO

- tests :)
