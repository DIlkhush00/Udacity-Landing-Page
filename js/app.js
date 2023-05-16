//adding links to navbar (for desktop)
const desktop_links = [
    {text: "Features", url: "#features"},
    {text: "Services", url: "#services"},
    {text: "Pricing", url: "#pricing"},
    {text: "Contacts", url: "#contacts"}
]

const navbar = document.querySelector('.nav_items');

for (let i = 0; i < desktop_links.length; i++) {
    const link = desktop_links[i];
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = link.text;
    a.href = link.url;
    li.appendChild(a);
    navbar.appendChild(li); //adding list of links to navbar
}

//building mobile menu
const nav = document.querySelector('#navbar');
const mobile_div  = document.createElement('div');
const navList = document.createElement('ul');
const mobile_links = [`<a href="#features">Features</a>`,`<a href="#services">Services</a>`, `<a href="#pricing">Pricing</a>`, `<a href="#contacts">Contacts</a>`]

mobile_div.classList.add('mobile_menu_container');
navList.classList.add('mobile_menu');


for (html of mobile_links) {

    const link = document.createElement('li');
    link.innerHTML = html;
    navList.appendChild(link);
}
mobile_div.append(navList);
nav.append(mobile_div);


//toggling hamburger menu
const ham = document.querySelector('.btn_ham');
ham.addEventListener('click', ()=>{
    mobile_div.classList.toggle('sliding_menu');
    document.body.classList.toggle('no_scrolling') //reconsider it
    ham.parentElement.classList.toggle('open');
})


//Making sure mobile menu don't appear on desktop
const breakpoint = window.matchMedia('(min-width: 800px)');
function handleScreenResize(e) {
    if (e.matches && mobile_div.classList.contains('sliding_menu')) {
      mobile_div.classList.remove('sliding_menu');
    }
}

handleScreenResize(breakpoint);
breakpoint.addEventListener('change', handleScreenResize);


// reloads the webpage when clicking on the logo
const logos = document.querySelectorAll('.reload_logo');

for (const logo of logos) {
    logo.addEventListener('click', ()=>{
        window.location.href = '/';
    })
}


//Scroll Pricing cards to the middle card by default
const cardsContainerWrapper = document.querySelector('.pricing_cards_wrapper');
const cardsContainer = document.querySelector('#pricing_cards');
const middleCard = Math.floor(cardsContainer.childElementCount/2);
const middleCardElement = cardsContainer.children[middleCard];
const middleCardPosition = middleCardElement.offsetLeft + middleCardElement.offsetWidth / 2;
const containerWidth = cardsContainer.offsetWidth;
const scrollOffset = containerWidth - middleCardPosition;

cardsContainerWrapper.scrollTo({
    left: scrollOffset,
    behavior: 'smooth',
});

//building footer navigation
const footer_navigation = document.querySelector('.footer_links');

for (let i = 0; i < desktop_links.length; i++) {
    const link = desktop_links[i];
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = link.text;
    a.href = link.url;
    li.appendChild(a);
    footer_navigation.appendChild(li); //adding list of links to footer
}