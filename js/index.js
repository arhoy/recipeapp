console.log('what the fuck');

import {add} from './searchView.js';
import {Search} from './models/Search.js';
const search = new Search('pizza');

console.log(search);
search.getResults();