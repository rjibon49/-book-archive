const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayBookResalt(data.docs));
}

const displayBookResalt = docs => {
    const searchResult = document.getElementById('search-result');
    docs.forEach(docs => {
        console.log(docs);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                <img src="${docs.cover_i}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${docs.title}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
    
}