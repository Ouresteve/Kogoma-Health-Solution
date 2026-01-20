// Dashboard JavaScript
const token=localStorage.getItem("token");
if(!token){
  window.location.href="https://kogoma-health-solution.vercel.app/Auth/" ;
  
}
const payload = JSON.parse(atob(token.split(".")[1]));
// User Data
console.log('Decoded JWT Payload:', payload);
const userData = {
  name: payload.name,
  healthScore: 85
};

// Health Metrics
const healthMetrics = {
  heartRate: 72,
  temperature: 36.7,
  weight: 68.5,
  bloodPressure: "120/80",
  bloodSugar: 95,
  oxygenSaturation: 98,
  cholesterol: {
    total: 185,
    hdl: 55,
    ldl: 110,
    triglycerides: 120
  },
  bmi: 24.2,
  bodyFat: 18.5,
  restingMetabolicRate: 1650
};

// Current Medications
const currentMedications = [
  {
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    time: "8:00 AM",
    purpose: "Blood Pressure",
    remaining: 15,
    nextRefill: "Feb 5, 2026"
  },
  {
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily",
    time: "8:00 PM",
    purpose: "Cholesterol",
    remaining: 20,
    nextRefill: "Feb 8, 2026"
  },
  {
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    time: "With meals",
    purpose: "Blood Sugar",
    remaining: 30,
    nextRefill: "Feb 12, 2026"
  },
  {
    name: "Vitamin D3",
    dosage: "2000 IU",
    frequency: "Once daily",
    time: "With breakfast",
    purpose: "Supplement",
    remaining: 45,
    nextRefill: "Feb 20, 2026"
  },
  {
    name: "Omega-3 Fish Oil",
    dosage: "1000mg",
    frequency: "Twice daily",
    time: "With meals",
    purpose: "Heart Health",
    remaining: 25,
    nextRefill: "Feb 15, 2026"
  }
];

// Health Goals
const healthGoals = [
  {
    title: "Maintain Blood Pressure < 120/80",
    current: "120/80",
    target: "< 120/80",
    progress: 95,
    status: "on-track"
  },
  {
    title: "Weight Goal: 65-70 kg",
    current: "68.5 kg",
    target: "65-70 kg",
    progress: 75,
    status: "on-track"
  },
  {
    title: "Daily Steps: 10,000",
    current: "8,500 steps",
    target: "10,000 steps",
    progress: 85,
    status: "on-track"
  },
  {
    title: "Sleep 7-8 hours nightly",
    current: "7.2 hours",
    target: "7-8 hours",
    progress: 90,
    status: "on-track"
  },
  {
    title: "Reduce Cholesterol to < 200",
    current: "185 mg/dL",
    target: "< 200 mg/dL",
    progress: 100,
    status: "achieved"
  }
];

// Weekly Activity Data
const weeklyActivityData = [
  { day: "Mon", steps: 8500, activeMinutes: 45, calories: 320 },
  { day: "Tue", steps: 9200, activeMinutes: 52, calories: 380 },
  { day: "Wed", steps: 7800, activeMinutes: 38, calories: 290 },
  { day: "Thu", steps: 10100, activeMinutes: 60, calories: 420 },
  { day: "Fri", steps: 8900, activeMinutes: 48, calories: 350 },
  { day: "Sat", steps: 12000, activeMinutes: 75, calories: 480 },
  { day: "Sun", steps: 6500, activeMinutes: 25, calories: 220 }
];

// Health Alerts & Notifications
const healthAlerts = [
  {
    type: "info",
    title: "Upcoming Appointment",
    message: "General check-up with Dr. Johnson in 6 days",
    date: "Jan 25, 2026",
    priority: "medium"
  },
  {
    type: "warning",
    title: "Medication Reminder",
    message: "Refill Lisinopril by Feb 5, 2026",
    date: "Feb 5, 2026",
    priority: "high"
  },
  {
    type: "success",
    title: "Goal Achieved!",
    message: "Cholesterol levels are now within target range",
    date: "Jan 15, 2026",
    priority: "low"
  },
  {
    type: "info",
    title: "Health Tip",
    message: "Remember to stay hydrated throughout the day",
    date: "Daily",
    priority: "low"
  }
];

