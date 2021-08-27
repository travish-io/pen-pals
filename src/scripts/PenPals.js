import { CreateLetter } from "./CreateLetter.js";
import { letterList } from "./LettersFeed.js";

export const PenPals = () => {
  return `<section>
            <h1> Pen Pals </h1>
            <div>${CreateLetter()}</div>
            
            <div> ${letterList()} </div>
    </section>`;
};
