//your JS code here. If required.

const title=document.getElementById("title");
const author=document.getElementById("author");
const isbn=document.getElementById("isbn");
const tableBody=document.getElementById("book-list");

const addBook=document.getElementById("submit");

	addBook.addEventListener("click", bookDescription);

function bookDescription(event) {

	event.preventDefault();
	let trow=documennt.createElement('tr');

	trow.innerHTML=`<td>${title}</td>
					<td>${author}</td>
					<td>${isbn}</td>
					<td><button id="tbtn">✕</button></td>`
	

     tbody.append(trow);

 let tbtn=document.getElementById("tbtn");
     tbtn.setAttribute("color", 'black');
     tbtn.setAttribute("background-color", 'red');





	
}