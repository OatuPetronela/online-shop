const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

if (params.search) {
    const search = params.search;
    document.getElementById('search').value = search;
    var list = document.getElementById('match-list');

    // cauta si filtreaza hainele


    const searchClothers = async searchText => {
        const res = await fetch('../assets/imbracamintefemei.json', );
        const clothers = await res.json();


        let filterClothers = clothers.filter(clother => {
            const cloth = new RegExp(`^${searchText}`, 'gi');
            return clother.description.match(cloth);
        });
        if (searchText.length === 0) {
            filterClothers = [];
        } else {
            outputHtml(filterClothers)
        }
    };
    console.log(searchClothers.length);
    var outputHtml = filterClothers => {
        let row = document.createElement('div');
        row.className = "row";
        if (filterClothers.length > 0) {
            filterClothers.map(cloth => {
                let card = document.createElement("div");
                card.className = "col-md-2"
                card.innerHTML = `<div class='card mt-2'> 
                <img src="${cloth.image}" class='card-img-top' id='image_search' alt=''/>
                <div class='card-body'>
                <h5 class='card-title text-center'>${cloth.description}</h5>
                <span class='card-text'><s>${cloth.oldprice} </s></span>
                <h4 class='card-text'> ${cloth.price}</h4>
                <a href='#' class='btn btn-info text-center'>Adauga in cos</a>
                </div>
                </div>`
                row.appendChild(card);
            });
            list.appendChild(row)
        }
    };


    searchClothers(search);
}