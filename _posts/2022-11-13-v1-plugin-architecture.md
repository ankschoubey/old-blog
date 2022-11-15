---
layout: post
comments: true
description:
categories: [architecture]
last_modified_at: 2022-11-06T20:52:08.052481
last-modified-purpose:
permalink: /v1/plugin-architecture
title: How to develop a robust plugin architecture?
image: /images/v1-plugin-architecture/header.jpg
---
![](/images/v1-plugin-architecture/header.jpg)

Photo by <a href="https://unsplash.com/@justin_morgan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Justin Morgan</a> on <a href="https://unsplash.com/s/photos/plugin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

Disclaimer: I haven't developed an extremely complete plugin architecture myself. What I have developed is a plugin architecture which is robust enough. There are too many points to the discussion. These are all my thoughts.

## Identify places in your application which you want to provide as plugin.

![](/images/v1-plugin-architecture/1_identify_where_to_put_plugin.png)

## Identify how plugin is going to share data? And can plugin update in real time? if Yes how?

![](/images/v1-plugin-architecture/2_sharing_data_between_plugin.png)

For example: 1 Plugin can be of 2 parts.

How will P1 and P2 share data?

Ideally, these should be microservices?

Note: This is how slack and teams do it.

## Define interfaces that plugin developers can use

- Zapier allows using CLI to generate a project architecture
- They have specific interfaces that can be used for generating plugin
- They also have a z object that can be used for a limited set of features such as API calls.

## Keep your product as lean as possible

First hand features should also be plugins.

You could have 2 interfaces for this.

1 for publish `pluginInterface`
2 for first hand `interface firstHand extends pluginInterface`

Or you could provide a limited set of components that can be rendered on UI.

The term interface and components are loose here. Many plugins are simply JSON based.

## You'll have to create infrastructure for managing plugins and plugin lifecycle

Something like
- Interfaces for plugins
- Plugin repository
   - How will you manage so many third party plugins?
   - How will plugin versions be managed?
- Approval process
   - This will also include manual approavls.
   - I would also add a virus scanner and other security measures.