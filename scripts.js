/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

// This is an array of various PC parts
let computerPartData = {
    "CPU": [],
    "GPU": [],
    "HDD": [],
    "RAM": [],
    "SSD": [],
    "USB": []
};

// This will load the data from the various JSON files
function loadData() {
    const categories = Object.keys(computerPartData);
    let promises = categories.map(category => {
        return fetch(`computer_part_data/${category}_UserBenchmarks.json`)
            .then(response => response.json())
            .then(data => {
                computerPartData[category] = data;
                console.log(`Loaded ${data.length} items for ${category}`);
            });
    });

    Promise.all(promises).then(() => {
        console.log('All data loaded');
        showHome(); // Call showHome here to ensure it executes after data is loaded
    }).catch(error => console.error('Error loading some data:', error));
}

// This function adds cards the page to display the data in the array
function showCards(data) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear the existing items in the container

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";

        const cardContent = document.createElement("div");
        cardContent.className = "card-content";

        const cardHeader = document.createElement("h2");
        cardHeader.textContent = `${item.Brand} ${item.Model}`; // Use 'Brand' and 'Model'

        const detailsList = document.createElement("ul");

        const partNumber = document.createElement("li");
        partNumber.textContent = `Part Number: ${item['Part Number'] || "N/A"}`; // Use 'Part Number'

        const rank = document.createElement("li");
        rank.textContent = `Rank: ${item.Rank || "N/A"}`; // Use 'Rank'

        const benchmark = document.createElement("li");
        benchmark.textContent = `Benchmark: ${item.Benchmark || "N/A"}`; // Use 'Benchmark'

        const samples = document.createElement("li");
        samples.textContent = `Samples: ${item.Samples || "N/A"}`; // Use 'Samples'

        const url = document.createElement("li");
        const urlLink = document.createElement("a");
        urlLink.href = item.URL; // Use 'URL'
        urlLink.textContent = item.URL || "N/A";
        urlLink.target = "_blank"; // Open the link in a new tab
        url.appendChild(urlLink);

        detailsList.appendChild(rank);
        detailsList.appendChild(benchmark);
        detailsList.appendChild(samples);
        detailsList.appendChild(partNumber);
        detailsList.appendChild(url);

        cardContent.appendChild(cardHeader);
        cardContent.appendChild(detailsList);

        card.appendChild(cardContent);

        cardContainer.appendChild(card);
    });
}

// This function will display the data for the home page
function showHome() {
    let homeData = [];
    Object.keys(computerPartData).forEach(category => {
        if (computerPartData[category].length > 0) {
            //push the item object into the homeData array
            homeData.push(computerPartData[category][0]);
        }
    });
    showCards(homeData);
}

// This calls the loadData() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function() {
    loadData();
});

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
