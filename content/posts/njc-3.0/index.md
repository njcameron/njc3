---
title: "Rebuilding and relaunching neilcameron.me on Hugo"
date: 2018-06-25T15:02:09+01:00
draft: false
summary: "The third reincarnation of neilcameron.me is a static file site built on Hugo."
standfirst: "The maintenance nightmare of my previous headless drupal + Angular JS prompted me to move to something radically simpler."

tag: 
- neilcameron.me

resources:
- name: thumb
  src: bank-phrom-352283-unsplash.jpg
  title: "A modern printing press"
  
---
Once again I find myself between life chapters with a few weeks of downtime to [sharpen the saw](https://www.franklincovey.com/the-7-habits/habit-7.html). I'll post more on the chapter changing later, for now lets look at the web bit.

**Previously on neilcameron.me**
Almost exactly three years ago, I consciously took the decision to over engineer neilcameron.me to trial an emerging build pattern of decoupled Drupal as CMS and a JS web app as the frontend. Drupal 8 was in beta and Angular was in vogue, so it seemed like a natural pairing.

I was broadly happy with the end result. The drupal CMS required minimal coding, just a custom module to expose an API. The AngularJS frontend was straight forward to put together, the only obvious downside was the clunky [prerender](https://prerender.io/) work around for indexing and bots that don't execute javascript.

> after spending half an hour faffing around with Gulp and Bower (remember them?) I couldn't even get the Angular site to build

The main problem came about 2.5 years later when I wanted to make some changes. Turns out after spending half an hour faffing around with Gulp and Bower (remember them?) I couldn't even get the Angular site to build locally. Likewise, the backend CMS started out on Drupal 8.0.0-beta11while the most recent version (after a couple of drupalgeddons) is 8.5.4.

**The Next Generation**
I knew I needed a low maintenance, easy-to-update platform for my new site. For the [Twivel TV](https://twivel.tv) website I'd used [Jekyll](https://jekyllrb.com/) hosted on AWS S3 (via [s3_website](https://github.com/laurilehmijoki/s3_website)). I was really happy with the result and decided to take a similar approach.

A statically generated site is a collection of templates, content pages in markdown format and other structured content which can be compiled into a series of HTML files which are served to the reader. Traditionally CMSs have a DB for storing content and the HTML pages are generated on the fly by a scripting language like PHP. This can lead to poor performance due to DB reads and a large surface area for potential malicious attacks.

After a bit of googling it seemed like [Hugo](https://gohugo.io/) is the current preferred choice for running a static site. I gave it a try and it's dead easy to get up and running. The documentation is generally pretty good, although there are some concepts like leaf and branch page bundles or page resources that could do with some better explaining.

For hosting I considered a DIY S3 + Cloudfront setup but when I saw the [Netlify](https://www.netlify.com/) offering it was a no brainer to user that. S3_website makes things simple, but you still need to think about invalidating caches, creating a mini build script and running the command each time to deploy. Netlify abstracts all that away and provides a sort of CD service that connects straight to Github.

**Takeaways**
I always like to use my personal site as a guinea pig to try new things. In this case I think there are few lessons learned that can be applied more broadly to organisations considering their web presence:

1. A high maintenance tech stack not only requires an ongoing commitment but if it passes a certain point of not being maintained, blocks further development without a significant investment of time.
1. Bleeding edge frameworks lead to a higher maintenance, less forgiving tech stack. This is becoming one of the strongest selling points of boring, mature frameworks like Rails.
1. Tools like [Forestry](https://forestry.io) (a cloud CMS for static sites) and Netlify are beginning to make statically generated websites realistic options for organisations with lots of content but not much interactivity. There are great benefits to be had around the reduced surface area for attacks and the ease of high performance hosting.



<small>[Image credit](https://unsplash.com/photos/Tzm3Oyu_6sk)</small>