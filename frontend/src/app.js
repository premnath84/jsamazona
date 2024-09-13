
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import { parseRequestUrl } from './utils.js';
import Error404Screen from './screens/Error404Screen.js';

// create routes object with url as key and screen as value.
const routes ={
    '/': HomeScreen,
    '/product/:id': ProductScreen,
};


const router = ()=>{
    const request = parseRequestUrl();
    console.log("load thorugh router")

    //define parseUrl. url is constructed using window location split components (after #)
    const parseUrl = 
        (request.resource? `/${request.resource}`: '/')+
        (request.id? '/:id':'')+
        (request.verb ?`/${request.verb}`: '');

    //set screen from routes object basis parse url as key. if key doesn't match set error page
    const screen = routes[parseUrl]? routes[parseUrl]: Error404Screen;

    const main = document.getElementById("main-container");
    //main.innerHTML = HomeScreen.render();
    main.innerHTML = screen.render();
    
};
//load homepage the very first time
window.addEventListener('load', router);

//render relevant screen on the event of hash change
window.addEventListener('hashchange', router);