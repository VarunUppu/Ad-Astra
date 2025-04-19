// Logout function
function logout() {
    // Redirect to index.html
    window.location.href = 'index.html';
}

// Event listener for the logout button
document.getElementById('logoutButton').addEventListener('click', logout);

// Navigate to other pages
function dashboard() {
    window.location.href = 'dashboard.html';
}
document.getElementById('dashboardBT').addEventListener('click', dashboard);

function academics() {
    window.location.href = 'academics.html';
}
document.getElementById('academicsBT').addEventListener('click', academics);

function timeTable() {
    window.location.href = 'timetable.html';
}
document.getElementById('ttBT').addEventListener('click', timeTable);

function materials() {
    window.location.href = 'materials.html';
}
document.getElementById('materialsBT').addEventListener('click', materials);

function fee() {
    window.location.href = 'fees.html';
}
document.getElementById('feeBT').addEventListener('click', fee);

// Mocked data for materials
const materialsData = [
    { standard: "5", subject: "Math", materials: "Math Material for Standard 5" },
    { standard: "6", subject: "Science", materials: "Science Material for Standard 6" },
    { standard: "5", subject: "English", materials: "English Material for Standard 5" },
    { standard: "4", subject: "History", materials: "History Material for Standard 4" },
    { standard: "6", subject: "Math", materials: "Math Material for Standard 6" },
];

// Function to retrieve materials based on user input
function retrieveMaterials() {
    const standard = document.getElementById('std').value;
    const subject = document.getElementById('sub').value;

    // Find the relevant materials from mocked data
    const material = materialsData.find(m => m.standard === standard && m.subject.toLowerCase() === subject.toLowerCase());

    if (material) {
        // Display the material on the page (here I am using the canvas as a simple display for now)
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous content
        ctx.font = "20px Arial";
        ctx.fillText(material.materials, 10, 50); // Display the material
    } else {
        alert('No materials found for the specified standard and subject');
    }
}

// Event listener for the Go button
document.getElementById('goButton').addEventListener('click', retrieveMaterials);