let barIcon = document.getElementById("bar-icon");
let crossIcon = document.getElementById("cross-icon");

function toggleSidebar() {
  let sidebar = document.querySelector(".dashboard-sidebar");
  sidebar.classList.toggle("active");
}
function toggleHome() {
  let sidebar = document.querySelector(".dashboard-sidebar");
  sidebar.classList.toggle("unable");
}

// Chart.js code to create a simple bar chart
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("ridershipChart");

  const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],

    datasets: [
      {
        label: "Total Trips",

        data: [62, 78, 80, 79, 63, 75, 84],

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
        // borderRadius: 15,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      scales: {
        // y: {
        //   beginAtZero: true,
        //   suggestedMax: 100,
        //   title: {
        //     display: true,
        //     // text: "Number of Students",
        //   },
        // },
        x: {
          title: {
            display: true,
            // text: "Bus Routes",
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
          //   text: "Student Ridership",
        },
      },
    },
  };

  const ridershipChart = new Chart(ctx, config);
});

document.addEventListener("DOMContentLoaded", function () {
  // 1. Get the canvas element
  const ctx = document.getElementById("driverHoursChart");

  // 2. Define the data (in hours, totaling a 40-hour work week)
  const data = {
    labels: [
      "Total Driving Hours (15.20)",
      "Total Break/Rest Hours (5.0)",
      "Total Idle/Wait Time (2.5)",
    ],
    datasets: [
      {
        // label: 'Weekly 40-Hour Breakdown',
        // Data points: 32.5 + 5.0 + 2.5 = 40.0 Total Available Hours
        data: [32.5, 5.0, 2.5],

        backgroundColor: [
          "rgba(0, 91, 150, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(0, 91, 150, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        // hoverOffset: 4
        borderWidth: 1,
      },
    ],
  };

  // 3. Define the configuration
  const config = {
    // Use 'doughnut' for a ring chart or 'pie' for a solid circle
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };

  // 4. Create and render the chart
  const driverHoursChart = new Chart(ctx, config);
});

function logConfirm() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "../index.html";
  }
}
function studentData() {
    window.location.href = "../Driver Dashboard index Files/studAtt.html";
}


 function driProfile() {
        var drimoreDetails = document.getElementById('driverProfileMore');
        if (drimoreDetails.style.display === 'none' || drimoreDetails.style.display === '') {
          drimoreDetails.style.display = 'flex';
        } else {
          drimoreDetails.style.display = 'none';
        }
      }
  function enableLiveTracking() {
    confirm("⚠️ Are you sure you want to enable live tracking?");
    if (true) {
      alert("✅ Live tracking has been enabled.");
    }
  }
  function logOut() {
    if (confirm("🚪	 Are you sure you want to logout?")) {
      window.location.href = "../index.html";
      } else {
        // Do nothing if the user cancels
      }
    }