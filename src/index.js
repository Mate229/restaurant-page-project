import { initialLoad } from "./initial-page-load";
import menuLoad from './menu-load';
import aboutPageLoad from "./about-page-load";

import './style.css';

initialLoad();
const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
    menuButton.disabled = true;
    homeButton.disabled = false;
    aboutButton.disabled = false;
    menuLoad();
});

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    menuButton.disabled = false;
    aboutButton.disabled = false;
    homeButton.disabled = true;
    initialLoad();
});

const aboutButton = document.querySelector('#about');
aboutButton.addEventListener('click', () => {
    menuButton.disabled = false;
    homeButton.disabled = false;
    aboutButton.disabled = true;
    aboutPageLoad();
});

console.log('Restaurant');