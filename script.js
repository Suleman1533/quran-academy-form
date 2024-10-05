// Get the necessary DOM elements
const studentCountSelect = document.getElementById('student_count');
const studentsFormsContainer = document.getElementById('studentsForms');

// Function to generate student forms dynamically
function generateStudentForms(count) {
  // Clear any existing student forms
  studentsFormsContainer.innerHTML = '';

  // Loop to generate the specified number of student forms
  for (let i = 1; i <= count; i++) {
    // Create a div for the student form
    const studentFormDiv = document.createElement('div');
    studentFormDiv.classList.add('student-form');

    // Add student title
    const studentTitle = document.createElement('h2');
    studentTitle.textContent = `Student ${i}`;
    studentFormDiv.appendChild(studentTitle);

    // Add fields for student name
    const studentNameDiv = document.createElement('div');
    studentNameDiv.classList.add('form-group');
    studentNameDiv.innerHTML = `
      <label for="student_name_${i}">Student Name:</label>
      <input type="text" id="student_name_${i}" name="student_name_${i}" placeholder="Enter Student Name" required>
    `;
    studentFormDiv.appendChild(studentNameDiv);

    // Add fields for number of classes per week
    const classesPerWeekDiv = document.createElement('div');
    classesPerWeekDiv.classList.add('form-group');
    classesPerWeekDiv.innerHTML = `
      <label for="classes_per_week_${i}">Classes Per Week:</label>
      <select id="classes_per_week_${i}" name="classes_per_week_${i}" required>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    `;
    studentFormDiv.appendChild(classesPerWeekDiv);

    // Add fields for lesson
    const lessonDiv = document.createElement('div');
    lessonDiv.classList.add('form-group');
    lessonDiv.innerHTML = `
      <label for="lesson_${i}">Lesson:</label>
      <select id="lesson_${i}" name="lesson_${i}" required>
        <option value="Norani Qaida">Norani Qaida</option>
        <option value="Madni Qaida">Madni Qaida</option>
        <option value="Quran Foundation">Quran Foundation</option>
        <option value="Basic Quran">Basic Quran</option>
        <option value="Tajweed Quran">Tajweed Quran</option>
      </select>
    `;
    studentFormDiv.appendChild(lessonDiv);

    // Add fields for additional material
    const additionalMaterialDiv = document.createElement('div');
    additionalMaterialDiv.classList.add('form-group');
    additionalMaterialDiv.innerHTML = `
      <label for="additional_material_${i}">Additional Material:</label>
      <select id="additional_material_${i}" name="additional_material_${i}" required>
        <option value="Duas">Duas</option>
        <option value="Kalmas">Kalmas</option>
        <option value="Namaz">Namaz</option>
        <option value="Stories">Stories</option>
      </select>
    `;
    studentFormDiv.appendChild(additionalMaterialDiv);

    // Add fields for progress comments
    const progressDiv = document.createElement('div');
    progressDiv.classList.add('form-group');
    progressDiv.innerHTML = `
      <label for="progress_comments_${i}">Progress Comments:</label>
      <input type="text" id="progress_comments_${i}" name="progress_comments_${i}" placeholder="Enter Progress Comments">
    `;
    studentFormDiv.appendChild(progressDiv);

    // Append the student form to the container
    studentsFormsContainer.appendChild(studentFormDiv);
  }
}

// Event listener for the student count dropdown
studentCountSelect.addEventListener('change', function() {
  const studentCount = parseInt(this.value);
  generateStudentForms(studentCount);
});
