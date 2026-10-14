# Ornicha Boonkratoke Portfolio

A bilingual static portfolio for **Miss Ornicha Boonkratoke / Ant**. The Thai version is the default entry point; the English version is available from the language switcher in the header.

## Pages

Both languages include five separate pages: Home, Education, Portfolio, Activity, and Contact. Every page includes the same footer. The root `index.html` redirects to `th/index.html`.

## Edit your content

The easiest file to edit is `assets/content.js`:

- Replace `assets/profile.png` (or `.jpg`/`.jpeg`) with your photo, and `assets/p1`–`p6` with project images (png or jpg, both work). Add `assets/cover.jpg` or `cover.png` for the big cover behind the Home page.
- Replace `Link1` through `Link6` in `projectLinks` with real URLs. The links are shown on the Portfolio page.
- Update social links in `socials` if usernames change.

## Add project PDFs

Put PDFs inside `assets/projects/` and change a project link in `assets/content.js` to a relative path such as `assets/projects/my-game.pdf`. If your hosting setup needs the link to begin from the project root, use `../assets/projects/my-game.pdf` from the HTML page or use a full GitHub/Behance URL. For a cleaner edit, you can also replace the six project `<a>` URLs directly in `th/portfolio.html` and `en/portfolio.html`.

## Contact form

The form uses the Web3Forms endpoint and the access key supplied in the brief. Test it after deployment. If the key is rotated, replace the hidden `access_key` value in both contact pages.

## Run locally

From this folder, run a simple static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy

**GitHub Pages:** create a repository, upload the contents of this folder, and enable Pages from the repository's Settings → Pages. Use the root of the default branch.

**Netlify:** drag this folder into Netlify Drop, or connect the GitHub repository. No build command is required; publish directory is `.`.

**Vercel:** import the GitHub repository, choose “Other” / static site, leave the build command blank, and set the output directory to `.`.

## AI Use Declaration

`AI-USE-DECLARATION.md` is an editable draft of the report requested by the course brief. Open it, add screenshots of your final pages and the actual prompts you used, then export it as PDF before submission.

## Activity page, background and theme

- **Activity:** pictures are `assets/a1.png` … `a4.png` (or .jpg), picked up automatically. Edit year, tag, title and description directly in `th/activity.html` and `en/activity.html` (look for the `ACTIVITY n` comments).
- **Fixed background:** optional `assets/bg.jpg` or `assets/bg.png` stays still behind every page. Without it you get an animated aurora background that follows the mouse a little.
- **Light/dark:** the sun/moon button in the header; the choice is remembered.
