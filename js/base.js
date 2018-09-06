// create an object which contains all the elements we need from our app
export const elements = {
    searchInput: document.querySelector('#search__input'),
    searchForm: document.querySelector('.search__form'),
    results: document.querySelector('#results__recipe')
}
export const elementStrings ={
    loader: 'loader'
}

export const renderLoader = (parent)=>{
    const loader = `
        <div class = "${elementStrings.loader}"> I am loading...
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin',loader);
}