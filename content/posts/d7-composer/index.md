---
title: "Managing Drupal 7 dependencies with Composer"
date: 2015-10-09T17:02:09+01:00
draft: false
summary: "How to use Composer to manage your next Drupal 7 project."
standfirst: "Composer brings dependency management for Drupal 7 kicking and screaming into 2015, this is how you can effectively use it on your next project."

tag: 
- Drupal

resources:
- name: image
  src: composer.jpg
  title: "old sheet music"
  
---
(Don't want to read? Check the [example project on Github](https://github.com/njcameron/drupal-composer-template))

Working with Angular JS, Bower and Grunt, and in particular how they work with third party dependencies, has got me thinking about how to manage a drupal codebase.

Since the SVN days I've always simply committed the whole docroot into the repo and ensure that the sites/default/files, settings.php and other bits are ignored. There are several benefits to this: it's simple, easy to understand and ensures all contrib modules and libraries "just work".

However, there are some downsides too: the repo gets very big very quickly, module updates often pollute the commit history and it blurs the line between 3rd party dependencies and custom modules.

I started looking for a solution whereby all 3rd party dependencies would be *built* rather than checked out.

I quickly ran into the [Drush Make vs. Composer](https://www.drupal.org/node/2471553) discussion. tl;dr use composer, drush make is too drupally and composer is the future.

> tl;dr use composer, drush make is too drupally and composer is the future.

Then I started down the path of actually trying to use Composer to manage my application code. My requirements were quite specific:

*   Everything must live in a single repository.
*   Core and contrib must be pulled in via composer on install.
*   The app must build with no manual intervention.

The [Drupal Composer project](https://github.com/drupal-composer/drupal-project/tree/7.x) quickly gets you started. The main problem I ran into is how to handle custom themes and modules. The [suggested](https://getcomposer.org/doc/05-repositories.md#loading-a-package-from-a-vcs-repository) way seems to be including them as a package from a VCS repository. The problem with this is that you need two repos: one for the custom modules and one for the composer files. This is going to lead to confusion pretty quickly and I'm sure devops have enough to do without maintaining scripts to access multiple repos.

I eventually settled for a repo structure that looks like:

|_ composer.json  
|_ composer.lock  
|_ .gitignore  
|_ web/sites/all/modules/custom  
|_ web/sites/all/modules/features  
|_ web/sites/all/modules/custom  
|_ web/sites/all/themes/custom  
|_ scripts

/web is the docroot for the site. Composer pulls in all the dependencies into this directory.

The directories within /web do not get overridden because of the preserve path composer plugin. https://github.com/derhasi/composer-preserve-paths

/scripts is used to keep Composer scripts (https://getcomposer.org/doc/articles/scripts.md) e.g. after composer install create a files directory and settings.php.

Initially I was unsure of this setup as Composer [makes quite clear](https://getcomposer.org/doc/faqs/should-i-commit-the-dependencies-in-my-vendor-directory.md) that dependencies should not be added to the repo. However, looking at how Pantheon [recommend](https://github.com/pantheon-systems/example-drupal7-travis-composer/tree/master#repository-management) you approach Composer for Drupal gave me confidence in this and compared to other options  it provides a transparent and easy to manage approach.

Most of the magic happens in the .preserve paths and .gitignore file. We preserve the paths that we're managing with custom modules and ensure that everything except them is ignored by git.

I've created an [example project on Github](https://github.com/njcameron/drupal-composer-template) that shows how the whole shebang works. Let me know in the comments if you use this on your project and how you change it to make it more effective.

Image source: https://flic.kr/p/4dNjZS