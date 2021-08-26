const API = "http://localhost:8088";
const applicationElement = document.querySelector(".penpals");

const applicationState = {
  users: [],
  authors: [],
  recipients: [],
  letters: [],
  topics: [],
  feed: {
    chosenAuthor: null,
    chosenRecipient: null,
    chosenTopic: null,
  },
};

// Fetchers
export const fetchUsers = () => {
  return fetch(`${API}/users`)
    .then((response) => response.json())
    .then((user) => {
      applicationState.users = user;
    });
};
export const fetchAuthors = () => {
  return fetch(`${API}/authors`)
    .then((response) => response.json())
    .then((author) => {
      applicationState.authors = author;
    });
};
export const fetchLetters = () => {
  return fetch(`${API}/letters`)
    .then((response) => response.json())
    .then((letter) => {
      applicationState.letters = letter;
    });
};
export const fetchTopics = () => {
  return fetch(`${API}/topics`)
    .then((response) => response.json())
    .then((topic) => {
      applicationState.topics = topic;
    });
};
export const fetchRecipients = () => {
  return fetch(`${API}/recipients`)
    .then((response) => response.json())
    .then((recipient) => {
      applicationState.recipients = recipient;
    });
};

// Getters
export const getUsers = () => {
  return applicationState.users.map((user) => ({ ...user }));
};
export const getAuthors = () => {
  return applicationState.feed.chosenAuthor;
};
export const getLetters = () => {
  return applicationState.letters.map((letter) => ({ ...letter }));
};
export const getTopics = () => {
  return applicationState.topics.map((topic) => ({ ...topic }));
};
export const getRecipients = () => {
  return applicationState.feed.chosenRecipient;
};
export const getFeed = () => {
  return applicationState.feed.map((feed) => ({ ...feed }));
};

// Setters
export const setAuthor = (user) => {
  return (applicationState.chosenAuthor = user);
};
export const setRecipient = (user) => {
  return (applicationState.chosenRecipient = user);
};
export const setNewLetter = (item) => {
  return (applicationState.letters = item);
};
export const setTopic = (item) => {
  return (applicationState.chosenTopic = item);
};

// Posts
export const createNewLetter = (object) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  };
  return fetch(`${API}/letters`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
    });
};
