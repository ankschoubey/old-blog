---
toc: false
layout: post
comments: true
description: 
categories: [draft, spring-boot, database, information-system]
title: Faster SQL Batch Save in Spring Data JPA
permalink: /batch-save-spring-jpa/
hide: true
---

By default in Spring Data JPA, when you save a list of entities a for...loop runs storing each record one at a time.

This would take a lot of time to execute. If `sequence_generator` is used for `@Id` then it would take even longer as the `sequence_generator.next_value` needs to be assigned to the `@Entity` before saving.

You can check this behavior by using the following `application.properties` and then checking logs.

```
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.use_sql_comments=true
spring.jpa.properties.hibernate.format_sql=true
```

## Speeding Writes

Spring Data JPA allows for storing multiple records at once but multiple things need to be managed first.

### Sequence Generator Allocation Size

#### Within DB

#### Within Code

### JPA Property
