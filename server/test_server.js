let SearchableArray = require('./array_server');

let arr = new SearchableArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A']);

// Get array's content type
const content_type = arr.content_type(); // return 'mixed'
// Get values by an index ...
const content_opt_one = arr.get_content_at_index(3); // return 4
// ... Or by an array of indexes
const content_opt_two = arr.get_content_at_index([2, 5, 8]); // return [3, 6, 9]
// If your Array has different content types
const content_mixed_split = arr.split_mixed_content(); // return { number: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], string: [ 'A' ] }
