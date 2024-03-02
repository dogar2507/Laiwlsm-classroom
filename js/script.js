document.addEventListener('DOMContentLoaded', function() {
    // Get all classroom elements
    var classrooms = document.querySelectorAll('.classroom');

    // Add click event to each classroom
    classrooms.forEach(function(classroom) {
        classroom.addEventListener('click', function() {
            // Extract the classroom id
            var classroomId = this.getAttribute('id');
            // Navigate to the corresponding classroom page
            window.location.href = `classrooms/${classroomId}.html`;
        });
    });
});
function toggleAnswer(questionNumber) {
    var answer = document.getElementById("answer-" + questionNumber);
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}
