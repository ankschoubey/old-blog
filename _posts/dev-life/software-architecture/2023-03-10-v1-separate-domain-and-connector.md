---
layout: post
comments: true
description: Your main business logic resides in your service. All other things are connectors
categories: [web-development, ddd, clean-code]
last_modified_at: 2023-03-10T20:52:08.052481
last-modified-purpose:
permalink: /v1/separate-service/
title: One service should serve multiple mediums (REST, Kafka, gRPC, etc)
image: https://docs.google.com/drawings/d/e/2PACX-1vT3KH3qfLmMQ0DDGtQL8uyol8YhCWqBEc1DJxuGJ5vS9gdNxYKf7vkIgb2ETVHrZOocCTJv4kAFDUtU/pub?w=1300&amp;h=740
---

In a previous post, I talked about how we should separate Domain Layer from Technical code. Here's another version of the same concerning service.

A Service that handles the tasks of a RestController isn’t very different from a rest controller.

We should separate the Service from the Rest Controllers because we want to be able to re-use the service.

But if Service handles rest controller responses, it isn’t very different.

## An ideal service

![https://docs.google.com/drawings/d/e/2PACX-1vT3KH3qfLmMQ0DDGtQL8uyol8YhCWqBEc1DJxuGJ5vS9gdNxYKf7vkIgb2ETVHrZOocCTJv4kAFDUtU/pub?w=1300&amp;h=740](https://docs.google.com/drawings/d/e/2PACX-1vT3KH3qfLmMQ0DDGtQL8uyol8YhCWqBEc1DJxuGJ5vS9gdNxYKf7vkIgb2ETVHrZOocCTJv4kAFDUtU/pub?w=1300&amp;h=740)

Here’s how you separate connectors from the business logic.

**Connectors** are mediums we use to communicate with the outside world. Examples of connectors are Rest API connector (like RestController or RouterFunction+it’s Handler), and Kafka Connector.

**Services** are codes that implement business logic.

All conversions from Entity to DTO or DTO to an entity (i.e. handle the request event and provide a response in the format needed by the client) should be handled at Rest API Connector.

The Rest API Connector is responsible for calling the service method between the request and the response.

For the service method, the REST API connector is downstream. So, it does not care about what format of data it sends. It’s just responsible for executing the business logic and sending the data in whatever its format.
