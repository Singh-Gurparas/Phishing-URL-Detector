# 🛡️ Phishing URL Detector

A lightweight yet powerful Python-based Phishing URL Detection Tool that analyzes URLs using feature-based heuristics and machine learning to identify potential phishing attempts.

---

## 🚀 Features

- 🔍 Detects phishing links based on URL patterns and red flags  
- 🔒 Built with cybersecurity best practices  
- 🧪 Test mode with phishing datasets  
- 📊 Optionally export results as CSV or JSON  

---

## 📸 Screenshots


---

## 🛠️ How It Works

The tool extracts a set of features from a given URL such as:

- Presence of `@`, `//`, or IP-based URLs
- URL length and depth
- Presence of suspicious TLDs or domains
- HTTPS usage and SSL certificate validity
- Redirection count
- Domain age (via WHOIS)

These features are then used to:
- Flag basic phishing heuristically, or
- Predict using a trained machine learning model (optional)

---

## 🔧 Requirements

- Python 3.7+
- `requests`
- `scikit-learn`
- `pandas`
- `tldextract`
- `joblib`
- `colorama` (for CLI coloring)

Install all dependencies:

```bash
pip install -r requirements.txt
