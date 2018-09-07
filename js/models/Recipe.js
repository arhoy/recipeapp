
import {key,proxy} from '../config.js';
export class Recipe{
    constructor(id){
        this.id = id;
    }
    async getSingleRecipe(){
        try{
            const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.ingredients = res.data.recipe.ingredients;
            this.author = res.data.recipe.publisher;
            this.url = res.data.recipe.source_url;
         
            

        }
        catch(err){
            console.log(err);
        }
    }
    calcTime(){
        // assuming we need 15 minutes for each ingredient.
        const numberOfIngredients = this.ingredients.length;
        this.time = Math.ceil(numberOfIngredients/3)*15;
    }
}