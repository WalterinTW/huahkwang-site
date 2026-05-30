# AGENTS.md

## Project identity

Project name: huah kwang site

This project is the main homepage / entry site for Huah Kwang Temple.

All naming must use `huah kwang`, not `huakuang`.

## Language version planning

This website may later expand into three language versions:

- Traditional Chinese
- English
- Simplified Chinese

Currently, only the Traditional Chinese version is maintained.

Do not hard-code Traditional Chinese as the only possible future version.

Do not create English or Simplified Chinese pages unless Walter explicitly asks.

Do not change the existing GitHub Pages or custom domain path structure while reserving future multilingual support.

The language switch should be reserved in the page header / top-right area so visitors can find it immediately.

The site is intended to become the central entry point that connects the existing and future Huah Kwang Temple pages.

Currently completed external pages:

- History page: https://walterintw.github.io/huahkwang-history-site/
- Vision page: https://walterintw.github.io/huahkwang-vision-page/

Future pages will include:

- 現在的華光寺
- 印度八大聖地介紹
- 交通與聯絡資訊
- 相關連結

------

## Project goal

Build a calm, dignified, responsive Traditional Chinese homepage for Huah Kwang Temple.

The homepage should introduce Huah Kwang Temple as a Buddhist monastery located in Shravasti, India, near Jetavana Grove.

The page should serve as a quiet and clear entry point for visitors to understand:

1. Where Huah Kwang Temple is.
2. Why its location is meaningful.
3. What the temple is currently trying to restore and continue.
4. Which pages are already available.
5. Which sections are being prepared.

This homepage should not feel like a commercial landing page, a fundraising campaign page, or an event promotion page.

It should feel like the entrance courtyard of a quiet Buddhist monastery website.

------

## Page role

`index.html` is the homepage of the Huah Kwang Temple main site.

The page should include:

1. Header / navigation
2. Hero section
3. Short introduction to Huah Kwang Temple
4. Main page entry cards
5. A section about the current restoration and responsibility
6. A site navigation overview
7. A preview section for the Eight Great Buddhist Sacred Sites of India
8. Closing section
9. Footer

------

## Main slogan

Use this as the main hero slogan:

在佛陀久住說法之地，重新安住一座道場

------

## Hero direction

The first version of this homepage should not use a large hero photo.

Instead, use a calm visual treatment such as:

- off-white / beige background
- subtle texture
- dharma wheel, temple, stupa, Bodhi leaf, stone, or earth-tone line motif
- simple geometric or Buddhist cultural visual inspiration
- elegant spacing
- restrained typography

A small abstract SVG motif may be created if useful.

Do not use a large photo wall or strong promotional image.

------

## Design reference

Use this site as visual inspiration only:

https://fagushan.ddm.org.tw/

Do not copy the source code or duplicate the layout exactly.

Capture these qualities instead:

- calm Buddhist cultural atmosphere
- dignified and restrained presentation
- clear navigation hierarchy
- readable Traditional Chinese typography
- elegant whitespace
- warm and stable visual rhythm
- temple-like feeling
- not commercial
- not flashy

------

## Design direction

Keywords:

- dignified
- serene
- restrained
- readable
- welcoming
- humble
- temple-like
- quiet
- long-term
- culturally grounded

Preferred color feeling:

- off-white
- beige
- light stone
- warm gray
- muted wood tones
- earth tones
- restrained gold-brown accents
- muted deep red only if needed

Avoid:

- flashy animations
- strong commercial marketing feeling
- overly bright color blocks
- decorative fonts that reduce readability
- cluttered layouts
- overly modern tech-startup style
- exaggerated religious claims
- hero-style personal promotion
- copying the reference site too literally

------

## Tone and writing style

All visible content should be in Traditional Chinese.

The tone should be:

- simple
- calm
- sincere
- low-key
- respectful
- easy to understand
- suitable for modern Buddhist visitors
- not overly ornate
- not overly academic

Avoid:

- exaggerated praise
- aggressive fundraising language
- hero worship
- unsupported historical claims
- doctrinal claims not provided in the content structure
- too many slogans

The page should emphasize:

- 聖地傳承
- 現代佛子的接引
- 道場重新安住
- 長遠護持
- 宗教、教育、慈善的穩定發展
- 在因緣中承擔，而不是個人英雄敘事

------

## Site structure

Expected project structure:

- `index.html`
- `AGENTS.md`
- `content_manifest.md`
- `image_mapping.md`
- `assets/css/style.css`
- `assets/js/script.js`
- `assets/images/`
- `assets/icons/`

Optional generated visual assets:

- `assets/icons/dharma-wheel.svg`
- `assets/icons/temple-line.svg`
- `assets/images/hero-pattern.svg`

