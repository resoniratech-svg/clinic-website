# We Care Homeopathy — Website Scaffold

A React + Vite + Tailwind starter for a multi-branch homeopathy clinic website,
mobile-responsive, styled with your logo's blue/red palette.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## What's included

- **Routing** (`react-router-dom`): Home, Treatments (all + by category + detail),
  Clinics (all + detail per branch), Blogs (list + detail), About, Contact, Pay Now.
- **Header**: sticky nav, desktop mega-menus for Treatments and Clinics, full mobile
  drawer with accordions, click-to-call, Book Appointment button.
- **Footer**: address, quick links, all clinics grouped by region, social icons.
- **Appointment modal**: Name / Phone / Email / Reason form, opens from the header
  button, hero CTA, and every treatment/clinic page. No backend wired yet — the
  submit handler just logs to console (see `src/components/AppointmentModal.jsx`).
- **Pay Now page**: Domestic (Razorpay-style) and International (PayPal-style) cards
  — drop your real payment links into the `href="#"` placeholders.
- **Floating WhatsApp + Call buttons**.
- **Data-driven content** — edit these three files to add/remove treatments, clinics,
  or blog posts; every page and menu updates automatically:
  - `src/data/treatments.js`
  - `src/data/clinics.js`
  - `src/data/blogs.js`

## Color tokens (from your logo)

| Token              | Hex       | Use                          |
|---------------------|-----------|-------------------------------|
| `brand-blue`         | #1857A6   | Primary buttons, links        |
| `brand-blueDeep`      | #0E3E7D   | Header utility bar, footer    |
| `brand-red`           | #D62027   | CTAs, accents                 |
| `brand-blueLight`     | #EAF2FC   | Soft backgrounds              |
| `brand-redLight`      | #FDEBEC   | Soft backgrounds              |
| `brand-ink`           | #24313D   | Body text                     |
| `brand-slate`         | #5B6B79   | Secondary text                |
| `brand-bg`            | #F7F9FC   | Section backgrounds           |

Defined in `tailwind.config.js` — change them there and the whole site updates.

## Next steps (when you're ready for a backend)

1. **Appointment form** → wire to an API route / email service (e.g. Resend, Nodemailer)
   or a CRM (Zoho, HubSpot).
2. **Payments** → replace the placeholder links in `PayNow.jsx` with real Razorpay
   Payment Links and a PayPal checkout link.
3. **Clinic maps** → drop a Google Maps embed into `ClinicDetail.jsx` and `Contact.jsx`.
4. **Blog content** → move `blogs.js` into a headless CMS (Sanity, Contentful) once
   you have more than a handful of posts.
5. **Logo** → drop your actual logo file into `src/assets/` and swap it in for the
   text+icon mark currently used in `Header.jsx` and `Footer.jsx`.
