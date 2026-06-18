# ConnectEdApp

> Flagship product. Source of truth for `src/components/CaseStudy.tsx` and the
> ConnectEdApp entry in `Projects.tsx`. Content layer:
> `src/content/case-study.ts`.

| Field    | Value                                                                      |
| -------- | -------------------------------------------------------------------------- |
| Role     | Founder · Product Manager · Full Stack Engineer · Sales · Customer Success |
| Duration | 2020 — 2022                                                                |
| Status   | Launched (Google Play Store)                                               |
| Accent   | `#EC4899`                                                                  |

## Overview

ConnectEdApp is an education communication platform connecting schools,
teachers, parents, and students — real-time announcements, academic updates,
fees, and media sharing. It was built and run **solo from zero to launch**: I
was the founder, product manager, full-stack engineer, salesperson, and customer
success team. It is the single project that best explains who I am as an
engineer: someone who understands the buyer, not just the build.

---

## Problem

In the schools I was selling to, parent–school communication ran on whatever was
cheapest and closest to hand:

- **Paper circulars** that never reached half the parents and couldn't be
  searched, tracked, or acknowledged.
- **Ad-hoc WhatsApp groups** per class — noisy, unofficial, impossible for the
  school to administer, and a privacy liability (every parent's number exposed
  to every other parent).
- **No single source of truth** for attendance, announcements, fee status, exam
  results, or homework. Each lived in a different register, app, or teacher's
  head.

The result was slow coordination, lost information, and parents who only heard
about a problem (a missed fee, a falling grade, a closed school day) after it was
too late to act. For the school, every channel was a support burden and none of
them produced a record.

## Discovery

I didn't discover this problem from a market report — I discovered it from the
field. Coming out of a business-development role, I was already in front of
school administrators, and the same complaints surfaced in conversation after
conversation: "parents say they never got the notice," "we can't manage these
WhatsApp groups," "we have no way to know who's actually seen this."

That gave me three things a cold founder never has:

1. **Direct access** to the exact buyer (principals and administrators).
2. A **repeatable, specific pain** described in the customer's own words.
3. The vocabulary to talk about it as a _business_ problem (cost, trust,
   liability), not a software feature.

## Validation

Before writing serious code, I tested whether the pain was real, urgent, and
worth paying for. I went back to administrators and teachers and asked them to
walk me through their actual day — how a notice goes out, what happens when a fee
is late, how exam results reach a parent. I was validating three hypotheses:

- **Real:** does this cost them time/money/trust today? (Yes — repeatedly.)
- **Urgent:** is it a top-of-mind problem or a nice-to-have? (Top-of-mind during
  fee cycles and exams.)
- **Payable:** would the school, not the parent, pay to fix it? (Yes — the school
  owns the relationship and the liability.)

Only after the same answers came back from multiple, independent schools did I
commit to building. That single discipline — **validate the buyer before the
build** — is the decision I'm proudest of, because it's the one most engineers
skip.

## Product Design

I designed around the workflows administrators described, not around what was
easiest to build. The product centered on a few high-frequency jobs:

- **Announcements** — a school broadcasts once; every targeted parent gets a
  push notification and a permanent, searchable record with read receipts.
- **Academic updates** — attendance, homework, and results attached to the right
  student, visible to the right parent.
- **Media sharing** — event photos and documents, stored properly instead of
  compressed into a chat thread.
- **Roles** — school admin, teacher, parent, and student each see a different
  surface of the same data.

Decisions were **mobile-first** because parents live on their phones, and the web
dashboard was for the school side (bulk actions, roster management) where a
keyboard and a big screen matter. I deliberately kept the first version narrow:
nail communication, earn trust, then expand.

## Architecture

A single person had to own web, mobile, and backend, so the architecture
optimized for **one developer's leverage** — shared contracts, managed
infrastructure, and as little undifferentiated ops work as possible.

- **React Native mobile app** (parents/students/teachers) + **React web
  dashboard** (school admins), sharing a single API and types.
