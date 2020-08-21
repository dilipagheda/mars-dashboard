import RoverButtons from '../RoverButtons'

const ShowLoader = (type) => {
    const renderLoader = () => {
        return `
        <div class="loader-container">
            <div class="loader" id="loader"></div>
        </div>
        `
    }

    if(type === 'apod') {
        return () => {
            return `
            <div class="apod-container">
                <div class="top">
                    <button class="goback-button">Back to Home</button>
                    <div class="top-titles">
                        <h1 class="title">Astronomical picture of the day!</h1>
                    </div>
                </div>
                ${renderLoader()}
            </div>
            `
        }
    }
    else if(type === 'marsrover') 
    {
        return (selectedRover) => {
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
                    <div class="loader-container">
                        <div class="loader" id="loader"></div>
                    </div>
                </div>
        `;
    }
}
}

export default ShowLoader