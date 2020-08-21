
const Home = () => {
    return `
    <div class="wrapper">
        <div class="home-container">
            <h1 class="header-text">Let's explore space!</h1>
            <p class="introduction-text">This is a fun and educational app which allows to explore space! You can view astronomical picture of the day and view the latest images taken by Mars Rovers using different cameras.</p>
            <p class="introduction-text">Have fun and enjoy!!</p>
            <div class="menu">
                <ul>
                    <li>
                        <button id="apod-button">
                            Astronomical picture of the day
                        </button>
                    </li>
                    <li>
                        <button id="mars-images-button">
                            Mars rover images    
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

export default Home