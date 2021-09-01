const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data));
}

const displayBook = data => {
    const books = data.docs;
    console.log(data.docs);
}