# 🛡️ Phishing URL Detector (Chrome Extension)

A lightweight Chrome Extension that helps users detect potentially malicious or phishing URLs using Google's Safe Browsing API.

---

## ⚙️ Features

- 🔐 **Real-time URL scanning** using the Google Safe Browsing API  
- 🧠 Detects **phishing**, **malware**, and **unwanted software** URLs  
- 💬 **User-friendly interface** with visual alerts (Safe, Phishing, or Error)  
- 💡 Fully **client-side** — no backend required

---

## 🧩 How It Works

1. User enters a URL into the popup.
2. The extension sends the URL to the **Google Safe Browsing API**.
3. The API returns whether the URL is safe or flagged as malicious.
4. The result is displayed instantly in the extension popup.

---

## 🛠️ Installation

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/phishing-detector-extension.git
```

Or simply download the ZIP and extract it.

---

### 2. Add to Chrome

1. Open Chrome and go to: `chrome://extensions/`  
2. Enable **Developer Mode** (toggle in the top right)  
3. Click **Load unpacked**  
4. Select the extracted project folder

---

### 3. Add Your Google API Key

1. Open `popup.js` in a text editor  
2. Replace the following line:

```js
const API_KEY = "API_KEY";
```

with your actual [Google Safe Browsing API key](https://developers.google.com/safe-browsing/v4/get-started)

---

## 📸 Demo

_Add screenshots or a screen recording of your extension in action here._

