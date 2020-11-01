# extend-data-structures.js
Research arround methods that I would have loved having straight out of the box on Arrays and Object, egc: .forEach on Objects, transform a 2D Array into an Object (key example: i1j0: 'foo')...

## Open Source Project
You are more than welcome to contribute

### Usage
``` js
let myArray = new SearchableArray([1, 2, 3]);
// At the moment, you can look into the tests folder for examples.
``` 

### Tasks
- [ ] Add a sort of 'wayback machine' for array while `ENV === __DEV__`, it could let developers go back to a previous version of the array egc: goBackTo(Array['v1']) ❗ 
- [ ] Add a possibility to find an item in an array from a set of chars without needing regex for the client. egc: find word who has 2 letters a and a letter b => .findWord('aab') || .findWord('2a-b') ❕ 
- [ ] Add a .forEach method on Object ❗❗
- [x] Add a method to transform a 2D Array into an Object (key example: i1j0: 'foo')
- [x] Add a method to split an array with mixed content into multiple (one content type only per array) arrays 
##### Order of priority
- ❗❗ ➡️ Urgent
- ❗❓ ➡️ Require an urgent fix
-  ❗  ➡️ ASAP
-  ❕  ➡️ TODO

### How to Contribute
1. 🔎 Find a task that suits you
2. 𐂷 Create a new branch named after the task you chose
3. ⤴️ Make a pull request 
4. If ```code``` is ✅ then 🤓 Enjoy 🤓 seeing your code merged 
    - Else if 🛑 then take a good cup of ☕️ and __try again__ or __contact me__, so we can fix it __together__ 😄
