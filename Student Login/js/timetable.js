function logout() {
            // Redirect to index.html
            window.location.href = 'index.html';
        }

// Event listener for the logout button
document.getElementById('logoutButton').addEventListener('click', logout);

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
