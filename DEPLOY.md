# KDRPics — Deployment Guide

## What You've Got

A fully custom photography portfolio site with:
- Beautiful hero slideshow (auto-populates with your photos)
- Masonry photo grid with lightbox viewer
- Password-protected admin panel at `/admin/`
- Your relative can add/remove photos with zero coding

---

## Step 1 — Create a GitHub Account (if needed)
Go to https://github.com and create a free account.

## Step 2 — Create a New Repository
1. Click the **+** icon → **New repository**
2. Name it: `kdrpics`
3. Set it to **Public**
4. Click **Create repository**

## Step 3 — Upload the Site Files
On the repository page, click **uploading an existing file** and upload ALL the files from this zip, keeping the folder structure intact.

Or if you're comfortable with Git:
```
git init
git add .
git commit -m "Initial site"
git remote add origin https://github.com/YOUR_USERNAME/kdrpics.git
git push -u origin main
```

## Step 4 — Deploy on Netlify
1. Go to https://netlify.com → Sign up free (use your GitHub account)
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub** → select your `kdrpics` repo
4. Build settings will auto-detect. Hit **Deploy site**
5. Your site goes live at something like `random-name.netlify.app`

## Step 5 — Enable Identity (for admin login)
1. In Netlify dashboard → **Site configuration** → **Identity**
2. Click **Enable Identity**
3. Under **Registration**, set to **Invite only**
4. Scroll to **Services** → **Git Gateway** → click **Enable Git Gateway**
5. Go to **Identity** tab → **Invite users** → enter your relative's email
6. They'll get an email to set a password

## Step 6 — Connect a Custom Domain (optional)
1. In Netlify → **Domain management** → **Add custom domain**
2. Enter `kdrpics.com`
3. Follow the DNS instructions (update nameservers at GoDaddy to point to Netlify)

---

## How Your Relative Adds Photos

1. Go to `https://your-site.netlify.app/admin/`
2. Log in with their email/password
3. Click **Gallery Photos** → **New Photo**
4. Upload photo, add optional title/category
5. Click **Publish** — photo appears on the site within ~30 seconds

## How to Remove a Photo

1. Go to `/admin/` → **Gallery Photos**
2. Click the photo entry
3. Click the **Delete** button
4. Publish — it's gone

---

## Customizing the Site

- **Email address**: Edit `index.html` and change `hello@kdrpics.com`
- **About text**: Edit the About section in `index.html`
- **Colors**: Edit the CSS variables at the top of `index.html` under `:root`

That's it. No servers to maintain, no WordPress to update, no hosting fees beyond a domain name.
