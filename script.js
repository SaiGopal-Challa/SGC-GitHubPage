// Chart.js: Donut Chart
const ctx = document.getElementById("skillChart").getContext("2d");
const skillChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ["Java", "C#", ".NET Core", "HTML", "CSS", "JavaScript"],
        datasets: [
            {
                data: [30, 25, 20, 10, 10, 5],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#4BC0C0",
                    "#9966FF",
                    "#FF9F40"
                ]
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
});
