# My BBCode
A JavaScript extension for saving a custom BBCode script for [https://insect.christmas/forum](insect.christmas/forum).

## About
BBCode is a special implementation of HTML for formatting text in a post. You use ```[]``` instead of ```<>```.

Here is a simple example:
```
[color=red]hello there, I am writing in red![/color]
```

In many cases, you have to rewrite your tags every time you want to format a post to your liking. A simple solution would be to keep a ```.txt``` file with your favorite tags everytime you want to make a post.
For instance, if I want all of my posts to be written in red, I have to wrap my text with ```[color=red]text here[/color]``` every time.
To address this, this extension was written to allow a user to store their preffered formatting tags in their browser and insert them into a new post on page load.

## Installation
### Pre-requisites
- [install nodejs](https://nodejs.org/en/download/package-manager)

> How come I need nodejs for a browser extension?

This extension uses [webextension-polyfil](https://github.com/mozilla/webextension-polyfill?tab=readme-ov-file#webextension-browser-api-polyfill). Essentially, this is a node module that allows to WebExtension/BrowserExt API to run on Chromium browsers with minimal or no changes. It will allow for compatibility across most browsers without having to write more code.
This is the only node module that will be included in this extension and it is all that is needed.

### Installing the extension
- Clone this repository
- ```cd``` into the directory of the cloned repository
- run ```npm install```.
- Done.

## Setup
### Firefox
1. Navigate to ```about:debugging#/runtime/this-firefox```
2. Click ```Load Temporary Add-on...```
3. Navigate to the repository you cloned and open the ```manifest.json``` file.
4. Navigate to ```about:preferences#privacy```
5. Scroll down to ```Cookies and Site Data```
6. Click ```Manage Exceptions```
7. Add an exception for ```insect.christmas``` as this extension will require the use of site data
8. Click ```Save Changes```

### Chrome
Instructions for chrome will come at a later date. 

## How-To-Use
- Navigate to ```https://insect.christmas/forum```
- Click the browser "puzzle" icon in the top right to view your extensions.
- Click ```My BBCode```
- Insert your BBCode script into the the textbox
- Click ```Set``` to inject and save your BBCode in your local browser storage 
- Click ```Remove``` to remove your BBCode from your local browser storage
- Start a new post or a new reply and your script will appear in the text box.

This extension does not use any cookies, nor does this extension log any data. Your script will be saved locally in your browser as string. That's it. For transparency, the source code is avaliable.

## Known Issues To Be Ignored For Now
Coming Soon...

If you see an error. No you didn't.

## Release
This extension is still in development. I hope to make a release soon. For now, it can be used as a temporary extension. If you're interested in the extension please consider starring the repo and feel free to test it and play around with it. Report any Issues in the [Issues](https://github.com/junku-dev/my_phpBB_extension/issues) tab.

## Contribute 
Simply Clone the Repo. 

Make a new branch with the following branch name format: ```<githubname_issue>```. 

If the issue does not exist yet, then make an issue first. 

Push your code changes up with your new branch. Make a pull request. 

Once approved, select ```squash commits and merge```.
