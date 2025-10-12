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
    let animateBus = document.querySelector(".vehicle-image")
    let eLT = document.querySelector(".eLT")
    confirm("⚠️ Are you sure you want to enable live tracking?");
    if (true) {
      alert("✅ Live tracking has been enabled.");
      animateBus.classList.toggle("continuous-zoom");
      eLT.innerHTML = `<a href="#" class="eLT" onclick="disableLiveTracking()"><i class="fa-solid fa-location-crosshairs col-1"></i> Disable Live Tracking</a>`
    }
    
  }
  function logOut() {
    if (confirm("🚪	 Are you sure you want to logout?")) {
      window.location.href = "../index.html";
      } else {
        // Do nothing if the user cancels
      }
    }
  function studentAdd(){
    let addStudent = document.querySelector(".student-registration-form");
  addStudent.classList.add("addStudent");
  addStudent.classList.remove("closeForm");
  
  }
  function closeForm(){
    let addStudent = document.querySelector(".student-registration-form");
    addStudent.classList.add("closeForm");
    addStudent.classList.remove("addStudent");
  }
 const tripData = [
            { id: 1, route: "School Hub → Morning Route 1", time: "6:45 AM", duration: "1 hr 15 min", students: 42, status: "Completed", icon: "fa-check", color: "var(--color-secondary)" },
            { id: 2, route: "School Hub → Afternoon Route 2", time: "2:45 PM", duration: "1 hr 20 min", students: 45, status: "En Route", icon: "fa-truck-moving", color: "var(--color-info)" },
            { id: 3, route: "School Hub → Field Trip (Zoo)", time: "8:00 AM (Tomorrow)", duration: "4 hrs 00 min", students: 30, status: "Planned", icon: "fa-hourglass-start", color: "var(--color-warning)" },
            { id: 4, route: "School Hub → Late Run", time: "4:30 PM", duration: "1 hr 10 min", students: 25, status: "Cancelled", icon: "fa-xmark", color: "var(--color-danger)" },
        ];

        const scheduleList = document.getElementById('scheduleList');
        const filterBar = document.getElementById('filterBar');

        /**
         * Renders the trip items based on the provided filtered list.
         * @param {Array<Object>} trips - Array of trip objects to render.
         */
        function renderTrips(trips) {
            scheduleList.innerHTML = ''; // Clear existing list
            
            trips.forEach(trip => {
                const tripElement = document.createElement('div');
                tripElement.className = 'trip-item';
                tripElement.setAttribute('data-status', trip.status);
                // Set the dynamic border color
                tripElement.style.borderLeftColor = trip.color;
                
                // Construct the inner HTML for the trip card
                tripElement.innerHTML = `
                    <div class="trip-details">
                        <div class="main-info">
                            <div class="route-info">
                                <i class="fa-solid fa-location-dot"></i>
                                <p class="col-1">${trip.route}</p>
                            </div>
                            <div class="status-badge status-${trip.status.toLowerCase().replace(' ', '')}">
                                <i class="fa-solid ${trip.icon} col-2"></i> <p class="col-2">${trip.status}</p>
                            </div>
                        </div>
                        <div class="time-details">
                            <span class="col-1"><i class="col-1 fa-solid fa-clock"></i> Start Time: ${trip.time}</span>
                            <span class="col-1"><i class="col-1 fa-solid fa-road"></i> Duration: ${trip.duration}</span>
                            <span class="col-1"><i class="col-1 fa-solid fa-bus-simple"></i> Students: ${trip.students}</span>
                        </div>
                    </div>
                `;
                
                scheduleList.appendChild(tripElement);
            });
        }

        /**
         * Filters the trips list based on the selected status.
         * @param {string} filterStatus - The status to filter by ('all', 'Completed', etc.).
         */
        function filterTrips(filterStatus) {
            // Remove 'active' class from all buttons
            Array.from(filterBar.children).forEach(button => {
                button.classList.remove('active');
            });

            // Find and add 'active' class to the clicked button
            const activeButton = filterBar.querySelector(`[data-filter="${filterStatus}"]`);
            if (activeButton) {
                activeButton.classList.add('active');
            }

            const items = scheduleList.querySelectorAll('.trip-item');
            
            items.forEach(item => {
                const itemStatus = item.getAttribute('data-status');
                
                // Use a quick CSS transition for filtering
                if (filterStatus === 'all' || itemStatus === filterStatus) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        }

        // --- EVENT LISTENERS ---
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Initial render of all trips
            renderTrips(tripData);
            
            // 2. Add filtering event listener to the filter bar
            filterBar.addEventListener('click', (event) => {
                const target = event.target;
                if (target.classList.contains('filter-button')) {
                    const filterValue = target.getAttribute('data-filter');
                    filterTrips(filterValue);
                }
            });
        });
