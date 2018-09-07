import * as searchView from './views/searchView.js';
import * as recipeView from './views/recipeView.js';
import {elements,renderLoader} from './base.js';
import {Search} from './models/Search.js';
import {Recipe} from './models/Recipe.js';

 // control state of app
const state = {};

// controlsearch async function
const controlSearch = async ()=>{

    // 1. get query from the view
    const query = searchView.getInput();

    // 2. Create new search object
    if(query){
        // add this new search object to the state. state.search is a new instance of the Search Class.
        state.search = new Search(query);
      
        

        // create loading spinner and clear results from search
        elements.searchForm.reset();
        searchView.clearResults();
        renderLoader(elements.results);

        // search for recipes.
        await state.search.getResults();
        // we have awaited for the results, for the promise. Now where are the results actually stored? They are stored in the results property of Search. which in the instance is state.search.results.
       
       console.log(state.search.results);
        searchView.clearResults();
     
        // render the search results to the UI.
        searchView.printResults(state.search.results);
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

//** Recipe Controller */


const controlRecipe = async (e) =>{
    e.preventDefault();
    // event delegation on the controller
    if(e.target.classList.contains('recipe__button')){
        console.log('btn modal found');
        const id = e.target.dataset.id;
        if(id){
            try{
                 // create new recipe object.
            state.recipe = new Recipe(id);
            await state.recipe.getSingleRecipe();

            // calculate servings
            state.recipe.calcTime();

            // render recipe
            console.log(state.recipe);
            recipeView.renderRecipe(state.recipe);

            }
            catch(err){
                alert('error processing recipe!');
            }
           
        }
        
    }
  
}
// event listener on result Div
elements.results.addEventListener('click',controlRecipe);
