---
toc: false
layout: post
comments: true
description: 
categories: [draft, database, information-system]
title: Keeping SQL DB Simple
last_modified_at: 2021-08-01T20:42:15.673574
permalink: /simple-sql-db/
hide: true
---

Around 2 years ago, I wrote a blogpost detailing how to keep backend DB Quering code simple but it missed a very critical piece which is having a simpler DB.

This post highlights some of my DB preferences. A Database design is highly dependent on the application so there may not apply to every DB.



You're DB for the most part should be such that the only operation you to CRUD and simple lookups.

Therefore a lot of effort should be taken to designing extremely resuable and simple tables.

In one of my projects, I had created an extremely efficient data pipeline.

Their were multiple views in a heirarchical tree calling one another. If you looked up on root view and applied some filters, you would get the data you want. This data needed to be inserted into a separate table so I created stored procedure to do it. 

In coming months, new things were added the stored procedure and it became so complex that it is now to risky to tinker with.

Therefore now, I prefer DB which has no DB side functions or procedures, or if possible without views. If there is a complex query I every much prefer storing and triggering the queries from on the backend server.

There shouldn't be multiple tables doing the same job.

## Simple and Resuable Tables

## Column Names

For primary key `id` is enough. 

Many prefer using `<table_name>_id` as primary key but adding `table_name` is unneccesary. We already know what table it is.

In case of joins between, `<table_name>_id` will be same length as selecting column with dot `<table_name>.id`. 

Also, if you have just `id` you can quickly identify a forignkey which has column in this format `<table_name>_id`. 

For forign key

## Indexing

I identify the columns which require joins or search.

And then index in the order in ehich they are called most.

## Sequences

## Table with No Stored Procedures, Functions or Views

## Liquibase XML Format

## Concepts that I have heard of not used yet

- For complex things that use DB processing. use cron jobs to store data in separate table.
- Make use of redis/memcache to cache things [^1]
- Database Sharding 

[^1]: TechLead