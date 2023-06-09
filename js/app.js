//function to create navigation menu dynamically
const buildNavbar = (links, parent)=>{
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = link.text;
        a.href = link.url;
        li.appendChild(a);
        parent.appendChild(li); //adding list of links to navbar
    }
}

//adding links to navbar (for desktop)
const desktop_links = [
    {text: "Home", url: "#home"},
    {text: "Features", url: "#features"},
    {text: "Services", url: "#services"},
    {text: "Pricing", url: "#pricing"},
]

const navbar = document.querySelector('.nav_items');

buildNavbar(desktop_links, navbar);

//building mobile menu
const nav = document.querySelector('#navbar');
const mobile_div  = document.createElement('div');
const navList = document.createElement('ul');
const mobile_links = [ `<a href="#home">Home</a>`, `<a href="#features">Features</a>`,`<a href="#services">Services</a>`, `<a href="#pricing">Pricing</a>`];

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
const layer = document.querySelector('.bg_layer');

function toggleMenu(){
    mobile_div.classList.toggle('sliding_menu');
    layer.classList.toggle('layer_activate');
    document.body.classList.toggle('no_scrolling');
    ham.parentElement.classList.toggle('open');
}

ham.addEventListener('click', ()=>{
    toggleMenu();
})

//Closing mobile menu when a link is clicked
const all_mobile_links = document.querySelectorAll('.mobile_menu li a');

all_mobile_links.forEach(singleLink => {
    singleLink.addEventListener('click', (e)=>{
        e.preventDefault();
        toggleMenu();
        window.location.href = singleLink.href;
    })
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
        window.location.href = '/Udacity-Landing-Page/';
    })
}


//Scroll Pricing cards to the middle card by default
const cardsContainerWrapper = document.querySelector('.pricing_cards_wrapper');
const cardsContainer = document.querySelector('#pricing_cards');
const middleCard = Math.floor(cardsContainer.childElementCount/2);
const middleCardElement = cardsContainer.children[middleCard];

const middleCardPosition = middleCardElement.offsetLeft + middleCardElement.offsetWidth / 2;
const containerWidth = cardsContainer.offsetWidth;
const scrollOffset =  middleCardPosition - containerWidth / 2;

cardsContainerWrapper.scrollTo({
    left: scrollOffset,
    behavior: 'smooth',
});

//building footer navigation
const footer_navigation = document.querySelector('.footer_links');
buildNavbar(desktop_links, footer_navigation);


//sets active states
function setActiveState(){
    const home = document.getElementById('home');
    const features = document.getElementById('features');
    const services = document.getElementById('services');
    const pricing = document.getElementById('pricing');
    const sectionItems = [home, features, services, pricing];

    const setLinks = document.querySelectorAll('.nav_items li a');

    sectionItems.forEach(section => {
        let Offset = section.getBoundingClientRect();
        if(Offset.top <= 0 + Offset.bottom / 8 ){
            setLinks.forEach(setLink => {
                setLink.parentElement.classList.remove('active');
                document.querySelector(`.nav_items li a[href *= ${section.id}]`).parentElement.classList.add('active');
            })
        }
    })
}

window.addEventListener('scroll', setActiveState);

//hides navbar when user isn't scrolling
let scrollTimer;
const fixed_navbar = document.querySelector('.fixed_nav');
const scroll_button = document.querySelector('.scroll_to_top');

function hideScrollButton() {
    if(scroll_button.classList.contains('show_scroll_btn')){
        scroll_button.classList.remove('show_scroll_btn');
        scroll_button.classList.add('hide_scroll_btn');
    }
}

function showScrollButton() {
    let flag = window.scrollY > window.visualViewport.height;
    if(flag) {
        scroll_button.classList.add('show_scroll_btn');
    }
    if(scroll_button.classList.contains('hide_scroll_btn')){
        scroll_button.classList.remove('hide_scroll_btn');
    }
}

function hideNavbar() {
    hideScrollButton(); //hides scroll to top button
    let flag = !ham.parentElement.classList.contains('open') && window.scrollY > 0 && fixed_navbar.classList.contains('show_navbar'); //some checks to prevent navbar from hiding if any of these condition is false
    if(flag){
        fixed_navbar.classList.remove('show_navbar');
        fixed_navbar.classList.add('hide_navbar');
    }
}

function showNavbar() {
    showScrollButton(); //shows scroll to top button
    if(fixed_navbar.classList.contains('hide_navbar')){
        fixed_navbar.classList.remove('hide_navbar');
    }
    fixed_navbar.classList.add('show_navbar');
}

function handleNavbar() {
    clearTimeout(scrollTimer);
    showNavbar();
    scrollTimer = setTimeout(hideNavbar, 2000);
}

window.addEventListener('scroll', handleNavbar);

//scroll to top button
scroll_button.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})