---
status: published
category: software
title: How this site works
date: "2024-04-22"
---

> Personal websites are your plot of real estate for the web

It's that time again when I get that itch to come back and rebuild my website. Every time I do so it's usually because I want to try something new. In 2021 it was learning how to develop with Vue. Then in 2022 I gave it's more popular competitor React a shot. Both cases I treated my websites as just an extension of a résumé, showcasing a list of projects and work experience. This time I want to try something different and instead invest in building my own piece of real estate on the internet.

## Invest in some land

Your personal website can be much more than a prettier version of your LinkedIn. It’s not just a résumé with better fonts, it’s a space that’s fully yours. In a time when most online presence is borrowed from platforms like Instagram or LinkedIn, your website is one of the few places you truly own. It’s your digital real estate, where you set the rules, design the experience, and share what matters to you.

> It’s a long-term investment in your identity online

It's like renting versus owning a home. As a renter on one of these platforms you'll never be able to build a portfolio with full creative freedom. Your digital presence shouldn’t be locked behind someone else’s walled garden.

## Storage is cheap

For a few years now I've heavily invested in ways to organize my thoughts digitally through note taking methods such as [P.A.R.A](https://fortelabs.com/blog/para/) or [zettelkasten](https://zettelkasten.de/overview/). These methods have grown in popularity because of their guidance in building a lasting system to intake your thoughts as well as to quickly retrieve them at a later point. While these systems have benefited me greatly in letting brain dump interesting things and allowing me to quickly retrieve them, I've struggled to build on those thoughts into something more cohesive and long lasting.

In a digital age where storage is cheap, it's become extremely easy to save every little thing we see online or feel worth jotting down. I'm sure we all have an overcrowded bookmark bar or a long list of Apple notes that haven't been touched since the day they were created. And while it may feel productive to save this information, in the end if your not building upon it they just pile up and create a kind of mental fog—a growing collection of content with no real direction or final purpose.

> A puzzle piece only has meaning once it's part of the bigger picture

My hope with my 2025 website unlike previous years isn't so much about the technical learnings (although we'll get to that later), it's more about building a digital garden of the content and learnings I've consumed over the years. **Going through the process of curating and organizing these thoughts into an actual "understanding" that is long lasting**.

Now let's be clear that there is plenty of content on the internet. The last thing the world needs is another blog. You as the reader don't have any obligation to read my posts from start to finish. I don't expect you to. These posts are first and foremost my way of attempting to more cohesively think about my experiences and learnings, with the intent that someone else besides me may just find them useful for their own reflections.

## The tech stack

### Content

All content for this blog is generated via standard markdown files and eventually mdx files. I chose this format because of it's portability and integration with my current note taking app of choice [Obsidian](https://obsidian.md/).

### Framework

For the 2025 site I decided to use [Astro](https://astro.build/) as my JS framework of choice. The driving factor for me to use Astro instead of something such as Next.js was two fold

- Next.js can at times feel a bit overly cluttered with more advanced features (even though they, are optional they still persist throughout the documentation, etc. )
- Astro has built in solution for content generation on top of markdown

The Astro Content Layer specifically interested me for it's ability to generate pre-rendered html pages from plain markdown. Making it seamless for maintaining and creating new posts simply by adding a new md file in a specified directory.

## Hosting

I continue to use Firebase as the hosting provider for the static files. Primarily because it was already setup for my 2022 website and was simple to repoint to this new repository. If I were to start from scratch I may have chosen Cloudflare instead as it's my current favorite provider for some newer projects.

## Conclusion

This is my first post so I expect there to be some rough edges and some adjustment on my part as I get better at writing. I'm pretty happy with how it turned out for my first go and expect to continue to post a variety of both short and long-form articles. I'm also planning on building on the site to eventually support hosting my photography portfolio.

Shout-out to the following amazing creators who inspired this latest iteration of my site: [Udara Jay](https://udara.io/), [Mikael Sargsyan](https://www.mishomike.dev), and [Thomas Rico](https://www.thomasri.co/)