- **Node.js + Express + GraphQL** backend — GraphQL let the two very different
  clients fetch exactly the shape each screen needed without a forest of REST
  endpoints, which mattered enormously when one person maintained both clients.
- **Firebase** for authentication and push notifications — buying managed auth +
  FCM instead of building it was the right call for a solo founder racing to
  validation.
- **Cloudinary** for media storage and on-the-fly transformation (thumbnails,
  responsive images) so the app stayed fast on low-end phones.
- **Socket.IO** for real-time announcement/message delivery on top of the
  request/response API.

The guiding principle: **buy the commodity, build the differentiator.** Auth,
media, and notifications were bought; the data model and the school-specific
workflows were built.

## Launch

I shipped it to the real world — published the app on the **Google Play Store**
and put it into the hands of actual schools, not a demo on my laptop. Launching
publicly forced a discipline that side projects never get: real release builds,
store review, crash handling on devices I'd never seen, and onboarding for users
who had never been asked to install "their school's app" before.

## Customer Acquisition

Acquisition was high-touch and in person, because that's how trust is built in
this market:

- I **visited 50+ schools** for in-person discovery and onboarding.
- I treated each school as a design partner — watching staff use the product,
  noting where they hesitated, and folding that back into the roadmap.
- The wedge was always the **administrator**: win the principal's trust, and the
  school brings the parents and students with it. This is a classic
  top-down/B2B2C motion, and recognizing that early shaped both the product
  (admin-first) and the sales process.

## Sales Process

I personally **presented and demoed to 100+ school administrators**. The sales
motion taught me things engineering never would:

- **Translate capability into value.** A non-technical buyer doesn't care about
  GraphQL or real-time sockets; they care that "every parent gets the notice and
  you can prove they saw it." Every feature had a one-sentence business framing.
- **Handle objections live.** Cost, change-management ("our teachers won't use
  it"), and data trust came up every time. I learned to pre-empt them in the
  demo instead of defending after.
- **Sell the record, not the feature.** The durable value wasn't messaging —
  WhatsApp does messaging. It was the _accountable, searchable record_ a school
  could stand behind.

## Lessons Learned

### Founder lessons

- **Validate before you build.** Talking to the buyer first saved me from
  building features nobody would pay for.
- **Distribution is the hard part.** Building the product was the easy 30%; the
  hard 70% was trust, onboarding, and getting humans to change a habit.
- **Proximity to the customer is an unfair advantage for an engineer.** I could
  ship a fix the same week a principal complained, because I _was_ the loop.

### Product lessons

- **Narrow and trusted beats broad and ignored.** Doing communication
  excellently mattered more than doing ten things adequately.
- **Design for the workflow, not the org chart.** The product fit because it
  matched how staff actually worked, not how the brochure said schools work.
- **The buyer and the user are different people.** The admin buys; the parent
  uses. Both had to be happy, and optimizing for only one would have failed.

### Technical lessons

- **Buy commodity infrastructure; build the differentiator.** Firebase auth,
  Cloudinary, and FCM let one person ship a multi-platform product.
- **A typed, shared contract (GraphQL) is leverage** when you maintain multiple
  clients alone.
- **Operate what you ship.** Store releases, crash reports, and real low-end
  devices taught me more about reliability than any local test ever did.

## Why It Matters

ConnectEdApp is why I describe myself as an engineer who understands the
business. I didn't just write the code — I found the problem, validated it,
designed the product, built the full stack, launched it, sold it, and iterated on
real feedback. That end-to-end ownership — **idea → validation → design →
engineering → launch → sales → iteration** — is rare, and it's the lens I now
bring to every system I build: start from the customer and the outcome, then work
back to the architecture.

## Screenshots Location

`public/projects/connectedapp/` _(to be added — see
[`../portfolio/assets-plan.md`](../portfolio/assets-plan.md))_

## Future Improvements

- Analytics dashboard for administrators (read-rates, fee-collection funnels).
- Multi-language support for wider school adoption.
- Offline-first sync for low-connectivity regions.
