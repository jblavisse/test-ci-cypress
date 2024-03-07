export function setupUsers(element) {
  console.log("setupUsers");
  fetch(import.meta.env.VITE_API_URL + "/users")
    .then((res) => res.json())
    .then((users) => {
      console.log(users);
      element.innerHTML = users
        .map(({ firstname, lastname }) => `<li>${firstname} ${lastname}</li>`)
        .join("");
    });
}