// Vital Signs History (last 30 days)
const vitalSignsHistory = [
  { date: "Jan 18, 2026", heartRate: 72, bloodPressure: "120/80", weight: 68.5, temperature: 36.7 },
  { date: "Jan 17, 2026", heartRate: 74, bloodPressure: "122/82", weight: 68.7, temperature: 36.8 },
  { date: "Jan 16, 2026", heartRate: 71, bloodPressure: "118/78", weight: 68.3, temperature: 36.6 },
  { date: "Jan 15, 2026", heartRate: 73, bloodPressure: "121/81", weight: 68.4, temperature: 36.7 },
  { date: "Jan 14, 2026", heartRate: 75, bloodPressure: "124/84", weight: 68.6, temperature: 36.9 },
  { date: "Jan 13, 2026", heartRate: 70, bloodPressure: "117/77", weight: 68.2, temperature: 36.5 },
  { date: "Jan 12, 2026", heartRate: 72, bloodPressure: "120/80", weight: 68.5, temperature: 36.7 },
  { date: "Jan 11, 2026", heartRate: 76, bloodPressure: "126/86", weight: 68.8, temperature: 37.0 },
  { date: "Jan 10, 2026", heartRate: 69, bloodPressure: "115/75", weight: 68.1, temperature: 36.4 },
  { date: "Jan 9, 2026", heartRate: 73, bloodPressure: "121/81", weight: 68.4, temperature: 36.7 }
];

// Lab Results History
const labResultsHistory = [
  {
    date: "Jan 15, 2026",
    test: "Complete Blood Count",
    results: [
      { name: "Hemoglobin", value: "14.2 g/dL", normal: "12.0-16.0", status: "normal" },
      { name: "White Blood Cells", value: "7.5 K/uL", normal: "4.0-11.0", status: "normal" },
      { name: "Platelets", value: "285 K/uL", normal: "150-450", status: "normal" }
    ]
  },
  {
    date: "Jan 10, 2026",
    test: "Lipid Panel",
    results: [
      { name: "Total Cholesterol", value: "185 mg/dL", normal: "< 200", status: "normal" },
      { name: "HDL Cholesterol", value: "55 mg/dL", normal: "> 40", status: "normal" },
      { name: "LDL Cholesterol", value: "110 mg/dL", normal: "< 130", status: "normal" },
      { name: "Triglycerides", value: "120 mg/dL", normal: "< 150", status: "normal" }
    ]
  },
  {
    date: "Jan 5, 2026",
    test: "Comprehensive Metabolic Panel",
    results: [
      { name: "Glucose", value: "95 mg/dL", normal: "70-100", status: "normal" },
      { name: "Creatinine", value: "0.9 mg/dL", normal: "0.7-1.3", status: "normal" },
      { name: "eGFR", value: "85 mL/min", normal: "> 60", status: "normal" }
    ]
  }
];

// Upcoming Appointments
const upcomingAppointments = [
  {
    title: "General Check-up with Dr. Johnson",
    time: "Jan 25, 2026 - 10:00 AM",
    type: "doctor",
    location: "Main Clinic"
  },
  {
    title: "Cardiology Consultation",
    time: "Jan 28, 2026 - 2:00 PM",
    type: "specialist",
    location: "Heart Center"
  },
  {
    title: "Blood Work & Lab Tests",
    time: "Feb 1, 2026 - 9:00 AM",
    type: "lab",
    location: "Diagnostic Lab"
  },
  {
    title: "Mental Health Counseling",
    time: "Feb 3, 2026 - 3:30 PM",
    type: "counseling",
    location: "Wellness Center"
  },
  {
    title: "Dermatology Appointment",
    time: "Feb 5, 2026 - 11:15 AM",
    type: "specialist",
    location: "Skin Care Clinic"
  },
  {
    title: "Physical Therapy Session",
    time: "Feb 7, 2026 - 1:00 PM",
    type: "therapy",
    location: "Rehab Center"
  },
  {
    title: "Nutritionist Consultation",
    time: "Feb 10, 2026 - 10:30 AM",
    type: "counseling",
    location: "Nutrition Clinic"
  },
  {
    title: "Follow-up Blood Pressure Check",
    time: "Feb 12, 2026 - 8:45 AM",
    type: "monitoring",
    location: "Main Clinic"
  },
  {
    title: "Eye Exam & Vision Test",
    time: "Feb 15, 2026 - 2:20 PM",
    type: "vision",
    location: "Optical Center"
  },
  {
    title: "Dental Cleaning",
    time: "Feb 18, 2026 - 9:30 AM",
    type: "dental",
    location: "Dental Office"
  }
];

