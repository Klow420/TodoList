const form = document.querySelector("form");
const inputNom = document.querySelector("#inputNom");
const taskListContainer = document.querySelector("#taskListContainer")

form.addEventListener("submit", (e)=> {
    // la personne a appuié sur entrer dans le champs input
    e.preventDefault(); // annuler l'action par défault car le form recharge la page auto
    const nomTache = inputNom.value;
    const task = document.createElement("div");
    task.classList.add("card", "text-white", "bg-primary", "mb-3", "w-25");
    task.innerHTML = `<div class="card-header">A faire</div>
    <div class="card-body">
      <p> ${nomTache} </p>
    </div>`;
    // en cliquant sur la tâche elle disparait
    task.addEventListener("click", () => {
        task.remove();
    });
    // ajoute un enfant à task
    taskListContainer.appendChild(task);
    inputNom.value = ""; // permet de vider le input 
    localStorage.setItem("taskList", taskListContainer.innerHTML);
   
});
if (localStorage.getItem("taskList")){
    taskListContainer.innerHTML = localStorage.getItem("taskList");
    const cards = document.querySelectorAll(".card");// On récupère toutes les tâches
    // On boucle sur le tableau de tâches
    cards.forEach((task) => {
       // On ajoute un écouteur d'événement sur chaque tâche
        task.addEventListener("click", ()=>{
            task.remove();
        });
    });
}