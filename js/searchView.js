import {elements} from './base.js';

export const getInput = ()=>{
    return elements.searchInput.value;
}

export const printResults = (recipes)=>{
    let html = ``;
    recipes.forEach(recipe => {
        html += `<p class = "alert alert-success">${recipe}</p>`;
    });
    elements.results.innerHTML = html;
}