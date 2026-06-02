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

## 維護注意事項
- `CNAME` 與 GitHub Pages 部署設定相關，修改前請確認正式網域需求。
- 聯絡表單目前記錄於 `content_manifest.md`，正式上線前需確認收件信箱。
- 不要提交 `.DS_Store` 等作業系統暫存檔。
