//adding links to navbar (for desktop)
const desktop_links = [
    {text: "Features", url: "#features"},
    {text: "Pricing", url: "#pricing"},
    {text: "Reviews", url: "#reviews"},
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
    navbar.appendChild(li);
}

//building mobile menu
const nav = document.querySelector('#navbar');
const div  = document.createElement('div');
const navList = document.createElement('ul');
const mobile_links = [`<a href="#features">Features</a>`, `<a href="#pricing">Pricing</a>`, `<a href="#reviews">Reviews</a>`, `<a href="#contacts">Contacts</a>`]

div.classList.add('mobile_menu_container');
navList.classList.add('mobile_menu');


for (html of mobile_links) {

    const link = document.createElement('li');
    link.innerHTML = html;
    navList.appendChild(link);
}
div.append(navList);
nav.append(div);

//toggling hamburger menu
const ham = document.querySelector('.btn_ham');
ham.addEventListener('click', ()=>{
    div.classList.toggle('sliding_menu');
    document.body.classList.toggle('no_scrolling')
    ham.parentElement.classList.toggle('open');
})

// reloads the webpage when clicking on the logo
const logo = document.querySelector('#logo');

logo.addEventListener('click', ()=>{
    window.location.href = '/';
})

