---
title: "You guessed it! - how to make better estimates"
date: 2017-01-16T17:02:09+01:00
draft: false
summary: "Task estimation is fundamental to a well run product process, here's how you can do it better."
standfirst: "Estimates are hard to get right. Remember that time you had to clean the house, you thought you could get it done in “an hour or so” and it took half a day?"

tag: Agile

resources:
- name: thumb
  src: weighing_scale.jpg
  
---
What about the last time you had to “finish up a few emails”, you promised your partner you would be done in half an hour. Forty-five minutes later and you only got through one of the three emails you needed to reply to. And let’s not even start on how long it will take to plan and book your holiday / wedding / house purchase. Estimation, however, is at the core of effective product and project delivery, so the process deserves some serious thought and attention. 

Much has been written about the difficulties associated with providing engineering estimates. Often these stem from waterfall or “watergile” projects where dev teams are asked to estimate a feature or product based on designs or a requirement doc. Proper agile / scrum delivery goes a long way to helping with this scenario but estimates for user stories are still needed for a well run project.

I have worked with many agile teams in the past and discovered that there are a few fundamental considerations which can help improve estimates, leading to a higher quality life for everyone involved in a project. These fundamentals consist of the a few principles to be aware of and three key factors to consider when estimating.

**The principles**

**1\. Abstract away from time.** 
Talking in terms of hours and days can have a weird impact on estimates. Units of time fuel the inner critic and provide a false sense of accuracy. When estimating a task our inner critic can often hijack the process: _“two days sounds like an awfully long time to build that simple looking widget, perhaps it’s because you’re not a proper developer, I wonder how long you can get away with this...”_ etc. This can lead to developers lowering their estimates to satisfy their inner critic.

> Talking in terms of hours and days can have a weird impact on estimates. Units of time fuel the inner critic and provide a false sense of accuracy.

Instead, I recommend abstracting away from time. Popular methods includes story points, t-shirt sizes (S, M, L, XL) or 1 - 5 scale. These points can be calibrated so an S task represents a quick, known fix that takes less than half a day. An L task could be an API integration which requires comprehensive test coverage, taking 3 - 5 days.

**2\. Complexity increases exponentially not linearly.** 
Large tasks typically have more unknowns, more moving parts and more dependencies than smaller tasks. We should therefore expect a larger task to be estimated to a larger margin of error than a smaller task. Because of this I like to use story points based on the fibonacci sequence:  0, 1, 2, 3, 5, 8, 13, 21\. This enforces defensive estimates for larger tasks and can often prompt the question: “what can we do to create more certainty around this task?”.

**3\. Iterate and learn.** 
There are some practitioners of agile who hold that there are no inaccurate estimates only different velocities. I take a different view: if a task took longer than historical estimates would imply, then we must be able to learn something new to improve our process. I would encourage teams to discuss this in a non-blaming way in the retrospective. Perhaps there was a dependency that was not met, perhaps requirements changed or perhaps the team were unfamiliar with the technology. Whatever the reason, the team can learn, improve and recognise similar situations in the future.

**The three key considerations for better estimates**
When it comes to making the estimate I find it really useful to think about the task in terms of complexity, uncertainty and effort which combine to give an a more accurate understanding of the size of the task. Let’s breakdown those in more detail:

**1\. Complexity.** A complex task is one which we know and understand all the inputs and expected outputs but we need to create the logic that sits in the middle, something like a recommendation algorithm would be a good example.  The opposite are tasks where minimal creativity needs to be applied, for example implementing a front-end theme may require applying pre-existing CSS classes. Needless to say, the more complex a task, the more time it will require to complete it.

**2\. Uncertainty.** A good dev team will always try and reduce uncertainty to the minimum but sometimes we simply do not know all the facts required. For example, integrating with an external API can often throw up unexpected obstacles. Perhaps it is poorly documented or perhaps it behaves in an unexpected way. Any uncertainty around a task should be taken into account when estimating.

**3\. Effort.** Some tasks may not be complex and may have no uncertainties, however, there is still the schlep-factor to consider. Content migrations are often a bit like this. We know exactly the content to be migrated, we know how it will look in the target CMS, the complexity is low because we are using a known framework, however, the developer still needs to map hundreds of fields from old to new.

**Finishing up**
Following these guidelines should help make the estimation process less painful and more helpful for the whole project team. To start using them, I recommend you first discuss them your team members with the aim of encouraging “adoption” rather than top down “implementation”. You can then start to use them as a kind of shorthand: _“Can we break down this L task into a series of S’s?”_; _“Jane, you said it was a 5-pointer, have you considered the uncertainty of the task?”_.

Which processes and tips helped your team work better with estimating? Let me know in the comments below.

**About Neil Cameron**
I’m a tech / product / business consultant based in London, working with organisations large and small to deliver brilliant products. I’m currently taking on consulting working, say hello: [neil@neilcameron.me](mailto:neil@neilcameron.me)