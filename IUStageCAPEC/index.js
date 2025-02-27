let dataAttack;
const inputSearchID = document.getElementById("id");
const inputSearchName = document.getElementById("Nom");
const inputSearchDescription = document.getElementById("Description");
const inputSearchVA = document.getElementById("VA");
const AllInputSearch = document.querySelectorAll("[data-search]");

const fetchAttack = async () => {
  await fetch(`dataAttack.txt`)
    .then((response) => response.text())
    .then((data) => {
      dataAttack = data;
      dataAttack = JSON.parse(dataAttack);
    });
  attackContainer.innerHTML = dataAttack
    .map((attack) => {
      const description = attack.Description
        ? String(attack.Description)
        : "Aucune description disponible";
      return `<ul class="card"><li>${attack.id}</li><li><div>VA</div><div>${
        attack.VA
      }</div></li><li><div>Titre</div><div>${
        attack.Nom
      }</div></li><li><p>${goodString(description)}</p></li></ul>`;
    })
    .join("");
  document.querySelector(".score").innerHTML = dataAttack.length;
  display();
};

const goodString = (description) => {
  return description
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const inputSearch = async (inputPresent, valueID) => {
  inputPresent.addEventListener("input", () => {
    AllInputSearch.forEach((InputSearch) => {
      if (InputSearch.id != valueID) {
        InputSearch.value = "";
      }
    });
    let valeur = inputPresent.value;
    attackContainer.innerHTML = dataAttack
      .filter((attack) => {
        const attackValue = attack[valueID];
        if (attackValue) {
          return attack[valueID].toLowerCase().includes(valeur.toLowerCase());
        }
      })
      .map((attack) => {
        const description = attack.Description
          ? String(attack.Description)
          : "Aucune description disponible";
        return `<ul class="card"><li>${attack.id}</li><li><div>VA</div><div>${
          attack.VA
        }</div></li><li><div>Titre</div><div>${
          attack.Nom
        }</div></li><li><p>${goodString(description)}</p></li></ul>`;
      })
      .join("");
    document.querySelector(".score").innerHTML = dataAttack.filter((attack) => {
      const attackValue = attack[valueID];
      if (attackValue) {
        return attack[valueID].toLowerCase().includes(valeur.toLowerCase());
      }
    }).length;
  });
};

const display = () => {
  inputSearchID.addEventListener("input", () => {
    inputSearchName.value = "";
    inputSearchDescription.value = "";
    inputSearchVA.value = "";
    if (inputSearchID.value != "") {
      let valeur = inputSearchID.value;
      attackContainer.innerHTML = dataAttack
        .filter((attack) => attack.id == valeur)
        .map((attack) => {
          const description = attack.Description
            ? String(attack.Description)
            : "Aucune description disponible";
          return `<ul class="card"><li>${attack.id}</li><li><div>VA</div><div>${
            attack.VA
          }</div></li><li><div>Titre</div><div>${
            attack.Nom
          }</div></li><li><p>${goodString(description)}</p></li></ul>`;
        })
        .join("");
      document.querySelector(".score").innerHTML = dataAttack.filter(
        (attack) => attack.id == valeur
      ).length;
    } else {
      attackContainer.innerHTML = dataAttack
        .map((attack) => {
          const description = attack.Description
            ? String(attack.Description)
            : "Aucune description disponible";
          return `<ul class="card"><li>${attack.id}</li><li><div>VA</div><div>${
            attack.VA
          }</div></li><li><div>Titre</div><div>${
            attack.Nom
          }</div></li><li><p>${goodString(description)}</p></li></ul>`;
        })
        .join("");
      document.querySelector(".score").innerHTML = dataAttack.length;
    }
  });
  inputSearch(inputSearchName, "Nom");
  inputSearch(inputSearchDescription, "Description");
  inputSearch(inputSearchVA, "VA");
};

fetchAttack();

// let dataAttack;
// const fetchAttack = async () => {
//   try {
//     let response = await fetch("dataAttack.txt"); // Charge le fichier JSON local
//     let text = await response.text();
//     dataAttack = await JSON.parse(text);
//     console.log("Données chargées :", dataAttack);
//   } catch (error) {
//     console.error("Erreur de chargement :", error);
//   }
// };

// fetchAttack();
