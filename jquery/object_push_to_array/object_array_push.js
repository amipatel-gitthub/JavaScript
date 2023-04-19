$(document).ready(function() {
  let studentFormData = [];

  $('#studentForm').on('submit', function(e) {
    e.preventDefault();
    let studentName = $('#name').val();
    let studentAge = $('#age').val();
    let studentGrade = $('#grade').val();

    let studentFormObj = {
      name: studentName,
      age: studentAge,
      grade: studentGrade
    };

    studentFormData.push(studentFormObj);

    console.log(studentFormData);
  });
});