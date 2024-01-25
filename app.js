const questions = document.querySelectorAll(".question");  // permet de selectionner tout ce qu'il y a dans la div question

questions.forEach((question) => {
    question.addEventListener("click", () => { 
        question.classList.toggle("active");
    })
});