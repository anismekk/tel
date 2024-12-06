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
        <div class="task-list">
            <p>Task 1: +500 PAWS</p>
            <p>Task 2: +500 PAWS</p>
        </div>
    `
};

function showPage(page) {
    const content = document.getElementById("content");
    content.innerHTML = pages[page];
}

// Default to home page on load
document.addEventListener("DOMContentLoaded", () => {
    showPage("home");
});
