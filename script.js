const input = document.querySelector('#fruit'); /* Get the input element */
const suggestions = document.querySelector('.suggestions ul'); /* Get the suggestions list element */

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = []; /* Initialize an empty array for search results */
	const searchTerm = str.toLowerCase(); /* Convert input to lowercase for case-insensitive search */
	if (searchTerm) {
	  results = fruit.filter(f => f.toLowerCase().includes(searchTerm)); /* Filter fruits based on search term */
	}
	return results; /* Return filtered results */
  }
  
  function searchHandler(e) {
	const inputVal = e.target.value; /* Get input value */
	const results = search(inputVal); /* Perform search based on input value */
	showSuggestions(results, inputVal); /* Display search suggestions */
  }
  
  function showSuggestions(results, inputVal) {
	const ul = document.querySelector('.suggestions ul'); /* Get the suggestions list */
	ul.innerHTML = ''; /* Clear previous suggestions */
	if (inputVal === '') {
	  suggestions.parentElement.style.display = 'none'; /* Hide suggestions if input is empty */
	} else {
	  suggestions.parentElement.style.display = 'block'; /* Show suggestions if input is not empty */
	  results.forEach(item => { /* Iterate over search results */
		const li = document.createElement('li'); /* Create list item element */
		li.textContent = item; /* Set text content to search result */
		suggestions.appendChild(li); /* Append list item to suggestions list */
	  });
	}
  }
  
  function useSuggestion(e) {
	if (e.target.tagName === 'LI') { /* Check if clicked element is a list item */
	  input.value = e.target.textContent; /* Set input value to clicked suggestion */
	  suggestions.innerHTML = ''; /* Clear suggestions */
	  suggestions.parentElement.style.display = 'none'; /* Hide suggestions */
	}
  }
  
  input.addEventListener('keyup', searchHandler); /* Add event listener for keyup event on input */
  suggestions.addEventListener('click', useSuggestion); /* Add event listener for click event on suggestions */
  
  suggestions.parentElement.style.display = 'none'; /* Hide suggestions by default */