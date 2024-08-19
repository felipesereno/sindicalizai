document.addEventListener("DOMContentLoaded", function() {
    // Function to fetch and display the RSS feed
    function fetchRSSFeed() {
        const rssFeedUrl = '/feed.xml';
        fetch(rssFeedUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, "application/xml");
                displayFeed(xmlDoc);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    // Function to display the feed content
    function displayFeed(xmlDoc) {
        const items = xmlDoc.getElementsByTagName("item");
        let htmlContent = '';
        for (let i = 0; i < items.length; i++) {
            const title = items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
            const link = items[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
            const description = items[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
            htmlContent += `
                <div class="feed-item">
                    <h3><a href="${link}" target="_blank">${title}</a></h3>
                    <p>${description}</p>
                </div>
            `;
        }
        document.getElementById("feed").innerHTML = htmlContent;
    }

    // Fetch and display the RSS feed on page load
    fetchRSSFeed();
});
