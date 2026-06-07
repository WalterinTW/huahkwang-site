# huahkwang-site

## 專案名稱
華光寺首頁

## 網站用途
本專案是華光寺網站系統的主首頁，用於提供寺院簡介、主要分頁導覽、聯絡表單與後續各子網站入口。

## 主要檔案結構

```text
huahkwang-site/
├─ index.html
├─ CNAME
├─ assets/
│  ├─ css/style.css
│  ├─ js/script.js
│  ├─ icons/
│  └─ images/
├─ image_mapping.md
└─ content_manifest.md
```

## 本地預覽方式
可直接在瀏覽器開啟 `index.html`，或在本專案目錄執行：

```bash
python3 -m http.server
```

再到瀏覽器開啟 `http://localhost:8000/`。

## Playwright 網頁檢查

本專案使用 Playwright 做基本的視覺與功能檢查。測試會自動啟動本機 server，使用 `http://127.0.0.1:4173/` 載入網站，不使用 `file://`。

第一次使用請先安裝 npm 套件與 Playwright 瀏覽器：

```bash
npm install
npx playwright install chromium
```

執行基本檢查：

```bash
npm run test:visual
```

開啟有畫面的瀏覽器模式，方便觀察互動：

```bash
npm run test:visual:headed
```

查看 HTML 測試報告：

```bash
npm run show-report
```

測試會檢查：

- 首頁可正常載入。
- desktop viewport：`1440x900`。
- mobile viewport：`390x844`。
- 沒有水平 overflow。
- 主要導覽連結可點，且 href 保持正確。
- 重要圖片有正常載入。
- console 沒有 error。
- 產生 desktop 與 mobile screenshot，位置在 `test-results/screenshots/`。

## 維護注意事項
- `CNAME` 與 GitHub Pages 部署設定相關，修改前請確認正式網域需求。
- 聯絡表單目前記錄於 `content_manifest.md`，正式上線前需確認收件信箱。
- 不要提交 `.DS_Store` 等作業系統暫存檔。
- 修改 HTML / CSS / JS 後，請優先執行 `npm run test:visual`，並查看 desktop 與 mobile 截圖。
