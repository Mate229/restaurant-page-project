import { initialLoad } from "./initial-page-load";
import menuLoad from './menu-load';

import './style.css';

initialLoad();
const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
    menuButton.disabled = true;
    homeButton.disabled = false;
    menuLoad();
});

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    menuButton.disabled = false;
    homeButton.disabled = true;
    initialLoad();
});

console.log('Restaurant');