import { getAuthors, getRecipients, getTopics, getUsers } from "./provider.js";

const selectAuthor = () => {
  const users = getUsers();
  const authors = getAuthors();

  let html = `<div class="create_letter"><select id="select-author">`;

  if (authors === null) {
    html += `<option>Choose an author...</option>
        ${users
          .map((user) => {
            return `<option value="select--${user.id}">${user.name}</option>`;
          })
          .join("")}
    </select>
    </div>`;
  } else {
    html += `<option>Choose an author...</option>
         ${users
           .map((user) => {
             if (authors === user.id) {
               return `<option selected value="select--${user.id}">${user.name}</option>`;
             } else {
               return `<option value="select--${user.id}">${user.name}</option>`;
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
            return `<option value="select--${user.id}">${user.name}</option>`;
          })
          .join("")}
    </select>
    </div>`;
  } else {
    html += `<option>Choose a recipient...</option>
         ${users
           .map((user) => {
             if (recipients === user.id) {
               return `<option selected value="select--${user.id}">${user.name}</option>`;
             } else {
               return `<option value="select--${user.id}">${user.name}</option>`;
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
        return `<input type="radio" id="topic--${topic.id}" name="name--${topic.topic}" value="value--${topic.topic}">
        <label for="topic--${topic.id}">${topic.topic}</label>`;
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
        <button id="sendLetter">Send</button>
    </div>
    `;
};
