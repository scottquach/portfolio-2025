---
status: published
category: software
title: What Writing a Book Can Teach Us About Software Projects
date: "2024-05-19"
---

Building software products is hard. Building software products that people actually use is even harder.

In this series, I’ll explore common failures in software product development and how the process of writing a book can help explain why they happen and how to fix them. These failures often come from the technical, jargon-heavy nature of software engineering, which leads non-technical stakeholders and management to misunderstand how software is actually built.

The most common ways I see this misunderstanding manifest itself is through how organizations _manage_ software development.

## The manufacturing mindset

The way most non-technical organizations address this misunderstanding is to treat software development like manufacturing.

Roadmaps are defined, broken down into standardized tickets _(cough cough JIRA)_, assigned requirements and effort estimations, and expected to be completed in repeatable two-week intervals. This approach attempts to simplify the complexity of software engineering into a seemingly easy to understand assembly-line like manufacturing process. It assumes:

- More developers means more productivity, a developer is interchangeable with another
- Output quality is an outcome of processes standardization and adherence
- Requirements can be fully defined upfront
- Tasks can be broken down into predictable units of work
- Progress can be measured via points completed on a chart

This mindset treats software engineering like factory workers assembling components, when the reality is the majority software work is more similar to creative professions such as writing. And while on paper these assumptions can seemingly benefit management by providing a clearer understanding of work in progress, resource constraints, etc. This mindset is often the creator of process-driven bottlenecks.

A better mindset would be to think of software development akin to writing.

## Coding is really just writing

Coding, at the end of the day, is opinionated sets of text saved to files. If we compare writing a book to software development we can correlate a lot of roles.

- Author = Software engineer
- Editor = Code reviewers
- Publisher = Management
- Readers = Users
- Book = Piece of software
- Chapters = Features of a software
- Book series = Interconnected software
- Writing = Coding

Strip away the technical pieces and you'll find similar patterns of creation, review, and delivery. Just as authors craft a narrative by building out chapters and fitting them together into a cohesive story, software engineers write features that come together to create a cohesive experience for end users.

Keeping this framework in mind, we will be able to more easily identify common software development that are difficult to see with an assembly line mindset.

## Example: More isn't always better

Let's take this framework and see how we can use it to address one of the most common issues I see in software engineering. Adding too many engineers to a project.

Using our manufacturing mindset, if we want our development team to release more features our expected through process would be.

- More features being released = more points being completed in a sprint
- More points being completed in a sprint = more tickets being complete
- More tickets being complete = let's assign more engineers to the project

On paper, this make sense. Increase the input and increase the output. And from an engineer's perspective why wouldn't you want some more help? In practice however once a project reaches 3-4 engineers this scaling starts to fall apart.

Returning to the writing analogy, it's common to add co-authors to assist in the writing processes. However imagine adding 3, 4 or even 5 authors to a book. We would quickly run into problems:

- **Consistency** - Each author added is a different voice and perspective of the story. Editors must now spend more time ensuring unified tone and structure for every change made.
- **Dependency management** - If John changes a key detail in Chapter 4, Bob might unknowingly reference the outdated version in Chapter 23, the chance of this increases as more authors are added making simultaneous changes. Resulting in more overhead coordinating and reviewing changes across multiple authors.

In both cases, the more authors you add, the more critical the editor role becomes.

In software, the same problems occurs with code. However, it is usually the case that an engineer for a project is **both** author as well editor. Both committing code as well as conducting code reviews for fellow engineers. This effectively means that for every engineer you add to a project, you are trading coding time of all the existing engineers in exchange for more code review and coordination time.

> It's easy to start with a team of authors and end up with a team of editors

This can very quickly reach an inflection point where engineers spend more time making sure changes are consistent and coordinated with one another than actually building out the features. A reality often not understood when thinking of software engineering using the manufacturing mindset.

Before you add more engineers to a project, first consider what the _actual_ bottlenecks are. Is it really a lack of people, or are processes and communication overhead eating into development time? Especially as the manufacturing mindset encourages that maturing products = more mature and heavy handed process. Do you need more engineers, or would support roles such as customer solutioning or user feedback facilitation free up engineers to focus on quality development time?

This idea is explored in [The Mythical Man-Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month), which introduces Brook's law: _Adding manpower to a late software project makes it later_

## Conclusion

Writing a book offers a clear mental framework to help those unfamiliar with software engineering better understand how we build good software. I hope this analogy helps you both more easily identify common pitfalls as well as better communicate them to stakeholders who may lack technical backgrounds.

In future installments I hope to showcase other areas of software engineering that would benefit from this book writing analogy.
