const RoverButtons = (selectedRover) => {
    const getActiveClassName = (roverid, selectedRover) => {
        return roverid === selectedRover ? 'active': ''
    }
    
    return `
        <div class="rover-buttons">
            <button id="curiosity" class='${getActiveClassName("curiosity",selectedRover)}'}>Curiosity</button>
            <button id="opportunity" class='${getActiveClassName("opportunity",selectedRover)}'}>Opportunity</button>
            <button id="spirit" class='${getActiveClassName("spirit",selectedRover)}'>Spirit</button>
        </div>
       `
}

export default RoverButtons