import * as searchView from './views/searchView.js';
import * as recipeView from './views/recipeView.js';
import {elements,renderLoader} from './base.js';
import {Search} from './models/Search.js';

 // control state of app
const state = {};

// control search
const controlSearch = async ()=>{

    // 1. get query from the view
    const query = searchView.getInput();

    // 2. Create new search object
    if(query){
        // add this new search object to the state
        state.search = new Search(query);

        // create loading spinner and clear results from search
        elements.searchForm.reset();
        searchView.clearResults();
        renderLoader(elements.results);

        // search for recipes.
        const results =  await state.search.getResults();
        searchView.clearResults();
     

        // render the search results to the UI.
        searchView.printResults(results);
            // we only want the rendering to happen after we receive the results from the UI. 
            // To do this we must use the async await pattern
    }
 
}

// event listener on search form
document.querySelector('.search').addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(`search initiated!`);
    controlSearch();
})

console.log(recipeView.test());