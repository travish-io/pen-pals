import {
  createNewLetter,
  getAuthors,
  getLetters,
  getRecipients,
  getTopics,
  getUsers,
} from "./provider.js";
const applicationElement = document.querySelector(".penpals");

// make one click event listener for the send button that builds the transient object to include author, letter, recipient and topic
applicationElement.addEventListener("click", (click) => {
  if (click.target.id === "send--letter") {
    const author = parseInt(
      applicationElement.querySelector("#select-author option:checked").value
    );
    const recipient = parseInt(
      applicationElement.querySelector("#select-recipient option:checked").value
    );
    const topic = parseInt(
      applicationElement.querySelector("input[name=select-topic]:checked").value
    );
    const letterText = applicationElement.querySelector(
      "textarea[name='letter-text']"
    ).value;
    console.log(author);
    console.log(recipient);
    console.log(topic);
    console.log(letterText);

    const dataToAPI = {
      authorId: author,
      recipientId: recipient,
      text: letterText,
      topicId: topic,
      timestamp: Date.now(),
    };
    if (
      dataToAPI.authorId === "" ||
      dataToAPI.recipientId === "" ||
      dataToAPI.text === ""
    ) {
      window.alert("Please fill in all fields");
    } else {
      createNewLetter(dataToAPI);
    }
    // const letters = getLetters();
  }
});

const selectAuthor = () => {
  const users = getUsers();
  const authors = getAuthors();

  let html = `<div class="create_letter"><select id="select-author">`;

  if (authors === null) {
    html += `<option>Choose an author...</option>
        ${users
          .map((user) => {
            return `<option value="${user.id}">${user.name}</option>`;
          })
          .join("")}
    </select>
    </div>`;
  } else {
    html += `<option>Choose an author...</option>
         ${users
           .map((user) => {
             if (authors === user.id) {
               return `<option selected value="${user.id}">${user.name}</option>`;
             } else {
               return `<option value="${user.id}">${user.name}</option>`;
             }
           })
           .join("")}
    </select>
    </div>`;
  }
  return html;
};

const selectRecipient = () => {
  const users = getUsers();
  const recipients = getRecipients();
  let html = `<div class="create_letter"><select id="select-recipient">`;

  if (recipients === null) {
    html += `<option>Choose a recipient...</option>
        ${users
          .map((user) => {
            return `<option value="${user.id}">${user.name}</option>`;
          })
          .join("")}
    </select>
    </div>`;
  } else {
    html += `<option>Choose a recipient...</option>
         ${users
           .map((user) => {
             if (recipients === user.id) {
               return `<option selected value="${user.id}">${user.name}</option>`;
             } else {
               return `<option value="${user.id}">${user.name}</option>`;
             }
           })
           .join("")}
           
    </select>
    </div>`;
  }
  return html;
};

const letterBody = () => {
  return `
  <section class="newLetter">
    <h3> Letter </h3>
      <textarea class="newLetter__description" name="letter-text" placeholder="Tell us a story..."></textarea>
  </section>
  `;
};

const chooseTopic = () => {
  const topics = getTopics();
  return `
  <h4>Choose a topic</h4>
  <div>
    ${topics
      .map((topic) => {
        return `<input type="radio" id="select-topic" name="select-topic" value="${topic.id}">
        <label for="${topic.id}">${topic.topic}</label>`;
      })
      .join("")}
  </div>`;
};

export const CreateLetter = () => {
  return `
        <div class="newletter__item">
            ${selectAuthor()}
        </div>
        <div class="newletter__item">
            ${letterBody()}
        </div>
        <div class="newletter__item">
            ${chooseTopic()}
        </div>
        <div class="newletter__item">
            ${selectRecipient()}
        </div>
        <div>
        <button id="send--letter">Send</button>
    </div>
    `;
};
