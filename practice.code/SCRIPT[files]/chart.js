document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("ridershipChart");

  const data = {
    labels: [
      "Route BR-01",
      "Route GC-05",
      "Route SW-12",
      "Route NT-03",
      "Route HT-09",
    ],

    datasets: [
      {
        label: "Total Students",

        data: [45, 52, 38, 61, 49],

        backgroundColor: [
          "rgba(0, 91, 150, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 99, 132, 0.8)",
        ],

        borderColor: [
          "rgba(0, 91, 150, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
        borderRadius: 15,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Number of Students",
          },
        },
        x: {
          title: {
            display: true,
            text: "Bus Routes",
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: false,
          text: "Student Ridership",
        },
      },
    },
  };

  const ridershipChart = new Chart(ctx, config);
});
