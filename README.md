# Birthday sky

A small, private birthday website: a night sky with a message, video memories, poems with music, a star room, and fireworks. Plain HTML, CSS and JavaScript. No build step.

## Files
- `index.html` structure
- `style.css` look and animations
- `config.js` **the file you edit**: names, message, 18 video links, 12 poems and their music, credits
- `script.js` behavior (stars, constellations, fireworks, rooms, music)
- `audio/` your music files

## Edit
- Names and message: top of `config.js`. `{first}`, `{middle}`, `{last}`, `{full}`, `{me}`, `{meFull}` fill in automatically.
- Videos: paste each YouTube (Unlisted) link into `url`. Empty ones show "still waking up".
- Poems: each has `title`, `music` and `lines`. An empty string `""` is a stanza break.
- Music: put each file in `audio/` and match the `music` path, e.g. `audio/poem-01.mp3`. Use `music: ""` for no music. Keep each file under about 10 MB (a 128 kbps mp3 is roughly 1 MB per minute).

## Try it
Open `index.html` in a browser. If music will not play from a double-click, run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Put it on GitHub
```
git init
git add .
git commit -m "Birthday sky"
git branch -M main
git remote add origin https://github.com/YOUR-NAME/birthday-sky.git
git push -u origin main
```
To make a link: repo Settings > Pages > deploy from branch `main`, folder `/ (root)`. The link appears after a minute or two.

## Privacy: please read
- A **public** repo exposes your poems, message, video links and music files to anyone, and the site link works for anyone who has it.
- Prefer a **private** repo. GitHub Pages on private repos depends on your plan; if it is not available, Netlify or Cloudflare Pages can host a private repo's files.
- Songs you do not own may be taken down if hosted publicly. For a private gift this is much less of a concern.
- Keep the YouTube videos Unlisted.

## Credits
Sky effects inspired by CodePen pens from Sara Zondervan, Yusuke Nakaya, Caleb Miller, bob6664569 and Thibka.
