---
layout: post
comments: true
description: 
categories: [web-development, notes]
last_modified_at: 2022-10-15T20:52:08.052481
last-modified-purpose:
permalink: /http-status-codes/
title: Understanding & Using HTTP Status Codes
---

There are total 63 status codes and they are divided into 5 types:

- **1xx**: Info
- **2xx**: Sucessfull
- **3xx**: Some kind of redirect
- **4xx**: Client error: The sender has made some mistake and has to fix it.
- **5xx**: Server error: The server has made some mistake and has to fix it.

# Specific Codes

Now, when coding you are likely to use these.

- **200**: OK
- **201**: CREATED the resource is created and can be accessed at `location` header.
- **204**: NO CONTENT but there is No Content

- **302**: REDIRECT to this URL

- **404**: NOT FOUND: The resource was not found

- **500**: INTERNAL SERVER ERROR
    - Here restrict what kind of response is shown so that internal details are not leaked.

# Notes

In many cases, people don't rely on HTTP status codes and rather use body to convay information. This is specially true in case of specialized responses since there are very few HTTP status codes.

# When to use 404 over 204?

- In groups use 204.
- For accessing single one, use 404.

for example:

- /users - 204
- /users/{id} - 404