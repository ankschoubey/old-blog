---
layout: post
comments: true
description: 
categories: [security]
last_modified_at: 2023-05-31T20:52:08.052481
last-modified-purpose: 
permalink: /v1/v1-fix-security-bugs-anyways
title: Fix your security bugs even if it doesn’t affect you
toc: false
image: /images/v1-fix-security-bugs-anyways.jpg
---


In a previous blog post, I talked about how to upgrade Maven dependencies. It specifically mentioned security vulnerabilities in these dependencies to be an important reason to upgrade.

Many times these security bugs do not affect us. For example, suppose a dependency is vulnerable to authentication jacking, and you have set up your system such that only trusted systems can talk to your internal server.

You may skip fixing this issue because it does not affect you. My rationale is to think in terms of: This does not affect you 'yet'.

1. If a dependency is vulnerable upgrade it anyway.
2. It’s faster to upgrade a dependency than rationalize if we need to upgrade or not.
3. It’s easier to manage too. There are no vulnerable dependencies. Regardless of if they affect us or not.

The most important rationale I have is we don’t know how the system will evolve. Maybe currently we are deploying in a secure zone but in the future, we may change it and that change could open us up to bugs we haven’t fixed yet.

Therefore, just fix it. It takes 10 minutes to upgrade to a minor patch.

Check if the upgrade is available, and upgrade it.

Photo by <a href="https://unsplash.com/@growtika?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Growtika</a> on <a href="https://unsplash.com/s/photos/security-bug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  