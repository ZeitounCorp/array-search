let SearchableArray = require('../../../libs/Array/server/array_server');

let arr = new SearchableArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A']);
let arr2d = new SearchableArray([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'A'], [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 'A', 'B']]);

// Get array's content type
const content_type = arr.content_type(); // return 'mixed'
// Get values by an index ...
const content_opt_one = arr.get_content_at_index(3); // return 4
// ... Or by an array of indexes
const content_opt_two = arr.get_content_at_index([2, 5, 8]); // return [3, 6, 9]
// If your Array has different content types
const content_mixed_split = arr.split_mixed_content(); // return { number: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], string: [ 'A' ] }
// If you want to transform a 2d array into an object 
const twoDeeToObject = arr2d.twodee_object(); // return { i0j0: 1, i0j1: 2, i0j2: 3, i0j3: 4, i0j4: 5, i0j5: 6, i0j6: 7, i0j7: 8, i0j8: 9, i0j9: 10, i0j10: 'A', i1j0: 1, i1j1: 2, i1j2: 3, i2j0: 4, i2j1: 5, i2j2: 6, i3j0: 7, i3j1: 8, i3j2: 9, i4j0: 10, i4j1: 'A', i4j2: 'B' }
