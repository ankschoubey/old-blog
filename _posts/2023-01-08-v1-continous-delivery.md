---
layout: post
comments: true
description: 
categories: [devops, continuous-delivery]
last_modified_at: 2023-01-08T20:52:08.052481
last-modified-purpose:
permalink: /v1/continuous-delivery
title: Continuous Delivery - How Zero-To-One is relevant in software development and why you should make Deployment&Delivery Pipeline first.
image: /images/continuous-delivery.png
toc: true
---
![Continuous Delivery](/images/continuous-delivery.png)

Original Photo by <a href="https://unsplash.com/@ilumire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jelleke Vanooteghem</a> on <a href="https://unsplash.com/photos/chuzevDl4qM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

## **Software Delivery**: Early vs Late

The most important thing for a project is delivery. Delivering a software early means it's impact is early. Money now is better than money tomorrow.

This gist is one of the core principles of The Agile Manifesto:

> Our highest priority is to satisfy the customer through early and continuous delivery of valuable software."

We often wait a long time before delivering a software. This include making sure all the features are developed and test. But the only step we actually need to deliver something is to put it on PROD. Most features aren't related to deployment.

## Zero-To-One and One-To-N of Software

Software development can be divided into to phrases:
1. **Zero-To-One Phase**: This is where you create something new.
2. **One-To-N Phase**: This is where you work on top of what you created to enhance it.

Zero-To-One phase is the delivers the gist of the project: The MVP. It solves the core problem customer faces. 

Zero-To-One is the start of the project. It's important to create a stable foundation here to ensure a high quality base. In terms of team allocation, you want to have your best developers working during this phase. (I'll be writing more on team allocation later)

The One-to-N part is easier. You have something that works and you want to add a bunch of additional enhancements to it. If you had a good Zero-To-One phase, you have a stable base to build on. So for team allocation, you can have many begineer developers paired with a experienced developer.

## Why you should build a deployment pipeline first?

Delivering a working software that solves customers problem is the most important task. You have to have infrastructure (server, DB, configuration, etc) ready and perfectly aligned. And there should be no issues between them. Many times this involves making code changes to adapt to the infrastructure.

Why not solve the most important task early? 

Early on, during the zero-to-one phase, the amount of code to manage is less. Therefore, you can make code adjust easily compared to later.

The nature of early project phase is largely learning and research. Therefore, there is enough time at hand.

By having deployment solved. Whatever you code & commit next, can reach in the hands of customers the fastest.

#eatThatFrog

Therefore, develop your delivery pipeline as soon as you scafforld (create the base) of your project. Step 2. Start using it. In most cases, once you only create this pipeline once and then update the pipeline as time goes on.

## Addressing the misnomer of "deploying this early to prod without 'proper' testing will lead to low quality".

A common misnomer is that deploying to prod early will lead to low quality.

The result is the opposite: Having to deploy early and often means you are forced to improve your engineering process. 

This means, developers are forced to be more intentional about what they work on, in what order and ensure highest quality.

There is a learning period in everything new we do. We can't expect us or others to do something perfectly on the first try. But as we make mistakes, we create systems and processes that ensure the mistakes doesn't happen again.

Continous delivery pipeline is comparable to TPS: Toyota Production System. Any mistake that is made is rectified by improving the pipeline.

For example, let's say a team adopts continous delivery. 
1. On their first day, a developer commits and his code reaches from dev, qa, uat to PROD and users start using it. It so happened that their was a logical bug in the code deployed. 
2. Rather than scraping the continous delivery pipeline, the team decides to find why the problem was caused and improve the pipeline. They find that the code quality itself was low and their were logical bugs. 
3. To fix this issue from happening in the future, the team adopted better engineering practices. 
	a. They add Sonar lint, a popular linter to quicky check and ensure code meets standard. 
	b. They also adopt TDD and enforced a rule that build passes only when the test coverage is 80%. 
	c. Now, the problem for fixed for life.
4. Sonar Lint became a step in the delivery pipeline. And TDD became a habit.

The next time a developer comes and commits something, the stages in the delivery pipeline ensures that the code is deliverable.

Any problem we face should be solved via the delivery pipeline. Ideally, without any human intervention. 

There are many things that can be the part of delivery pipeline. I'll be adding more posts on this soon.

There are several practices that support a continuous delivery. Some include, 
- [atomic commits](/atomic-commits)
- [TDD](/tdd)
- [the kanban](/implementing-kanban) pull system and walk-the-board-from-right strategy,
- [feature-flagging](/feature-flagging) 
- #morePostsSoon

## **Optional**:  Why not-having a delivery pipeline is risky?

In previous section we covered how quality improves with a continous delivery pipeline. Here are reason why the amount of risk of not having a continuous delivery pipeline is higher.

Only PROD is the place where we can deliver and know what the real status of the deliver is. Not having something used by the users means you don't know what the real impact of your software is.

Making enhancements on something that is not-delivered is largely futile. Discussion over thing that hasn’t been made isn’t the same as having discussion over something that is made.

If the project is de-prioritized, then all work is lost.

And lastly for the joy of coding & committing something is only complete when having it reach prod as fast as possible.

## Still not convinced? Here are the stats

Teams that follow continuous delivery have 
## Optional: How to spot fake continuous delivery?

Continous Delivery means software is always in a releasable state to PROD.
This mean a each new commit is of highest quality and is releasable.

Many companies and teams I have talked to say they do continuous delivery but they don't. Their defination is this: We deploy to our dev environment.

Dev is not prod. #PRODisPROD Prod is where real users are. Prod is where value is. 

## What your first delivery would be?
Your first delivery would be likely something very small and unusable. [An atomic commit](/atomic-commits). A un-responsive login page perhaps.

Having something delivered to PROD, doesn’t mean it has to be available to general public to use. At this stage, you need [feature flagging](/feature-flagging)

One your software crosses the MVP mark, you can release the flag.


## **Optional**: What should you learn to make a delivery pipeline?

Connect with a DevOps person and collaborate to build the CI/CD pipeline. Try to learn from them how to make one.

If that’s not possible, learn a CI/CD tool. Jenkins is a common one. Other popular ones include Gitlab CI and GitHub Actions.

If time is in a crunch, make simple bash scripts.

For example, this was the sort of script I created because I didn’t understand how to do something in Jenkins. The files below are not real, they are illustrations of what I made.

script-create-env.sh

```bash

echo “Enter ENV name”

read end

{destinationTool} init “APPNAME-$ENV”

// other commands on {destinationTool}

npm run build

```

script-deploy.sh

```bash
echo “Enecho “Enter ENV name”
read end
npm run push $ENV
```
## Conclusion

A continuous deployment pipeline helps improve value delivery and deployment frequency without reducing quality, rather it enforces quality. The team following continuous delivery is forced to be intentional.

The real continuous delivery is delivery to PROD. All else is fake.

Practices like the following support continuous delivery:
- [atomic commits](/atomic-commits)
- [TDD](/tdd)
- [the kanban](/implementing-kanban) pull system and walk-the-board-from-right strategy,
- [feature-flagging](/feature-flagging) 