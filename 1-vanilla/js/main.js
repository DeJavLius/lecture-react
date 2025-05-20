import Controller from "./Controller.js";
import Store from "./Store.js";
import storage from "./storage.js";

document.addEventListener("DOMContentLoaded", main);

const tag = '[Main]'
function main() {
  console.log(tag, 'main');
  const store = new Store(storage);

  const views = {
    // TODO
  };

  new Controller(store, views);
}
