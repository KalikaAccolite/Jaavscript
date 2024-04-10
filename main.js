document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    let student = {};
    formData.forEach(function(value, key) {
        student[key] = value;
    });
    localStorage.setItem(student.rollNo, JSON.stringify(student));
    alert('Student data stored successfully');
    this.reset();
});
document.getElementById('getStudent').addEventListener('submit', function(event) {
    event.preventDefault();
    let rollNo = document.getElementById('rollNumber').value;
    let studentData = localStorage.getItem(rollNo);
    if (studentData) {
        studentData = JSON.parse(studentData);
        let output = document.getElementById('output');
        output.innerHTML = '';
        for (let key in studentData) {
            output.innerHTML += `<strong>${key}:</strong> ${studentData[key]}<br>`;
        }
    } else {
        alert('Student data not found');
    }
});
