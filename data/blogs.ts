export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tag: string;
  content: string;
};

export const blogs: BlogPost[] = [
  {
    slug: 'building-premium-portfolio',
    title: 'What Makes a Developer Portfolio Feel Premium?',
    summary: 'A practical look at clarity, hierarchy, motion, and content choices that help a portfolio stand out quickly.',
    date: 'May 04, 2026',
    tag: 'Design Engineering',
    content: `
A premium portfolio is not only about beautiful gradients or smooth animation. The strongest portfolios feel clear within the first few seconds.

## Start with the hiring signal

A recruiter or technical reviewer wants to understand three things quickly:

- what you do
- what you can build
- why your work is credible

That means the hero section should be direct, the project cards should be scannable, and the navigation should never make the visitor think too much.

## Motion should support meaning

Animation works best when it improves orientation. A fade-in can guide attention. A hover state can show that a card is clickable. A page transition can make the site feel calm and intentional.

The mistake is using motion as decoration only. Subtle motion feels more professional than constant movement.

## Strong portfolio content is specific

A project page should explain the problem, the tech stack, and what the project proves. Generic words like “modern app” are not enough. The visitor should see practical decisions and engineering judgment.
`
  },
  {
    slug: 'ai-features-that-actually-help-users',
    title: 'AI Features That Actually Help Users',
    summary: 'A short framework for adding AI features that solve real problems instead of feeling like decoration.',
    date: 'April 22, 2026',
    tag: 'AI',
    content: `
AI features are strongest when they remove friction from an existing workflow. The goal is not to add AI everywhere. The goal is to make a difficult task easier.

## Good AI features have clear input and output

The user should know what to provide and what they will receive. For example, a resume reviewer needs a resume and a job description. The output should be structured feedback, not a vague paragraph.

## Keep humans in control

AI should assist decisions, not hide them. Good interfaces let users edit, refine, reject, and regenerate output.

## Make the result usable

The best AI output is action-ready. Summaries should be short. Recommendations should be specific. Generated content should be easy to copy, edit, or save.
`
  },
  {
    slug: 'clean-code-for-small-projects',
    title: 'Clean Code Still Matters in Small Projects',
    summary: 'Why small portfolio projects should still use reusable components, typed data, and clean folder structure.',
    date: 'March 18, 2026',
    tag: 'Engineering',
    content: `
Small projects are often where people cut corners. But small projects are also where reviewers judge your habits.

## Structure shows maturity

A clean folder structure makes the project easier to scan. Components, data, hooks, and utilities should have clear responsibilities.

## Types reduce confusion

TypeScript helps keep project data predictable. Even simple arrays like projects, blogs, and certificates become easier to maintain when they have clear types.

## Reusable components save time

If a layout pattern appears more than once, turn it into a component. This keeps pages clean and makes the whole app easier to improve.
`
  }
];
