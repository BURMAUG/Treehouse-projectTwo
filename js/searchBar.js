//get the div to add all newly created divs
let divs = document.querySelector('.page-header')
console.log(divs);
//create a div
let searchDiv = document.createElement('div');
searchDiv.className = 'student-search';
//lets create an input element
let inputElement = document.createElement('input');
inputElement.placeholder = 'Search for students...';
//create a button
let searchButton = document.createElement('button');
searchButton.innerHTML = 'search';

/**
 * i need to append the 'searchDiv' to the queried divs
 * in the searchDiv there should be an input and button appended to 'searchDiv'
 **/
 divs.appendChild(searchDiv);
 searchDiv.appendChild(inputElement);
 searchDiv.appendChild(searchButton);
//printing all the h3 elements
 const hElements = document.querySelectorAll('h3');

 /**
  * add eventListerner to when button is clicked
  */
  
  searchButton.addEventListener('click', () => {
      for (let i=0; i<hElements.length;i++){
          //console.log(hElements[i].textContent); //this gives back the text content and thats what i need
          if(hElements[i].textContent === inputElement.value){
            hElements[i].style.display = 'block';
          }else {
                let details = document.querySelectorAll('.student-details')
                details[i].style.display = 'none';
                let joined = document.querySelectorAll('.joined-details')
                joined[i].style.display = 'none';
   }
      }
  });



 /**
  * add an eventListener for whenever a search is done
  **/

 