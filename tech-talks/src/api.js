const BASE = import.meta.env.VITE_API_URL;

export const getExperiences = () => fetch(`${BASE}/experiences`).then(res => res.json());
export const postExperience = (form) =>
  fetch(`${BASE}/experiences`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

export const getTips = () => fetch(`${BASE}/tips`).then(res => res.json());
export const postTip = (text) =>
  fetch(`${BASE}/tips`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

export const getQuestions = () => fetch(`${BASE}/questions`).then(res => res.json());
export const postQuestion = (text) =>
  fetch(`${BASE}/questions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
