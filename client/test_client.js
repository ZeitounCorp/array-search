let SearchableArray = require('./array_client');

let arr = new SearchableArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Get array's content type
const content_type = arr.content_type();
