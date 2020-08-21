const renderMedia = (state) => {
  if (state.media_type === "image") {
    return `
         <div class='image-container'>
            <img src="${state.url}" alt="">
         </div>
        `;
  }
  if (state.media_type === "video") {
    return `
            <div class='video-container'>
                <iframe
                    src='${state.url}'>
                </iframe>
            </div>
        `;
  }
};

const renderApod = (state) => {
  return `
    <div class="apod-container">
        <div class="top">
            <button class="goback-button">Back to Home</button>
            <div class="top-titles">
                <h1 class="title">Astronomical picture of the day!</h1>
                <h2 class="subtitle">Today is ${state.date}</h2>
            </div>
        </div>
        <div class="apod-media-container">
            ${renderMedia(state)}
            <div class="apod-media-details">
                <h2>About the ${state.media_type}</h2>
                <p>
                    ${state.explanation}
                </p>
            </div>
        </div>
    </div>
`;
};

const Apod = async (updateStore) => {
  const { image } = await fetch(`http://localhost:3000/apod`).then((res) =>
    res.json()
  );

  const state = updateStore("apod", image);

  return renderApod(state);
};

export default Apod;
