# Product

## Register

brand

## Users

The portfolio is read by three audiences in roughly equal weight:

1. **Hiring managers and engineering leads** scanning candidates on a 14-inch laptop in mid-morning daylight, deciding whether to forward Ajinkya's name to a colleague or schedule a call. They are skimming, not studying. They form an impression in 6 to 12 seconds, then either dig deeper or close the tab.
2. **Recruiters** at security, AI, and product orgs (Microsoft, OpenAI-adjacent, Anthropic-adjacent, security startups) who pattern-match on signal: where, what, with whom, recently. They want to know what role to slot the candidate into.
3. **Collaborators and peers** (other engineers, hackathon partners, professors, fellow students) who arrive from a Devpost link, a GitHub profile, or a LinkedIn share. They want to read the work itself.

All three are technical or technical-adjacent. None of them need to be sold on "AI is important." None of them are looking for a tutorial.

## Product Purpose

A single-page portfolio for Ajinkya Gokule that does three things:

1. **Communicates depth and range in one scroll.** Software engineering, AI / multi-agent systems, security research, hackathon shipping, plus a real life outside the terminal (music, snowboarding, dancing).
2. **Reads as taste.** A CS / MS-AI student is a saturated category in 2026; the portfolio's job is to assert that this person makes deliberate, considered work, not just a lot of it.
3. **Converts to contact.** Resume download, email, GitHub, LinkedIn, Devpost — visible without scrolling, frictionless to act on.

Success looks like a recruiter or engineer thinking "this person has taste" within the first viewport, and "I want to talk to them" by the bottom of the page.

## Brand Personality

Three words: **deliberate, wide-ranging, shipping-mindset.**

Voice: confident without bravado. Specific over vague. Technical when the work is technical, warm when the writing is about people. First-person, not third. No corporate filler. No em dashes. No "passionate about." No "leveraged."

Emotional goal: the reader should feel they have met an actual person with a point of view, not a template populated with bullet points.

## Anti-references

This portfolio must not look like:

- The current dark-blue cyan/violet "AI engineer" template — gradient text on the name, hero-metric proof-points box, identical icon-title-text card grids, glassmorphic nav, neon accents on a navy background. This is the saturated category fingerprint. The redesign exists specifically to escape it.
- Any portfolio with a fake terminal hero, an "I am > a developer" typewriter effect, or a 3D cube/orb/floating-particles WebGL background.
- Editorial-magazine reflex on a non-magazine brief: display serif italic + ruled separator columns + drop caps + lowercase track-spaced metadata. That is the second-order training-data trap and it is not the right register for a software engineer.
- "Notion-page-as-portfolio" — a vertical stack of cards on a near-white background with the same rounded-rectangle treatment everywhere. Looks like a template export, not a designed surface.

## Design Principles

1. **Typography is the voice.** The portfolio carries personality through type, scale, and rhythm — not through illustrations, gradients, particle effects, or icon sets.
2. **Light, not dark.** Going light is the most direct break from the AI-portfolio template. Warm paper, near-black ink. Daylight, not 2am datacenter.
3. **One ink, used as punctuation.** A single saturated accent color appears in less than 8% of any viewport — for current-status, hover underlines, small marks. Restraint with a committed accent, not no accent.
4. **No cards, no icon triplets, no hero-metric box.** When something asks to become a card grid, find a different affordance: a list, a paragraph, a hairline-ruled row, a single asymmetric layout.
5. **Show, don't decorate.** The work is the proof. The site frames the work; it does not compete with it.

## Accessibility & Inclusion

- Target WCAG 2.1 AA. Body text and ink contrast ≥7:1 against paper; muted text ≥4.5:1; vermillion accent only used at sizes / weights where it clears 4.5:1 against paper, and never as the sole channel for meaning.
- Full keyboard navigation. Visible focus rings on every interactive element, in vermillion against paper.
- `prefers-reduced-motion` respected: the single coordinated entrance reveal collapses to opacity-only at zero duration when reduced motion is on.
- Real semantic HTML: one `<h1>`, sequential heading levels, `<nav>` / `<main>` / `<section>` / `<article>` / `<footer>`, descriptive link text (no "click here"), real `alt` attributes on every image.
- Mobile-first responsive. No information hidden behind hover. Tap targets ≥44px.
- Dyslexia / cognitive load: capped body line length 64–72ch, 1.6 line-height on body, generous spacing between sections. No animated text, no auto-rotating content.
