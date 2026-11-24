<!--
Sync Impact Report
Version change: 1.0.0 -> 1.1.0
Modified principles: five generic scaffold principles -> five petshop commercial principles
Added sections: Product and quality constraints; delivery and review workflow
Removed sections: none
Deferred items: ratification date is unknown and remains a TODO
-->

# Petshop Website Constitution

## Core Principles

### I. Business Purpose and Conversion
Every page, feature, and interaction MUST serve a defined customer need and a measurable
business outcome, such as a qualified contact, appointment, store visit, or purchase. The
primary conversion for each page MUST be clear, and important calls to action MUST be visible,
specific, and placed where customers can act without searching. Teams MUST remove functionality
that adds effort without improving customer value or business results.

### II. Immediate Credibility and Verifiable Trust
The first screen MUST identify the petshop, its location or service area, its core offer, and a
clear next step. Claims about expertise, care, safety, quality, or results MUST be supported by
visible proof such as real staff and facility information, verifiable credentials, transparent
policies, customer reviews, or genuine service details. The site MUST NOT rely on unsupported
claims, fabricated reviews, stock-like placeholder content, or trust badges without evidence.

### III. Mobile-First Clarity and Accessibility
Design and content MUST be planned for small screens first, then adapted to larger viewports.
Navigation, service information, contact options, forms, and conversion actions MUST remain
clear and usable on touch devices. All user-facing flows MUST support keyboard operation,
readable contrast, visible focus, meaningful labels, semantic structure, and alternatives for
non-text content. Accessibility is a release requirement, not a later enhancement.

### IV. Professional, Consistent, Useful Content and UI
Visual design MUST reinforce recognition, legibility, and confidence through consistent
typography, spacing, color, imagery, and interaction patterns. Aesthetic choices MUST support
content hierarchy and customer decisions; decoration MUST NOT obscure information or actions.
Content MUST be specific, accurate, useful, and written for the petshop's actual services and
customers. Vague, generic, invented, or placeholder-like copy and imagery MUST NOT be published.

### V. Clean Implementation and Sustainable Simplicity
Implementation MUST use clear naming, cohesive components, semantic HTML, and separation of
concerns appropriate to the project. Code MUST be readable, maintainable, and consistent with
the established stack and conventions. Teams MUST prefer the simplest implementation that
meets the requirement; hacks, duplicated logic, hidden coupling, and unnecessary dependencies
or abstractions MUST be removed or justified before acceptance. Performance and maintainability
are part of product quality.

## Product and Quality Constraints

- The site MUST be responsive and usable across common mobile, tablet, and desktop viewports.
- Each page MUST have a clear purpose, audience, information hierarchy, and primary action.
- Contact details, service area, hours, pricing guidance where available, and booking or
  response expectations MUST be accurate and easy to find.
- Local SEO MUST use accurate business name, address, phone, service-area, and opening-hour
  information. Pages MUST use descriptive titles, headings, crawlable links, and appropriate
  structured data only when it matches visible, verified content.
- Performance MUST be considered during design and implementation: optimize image dimensions
  and formats, avoid unnecessary scripts and dependencies, and prevent layout shifts that
  interfere with reading or action.
- No automated tests MUST be created or run for this project. Delivery review MUST instead
  include documented manual inspection of key journeys, responsive layouts, accessibility
  basics, links, contact paths, content accuracy, and browser errors.

## Delivery and Review Workflow

Before implementation, define the user problem and business result for each proposed feature.
During design and review, inspect the first screen, conversion paths, mobile layouts, and trust
evidence against these principles. Before delivery, a reviewer MUST confirm the page content is
real and accurate, primary actions work, semantic structure and accessibility basics are
present, local business data is consistent, and performance has no obvious avoidable regressions.
Any exception MUST state its reason, customer impact, owner, and plan to resolve it. A visually
polished result that is slow, confusing, inaccessible, or poor on mobile does not meet the
acceptance bar.

## Governance

This constitution governs product decisions, design, content, implementation, and review for
the petshop website. All specifications, plans, and delivery decisions MUST comply with it.
Amendments MUST update this document, explain the business or quality reason, and increment the
version using semantic versioning: MAJOR for incompatible changes to principles, MINOR for new
principles or material expansions, and PATCH for clarifications that do not change intent.
Every feature review MUST check the applicable principles and record any approved exception.
Complexity and exceptions MUST be justified in terms of customer value, business outcome, or
technical constraint.

TODO(RATIFICATION_DATE): Confirm the original adoption date; the repository has no prior date.
**Version**: 1.1.0 | **Ratified**: TODO | **Last Amended**: 2026-11-24
