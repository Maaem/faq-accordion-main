// Transition pour dérouler les questions
const questions = document.querySelectorAll(".question");  // permet de selectionner tout ce qu'il y a dans la div question

questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");
    })
});

// Modifier l'image
// const images = document.querySelectorAll(".image");

// images.forEach((image) => {
//     image.addEventListener("click", () => {
//         image.src = "/assets/images/icon-minus.svg";
//     })
// });

// Modifier l'image

// Supposons que img_1 et img_2 sont les chemins vers vos images
const img_1 = "/assets/images/icon-plus.svg";
const img_2 = "/assets/images/icon-minus.svg";

// Par défaut, chaque image commence avec img_1
let currentImage = img_1;

// Sélectionnez toutes vos images et ajoutez un gestionnaire d'événements à chacune d'elles
const images = document.querySelectorAll('img');

images.forEach((image) => {
    // Ajoutez un gestionnaire d'événements pour le clic sur chaque image
    image.addEventListener("click", () => {
        // Vérifiez l'état actuel de l'image et changez-la en conséquence
        if (currentImage === img_1) {
            image.src = img_2;
            currentImage = img_2;
        } else {
            image.src = img_1;
            currentImage = img_1;
        }
    });
});
