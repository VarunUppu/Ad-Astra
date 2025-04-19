let username=sessionStorage.getItem(`username`)
document.addEventListener('DOMContentLoaded', () => {
    const usernameDisplay = document.getElementById('usernameDisplay');
	usernameDisplay.textContent = `${username}`;
});
// Student Data
const studentData = [
    { hallTicket: 1, fatherName: "Rajesh", motherName: "Renuka", attendance: 88, class: 5, section: 2, username: "Abhishek" },
    { hallTicket: 2, fatherName: "Suresh", motherName: "Anitha", attendance: 90, class: 6, section: 1, username: "Barghav" },
    { hallTicket: 3, fatherName: "Anand", motherName: "Amala", attendance: 99, class: 4, section: 2, username: "Chandu" },
    { hallTicket: 4, fatherName: "Shashank", motherName: "Lavanya", attendance: 75, class: 6, section: 2, username: "Divya" },
    { hallTicket: 5, fatherName: "Raju", motherName: "Kalyani", attendance: 80, class: 6, section: 2, username: "Fathima" },
    { hallTicket: 6, fatherName: "Karthik", motherName: "Aruna", attendance: 77, class: 4, section: 1, username: "Ganga" },
    { hallTicket: 7, fatherName: "Rahul", motherName: "Divya", attendance: 69, class: 5, section: 2, username: "Hasini" },
    { hallTicket: 8, fatherName: "Sai", motherName: "Srinidhi", attendance: 84, class: 5, section: 2, username: "Rajini" },
    { hallTicket: 9, fatherName: "Charan", motherName: "Savithri", attendance: 91, class: 4, section: 1, username: "Rishi" },
    { hallTicket: 10, fatherName: "Mukesh", motherName: "Pranitha", attendance: 91, class: 6, section: 1, username: "Pavithra" },
    { hallTicket: 11, fatherName: "Harsha", motherName: "Bhuvana", attendance: 75, class: 6, section: 2, username: "Sanjana" }
];

document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcomeMessage');
	welcomeMessage.textContent = `Welcome, ${username}!`;
	
});
// Render student data based on the logged-in user
function renderDashboard() {
    const username = sessionStorage.getItem('username'); // Get the logged-in username from session storage
	const userStudent = studentData.find(student => student.username === username);

    if (userStudent) {
        // Display the username in the header
        document.getElementById('usernameDisplay').textContent = userStudent.username;

        // Set the student details in the respective elements
        document.getElementById('hallTicket').textContent = `Hall Ticket: ${userStudent.hallTicket}`;
        document.getElementById('fatherName').textContent = `Father's Name: ${userStudent.fatherName}`;
        document.getElementById('motherName').textContent = `Mother's Name: ${userStudent.motherName}`;
        document.getElementById('attendance').textContent = `Attendance: ${userStudent.attendance}%`;
        document.getElementById('class').textContent = `Class: ${userStudent.class}`;
        document.getElementById('section').textContent = `Section: ${userStudent.section}`;
    } else {
        alert('No student data found for the logged-in user');
    }
}

// Call renderDashboard when the content is loaded
document.addEventListener('DOMContentLoaded', renderDashboard);

// Logout function
function logout() {
    sessionStorage.clear(); // Clear session storage
    window.location.href = 'index.html'; // Redirect to login
}

document.getElementById('logoutButton').addEventListener('click', logout);
document.getElementById("dashboardBT").addEventListener("click",()=>window.location.href='dashboard.html');

document.getElementById("materialsBT").addEventListener("click",()=>window.location.href='materials.html');
document.getElementById("feeBT").addEventListener("click",()=>window.location.href='fees.html');
document.getElementById("academicsBT").addEventListener("click",()=>window.location.href='academics.html');
document.getElementById("ttBT").addEventListener("click",()=>window.location.href='timetable.html');

