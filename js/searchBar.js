
                  //SEARCH BAR
//Get the student
const h2 = document.querySelector("h2").parentNode;
//search div
const searchDiv = document.createElement("div");
searchDiv.className = "student-search";
h2.appendChild(searchDiv);

const input = document.createElement("input");
input.placeholder = "Search";
//create a button
const searchButton = document.createElement("button");
searchButton.innerHTML = "Search";
//appending
searchDiv.appendChild(input);
searchDiv.appendChild(searchButton);

//lets get the collection of h3 content
const hThree = document.getElementsByTagName('h3');
const list = document.getElementsByClassName("student-item cf");
var i = 0;
var student_list = [];

function searching(searchInput, names) {
  //make a list of returned values
  var listing = [];
  for (i; i < names.length; i++) {
    names[i].className = "";
    if (names[i].textContent.toLowerCase().indexOf(searchInput.value.toLowerCase())>-1)
     {
       listing.push(names[i]);
       names[i].className = "match";
       names[i].style.display = "";
       list[i].style.display = "";
       //student_list.push(names[i]);
       //student_list[i].style.display = "block";
     } else {
      names[i].style.display = "none";
      list[i].style.display = "none";
    }
  }
  showPage(listing,1); // works well
  appendPageLinks(listing); //works well
  //return listing;
};

//buttons
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value === ''){
      alert('Place putting a valid search input');
  };
  searching(input, hThree);//searching for the intended person
  input.value = ''; //changing the search input space to nothing.
})





let timer = null;
input.addEventListener('keyup', (e)=> {
  var target = e.target;
  clearTimeout(timer);

  timer = setTimeout( function () {
    searching(target, hThree)
  }, 500);

})
