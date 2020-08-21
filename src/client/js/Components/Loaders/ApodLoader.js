const ApodLoader = () => {
  return `
        <div class="apod-container">
            <div class="top">
                <button class="goback-button">Back to Home</button>
                <div class="top-titles">
                    <h1 class="title">Astronomical picture of the day!</h1>
                </div>
            </div>
            <div class="loader-container">
                <div class="loader" id="loader"></div>
            </div>
        </div>
    `;
};

export default ApodLoader;