// Recent Activities
const recentActivities = [
  {
    title: "Medication Pickup - Amoxicillin",
    time: "Jan 18, 2026 - 2:30 PM",
    status: "completed",
    category: "medication"
  },
  {
    title: "Blood Pressure Reading",
    time: "Jan 18, 2026 - 8:00 AM",
    status: "completed",
    category: "monitoring"
  },
  {
    title: "Virtual Consultation with Dr. Smith",
    time: "Jan 17, 2026 - 3:15 PM",
    status: "completed",
    category: "consultation"
  },
  {
    title: "Lab Results Review",
    time: "Jan 17, 2026 - 11:00 AM",
    status: "completed",
    category: "results"
  },
  {
    title: "Prescription Refill Request",
    time: "Jan 16, 2026 - 9:45 AM",
    status: "completed",
    category: "medication"
  },
  {
    title: "Daily Health Check-in",
    time: "Jan 16, 2026 - 7:30 AM",
    status: "completed",
    category: "monitoring"
  },
  {
    title: "Nutrition Counseling Session",
    time: "Jan 15, 2026 - 4:00 PM",
    status: "completed",
    category: "counseling"
  },
  {
    title: "Weight Measurement",
    time: "Jan 15, 2026 - 10:15 AM",
    status: "completed",
    category: "monitoring"
  },
  {
    title: "Mental Health Assessment",
    time: "Jan 14, 2026 - 2:00 PM",
    status: "completed",
    category: "assessment"
  },
  {
    title: "Vaccination - Flu Shot",
    time: "Jan 14, 2026 - 9:30 AM",
    status: "completed",
    category: "vaccination"
  },
  {
    title: "Emergency Room Visit",
    time: "Jan 13, 2026 - 11:45 PM",
    status: "completed",
    category: "emergency"
  },
  {
    title: "Physical Therapy Session",
    time: "Jan 13, 2026 - 1:30 PM",
    status: "completed",
    category: "therapy"
  },
  {
    title: "Dental Check-up",
    time: "Jan 12, 2026 - 10:00 AM",
    status: "completed",
    category: "dental"
  },
  {
    title: "Eye Examination",
    time: "Jan 11, 2026 - 3:45 PM",
    status: "completed",
    category: "vision"
  },
  {
    title: "Cholesterol Test Results",
    time: "Jan 11, 2026 - 8:30 AM",
    status: "completed",
    category: "results"
  },
  {
    title: "Sleep Study Consultation",
    time: "Jan 10, 2026 - 5:00 PM",
    status: "completed",
    category: "consultation"
  },
  {
    title: "Allergy Testing",
    time: "Jan 9, 2026 - 2:15 PM",
    status: "completed",
    category: "testing"
  },
  {
    title: "Cardiac Stress Test",
    time: "Jan 8, 2026 - 9:00 AM",
    status: "completed",
    category: "cardiac"
  },
  {
    title: "Diabetes Screening",
    time: "Jan 7, 2026 - 11:30 AM",
    status: "completed",
    category: "screening"
  },
  {
    title: "Medication Adjustment Review",
    time: "Jan 6, 2026 - 4:20 PM",
    status: "completed",
    category: "medication"
  }
];

