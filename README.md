🛡️ Phishing URL Detector (Chrome Extension)
A lightweight Chrome Extension that helps users detect potentially malicious or phishing URLs using Google's Safe Browsing API.

⚙️ Features
🔐 Real-time URL scanning using the Google Safe Browsing API.

🧠 Detection of phishing, malware, and unwanted software URLs.

💬 User-friendly interface with visual alerts (Safe, Phishing, or Error).

💡 Client-side only — no backend required.

🧩 How It Works
User enters a URL into the popup.

The extension sends the URL to the Google Safe Browsing API.

The API returns whether the URL is safe or flagged as malicious.

The extension displays the result instantly.

🛠️ Installation
1. Clone or Download
bash
Copy
Edit
git clone https://github.com/yourusername/phishing-detector-extension.git
Or simply download as ZIP and extract.

2. Add to Chrome
Open Chrome and navigate to chrome://extensions/.

Enable Developer Mode (top right).

Click Load unpacked and select the project folder.

3. Add Google API Key
Open popup.js.

Replace const API_KEY = "API_KEY" with your Google Safe Browsing API key.

Get your API key here: https://developers.google.com/safe-browsing/v4/get-started
