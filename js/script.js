/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
NAME: Burmau Garba.
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const Student = document.querySelectorAll('.student-list li');
//console.log(Student);
//maximum number list per page
const max_number_of_pages = 10;

//making the function that hides but the 10 items needed
function showPage(list, page){
   //start index
   let startIndex = (page * max_number_of_pages) - max_number_of_pages;
   //end index
   let endIndex = page * max_number_of_pages;
   for (let i = 0; i<list.length; i++){
      //checking if the items are within accepted bounds and display them 
      if(i >= startIndex && i < endIndex){
         list[i].style.display = 'block';
      }else {
         list[i].style.display = 'none'; //else don't display em
      }
   }
}



//Takes actual list of students
function appendPageLinks(list){
   //creating a div for pagination dynamically
   let containDiv = document.createElement('div');
   //give it a class of 'pagination'
   containDiv.className = 'pagination';

   // i have to get all .page items
   let pages = document.querySelector('.page');
   //append 'div' to pages
   pages.appendChild(containDiv);
   
   //making a maximum amount of 
   //items per page to figure out how many pages are needed,
   //and you can use a loop that iterates that many times to 
   //create the correct number of LI elements.
   const maximum = Math.ceil(list.length/max_number_of_pages);

   let ul = document.createElement('ul');
   containDiv.appendChild(ul);
   /**
    * i have to create a 'ul','li', and 'a' tag
    * the 'li' is in the 'ul' and the 'a' is in the 'li'
    * i also have to append the 'ul' to the div
    */
   //creating elements
   for(var num =0; num<maximum; num++){
      //creating the 'li' tag and appending the 'li' to the ul
      let li = document.createElement('li');
      //creating the 'a' tag and appending it to the 'li' tag
      let a = document.createElement('a');
      ul.appendChild(li);
      li.appendChild(a);
      //making the href 
      a.href = '#';
      //making the page numbers for next page items
      a.textContent = num+1;
      if(num === 0){
         a.className = 'active';
      }
      //when any anchor tag is clicked
      a.addEventListener('click', (event) => {
         let links = document.querySelectorAll('a');
         for (num=0; num<links.length;num++){
            links[num].className = '';
         }
         event.target.className = 'active';
         showPage(list, event.target.textContent); 
      })

   }

};

showPage(Student, 1);
appendPageLinks(Student);