// Reminders
const reminders = [
  {
    title: "Take Blood Pressure Medication (Lisinopril 10mg)",
    time: "8:00 AM Daily",
    priority: "high",
    category: "medication"
  },
  {
    title: "Take Cholesterol Medication (Atorvastatin 20mg)",
    time: "8:00 PM Daily",
    priority: "high",
    category: "medication"
  },
  {
    title: "Drink 8 Glasses of Water",
    time: "Throughout the Day",
    priority: "medium",
    category: "hydration"
  },
  {
    title: "30-Minute Evening Walk",
    time: "6:00 PM Daily",
    priority: "medium",
    category: "exercise"
  },
  {
    title: "Weekly Weigh-in",
    time: "Every Monday 7:00 AM",
    priority: "low",
    category: "monitoring"
  },
  {
    title: "Blood Sugar Check",
    time: "After Breakfast & Dinner",
    priority: "high",
    category: "monitoring"
  },
  {
    title: "Take Vitamin D Supplement",
    time: "With Breakfast Daily",
    priority: "medium",
    category: "supplements"
  },
  {
    title: "Apply Moisturizer",
    time: "Morning & Evening",
    priority: "low",
    category: "skincare"
  },
  {
    title: "Floss Teeth",
    time: "Before Bed Daily",
    priority: "medium",
    category: "dental"
  },
  {
    title: "Eye Drops (Artificial Tears)",
    time: "4:00 PM Daily",
    priority: "medium",
    category: "medication"
  },
  {
    title: "Weekly Meal Prep",
    time: "Every Sunday 2:00 PM",
    priority: "low",
    category: "nutrition"
  },
  {
    title: "Deep Breathing Exercises",
    time: "3 Times Daily (10 mins each)",
    priority: "medium",
    category: "mental-health"
  },
  {
    title: "Foot Care Check",
    time: "Every Evening",
    priority: "medium",
    category: "diabetes-care"
  },
  {
    title: "Sleep 7-8 Hours",
    time: "10:00 PM - 6:00 AM",
    priority: "high",
    category: "sleep"
  },
  {
    title: "Limit Screen Time",
    time: "After 9:00 PM",
    priority: "medium",
    category: "lifestyle"
  }
];

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', function() {
  console.log('Dashboard initializing...');
  populateUserData();
  populateHealthMetrics();
  populateUpcomingAppointments();
  populateRecentActivities();
  populateReminders();
  populateMedications();
  populateHealthGoals();
  initializeCharts();
  setupEventListeners();
  logAdditionalData();
  console.log('Dashboard initialized successfully!');
});

// Populate Medications (for future use)
function populateMedications() {
  // This function populates medication data that could be displayed in a medication card
  console.log('Current Medications:', currentMedications);
  // Could be used to populate a medication management section
}

// Populate Health Goals (for future use)
function populateHealthGoals() {
  // This function populates health goals data that could be displayed in a goals card
  console.log('Health Goals:', healthGoals);
  // Could be used to populate a goals tracking section
}

// Additional Data Logging (for demonstration)
function logAdditionalData() {
  console.log('Vital Signs History:', vitalSignsHistory);
  console.log('Lab Results History:', labResultsHistory);
  console.log('Health Alerts:', healthAlerts);
  console.log('Weekly Activity Data:', weeklyActivityData);
}

// Call additional data logging
logAdditionalData();

// Populate User Data
function populateUserData() {
  document.getElementById('userName').textContent = userData.name;
  document.getElementById('healthScore').textContent = userData.healthScore;
  console.log('User data populated:', userData);
}

// Populate Health Metrics
function populateHealthMetrics() {
  document.getElementById('heartRate').textContent = healthMetrics.heartRate;
  document.getElementById('temperature').textContent = healthMetrics.temperature;
  document.getElementById('weight').textContent = healthMetrics.weight;
  document.getElementById('bloodPressure').textContent = healthMetrics.bloodPressure;
  console.log('Health metrics populated:', healthMetrics);
}

