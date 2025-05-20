import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
  constructor() {
    console.log(tag, "constructor");

    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);

    this.showResetButton(false);
    this.bindEvents();
  }

  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }

  bindEvents() {
    on(this.inputElement, "keyup", () => this.handleKeyup());
    this.on("submit", (event) => this.handleSubmit(event));
    on(this.resetElement, "onClick", () => {
      this.handleKeyup(true)
      this.on("reset", (event) => this.handleSubmit(event));
    });
  }

  handleKeyup(isReset = false) {
    const { value } = this.inputElement;

    if (isReset) {
      value = "";
      this.showResetButton(false);
    } else {
      this.showResetButton(value.length > 0);
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const { value } = this.inputElement;
    this.emit("@submit", { value });
  }
}
