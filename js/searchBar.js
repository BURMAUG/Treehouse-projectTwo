//get the parent of the h2 tag
const parent = document.querySelector('h2').parentNode;
console.log(parent);//printing the parent to the console



//create a div for search
const searchDiv = document.createElement('div');
searchDiv.className = 'student-search';

//create input
const input = document.createElement('input');
input.placeholder = 'Search';
//create a button
const button = document.createElement('button');
button.innerHTML = 'Submit';
//appending
searchDiv.appendChild(input);
searchDiv.appendChild(button);
parent.appendChild(searchDiv);


/**
 * THE SEARCHING PART 
 * 
 * What needs to be searched for? <h3> content/text
 * Where to search for it?   buried in a <div class = joined-details> 's child called <h3>
 *  
 * 
***/

//lets get the collection of h3 content 
const hThree = document.getElementsByTagName('h3');
// console.log(hThree);
let i =0;
const list = document.getElementsByClassName('student-item')
function searching(searchInput, names){
    for (i; i<names.length; i++){
        names[i].className = '';
        if (searchInput.value.length !== 0 && searchInput.value.toLowerCase().includes(names[i].textContent.toLowerCase())){
            names[i].className = 'match';
            names[i].style.display = 'block';
            list[i].style.display = 'block';

        }else{
            names[i].style.display = 'none';
            list[i].style.display = 'none'

        }
    }

}







button.addEventListener('click', (e) =>{
    searching(input, hThree);
});

input.addEventListener('keyup', ()=>{
})




 /**
  * add an eventListener for whenever a search is done
  **/

 