// Populate Upcoming Appointments
function populateUpcomingAppointments() {
  const container = document.getElementById('upcomingAppointments');
  console.log('Populating upcoming appointments:', upcomingAppointments.length, 'items');

  upcomingAppointments.forEach(appointment => {
    const li = document.createElement('li');

    const titleDiv = document.createElement('div');
    titleDiv.className = 'appointment-title';
    titleDiv.textContent = appointment.title;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'appointment-time';
    timeDiv.textContent = `${appointment.time} at ${appointment.location}`;

    const typeIcon = document.createElement('i');
    typeIcon.className = getAppointmentIcon(appointment.type);
    typeIcon.style.marginLeft = '10px';
    typeIcon.style.color = getAppointmentColor(appointment.type);

    li.appendChild(titleDiv);
    li.appendChild(timeDiv);
    li.appendChild(typeIcon);
    container.appendChild(li);
  });
}

// Populate Recent Activities
function populateRecentActivities() {
  const container = document.getElementById('recentActivities');
  console.log('Populating recent activities:', recentActivities.length, 'items');

  recentActivities.forEach(activity => {
    const li = document.createElement('li');

    const titleDiv = document.createElement('div');
    titleDiv.className = 'activity-title';
    titleDiv.textContent = activity.title;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'activity-time';
    timeDiv.textContent = activity.time;

    const categoryIcon = document.createElement('i');
    categoryIcon.className = getCategoryIcon(activity.category);
    categoryIcon.style.marginLeft = '10px';
    categoryIcon.style.color = getCategoryColor(activity.category);

    li.appendChild(titleDiv);
    li.appendChild(timeDiv);
    li.appendChild(categoryIcon);
    container.appendChild(li);
  });
}

// Populate Reminders
function populateReminders() {
  const container = document.getElementById('reminders');
  console.log('Populating reminders:', reminders.length, 'items');

  reminders.forEach(reminder => {
    const li = document.createElement('li');

    const titleDiv = document.createElement('div');
    titleDiv.className = 'reminder-title';
    titleDiv.textContent = reminder.title;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'reminder-time';
    timeDiv.textContent = reminder.time;

    const priorityIcon = document.createElement('i');
    priorityIcon.className = 'fas fa-exclamation-triangle';
    priorityIcon.style.marginLeft = '10px';

    switch(reminder.priority) {
      case 'high':
        priorityIcon.style.color = '#e74c3c';
        break;
      case 'medium':
        priorityIcon.style.color = '#f39c12';
        break;
      case 'low':
        priorityIcon.style.color = '#2ecc71';
        break;
    }

    li.appendChild(titleDiv);
    li.appendChild(timeDiv);
    li.appendChild(priorityIcon);
    container.appendChild(li);
  });
}


function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const humburger = document.getElementById("humburger");
  
  humburger.innerHTML = menu.style.left === "0px" ? "☰" : "✖";
  menu.style.left = menu.style.left === "0px" ? "-100%" : "0px";
}

// Close mobile menu on link click (optional enhancement)
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu(); // Reuse toggle to close
  });
});

// Helper Functions
function getCategoryIcon(category) {
  const icons = {
    medication: 'fas fa-pills',
    monitoring: 'fas fa-heartbeat',
    consultation: 'fas fa-user-md',
    results: 'fas fa-file-medical',
    counseling: 'fas fa-brain',
    assessment: 'fas fa-clipboard-check',
    vaccination: 'fas fa-syringe',
    emergency: 'fas fa-ambulance',
    therapy: 'fas fa-dumbbell',
    dental: 'fas fa-tooth',
    vision: 'fas fa-eye',
    testing: 'fas fa-vial',
    cardiac: 'fas fa-heart',
    screening: 'fas fa-search'
  };
  return icons[category] || 'fas fa-check-circle';
}

function getCategoryColor(category) {
  const colors = {
    medication: '#1f4fd8',
    monitoring: '#2ecc71',
    consultation: '#9b59b6',
    results: '#e67e22',
    counseling: '#3498db',
    assessment: '#f39c12',
    vaccination: '#27ae60',
    emergency: '#e74c3c',
    therapy: '#8e44ad',
    dental: '#16a085',
    vision: '#f1c40f',
    testing: '#e74c3c',
    cardiac: '#c0392b',
    screening: '#7f8c8d'
  };
  return colors[category] || '#2ecc71';
}

