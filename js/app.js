//adding links to navbar dynamically
const links = [
    {text: "Features", url: "#features"},
    {text: "Pricing", url: "#pricing"},
    {text: "Reviews", url: "#reviews"},
    {text: "Contacts", url: "#contact"}
]

const navbar = document.querySelector('.nav_items');

for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = link.text;
    a.href = link.url;
    li.appendChild(a);
    navbar.appendChild(li);
}