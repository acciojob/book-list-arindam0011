//your JS code here. If required.

const title=document.getElementById("title");
const author=document.getElementById("author");
const isbn=document.getElementById("isbn");
const tableBody=document.getElementById("book-list");
const thead=document.getElementById("thead");

const addBook=document.getElementById("submit");

	addBook.addEventListener("click", bookDescription);

function bookDescription(event) {

	let trow=document.createElement('tr');

	trow.innerHTML=`<td>${title.value}</td>
					<td>${author.value}</td>
					<td>${isbn.value}</td>
					<td><button class="delete" >✕</button></td>`
	

     tableBody.append(trow);
     title.value='';
     author.value='';
     isbn.value='';
    
     let thd = thead.querySelectorAll('th');
     thd.forEach(th => {
         th.style.width = '25%';
     })

     let cells = trow.querySelectorAll('td');
    cells.forEach(cell => {
        cell.style.width = '25%';
    });
 let tbtn=trow.querySelector('.delete');
     tbtn.setAttribute("color", 'black');
     tbtn.setAttribute("background-color", 'red');

     tbtn.addEventListener('click', deleteRow);
     
     function deleteRow(event) {
         let row=event.target.parentElement.parentElement;
         row.remove();
     }
 	
}
