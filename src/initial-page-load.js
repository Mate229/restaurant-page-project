import restImage from './keesha-s-kitchen-9VKY7SXjHXE-unsplash.jpg';

export function initialLoad() {
    const content = document.querySelector('#content');

    const image = document.createElement('img');
    image.src = restImage;
    image.id = 'present-img'

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
    contactDiv.innerHTML = '<h3>Contact</h3> <p>01345678678</p>'
    infoSections.append(locationDiv, businessHoursDiv, contactDiv);
    infoSections.id = 'infos'

    content.append(image, descrip, infoSections)
}