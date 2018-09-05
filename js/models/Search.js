export class Search{
    constructor(query){
        this.query = query;
    }
    async getResults(){
        const key = '28afa5eacf7e9a079f54ee3ed9246c7b';
        const app_id = 'c460b6ac';
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const from = '0';
        const to = '12';
        // f2f url:  const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            // f2f key: 26e074aea9012bae2d3e9e8f6d2f2965

        try{
            const res = await axios(`${proxy}https://api.edamam.com/search?q=${this.query}&app_id=${app_id}&app_key=${key}&from=${from}&to=${to}`);
            this.results = res.data.hits;
            return this.results;
        }
        catch(err){
            console.log(err);
        }
     
    }
}