const getCallBack = (config) => {
  return function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        console.log(mutation);

        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            config.forEach((configItem) => {
              const { targetProperty, targetValue, actionMethod } = configItem;
              if (
                node[targetProperty] &&
                node[targetProperty] === targetValue
              ) {
                console.log("found " + targetProperty);
                //entire component is loaded at this point
                actionMethod(node);
              }
            });
          }
        });
      }
    });
  };
};

const registerObserver = (node, config) => {
  // create an observer instance
  const observer = new MutationObserver(getCallBack(config));

  // configuration of the observer:
  const observerConfig = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  };

  // pass in the target node, as well as the observer options
  observer.observe(node, observerConfig);
};

export default registerObserver;
