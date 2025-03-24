const initiatives = [
    { id: 1, name: "Допомога тваринам", volunteersNeeded: 5, completed: false },
    { id: 2, name: "Прибирання парку", volunteersNeeded: 3, completed: false },
    { id: 3, name: "Збір одягу для переселенців", volunteersNeeded: 0, completed: true },
    { id: 4, name: "Підтримка літніх людей", volunteersNeeded: 4, completed: false },
    { id: 5, name: "Озеленення території парку", volunteersNeeded: 6, completed: false }
];

const container = document.getElementById("initiatives");
const myContainer = document.getElementById("myInitiatives");

let i = 0;
while (i < initiatives.length) {
    if (!initiatives[i].completed) {
        const div = document.createElement("div");
        div.classList.add("initiative");
        div.innerHTML = `<h3>${initiatives[i].name}</h3>
            <p>Потрібно волонтерів: <span id="volunteers-${initiatives[i].id}">${initiatives[i].volunteersNeeded}</span></p>
            <button onclick="joinInitiative(${i})" id="btn-${initiatives[i].id}">Приєднатися</button>`;
        container.appendChild(div);
    }
    i++;
}

function joinInitiative(index) {
    const initiative = initiatives[index];
    if (initiative.volunteersNeeded > 0) {
        initiative.volunteersNeeded--;
        document.getElementById(`volunteers-${initiative.id}`).textContent = initiative.volunteersNeeded;
    }
    document.getElementById(`btn-${initiative.id}`).textContent = "Ви приєдналися";
    document.getElementById(`btn-${initiative.id}`).disabled = true;

    const myDiv = document.createElement("div");
    myDiv.classList.add("initiative", "joined");
    myDiv.innerHTML = `<h3>${initiative.name}</h3>`;
    myContainer.appendChild(myDiv);
}