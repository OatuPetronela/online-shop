document.getElementById("myNav").innerHTML =
    "<nav class='navbar navbar-expand-lg navbar-dark bg-info '>" +
    "<a class='navbar-brand ' href='/pages/home.html'><span class='logo'>FSH</span>Clothes</a>" +
    "<button class='navbar-toggler' type='button ' data-bs-toggle='collapse ' data-bs-target='#navbarSupportedContent ' aria-controls='navbarSupportedContent ' aria-expanded='false' aria-label='Toggle navigation '>" +
    "<span class='navbar-toggler-icon '></span>" +
    "</button>" +
    "<div class='collapse navbar-collapse ' id='navbarSupportedContent '>" +
    "<ul class='navbar-nav me-auto mb-2 mb-lg-0 '>" +
    "<li class='nav-item dropdown'>" +
    "<a class='nav-link dropdown-toggle text-dark' href='/pages/femei.html' id='avbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>FEMEI</a>" +
    "<ul class='dropdown-menu' aria-labelledby='navbarDropdown'>" +
    "<li><a class='dropdown-item' href='/pages/imbracaminte.html'>IMBRACAMINTE</a></li>" +
    "<li><a class='dropdown-item' href='#'>INCALTAMINTE</a></li>" +
    "</ul>" +
    "<li class='nav-item dropdown'>" +
    "<a class='nav-link dropdown-toggle text-dark' href='/pages/femei.html' id='avbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>BARBATI</a>" +
    "<ul class='dropdown-menu' aria-labelledby='navbarDropdown'>" +
    "<li><a class='dropdown-item' href='#'>IMBRACAMINTE</a></li>" +
    "<li><a class='dropdown-item' href='#'>INCALTAMINTE</a></li>" +
    "</ul>" +
    "<li class='nav-item dropdown'>" +
    "<a class='nav-link dropdown-toggle text-dark' href='/pages/femei.html' id='avbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>COPII</a>" +
    "<ul class='dropdown-menu' aria-labelledby='navbarDropdown'>" +
    "<li><a class='dropdown-item' href='#'>IMBRACAMINTE</a></li>" +
    "<li><a class='dropdown-item' href='#'>INCALTAMINTE</a></li>" +
    "</ul>" +
    "<li class='nav-item'>" +
    "<a class='nav-link text-dark' href='/pages/contact.html '>CONTACT</a>" +
    "</li>" +
    "</ul>" +
    "<form class='d-flex'>" +
    "<input class='form-control me-2' type='text' id='search' placeholder='Cauta produsele favorite' aria-label='Search'>" +
    "<button class='btn btn-outline-light mr-3' type='submit '>Search</button>" +
    "</form>" +
    "</div>" +
    "</nav>";
document.getElementById("myFooter").innerHTML =
    "<footer class='bg-dark text-center text-white'>" +
    "<div class='container p-4 pb-0'>" +
    "<section class=''>" +
    "<form action=''>" +
    "<div class='row d-flex justify-content-center'>" +
    "<div class='col-auto'>" +
    "<p class='pt-2'>" +
    "<strong>Sign up for our newsletter</strong>" +
    "</p>" +
    "</div>" +
    "<div class='col-md-5 col-12'>" +
    "<div class='form-outline form-white mb-4'>" +
    "<input type='email' id='form5Example29' class='form-control' />" +
    "<label class='form-label' for='form5Example29'>Email address</label>" +
    "</div>" +
    "</div>" +
    "<div class='col-auto'>" +
    "<button type='submit' class='btn btn-outline-light mb-4'>Subscribe</button>" +
    "</div>" +
    "</div>" +
    "</form>" +
    "</section>" +
    "</div>" +
    "<div class='text-center p-3' style='background-color: rgba(0, 0, 0, 0.2);'>© " + new Date().getFullYear() + " Copyright:</div>" +
    "</footer>";

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//cauta si filtreaza hainele

const searchClothers = async searchText => {
    const res = await fetch('../assets/imbracamintefemei.json');
    const clothers = await res.json();


    let matches = clothers.filter(clother => {
        const cloth = new RegExp(`^${searchText}`, 'gi');
        return clother.description.match(cloth);
    });
    if (searchText.length === 0) {
        matches = [];
    }
    outputHtml(matches);
};
const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(match =>
            ` <div class='card mt-2'> 
    <img src=" ${match.image}" class='card-img-top' id='image_search' alt=''/>
    <div class='card-body'>
    <div class='col-sm-6 col-md-4 col-lg-3'>
    <h5 class='card-title text-center'>${match.description}</h5>
    <span class='card-text'><s>${match.oldprice} </s></span>
    <h4 class='card-text'> ${match.price}</h4>
    <a href='#' class='btn btn-info text-center'>Adauga in cos</a>
    </div>
    </div>`).join('');
        console.log(matchList.innerHTML = html)
    }
};
search.addEventListener('input', () => searchClothers(search.value));