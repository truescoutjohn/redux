export const getUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response => response.json());
