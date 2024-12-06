const pages = {
    home: `
        <div class="score-section">
            <h1>Welcome to Whiskers Mini App</h1>
            <p>Complete tasks, earn rewards, and climb the leaderboard!</p>
        </div>
        <div id="telegram-login">
            <script async src="https://telegram.org/js/telegram-widget.js?7"
                data-telegram-login="whiskersofficial_bot" 
                data-size="large" 
                data-userpic="true"
                data-radius="10"
                data-auth-url="https://a9ea70d3-fd4b-4ff4-b535-c16f55062e29-00-3vpft4rty7deo.riker.replit.dev/telegram-auth"
                data-request-access="write">
            </script>
        </div>
        <button class="main-button">Join our community</button>
    `,
    leaders: `
        <h1>Leaderboard</h1>
        <p>Total Users: 55,901,351</p>
        <div class="leaderboard">
            <p>1. elkanadi - 1,095,873,505 PAWS</p>
            <p>2. BB9B9N - 178,732,286 PAWS</p>
            <p>3. imGet - 165,026,852 PAWS</p>
        </div>
    `,
    vote: `
        <h1>Votes</h1>
        <p>Choose the next app to make an impact</p>
        <div class="votes-section">
            <p>No Active Voting</p>
        </div>
    `,
    friends: `
        <h1>Invite Friends</h1>
        <p>Share your invitation link & get rewards</p>
        <div class="friends-list">
            <p>Friend 1 - +116 PAWS</p>
            <p>Friend 2 - +116 PAWS</p>
        </div>
    `,
    earn: `
        <h1>Tasks</h1>
        <p>Get rewards for completing quests</p>
        <div id="task-container"></div>
    `
};

function showPage(page) {
    const content = document.getElementById("content");
    content.innerHTML = pages[page];
    if (page === "earn") {
        displayTasks(); // Load tasks dynamically when "earn" page is shown
    }
}

// Default to home page on load
document.addEventListener("DOMContentLoaded", () => {
    showPage("home");
});

// Task data
const tasks = [
    { id: 1, name: "Check Whiskers TG", reward: "+500 PAWS" },
    { id: 2, name: "Check Whiskers X", reward: "+500 PAWS" },
    { id: 3, name: "Get PAWSED", reward: "+10,000 PAWS" },
];

// Function to display tasks
function displayTasks() {
    const taskContainer = document.getElementById("task-container");

    tasks.forEach((task) => {
        // Create a task element
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        // Add task details
        taskElement.innerHTML = `
            <p>${task.name}</p>
            <p>${task.reward}</p>
            <button onclick="completeTask('${task.name}')">Start</button>
        `;

        // Append to container
        taskContainer.appendChild(taskElement);
    });
}

// Function to handle task completion
function completeTask(task) {
    fetch('https://a9ea70d3-fd4b-4ff4-b535-c16f55062e29-00-3vpft4rty7deo.riker.replit.dev/complete-task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            task: task,
            user_id: '1215402413' // Your Telegram User ID
        })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error("Error:", error));
}
