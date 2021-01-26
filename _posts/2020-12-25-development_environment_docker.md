---
toc: false
layout: post
comments: true
description: 
categories: [devops, tools]
title: A replicable Development Environment with Docker + VS Code
permalink: /development_environment_docker/
# image: https://vialogue.files.wordpress.com/2017/04/sapiens.jpg
---

## The pain
The most discouraging part of software development is setting up a local development environment. Coding is relatively easy.

Typically it takes me over a day of effort for setting up all tools.

Also typically software updates sometimes break a setup and lead to more changes.

## Docker

Having a development environment in Docker means that it is replicable. You can switch machines or share the environment with team easily.

This method works with non-GUI setup. A solution for GUI is [Vagrant](https://www.vagrantup.com/). I did not use it because I use only 2 GUI tools, VS Code and Chrome.

Initially, I tried creating the Container without using extensions. It was painful. [Remote - Container](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VS Code extension makes it simple.

## Guide

{% include youtube.html content='mi8kpAgHYFo' %}