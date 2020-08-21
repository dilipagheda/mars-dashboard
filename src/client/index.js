import { App } from "./js/App";

//import scss files
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/nav.scss";
import "./styles/home.scss";
import "./styles/apod.scss";
import "./styles/marsimages.scss";
import "./styles/loader.scss";

// listening for load event because page should load before any JS is called

window.addEventListener("load", async () => {
  await App();
});

root.addEventListener("render", async (e) => {
  await App(e.detail);
});

window.onpopstate = async () => {
  App();
};
