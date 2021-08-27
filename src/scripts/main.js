import { fetchLetters, fetchTopics, fetchUsers } from "./provider.js";
import { PenPals } from "./PenPals.js";
const applicationElement = document.querySelector(".penpals");

export const renderApp = () => {
  fetchUsers()
    .then(fetchLetters)
    .then(fetchTopics)
    .then(() => {
      applicationElement.innerHTML = PenPals();
    });
};

renderApp();
applicationElement.addEventListener("stateChanged", (event) => renderApp());
