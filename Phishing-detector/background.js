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
        return result.matches ? true : false;
    } catch (error) {
        console.error("Error checking URL:", error);
        return false;
    }
}

// Listen for tab updates and check the URL
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.url) {
        const isPhishing = await checkUrl(changeInfo.url);
        if (isPhishing) {
            chrome.notifications.create({
                type: "basic",
                iconUrl: "icon.png",
                title: "🚨 Phishing Alert!",
                message: `Warning! The URL ${changeInfo.url} is flagged as phishing.`,
                priority: 2
            });
        }
    }
});
