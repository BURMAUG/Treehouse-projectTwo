                  
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
  for (i; i < names.length; i++) {
    names[i].className = "";
    if (
      searchInput.value.length !== 0 &&
      searchInput.value
        .toLowerCase()
        .includes(names[i].textContent.toLowerCase())
    ) {
      names[i].className = "match";
      names[i].style.display = "block";
      list[i].style.display = "block";
      student_list.push(names[i]);
      student_list[i].style.display = "block";
    } else {
      names[i].style.display = "none";
      list[i].style.display = "none";
    }
  }
};

//buttons
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  //searching(input.value, hThree);
  console.log(e.target.textContent);
  if (input.value === ''){
      alert('Place putting a valid search input');
  }
  searching(input, hThree);//searching for the intended person

  //showPage(student_list, 1);//showing the page 
  //appendPageLinks(student_list);//appending how many paginations needed
  input.value = ''; //changing the search input space to nothing.
});



//input value
input.addEventListener('keyup', (event)=>{
    var target = event.target.value;
    var student_list = [];
    //console.log(target);

    //loop throught the name and the check
    //like to check if the target value is in any of the name
    //i have learn
    for(var j =0; j<hThree.length; j++){
        if(hThree[j].textContent.toLowerCase().includes(target.toLowerCase())){
            student_list.push(hThree[j]);
        }else{
            hThree[j].style.display = 'none';
            list[j].style.display = 'none';
        }
    }
    //  appendPageLinks(student_list);
    //  showPage(student_list, 1);

});

showPage(student_list, 1);
appendPageLinks(student_list);