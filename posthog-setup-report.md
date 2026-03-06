<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into your DevvEvent Next.js App Router project. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new): Initializes the PostHog JS SDK for the client side using the Next.js 15.3+ recommended approach. Configured with a reverse proxy path (`/ingest`), the EU PostHog host, automatic exception capture, and debug mode in development.
- **`next.config.ts`**: Added EU reverse proxy rewrites (`/ingest/*` → `https://eu.i.posthog.com`) and `skipTrailingSlashRedirect: true` to ensure PostHog requests are not blocked by ad blockers.
- **`.env.local`**: Created with `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.
- **`components/ExploreBtn.tsx`**: Added `'use client'` directive, PostHog import, and an `explore_events_clicked` capture event in the button's click handler.
- **`components/EventCard.tsx`**: Added `'use client'` directive, PostHog import, and an `event_card_clicked` capture event with rich properties (title, slug, location, date) on the card's click handler.
- **`components/Navbar.tsx`**: Added `'use client'` directive, PostHog import, and a `nav_link_clicked` capture event with `label` and `href` properties on all navigation links.

## Events instrumented

| Event name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicked the 'Explore Events' button on the homepage hero section | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on an event card to view event details. Includes event title, slug, location, and date. | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicked a navigation link in the top navbar. Includes the link label and href. | `components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics](https://eu.posthog.com/project/136653/dashboard/555286)
- **Insight**: [Event engagement trend](https://eu.posthog.com/project/136653/insights/vs3imOHs) — daily trend of event card and explore button clicks
- **Insight**: [Event discovery funnel](https://eu.posthog.com/project/136653/insights/gh5utSWP) — conversion from "Explore Events" click to event card click
- **Insight**: [Most clicked events](https://eu.posthog.com/project/136653/insights/OLaLNQAN) — breakdown of event card clicks by event title
- **Insight**: [Nav link popularity](https://eu.posthog.com/project/136653/insights/Ev1iY738) — breakdown of navbar clicks by link label
- **Insight**: [Daily active users browsing events](https://eu.posthog.com/project/136653/insights/8ThyC4yT) — unique users clicking event cards per day

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
