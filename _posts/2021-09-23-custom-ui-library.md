---
layout: post
comments: true
description: Component libraries help you separate out the view from business logic making views extremely reusable.
categories: [web-development]
last_modified_at: 2022-07-30T20:52:08.052481
permalink: /custom-ui-library/
title: Always make a custom component library for every new application
---

## Need for Custom UI Library

To be most productive with any front-end technology, I am convinced that a custom component library should be created.

This custom component library should be used for everything. Any new kind of table, any new time of image viewer, etc.

The component library should be completely decoupled from the main application data. Instead, it should have its different namings.

All heavy lifting of business logic is done by the main application. While the component library will deal with all the views.

Even if you already use a UI library like DevExpress, using them from within a custom component library will allow re-enforcing rules and make it easy to change the code later.

This custom UI library can have the following:

- Common UI Elements
- Common UI Layouts
- Reusable scripts

## Some Common UI Library Elements

These are some UI elements that I believe are perfect for including in a custom UI Library. I have compiled this list by looking at third-party UI libraries.

- Tables
- Forms
  - Input
  - Checkbox
  - HTML Editor
  - Buttons
- Charts
- Maps
- Toast
- Progress Bars
- Tooltip
- Popovers
- Popups
- Gallery
- Menus
- Accordion

## In general the rule is

> if you are using a UI Element twice, wrap it in a custom component.