import Home from './Components/Home'
import Apod from './Components/Apod'
import ApodLoader from './Components/Loaders/ApodLoader'
import MarsRoverImages from './Components/MarsRoverImages'
import MarsRoverImagesLoader from './Components/Loaders/MarsRoverImagesLoader'
import {Map, fromJS} from 'immutable'
import registerObserver from './DOMObserver'
import getObserverConfig from './Config'
import NotFound from './Components/NotFound'

// select the target node
const root = document.querySelector('#root');

// store's initial state
let store = Map({})

// function to update the store if there is a new data
function updateStore(key, value) {
    if(key && !value) {
        return store.toJS()[key]
    }
    const newStore = store.setIn([key], fromJS(value))
    if(!newStore.equals(store)){
        store = newStore
    }
    return store.toJS()[key]
}

// a main App function which loads correct view based on the url's hash value
export const App =  async (props) => {
    
    const hash = window.location.hash
    if(hash === '' && window.location.pathname === '/'){
        root.innerHTML =  Home()
    }else if(hash === '#apod') {
        if(props && props.apodHtml) {
            root.innerHTML = props.apodHtml
        }else{
            root.innerHTML = ApodLoader()
            const apodHtml = await Apod(updateStore)
            App({apodHtml})
        }
    }else if(hash === '#marsroverimages') {
        if(props && props.marsHtml) {
            root.innerHTML = props.marsHtml    
        }else{
            root.innerHTML = MarsRoverImagesLoader(props, updateStore)
            const marsHtml =  await MarsRoverImages(props, updateStore)
            App({marsHtml})
        }
    }else {
        root.innerHTML =  NotFound()
    }
}

registerObserver(root, getObserverConfig(root));



