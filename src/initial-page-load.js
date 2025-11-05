import restImage from './keesha-s-kitchen-9VKY7SXjHXE-unsplash.jpg';

export function initialLoad() {
    const content = document.querySelector('#content');
    content.classList.remove('menu');
    content.classList.add('home');
    content.classList.remove('about');

    content.innerHTML = '';

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper');

    const image = document.createElement('img');
    image.src = restImage;
    image.id = 'present-img'

    const creditPhoto = document.createElement('h5');
    creditPhoto.innerHTML = `Photo by <a href="https://unsplash.com/fr/@keeshasskitchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Keesha's Kitchen</a> on <a href="https://unsplash.com/fr/photos/un-bol-de-nourriture-9VKY7SXjHXE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>`;
    creditPhoto.classList.add('photo-credit');

    imageWrapper.append(image, creditPhoto);


    const descrip = document.createElement('div');
    const descTitle = document.createElement('h1');
    descTitle.textContent = 'MIX-FOOD';
    const descBody = document.createElement('p');
    descBody.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, unde. Error, in architecto harum ad, delectus a iusto explicabo distinctio deserunt quam sint sit vel amet laudantium, minima accusamus voluptas!';
    descrip.append(descTitle, descBody);
    descrip.id = 'description'

    const infoSections = document.createElement('div');
    const locationDiv = document.createElement('div');
    locationDiv.innerHTML = '<h3>Location</h3> <p>Adjarra, Agatha</p>';
    const businessHoursDiv = document.createElement('div');
    businessHoursDiv.innerHTML = '<h3>Hours</h3> <p>Thursday to Sunday: 11am to 9pm</p>';
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = '<h3>Contact</h3> <p>01345678678</p> <p>mixfood@nomail.fake</p>'
    infoSections.append(locationDiv, businessHoursDiv, contactDiv);
    infoSections.id = 'infos'

    content.append(imageWrapper, descrip, infoSections)
}