const pages = {
    home: `
        <div class="score-section">
            <h1>Welcome to Whiskers Mini App</h1>
            <p>Complete tasks, earn rewards, and climb the leaderboard!</p>
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
        <div class="tabs">
            <button class="tab active" onclick="switchTab('limited')">Limited (2)</button>
            <button class="tab" onclick="switchTab('in-game')">In-game (2)</button>
            <button class="tab" onclick="switchTab('partners')">Partners</button>
        </div>
        <div id="task-content">
            <!-- Default content for Limited tab -->
            <div class="task">
                <div class="task-details">
                    <img src="telegram-icon.png" alt="Telegram">
                    <span>Check Whiskers TG</span>
                    <p>+ 500 PAWS</p>
                </div>
                <button class="start-button">Start</button>
                <span class="timer">13:21:50</span>
            </div>
            <div class="task">
                <div class="task-details">
                    <img src="x-icon.png" alt="X">
                    <span>Check Whiskers X</span>
                    <p>+ 500 PAWS</p>
                </div>
                <button class="start-button">Start</button>
                <span class="timer">13:21:50</span>
            </div>
            <div class="task">
                <div class="task-details">
                    <img src="paw-icon.png" alt="Get Pawsed">
                    <span>Get Pawsed</span>
                    <p>+ 10,000 PAWS</p>
                </div>
                <button class="claim-button">Claim</button>
                <p>10M / 10M</p>
            </div>
        </div>
    `,
};

// Function to load the default tab
function switchTab(tab) {
    const taskContent = document.getElementById("task-content");
    if (tab === "limited") {
        taskContent.innerHTML = `
            <div class="task">
                <div class="task-details">
                    <img src="telegram-icon.png" alt="Telegram">
                    <span>Check Whiskers TG</span>
                    <p>+ 500 PAWS</p>
                </div>
                <button class="start-button">Start</button>
                <span class="timer">13:21:50</span>
            </div>
            <div class="task">
                <div class="task-details">
                    <img src="x-icon.png" alt="X">
                    <span>Check Whiskers X</span>
                    <p>+ 500 PAWS</p>
                </div>
                <button class="start-button">Start</button>
                <span class="timer">13:21:50</span>
            </div>
        `;
    } else if (tab === "in-game") {
        taskContent.innerHTML = `<p>In-game tasks coming soon!</p>`;
    } else {
        taskContent.innerHTML = `<p>Partners' tasks coming soon!</p>`;
    }
    document.querySelectorAll(".tab").forEach((btn) => btn.classList.remove("active"));
    document.querySelector(`.tab[onclick="switchTab('${tab}')"]`).classList.add("active");
}
