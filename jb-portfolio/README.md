# Jonathan Bonamarte — GitHub Pages Starter

## Deploy
1. Create a GitHub repo named `YOUR-USERNAME.github.io` (exactly your GitHub username).
2. Upload these files to the repo root (`/`).
3. Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: main → Folder: /(root).
4. After a minute, your site appears at https://YOUR-USERNAME.github.io

## Custom Domain (GoDaddy)
- This starter includes a `CNAME` file set to `www.jonathanbonamarte.com`.
- In GoDaddy DNS, add a **CNAME**: host `www` → `YOUR-USERNAME.github.io`
- (Optional) Make the apex `jonathanbonamarte.com` forward to `https://www.jonathanbonamarte.com` OR add A records per GitHub Docs (check current IPs).
- Back in GitHub → Settings → Pages, add your custom domain and **Enforce HTTPS** once available.

## Content
- Replace images in `/assets/...` and update text in the HTML files.
- Project pages live in `/projects/`. Each page has a 6‑image gallery with a simple lightbox.
- Add your resume PDF as `/assets/Jonathan_Bonamarte_Resume.pdf` (or edit index button).

## Contact Form
- Edit `/contact.html` form action for Formspree (or switch to Netlify Forms if deploying on Netlify).

## Instagram
- Replace images in `/assets/instagram/` (each has a full and a `_thumb` version). Thumbnails should be smaller for quick loads.
