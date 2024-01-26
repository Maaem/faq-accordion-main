// Transition pour dérouler les questions
const questions = document.querySelectorAll(".question");  // permet de selectionner tout ce qu'il y a dans la div question

questions.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle("active");
    })
});

// Modifier l'image

//  img_1 et img_2 = chemin vers les images
const img_1 = "assets/images/icon-plus.png";
const img_2 = "./assets/images/icon-minus.svg";

// Par défaut, chaque image commence avec img_1
let currentImage = img_1;

// Sélectionne toutes les balises img et ajoute un gestionnaire d'événements à chacune d'elles
const images = document.querySelectorAll('img');

images.forEach((image) => {
    // Ajoutez un gestionnaire d'événements pour le clic sur chaque image
    image.addEventListener("click", () => {
        // Vérification de l'état actuel de l'image et change en conséquence
        if (currentImage === img_1) {
            image.src = img_2;
            currentImage = img_2;
        } else {
            image.src = img_1;
            currentImage = img_1;
        }
    });
});
