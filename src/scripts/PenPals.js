import { CreateLetter } from "./CreateLetter.js";

export const PenPals = () => {
  return `<section>
            <h1> Pen Pals </h1>
            <div>${CreateLetter()}</div>
            
            <div> Letters Feed </div>
    </section>`;
};
