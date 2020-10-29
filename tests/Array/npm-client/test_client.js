let SearchableArray = require('../../../libs/Array/client/array_client');

let arr = new SearchableArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'B']);

// Get array's content type
const content_type = arr.content_type(); // return 'mixed'
// If your Array has different content types
const content_mixed_split = arr.split_mixed_content(); // return { number: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], string: [ 'B' ] }
