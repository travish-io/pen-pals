import { getLetters, getUsers } from "./provider.js";

const LettersFeed = (letter) => {
  const users = getUsers();
  const foundAuthor = users.find((user) => user.id === letter.authorId);
  const foundRecipient = users.find((user) => user.id === letter.recipientId);
  let html = `<div class="letters-feed">
       <p> Dear ${foundRecipient.name} (${foundRecipient.email}), </br>
            ${letter.text} </br>
            From ${foundAuthor.name} (${foundAuthor.email})
       </p>
    </div>`;
  return html;
};

export const letterList = () => {
  return getLetters()
    .map((letter) => LettersFeed(letter))
    .join("");
};
