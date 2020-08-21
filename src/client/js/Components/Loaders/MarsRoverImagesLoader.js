import ShowLoader from "./ShowLoader";

const MarsRoverImagesLoader = (props, updateStore) => {
  let state = updateStore("marsroverimages", {
    selectedRover: props ? props.rover : "curiosity",
  });
  const selectedRover = state.selectedRover;

  return ShowLoader("marsrover")(selectedRover);
};

export default MarsRoverImagesLoader;
