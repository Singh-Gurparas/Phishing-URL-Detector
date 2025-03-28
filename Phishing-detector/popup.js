const API_KEY = "AIzaSyD1u9Gxa3x-co-IwbZrtCCtbEtI0MdAjIw"; // Replace with your actual API Key

async function checkUrl(url) {
    const apiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`;
    const payload = {
        client: { clientId: "phishing-detector", clientVersion: "1.0" },
        threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [{ url: url }]
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
        });

        const result = await response.json();
        return result.matches ? "🚨 Phishing URL Detected!" : "✅ Safe URL.";
    } catch (error) {
        return "⚠️ Error checking URL.";
    }
}

// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    const checkBtn = document.getElementById("checkBtn");
    if (!checkBtn) {
        console.error("❌ ERROR: Button #checkBtn not found! Check your popup.html.");
        return;
    }

    checkBtn.addEventListener("click", async () => {
        let url = document.getElementById("urlInput").value;
        if (!url) {
            document.getElementById("result").textContent = "⚠️ Please enter a URL!";
            return;
        }

        document.getElementById("result").textContent = "🔍 Checking...";
        let result = await checkUrl(url);
        document.getElementById("result").textContent = result;
    });
});
