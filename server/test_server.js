let SearchableArray = require('./array_server');

let arr = new SearchableArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Get array's content type
const content_type = arr.content_type();
// Get values by an index ...
const content_opt_one = arr.get_content_at_index(3);
// ... Or by an array of indexes
const content_opt_two = arr.get_content_at_index([2, 5, 8]);
