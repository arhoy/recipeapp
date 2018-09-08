// create an object which contains all the elements we need from our app
export const elements = {
    searchInput: document.querySelector('#search__input'),
    searchForm: document.querySelector('.search__form'),
    results: document.querySelector('#results__recipe'),
    modalContent: document.querySelector('.modal-content'),
    loading: document.querySelector('.recipe__loading')
}
export const elementStrings ={
    loader: 'loader'
}

export const renderLoader = (parent,loadingValue)=>{
    const loader = `
    
        <div class = "${elementStrings.loader}">loading ${loadingValue}...
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin',loader);
}
export const clearContents = (parent)=>{
    parent.innerHTML = '';
}

export const scrollView = () =>{
    document.querySelector('#results__recipe').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}