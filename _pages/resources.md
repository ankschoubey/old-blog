---
layout: page
title: Resources
permalink: /resources/
---

{% include replace_nav_with_icons.html %}


I read/consume many resources and I thought this would be a good way to link to up and thus avoid  writing blogposts on these topics.

# Resources and Some Notes


## Interesting Blogs

- [Philippe Bourgau's XP Coaching Blog](https://philippe.bourgau.net/)
- [Emre Bolat](https://emre.me/)

## System Design
- *MUST SUBSCRIBE*: [ByteByteGo Newsletter](https://blog.bytebytego.com/about)
- [The Eight Fallacies of Distributed Computing](https://medium.com/geekculture/the-eight-fallacies-of-distributed-computing-44d766345ddb)
- Capacity Planning:
    - Sep 2022
        - Gather requirements first:
        - [Capacity Planning for DevOps](https://www.youtube.com/watch?v=rG9BL0ambTk&ab_channel=DevOpsForDevelopers)
        - [Back of the envelope estimation](https://www.youtube.com/watch?v=UC5xf8FbdJc&ab_channel=ByteByteGo)
- [10 Microservice Best Practices For Your Projects: The 80/20 Way](https://www.simform.com/blog/microservice-best-practices/)

## Requirement Gathering

- Sep 2022
    - [Functional and Non-Functional Requirements](https://www.altexsoft.com/blog/business/functional-and-non-functional-requirements-specification-and-types/)
    - [10 Steps To Successful Requirements Gathering | Phase2 Technology](https://www.phase2technology.com/blog/successful-requirements-gathering)
    When doing requirement gathering
    - Always have questions. 
        - Be prepared. The best way to prepare is to have a document ready with all questions and concerns.
    - Only when requirements are approved start working
        - All work until requirements aren't finished is experimental code.  (Spike Code, POC, Hopefully not MVP.)
        - All of these are just to gather more and clarity requirements and what is possible.

## Web
- 2022 Sep
    - [Webhooks](https://webhooks.fyi/)

## Spring Boot and Java
- 2022 Sep
    - [Top 10 Most Common Spring Framework Mistakes](https://www.toptal.com/spring/top-10-most-common-spring-framework-mistakes)
    - [Realtime user tracking in Spring Boot](https://medium.com/geekculture/realtime-user-tracking-in-spring-boot-d8fb343a6c3c)
    - [Metrics for your Spring REST API](https://www.baeldung.com/spring-rest-api-metrics)
    - [Spring boot playground](https://github.com/odrotbohm/spring-playground): Some interesting helper libraries
    - [JMolecular](https://github.com/xmolecules/jmolecules): Makes it easy to implement Domain Driven Design
     
## Maven Plugin
- 2022 Sep
    - [Maven Plugin: Mutability Detector](https://github.com/MutabilityDetector/MutabilityDetector): This is important when doing concurrent programming.

## Testing
- 2022 Aug
    - [Practical Testing Book](https://damorimrg.github.io/practical_testing_book/intro.html): 
- 2022 Sep
    - [Java Performance Testing](https://stackify.com/java-performance/)
    - [LoadTesting Java Load4j](https://www.loadtest4j.org/): Has interesting read on SLOs via verifiable tests.
    - Common Exceptions
        - [We Crunched 1 Billion Java Logged Errors - Here’s What Causes 97% of Them - OverOps](https://www.overops.com/blog/we-crunched-1-billion-java-logged-errors-heres-what-causes-97-of-them-2/)
        - [The Top 10 Exception Types in Production Java Applications - Based on 1B Events - OverOps](https://www.overops.com/blog/the-top-10-exceptions-types-in-production-java-applications-based-on-1b-events/)
        - [Common Java Exceptions | Baeldung](https://www.baeldung.com/java-common-exceptions)
        - [Most Common Java Exceptions | Rollbar](https://rollbar.com/blog/most-common-java-exceptions/)

## Database
- 2022 Aug
    - [MongoDB Building with Patterns](https://www.mongodb.com/blog/post/building-with-patterns-a-summary)

## Devops
- 2022 Aug
    - [The 20/80 Rules: The 20% of DevOps skills you will use 80% of the time.](https://www.youtube.com/playlist?list=PL2qztVQdZeHNgWOv6KWWMMLnMqdFI0-6k)
- 2022 Sep
    - [The Ancestors and Offsprings of DevOps, the Evolving DevOps Tree](https://medium.com/@schogini/the-ancestors-and-offsprings-of-devops-the-evolving-devops-tree-8bebaa7492ca)

## Architecture
- Plugin Architecture #notImplementedYet
    - 2022 Aug 22
        - Note: 
        2022 Aug 22: For plugin architecture, the whole product should be made pluggable. That is even first party features should be developed as plugin. Which means there will be almost nothing in the core.
        - [YouTube: The Power Of The Plugin Architecture In Python](https://www.youtube.com/watch?v=iCE1bDoit9Q)
        - [StackOverflow: The plugin design pattern explained (as described by Martin Fowler)](https://stackoverflow.com/questions/51217271/the-plugin-design-pattern-explained-as-described-by-martin-fowler) 
- Reactive Programming
    - 2022 Aug 22
        - [Learn RxJS operators and Reactive Programming principles](https://reactive.how/)
        - [The Reactive Manifesto](https://www.reactivemanifesto.org/)
        - [Recommended: Java Brains: Project Reactor](https://www.youtube.com/playlist?list=PLqq-6Pq4lTTYPR2oH7kgElMYZhJd4vOGI)
- Microservices
    - 2022 Sep
        - [Recommended: A pattern language for microservices](https://microservices.io/patterns/index.html)
- Kubernetes
    - 2022 Sep
        - [A visual guide on troubleshooting Kubernetes deployments](https://learnk8s.io/troubleshooting-deployments)
## Clean Code
- 2022 Aug 22
    - [IntelliJ JavaDocs Plugin](https://github.com/setial/intellij-javadocs/wiki)
- 2022 Sep
    - [CommitLint.io](https://commitlint.io/): Helps to write atomic commits

## Observability 
- 2022 Aug 22
    - [Graphana Documentation](https://grafana.com/docs/) 
- 2022 Sep:
    - [Instrumenting Observability: Getting Started and Pro Tips](https://www.youtube.com/watch?v=pY44UX8j4Pc)
    - [Difference Between Observability and Monitoring](https://www.youtube.com/watch?v=dlcS0tY8il8&ab_channel=DevOpsForDevelopers): Monitory means systems metrics. Observability is much deeper. current understanding: logs.
    - Practical Observability: Do not silence errors

## Culture and Collaboration
- 2022 Aug 22
    - [A Software Engineering Culture Test](https://blog.pragmaticengineer.com/the-developer-culture-test/)
- 2022 Sep 22
    - [Synchronous Versus Asynchronous Communication Tools](https://www.youtube.com/watch?v=dX_nZTiZRPE)
    - [Apple CEO Tim Cook on Collaboration](https://www.youtube.com/watch?v=EZPYLZ7I6gs)
    - [Communication Skills are Underrated for Software Developers](https://www.youtube.com/watch?v=5ON1_R-wYAo)
    - [Think introverted; act extroverted | by Shaziya Tambawala | Designing Atlassian | Sep, 2022 | Medium](https://medium.com/designing-atlassian/think-introverted-act-extroverted-976e3164f3a0)
    - In any friendship/relationship/coperation. the most important thing is trust. If you can trust, only then you'll move forward.
    - This includes and is not limited to the world around you.
    - You calling Uber in a different country and getting home safely driven by a stranger is all trust based. 
    
## Agile
- 2022 Aug 22
    - [Agile Manifesto](https://agilemanifesto.org/)
    - [Agile Developer](https://hygger.io/guides/agile/software-development/agile-developer/)
    - [Getting Started with Agility: Essential Reading](https://holub.com/reading/)
- 2022 Sep
    - [YouTube Channel: Development That Pays](https://www.youtube.com/c/Developmentthatpays/videos)
    - [Jira templates for user stories, tasks and bugs](https://blog.codecentric.de/en/2022/01/jira-template-user-story-tasks-bugs/)
    - [The Difference Between The Clever Developer & The Wise Developer](https://itnext.io/the-difference-between-the-clever-developer-the-wise-developer-a0edd9d8a692)
    - [4 types of experiments in software development](https://thedrlambda.medium.com/4-types-of-experiments-in-software-development-2558d01a1bea)
    - [Spring Demo](https://www.youtube.com/watch?v=dEMmvV1pagA&ab_channel=ActiveLAMP) 
    - [Initial Project development process](https://www.activelamp.com/video/discovery/our-discovery-process)


## Product
- 2022 Aug 22
    - [The Product-Minded Software Engineer](https://blog.pragmaticengineer.com/the-product-minded-engineer/?ref=hackernoon.com)

## Algorithm
- 2022 Aug 22
    - [Data Structures & Algorithms I Used Working at Tech Companies](https://blog.pragmaticengineer.com/data-structures-and-algorithms-i-actually-used-day-to-day/)
    - [Grokking Coding Interview Free Alternatives](https://github.com/dipjul/Grokking-the-Coding-Interview-Patterns-for-Coding-Questions)
    - [14 Patterns to Ace Any Coding Interview Question](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)

# Chaos Engineering
- 2022 Sep
    - [Chaos Engineering: the history, principles, and practice](https://www.gremlin.com/community/tutorials/chaos-engineering-the-history-principles-and-practice/)
    - [PRINCIPLES OF CHAOS ENGINEERING](https://principlesofchaos.org/)

# More 

<script type="text/javascript" src="{{ '/assets/resources.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/resources.css' | relative_url }}">

<div id='resource-holder'>

</div>