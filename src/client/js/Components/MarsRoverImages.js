import RoverButtons from "./RoverButtons";
import Constants from "./Constants";

const renderItems = (photos) => {
  return photos
    .map((photo) => {
      return `<div class="rover-image-grid-item">
            <div>
                <img src="${photo.src}" alt="">
            </div>
            <div class="camera-name">
                <span>${photo.camera}</span>
            </div>
        </div>
        `;
    })
    .join("");
};

const renderMarsRoverImages = (selectedRover) => {
  return (photos, manifest) => {
    return `
                <div class="mars-images-container">
                <div class="goback-button">
                    <button>Go back to Home</button>
                </div>
                <div class="top">
                    <h1 class="header">Mars rover images</h1>
                    <h2 class="subheader">Please select the rover to view latest mars images captured from it</h2>
                    ${RoverButtons(selectedRover)}
                </div>
                <div class="rover-info ">
                    <div>
                        <span>Launch Date</span>
                        <span class="value">${manifest.launch_date}</span>
                    </div>
                    <div>
                        <span>Landing Date</span>
                        <span class="value">${manifest.landing_date}</span>
                    </div>
                    <div>
                        <span>Status</span>
                        <span class="value">${manifest.status}</span>
                    </div>
                    <div>
                        <span>Earth date for captured photos</span>
                        <span class="value">${manifest.max_date}</span>
                    </div>  
                </div>
                <div class="rover-images-grid">
                    ${renderItems(photos)}
                </div>            
                
            </div>
        `;
  };
};

const MarsRoverImages = async (props, updateStore) => {
  let state = updateStore("marsroverimages");
  const selectedRover = state.selectedRover;

  const response = await fetch(
    `${Constants.baseApiUrl}photos?rover=${selectedRover}`
  ).then((res) => res.json());

  state = updateStore("marsroverimages", {
    data: response,
  });

  const photos = state.data.photos;
  const manifest = state.data.manifest;

  return renderMarsRoverImages(selectedRover)(photos, manifest);
};

export default MarsRoverImages;
