---
layout: post
comments: true
description: 
categories: [data, clean-code]
last_modified_at: 2022-08-06T20:52:08.052481
last-modified-purpose:
permalink: /pre-save-data-validation/
title: Pre-save Data Validation
---

It's imperative to have good data validations in place. Because often, data leads to more bugs even when logic works correctly.

Data errors can be:
1. null values in the database or from an external system
2. expecting values to be positive by getting negative ones.
3. expecting a field to have a specific format but getting something else

The only solution to a data error is running data migrations which is an unnecessary overhead.

Therefore, we should ensure that data is validated before it reaches DB.

# Only allows certain data

You minimize data problems by only allowing it for specific fields. 

On a UI, it could be dropdowns, date fields with range, and auto-completion options.

# Validate on frontend

Libraries like [formik](https://formik.org/) and [yup](https://github.com/jquense/yup) can help perform object and user input validation.

Typescript is only helpful in knowing the exact names of the variable, its type or keys within an object. Since it gets converted to javascript, typescript can't be used to validate data types.

# Validate on the backend

In Java specifically, you have JSR Validators.

Use in all POJOs, especially for incoming request objects and entity objects.

You can also [create custom validators](https://www.baeldung.com/spring-mvc-custom-validator).

Using enums is also an option.