Keep the site simple and beginner-friendly.

------

## Content source of truth

Use these files as the source of truth if they exist:

- `content_manifest.md`
- `image_mapping.md`

Do not invent extra doctrinal claims, historical facts, biographies, or detailed project information beyond what is provided.

If a section is not yet completed, mark it gently as:

- 籌備中
- 整理中
- 即將開放

Do not pretend unfinished pages are complete.

------

## Current homepage links

Use these completed page URLs:

History page:

https://walterintw.github.io/huahkwang-history-site/

Vision page:

https://walterintw.github.io/huahkwang-vision-page/

The Eight Great Sacred Sites page is not yet completed. Leave it as a coming-soon / preparing section for now.

------

## Required homepage sections

### 1. Header / Navigation

Include:

- 華光寺 Huah Kwang Temple
- 首頁
- 歷史沿革
- 華光寺願景
- 現在的華光寺
- 印度八大聖地
- 交通與聯絡

Completed links should be active.

Unfinished sections may link to internal anchors on the homepage or display as preparing / coming soon.

------

### 2. Hero section

Main slogan:

在佛陀久住說法之地，重新安住一座道場

Subtitle:

華光寺位於印度舍衛城，鄰近祇樹給孤獨園。
在這片佛陀長年說法、僧團安住的聖地旁，華光寺正於因緣中逐步整建，願成為現代佛子親近聖地、學習佛法、安住身心的一處道場。

Primary buttons:

- 認識華光寺
- 閱讀華光寺願景

Button links:

- 認識華光寺 → https://walterintw.github.io/huahkwang-history-site/
- 閱讀華光寺願景 → https://walterintw.github.io/huahkwang-vision-page/

------

### 3. Huah Kwang Temple introduction

Title:

華光寺，是佛陀聖地旁的一座漢傳佛教道場

Suggested text:

舍衛城是佛陀一生中長年駐錫說法的重要地區，祇樹給孤獨園更是許多佛典開展的所在。華光寺座落於這片聖地因緣中，承載著漢傳佛教對印度佛教聖地的敬重、守護與回應。

今日的華光寺，正在重新整建與恢復。這不只是建築工程，也是一份讓道場能夠重新安住僧眾、接引信眾、服務當地、連結現代佛子的長遠承擔。

------

### 4. Main entry cards

Create three main cards:

#### Card 1: 歷史沿革

Status: 已完成

Link:

https://walterintw.github.io/huahkwang-history-site/

Text:

從創建因緣、歷史背景，到多年荒廢與重新整建，華光寺的歷史不是一段熱鬧的故事，而是一段在聖地中長久等待、守護與承擔的過程。

Button:

閱讀歷史沿革

#### Card 2: 華光寺願景

Status: 已完成

Link:

https://walterintw.github.io/huahkwang-vision-page/

Text:

華光寺的未來，不只是建築重建，而是希望從宗教弘法、社會慈善、教育發展三個方向，讓佛法在聖地旁重新落實於修行與生活。

Button:

閱讀華光寺願景

#### Card 3: 印度八大聖地介紹

Status: 整理中，即將開放

Text:

從藍毗尼園、菩提伽耶、鹿野苑，到舍衛城、王舍城、僧伽施、毘舍離與拘尸那羅，八大聖地不只是歷史地點，也是一條引導現代佛子理解佛陀一生與修行道路的線索。

Button:

即將開放

This button may be disabled or link to the Eight Sacred Sites preview section on this homepage.

------

### 5. Responsibility / restoration section

Title:

在因緣中承擔，在聖地中守候

Suggested text:

華光寺緊鄰佛陀久住說法的祇樹給孤獨園，這座道場的重新整建，是在因緣成熟中逐步承接的法務。面對印度佛教聖地的現況，以及聖地道場維繫不易的現實，華光寺的恢復不以個人作為為重，而是希望依著在印度修行、弘法與長期觀察所累積的經驗，讓道場重新安住於本分之中。

若這座道場能逐步恢復，未來能讓僧眾安住、信眾朝禮、青年學習、當地民眾受益，便是對佛陀聖地最實際的守護。

Design note:

This section should be humble and quiet. Do not make it a personal hero section.

------

### 6. Site navigation overview

Title:

從這裡，逐步認識華光寺

Include six navigation blocks:

1. 歷史沿革
   Status: 已完成
   Link: https://walterintw.github.io/huahkwang-history-site/
2. 現在的華光寺
   Status: 籌備中
   Description: 組織、常住法師、華光寺使命、寺院環境與設施、活動介紹等內容將陸續整理。
