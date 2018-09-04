export class Search{
    constructor(query){
        this.query = query;
    }
    async getResults(){
        const key = '26e074aea9012bae2d3e9e8f6d2f2965';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        try{
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result);
        }
        catch(err){
            console.log(err);
        }
     
    }
}