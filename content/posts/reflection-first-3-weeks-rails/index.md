---
title: "Reflections on my first three weeks using Rails"
date: 2016-01-25T17:02:09+01:00
draft: false
summary: "The good the bad and the ugly of using of Ruby on Rails for the Twivel MVP."
standfirst: "One of my goals for 2016 is to use more non-drupal stuff and expand my tech horizons. This is how the first three weeks have played out."

tag: 
- "Rails"

resources:
- name: thumb
  src: ror3.jpg

---
I first became aware of RoR back in 2006 around the same time I read the brilliant [Getting Real](https://gettingreal.37signals.com/) from the company previously known as 37 Signals (now Basecamp). At that point I was busy wrapping my head around Drupal 4.7 and building out a social network for language learners known as Huitalk. Since then I have followed its adoption with interest but always been too professionally involved with Drupal to do more than tinker around the edges.

Before I knuckled down to build the [Twivel](https://twivel.tv) MVP, my initial choice was to build it with Drupal 8\. It was an obvious choice because Twivel is essentially a content management system with an API and it would be a great opportunity to really get to grips with Drupal 8\. However, over the holidays the idea of learning something totally different came into my mind. Why? Well, I think there is a FOMO very specific to developers which is fuelled by the framework wars. No matter how much cool stuff you made with framework X, there is always framework Y which is apparently better at A, B and C.

> No matter how much cool stuff you made with framework X, there is always framework Y which is apparently better at A, B and C.

So on Jan 4th, my first day of "MVP development", I was up to my eyeballs in blog posts and hello world tutorials comparing Python / Django to Ruby / Rails to PHP / Symfony to PHP / Laravel to node.js / Express. In the end I went with RoR based on the track record of usage and huge body of tutorials and Stack Overflow posts that have proved invaluable with Drupal development.

I started off by doing a few walk throughs. I thoroughly enjoyed [Ben Walker's tutorials](http://www.devwalks.com/) and within a couple of days I had my Instagram knock-off up and running and felt reasonably confident I would be able to hack something together for Twivel.

The first week of dev was painful. No two ways about it. Every fibre in my body screamed at me to go back to what I knew. Achieving even the simplest task took hours. There was a constant stream of surprises including, but not limited to:

*   Needing to add a field to a form template before I can use it.
*   Spending a day to add categories with, gasp, an autocomplete form.
*   Spending half a day to add minimum dimension validation to an image upload field.
*   Needing to manually specify system messages for when content was successfully created, updated or destroyed.

If you known anything about Drupal you will know everything above "just happens".

> Every fibre in my body screamed at me to go back to what I knew.

Once I got more comfortable with the development paradigm of RoR I started to have small, very small, moments of clarity and joy. I was beginning to see what all the fuss was about. Fast forward three weeks to today and I am happily using Rspec for TDD, I have built out most of the functionality and even got a RESTful API up and running.

What surprised me most, was how useful my Drupal development experience was in making the switch. There are many RoR concepts which are analogous in Drupal, for example:

*   migrations ≈ features
*   rake / rails ≈ drush
*   gems ≈ modules
*   views ≈ theme templates
*   controllers ≈ modules
*   associations ≈ entity references

And then there are the specific RoR things which I have really been enjoying:

*   Tight integration of code, test framework (Rspec / FactoryGirl) and server make writing tests and TDD feel like a really natural part of the development process. With Drupal, Selenium tests always felt like a post development bolt-on and I never quite got comfortable with making Behat tests part of the development process.
*   Keeping route config in code gives you complete certainty over your applications capabilities. No more randomly discovering derivative paths that a module created for you.
*   Keeping all config in migrations (code) effortlessly does what Features and CMI set out to achieve.
*   The rails asset pipeline makes working with SASS effortless.

Am I going to ditch Drupal and go with Rails from now on? No chance. I think Drupal is a brilliant solution when an application is mostly content management or when you are time constrained to build something that looks good and delivers CMS functionality.

But all in all I am really happy with my choice of using RoR for Twivel. The biggest advantage I see right now is a lean codebase with nothing unnecessary and no surprises. I am really looking forward to seeing how RoR works out as things get more complex with multi-tenancy, caching and eventually payments.