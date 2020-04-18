---
toc: true
layout: post
comments: true
description: 
categories: [Medium]
title: Hi Harshini,
---

Hi Harshini,

Kaggle CLI does not support downloading the entire folder or multiple files at once (except in case of downloading entire competition). Only one file can be downloaded at a time via the CLI.

Here is how I downloaded the entire c4 folder

#### 1. Created directory if it does not already exist

> mkdir -p img/train/c4

#### 2. Get the list of all files available in the dataset, filtered the files which were in the c4 folder, picked file name, repeatedly download each file.

> kaggle competitions files -c state-farm-distracted-driver-detection | grep c4 | awk ‘{print $1}’ | while read x ; do kaggle competitions download -f $x state-farm-distracted-driver-detection -p img/train/c4 ; done

![]({{ site.baseurl }}/images/2020-03-10-hi-harshini/1.png)

— — — — —

I don’t use the command line regularly. These are the sources I looked:

- [Read values into a shell variable from a pipe](https://stackoverflow.com/questions/2746553/read-values-into-a-shell-variable-from-a-pipe)

- [How to mkdir only if a dir does not already exist?](https://stackoverflow.com/questions/793858/how-to-mkdir-only-if-a-dir-does-not-already-exist)

- [How to use a shell command to only show the first column and last column in a text file?](https://unix.stackexchange.com/questions/136884/how-to-use-a-shell-command-to-only-show-the-first-column-and-last-column-in-a-te)

> kaggle competitions download -h

Hope this helps! Have a good day!