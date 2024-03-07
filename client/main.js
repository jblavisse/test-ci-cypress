import "./style.css";
import { setupUsers } from "./users.js";

document.querySelector("#app").innerHTML = `<ul id="users"></ul>`;

setupUsers(document.querySelector("#users"));
