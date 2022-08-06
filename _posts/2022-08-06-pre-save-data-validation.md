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

It’s very important to have good data validations in place. Because often data leads to more bugs even when logic with working properly.

Data errors can be:
1. null values in the database or from an external system
2. expecting values to be positive by getting negative ones.
3. expecting a field to have a certain format but getting something else

Once you are discovered a data error, you have to run data migration.

To mitigate this, you have to make sure your data is valid before even saving it to DB.

# Only allows certain data

For both frontend and backend, you minimize data problems by only allowing it for certain fields.

# Validate on frontend

Libraries like [formik](https://formik.org/) and [yup](https://github.com/jquense/yup) can help perform object and user input validation.

Using typescript is only helpful to know the exact names of the variable or keys within an object. Since it gets converted to javascript, it can't be used for the validation of data types.

# Validate on the backend

In Java specifically, you have JSR Validators.

Use in all POJOs, especially for incoming request objects and entity objects.

You can also [create custom validators](https://www.baeldung.com/spring-mvc-custom-validator).

Using enums is also an option.