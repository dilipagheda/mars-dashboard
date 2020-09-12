import registerObserver from "./DOMObserver";
import Constants from "./Components/Constants";

const getObserverConfig = (target) => {
  const observerConfig = [
    {
      targetProperty: "className",
      targetValue: "wrapper",
      actionMethod: function (node) {
        const apodButton = document.getElementById("apod-button");
        const marsRoverImagesButton = document.getElementById(
          "mars-images-button"
        );

        apodButton.addEventListener("click", async () => {
          history.pushState({}, "", "#apod");
          const event = new Event("render");
          target.dispatchEvent(event);
        });

        marsRoverImagesButton.addEventListener("click", async () => {
          history.pushState({}, "", "#marsroverimages");
          const event = new Event("render");
          target.dispatchEvent(event);
        });
      },
    },
    {
      targetProperty: "className",
      targetValue: "apod-container",
      actionMethod: function (node) {
        const goBackButton = document.querySelector(".goback-button");

        goBackButton.addEventListener("click", async () => {
          history.pushState({}, "", Constants.rootPath);
          const event = new Event("render");
          target.dispatchEvent(event);
        });
      },
    },
    {
      targetProperty: "className",
      targetValue: "mars-images-container",
      actionMethod: function (node) {
        const curiosityButton = document.getElementById("curiosity");
        const opportunityButton = document.getElementById("opportunity");
        const spiritButton = document.getElementById("spirit");
        const goBackButton = document.querySelector(".goback-button");

        goBackButton.addEventListener("click", async () => {
          history.pushState({}, "", Constants.rootPath);
          const event = new Event("render");
          target.dispatchEvent(event);
        });

        curiosityButton.addEventListener("click", async () => {
          const event = new CustomEvent("render", {
            detail: { rover: "curiosity" },
          });
          target.dispatchEvent(event);
        });
        opportunityButton.addEventListener("click", async () => {
          const event = new CustomEvent("render", {
            detail: { rover: "opportunity" },
          });
          target.dispatchEvent(event);
        });
        spiritButton.addEventListener("click", async () => {
          const event = new CustomEvent("render", {
            detail: { rover: "spirit" },
          });
          target.dispatchEvent(event);
        });
      },
    },
  ];

  return observerConfig;
};

export default getObserverConfig;
