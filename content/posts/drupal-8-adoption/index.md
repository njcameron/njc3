---
title: "Drupal 8 adoption is going to be very different"
date: 2015-09-29T17:02:09+01:00
draft: false
summary: "Why the adoption of Drupal 8 is going to be fasted we've seen yet."
standfirst: "There are three key reasons why Drupal 8 adoption will look very different to Drupal 7 and 6 adoption: Core, Decoupling and Symfony."

tag: 
- Drupal

resources:
- name: thumb
  src: kittens.jpg
  title: "A box of kittens"
  
---
I have been through 3 major Drupal version changes in my professional career and each time there is the inevitable discussion around when Drupal X will be ready to use in production. With Drupal 8 just appearing over the horizon the same conversations are getting repeated in both the drupalconosphere and twittersphere.

Having built this site on Drupal 8 and listened to different accounts of how D8 has already been used in production, I'm starting to form a theory that Drupal 8 adoption will look very different to previous major updates.

The earliest update I witnessed was D4.7 -> D5 (back in 2007). Since then we have seen a similar pattern: a new version of Drupal core gets released but there is a lag of 6 months until it gets used seriously in production. This lag is caused by two main things: contrib modules catching up and lack of documentation (both formal docs and StackOverflow type docs).

However, what I think we will see with Drupal 8 is almost instant adoption and the ability to immediately create production sites. There are several key reasons why:

**Core means Core, no more pseudo-core modules.**  
With previous versions of Drupal many developers new to Drupal were left befuddled after installing it and realising they could do... well, not very much. Wysiwyg? That's contrib. Date field? There's a module for that. User profiles? Um.. profile module. Basically, core was everything and nothing. It was core to the functioning of Drupal but it was no where near enough to build a website with. So we ended up with a lot of modules that were a kind of "pseudo core" such Views, WYSIWYG, Services, the list goes on. What happened when a new version of core was released was that there was a long wait whilst pseudo core caught up.

> Core now includes everything you need to build a fully featured CMS and website.

With Drupal 8 this changes. This whole site was built with no contrib modules. Core now includes everything you need to build a fully featured CMS and website. This will mean that almost immediately we will start to see sites running on Drupal 8\. Initially they will be simpler brochure or media sites, later we will see more complex systems.

**Decoupled Drupal means less responsibility. Also web components.**  
Drupal 8 will increasingly be used as a backend for frontend and mobile apps giving it a smaller footprint in the overall web stack. This smaller footprint will be served by the new core (see above). What this will mean is that a lot of the "frontendy" modules will not be required. For example, [Google Maps](https://www.drupal.org/project/gmap) could be replaced with [Angular Google Maps Directive](http://angular-ui.github.io/angular-google-maps/#!/).

The rise of [Web Components](http://webcomponents.org/) may even accelerate this process. A Web Component is a reusable, custom defined HTML element. For example, you can embed a Youtube video using this [element](https://elements.polymer-project.org/elements/google-youtube).

This means instead of relying on the modules in the Drupal ecosystem, we can use modules (or Web Components, as we will call them) that are interoperable across the entire web.

**Proudly invented elsewhere = documented elsewhere**  
Or the problem of not hitting a critical mass of Stack Overflow questions. For Drupal 7, early adopters were left to flounder trying to figure out new APIs. Once this had been documented and answered on Stack Overflow most problems were only one Google search away from an answer. For Drupal 8 this should be less of an issue. Since much of the fundamentals of the code base are running on Symfony (and Composer) many of the issues people have will already be answered for a non-drupal context.

So there you go, time will tell how things play out but I think we will see a more rapid adoption of Drupal 8 due to the bigger core, smaller footprint in the stack and reuse of Symfony components.

<small>Image: [https://flic.kr/p/9MFiSf](https://flic.kr/p/9MFiSf)</small>