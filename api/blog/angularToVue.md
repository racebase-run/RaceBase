---
title: The Search for an Angular Replacement - Our Journey from Angular.js (v1.x) to Vue.js
date: March 20 2019
author: Remington Breeze
---

When first starting to build RaceBase, I was inexperienced in the realm of single page applications, so when I got started, I wasn't very discriminatory as to which Javascript framework I was going to use. This was two years ago, so my memory is a little hazy - but the idea of a SPA sounded nice, and I probably just picked the first tutorial that came up on a Google search for "SPA tutorial"; however it happened, I ended up diving into Angular.js (version 1.x) to build RaceBase. Little did I know at the time, Angular.js had been "upgraded" (ruined) to Angular 2.0, which is essentially a completely different framework. There were still plenty of Angular.js 1.x developers out there, so I had no trouble finding tutorials, StackOverflow answers, and plugins for my growing application... for about a year. 

Last spring, I was developing a new feature for RaceBase (the specific feature escapes me and is irrelevant for the sake of the story), and came across a plugin for Angular 2.0+. The syntax looked completely different from what I was used to in Angular.js 1.x, and it obviously was incompatible with my current application, so I did some research into upgrading to Angular 2.0+ and realized that 1) Angular.js 1.x, and therefore my entire application, was deprecated now, and 2) migrating to Angular 2.0 would be no small task. So I did what I should have done from the beginning, and researched all my options for building RaceBase. 

## Why not just move to Angular 2.0+? 
A few reasons. One, I personally wasn't fond of the way that the new Angular did things, and if I had to learn a new library anyways, I wanted it to be one I enjoyed and that made sense to me. Two, if Google decided to make such a drastic change to the library before, it's possible they'd do it again, which wasn't a risk I wanted to take. 

## Why use a Javascript SPA framework in the first place? Couldn't you build a PHP SSR application? 
Haha, PHP. I learned PHP 7 years ago and did actually enjoy using it to build simple apps. But the way the industry is moving is away from PHP, and I like to stay on the cutting edge and learn new things. It's also nice when you're entire application (frontend and backend) use the same language. Finally, I was already pretty committed to Node for my API, and the API worked just fine, so there was no need to do a complete restructuring of the entire application when a frontend revamp would suffice. 

## Alright, fine. So what options did you come up with? 
I spent a few weeks researching and came up with two top options: 
### React
and 
### Vue.js

Other options I considered were Ember.js, Meteor, Polymer, and Mithril. In the end, I decided that these frameworks didn't have enough of a following for me to be able to trust that they'd be supported years down the line, and the developer ecosystem wasn't as rich. So it came down to the top two mentioned above. 