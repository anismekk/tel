// Placeholder for leaderboard data
const leaderboard = [
    { rank: 1, user: "John Doe", whiskers: 25 },
    { rank: 2, user: "Jane Smith", whiskers: 20 },
];

// Complete task function
function completeTask(taskId) {
    alert(`Task ${taskId} completed! You earned ${taskId} Whisker(s).`);
    // Add logic to update backend or leaderboard here
}

// Populate leaderboard
function loadLeaderboard() {
    const tableBody = document.getElementById("leaderboard-data");
    tableBody.innerHTML = leaderboard
        .map(
            (entry) =>
                `<tr>
                    <td>${entry.rank}</td>
                    <td>${entry.user}</td>
                    <td>${entry.whiskers}</td>
                </tr>`
        )
        .join("");
}

// Load leaderboard on page load
window.onload = loadLeaderboard;