3. 華光寺願景
   Status: 已完成
   Link: https://walterintw.github.io/huahkwang-vision-page/
4. 印度八大聖地介紹
   Status: 整理中，即將開放
   Description: 未來將整理佛陀一生重要聖地與朝禮意義。
5. 交通與聯絡資訊
   Status: 籌備中
   Description: 未來提供參訪、交通、聯絡方式等資訊。
6. 相關連結
   Status: 籌備中
   Description: 未來整理與華光寺、佛教聖地、法鼓山相關的重要連結。

------

### 7. Eight Great Sacred Sites preview

Title:

從華光寺，走近佛陀一生的足跡

Text:

華光寺所在的舍衛城，是佛陀弘法生命中極重要的一站。從佛陀誕生、成道、初轉法輪，到長年說法與最後涅槃，印度八大聖地不只是朝禮地點，也是一條幫助現代佛子重新理解佛陀一生與修行道路的路徑。

List:

1. 藍毗尼園：佛陀誕生
2. 菩提伽耶：佛陀成道
3. 鹿野苑：初轉法輪
4. 王舍城與靈鷲山：早期弘法與僧團形成
5. 舍衛城與祇樹給孤獨園：長年說法
6. 僧伽施：佛陀自忉利天下降
7. 毘舍離：宣告即將涅槃與重要因緣
8. 拘尸那羅：佛陀涅槃

Status text:

八大聖地介紹頁整理中，即將開放。

------

### 8. Closing section

Title:

願這座聖地道場，成為更多人親近佛法的因緣

Text:

華光寺的恢復，需要時間，也需要許多善因善緣共同成就。願這座位於佛陀聖地旁的道場，能在穩定、樸素而長遠的努力中，重新成為修行、弘法、教育與慈善的所在。

Buttons:

- 閱讀歷史沿革
- 閱讀華光寺願景

------

### 9. Footer

Include:

華光寺 Huah Kwang Temple
印度舍衛城．祇樹給孤獨園附近

Footer links:

- 歷史沿革
- 華光寺願景
- 印度八大聖地介紹（即將開放）
- 交通與聯絡資訊（籌備中）

Copyright:

© Huah Kwang Temple. All rights reserved.

------

## Path rules

This site will be deployed on GitHub Pages.

Therefore:

- Use relative paths for local assets.
- Do not use root-absolute paths like `/assets/...`.
- CSS path from root page: `assets/css/style.css`
- JS path from root page: `assets/js/script.js`
- Image paths from root page: `assets/images/...`
- Icon paths from root page: `assets/icons/...`

External page URLs may use full GitHub Pages URLs.

All local links and assets must be GitHub Pages safe.

------

## Implementation constraints

- Static site only.
- No backend.
- No framework required.
- Plain HTML/CSS/JS preferred.
- Keep code beginner-friendly.
- Keep folder structure simple.
- Do not add unnecessary build tools.
- Do not add dependencies unless explicitly requested.
- The page should work by opening `index.html` locally and also through GitHub Pages.

------

## Typography and layout

- Prioritize readability in Traditional Chinese.
- Use semantic HTML.
- Maintain clear heading hierarchy.
- Use generous spacing between sections.
- Support desktop and mobile well.
- Avoid dense text blocks.
- Avoid cluttered card layouts.
- Use calm section dividers if helpful.
- Use accessible contrast.

------

## JavaScript

JavaScript should be minimal.

Possible uses:

- mobile navigation toggle
- smooth scroll for internal anchors
- subtle reveal effect only if restrained and not distracting

Avoid complex animation.

The site must still be usable if JavaScript fails.

------

## What done means

The task is complete only if:

1. `index.html` renders correctly.
2. `assets/css/style.css` exists and is linked correctly.
3. `assets/js/script.js` exists and is linked correctly.
4. Local assets use relative paths.
5. The two completed external links work:
   - https://walterintw.github.io/huahkwang-history-site/
   - https://walterintw.github.io/huahkwang-vision-page/
6. Unfinished pages are clearly marked as 籌備中 / 整理中 / 即將開放.
7. The homepage is responsive on desktop and mobile.
8. Traditional Chinese text is readable and well-spaced.
9. The visual tone matches a calm, dignified, temple-like website.
10. No `huakuang` spelling appears anywhere in new files, comments, visible text, or guidance.
11. The page is ready for GitHub Pages deployment.

------

## Before finishing

Please verify:

- no broken local paths
- no broken CSS / JS references
- no root-absolute asset paths
- no accidental `huakuang` spelling
- no unfinished sections presented as completed
- no unsupported historical or doctrinal claims added
- no flashy animation or commercial layout feeling
- desktop and mobile layouts both work
