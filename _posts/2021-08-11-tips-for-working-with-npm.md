---
toc: true
layout: post
comments: true
description: 
categories: [web-development]
last_modified_at: 2021-08-11T20:52:08.052481
permalink: /package-json/
title: Tips for working with `package.json`
---

## Create and use scripts

There are some common names of scripts you can create like postinstall start, etc.

For example: for Ivy enabled Angular versions, one can avoid repetitive recompilation by running `ngcc`. We can add a script in package.json to run ngcc after every `npm install`

```
    "scripts" : {
        "postinstall" : "ngcc"
    }
```

It's better to manage npm related activities using package.json than manage it using something like Jenkins.

## npm outdated

This shows you all the packages which are not the latest.

## Clear cache before `npm install` on every environment

Cache can be cleared by using

`npm cache clear`

Clearing cache before installation on your dev/QA/prod env will ensure it will run the same on any environment. 

## Use `--registry` on local

`npm install --registry <link-to-repository>`

If you are going to use a registry like Nexus to manage packages, it makes sense to use the same registry for installation local. The closer you can replicate your prod on local, the fewer bugs you are going to face.

## use yarn instead of NPM

yarn is a package manager just like npm but it provides a few features that make it better.
- multi-threaded download. This makes yarn much faster than npm which only supports single-threaded downloads.
- offline mode. Once a package is downloaded, it can be downloaded again. even if the node_modules folder is deleted. This is because yarn stores a backup of everything.