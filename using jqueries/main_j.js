$(document).ready(function() {
    $('#studentForm').submit(function(event) {
        event.preventDefault();
        let formData = $(this).serializeArray();
        let student = {};
        $.each(formData, function(_, field) {
            student[field.name] = field.value;
        });
        localStorage.setItem(student.rollNo, JSON.stringify(student));
        alert('Student data stored successfully');
        $('#studentForm')[0].reset();
    });
    $('#getStudent').submit(function(event) {
        event.preventDefault();
        let rollNo = $('#rollNumber').val();
        let studentData = localStorage.getItem(rollNo);
        if (studentData) {
            studentData = JSON.parse(studentData);
            let output = $('#output');
            output.empty();
            $.each(studentData, function(key, value) {
                output.append(`<strong>${key}:</strong> ${value}<br>`);
            });
        } else {
            alert('Student data not found');
        }
    });
});