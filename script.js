
/// Book Constructor
function Book (title, author, isbn) {
this.title = title;
this.author = author;
this.isbn = isbn;
}

/// UI Constructor
function UI () {}

UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list')
  const row = document.createElement('tr')
  row.innerHTML= `<td>${book.title}</td>
                  <td>${book.author}</td>
                  <td>${book.isbn}</td>
                  <td><a href="#" class="delete">X</a></td>
  `     
  list.appendChild(row)         
}

// Show alert
UI.prototype.showAlert = function(message, className){
  /// Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`
  div.appendChild(document.createTextNode(message))
  const container = document.querySelector('.container')
  const form = document.querySelector('#book-form')
  container.insertBefore(div,form)
  setTimeout(function(){document.querySelector('.alert').remove()}, 3000)
}

//Delete book
UI.prototype.deleteBook= function(target) {
     if (target.className === 'delete') {
       target.parentElement.parentElement.remove()
     }
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value="";
  document.getElementById('author').value="";
  document.getElementById('isbn').value="";
}

///Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values 
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isbn = document.getElementById('isbn').value
  
  
  // Instantianting book
  const book = new Book(title, author, isbn);
  

  // Instantiate UI
  const ui = new UI()

     if(title ==='' || author === '' || isbn === ''){
       ui.showAlert('Please fill in all fileds', 'error')

     }else {
        // add book to list
        ui.addBookToList(book);
        // Show succes
        ui.showAlert('Book Aded', 'succes')
        // clear fields
        ui.clearFields();
     }
    
    
    
  
   

  e.preventDefault()
})

/// event listener fr delete
document.getElementById('book-list').addEventListener('click', function(e){
   const ui  = new UI()
   ui.deleteBook(e.target)
   ui.showAlert('Book Removed', 'succes')
  
  e.preventDefault()
})