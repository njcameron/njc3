---
title: "Twivel: winding down and moving on"
date: 2017-11-19T17:02:09+01:00
draft: false
summary: "Closing down a startup is equal parts depressing and cathartic."
disqus_identifier: 

tag: 
- Twivel

standfirst: "It's official: Twivel is over. it's powering down and going into sleep mode, permanently. In this post I want to document something of what Twivel was, what problems we set out to solve and what we created."

images:
- samuel-zeller-13178.jpg

resources:
- name: image
  src: samuel-zeller-13178.jpg
  title: "A person walking away"
---
**The Origin**
Twivel was born out of three converging occurrences: 1) a frustration with crap television but great internet video, 2) the release of the 4th gen Apple TV, 3) an itch to learn a new framework.

At some point in 2015 we bought a new TV with built in Android and Wi-Fi. This was the first time I had a TV in the living room since leaving home at 18\. I quickly realised there was a gulf between mainstream TV -- think “Bake Off” -- and the kind of video I had been used to watching: tech video podcasts, LSE lectures and judo competitions. If only there was a simple way of consuming this kind of niche video content on my beautiful 43” screen without fiddling around with HDMI cables or hunting around a YouTube app....

Towards the end of 2015 Apple launched the 4th gen Apple TV. What made this one different from previous generations was a new platform, tvOS and the Apple TV app store. This would mean that organisations could easily build and release their own apps for TV. After a bit of digging I found out about TVML, a set of standard templates and elements that Apple offered to easily create tvOS apps. Having spent years building backend content management systems for apps and the web, I was interested to see if I could build a web-based platform which could be used to drive these templates and create apps.

Around that time I was finishing up on the contract and I wanted to take some time out to tinker with some other languages and frameworks. Having spent most of my career working PHP and Drupal I was curious to try other things. The contenders were Python / Django, NodeJS / Express and Ruby on Rails. A web platform for creating Apple TV apps seemed like a great project. In the end I went with Ruby on Rails; Although no longer new and shiny it is a solid framework with a vast, mature library of plugins and Stack Overflow answers for nearly everything.

**Sales**
What started as a side project quickly turned into what appeared to be a viable business. Shortly after I started development I set up an email newsletter. When I posted an update with screenshots of the apps you could make with Twivel an associate that works with The Economist magazine invited me in for a chat. He went on to explain they were going to build their own Apple TV app and would be interested in using Twivel. I gave them a demo of an app built with Twivel and like that I had my first customer.

> a mission for Twivel became clear: enable niche video producers to create beautiful experiences which allow people to watch what they love.

Based on the frustration with mainstream television, a mission for Twivel became clear: enable niche video producers to create beautiful experiences which allow people to watch what they love. Alongside your Netflix app and iPlayer app you could also have your Judo app, Opera House app or an app for any other sport, hobby or interest you followed. Creating OTT apps has traditionally been an expensive, messy endeavor. Prior to around 2015 TV operating systems were highly fragmented and development a slow and painful process. The landscape today is still changing but consolidated around Roku, tvOS (Apple) and JavaScript powered web apps (Android / Samsung / LG). The vision we had for Twivel was to level the playing field between someone like ESPN or the BBC with an independent media company.

Off the back of our success with The Economist. I put my sales hat on and set about testing the market. Over the course of the year I approached around hundred different companies and organisations. From those I got meetings with around twenty companies including The National Theatre, Daily Telegraph, British Museum, SHOWstudio and the International Judo Federation. 

**Investment**
By summer 2016 I had a found a co-founder who helped build an iOS app. We set about looking for investment. The focus on sales shifted to a focus on investment and again we reached out to well over 100 VCs and angels. Many of them took calls and a few took meetings. 

**The But**
Can you sense a “but” coming yet? So here is the but: the reaction from prospects (apart from the two we converted to customers) ranged from “luke warm” to “huh that’s neat” but the sales were very, very difficult to close. Turns out we were lacking the hallowed “product market fit.” As Marc Andreessen writes about PMF:

> “You can always feel when product/market fit isn’t happening. The customers aren’t quite getting value out of the product, word of mouth isn’t spreading, usage isn’t growing that fast, press reviews are kind of “blah”, the sales cycle takes too long, and lots of deals never close.”

The reaction from investors focused on this. The response was almost alway the same: “Come back when you have some more traction.”

**Hitting Pause**
At this point the traditional thing to do is to pivot. However, this was also the point at which our personal funds were starting to run low and a difference in risk tolerance and vision with my co-founder became more apparent so we decided to hit the pause button and look for consulting work while we reconsidered.

Around that time (early 2017) our second customer ikonoTV, a Berlin based art media startup, were raising a “seed plus” round and looking for a CTO to come on board. I joined as their interim CTO and helped create roadmaps for internal tools, web presence and b2c / b2b offerings. During that time we added subscription and payments functionality and built a React / NodeJS based web app for Twivel. Things were starting to look rosy until...

**Moving On**
My work with ikono came to an abrupt halt when their investment fell through. I was fortunate to quickly pick up a short consulting project with the wonderful Wellcome Trust where I've had the opportunity to plan my next moves.

**Tell me how you really feel**
I regret nothing. I'm immensely proud of the success we achieved and still believe the niche video space is a problem worth solving (more on that in another post). I smashed my tech goals of learning not just Rails but also plenty of Node, React and Swift. I also learnt a vast amount around the mechanics of starting and scaling a SaaS business. So it was a great experience. Would have been nice with a more controlled ending? Sure, but in startup land dealing with excrement hitting the air conditioning system at any time is a given.