const containers = document.querySelectorAll(".container");  // permet de selectionner tout ce qu'il y a dans la div container

containers.forEach(container => {
    container.addEventListener("click", () => { 
        container.classList.toggle("active");
    })
});