function getAppointmentIcon(type) {
  const icons = {
    doctor: 'fas fa-user-md',
    specialist: 'fas fa-stethoscope',
    lab: 'fas fa-vial',
    counseling: 'fas fa-brain',
    therapy: 'fas fa-dumbbell',
    monitoring: 'fas fa-heartbeat',
    vision: 'fas fa-eye',
    dental: 'fas fa-tooth'
  };
  return icons[type] || 'fas fa-calendar-alt';
}

function getAppointmentColor(type) {
  const colors = {
    doctor: '#1f4fd8',
    specialist: '#9b59b6',
    lab: '#e67e22',
    counseling: '#3498db',
    therapy: '#8e44ad',
    monitoring: '#2ecc71',
    vision: '#f1c40f',
    dental: '#16a085'
  };
  return colors[type] || '#1f4fd8';
}

// Initialize Charts
function initializeCharts() {
  // First populate the data attributes
  populateData();
  
  // Then animate bar chart on load
  const bars = document.querySelectorAll('.bar-fill');
  bars.forEach((bar, index) => {
    const activityData = weeklyActivityData[index];
    if (activityData) {
      const percentage = (activityData.steps / 12000) * 100; // Max steps as 12000
      setTimeout(() => {
        bar.style.height = Math.min(percentage, 100) + '%';
      }, index * 100);
    }
  });
}

// Populate Data Attributes for Charts
function populateData() {
  const bars = document.querySelectorAll('.bar');
  bars.forEach((bar, index) => {
    const activityData = weeklyActivityData[index];
    if (activityData) {
      const percentage = (activityData.steps / 12000) * 100;
      bar.setAttribute('data-value', Math.min(percentage, 100));
      
      // Also update the bar label if it exists
      const label = bar.querySelector('.bar-label');
      if (label) {
        label.textContent = activityData.day;
      }
    }
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Quick action buttons
  const actionButtons = document.querySelectorAll('.action-btn');
  actionButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const action = this.textContent.trim().toLowerCase().replace(/\s+/g, '-');
      handleQuickAction(action);
    });
  });

  // Sidebar navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');

      // Close sidebar on mobile after navigation
      if (window.innerWidth <= 768) {
        closeSidebar();
      }
    });
  });

  // Mobile menu functionality
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', closeSidebar);
  }

  // Close sidebar on window resize if desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      closeSidebar();
    }
  });
}

// Handle Quick Actions
function handleQuickAction(action) {
  switch(action) {
    case 'request-support':
      alert('Support request initiated. A health advisor will contact you soon.');
      break;
    case 'counseling':
      alert('Redirecting to counseling services...');
      break;
    case 'emergency':
      alert('Emergency services contacted. Help is on the way.');
      break;
    case 'pharmacy':
      alert('Opening pharmacy portal...');
      break;
    default:
      alert('Action not implemented yet.');
  }
}

// Mobile Sidebar Functions
function openSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (sidebar) {
    sidebar.classList.add('active');
  }
  if (overlay) {
    overlay.classList.add('active');
  }

  // Prevent body scroll when sidebar is open
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (sidebar) {
    sidebar.classList.remove('active');
  }
  if (overlay) {
    overlay.classList.remove('active');
  }

  // Restore body scroll
  document.body.style.overflow = 'auto';
}

// Utility Functions
function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

function formatTime(date) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(date);
}

// Real-time updates simulation (for demo purposes)
setInterval(() => {
  // Simulate slight metric changes
  const heartRateEl = document.getElementById('heartRate');
  const currentHR = parseInt(heartRateEl.textContent);
  const newHR = currentHR + (Math.random() > 0.5 ? 1 : -1);
  if (newHR >= 60 && newHR <= 100) {
    heartRateEl.textContent = newHR;
  }
}, 30000); // Update every 30 seconds
