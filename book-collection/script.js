
// Function to fetch the list of books from the server and populate the table
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear the current contents of the table

    fetch('http://localhost:8080/books',{
        method:'GET',
        headers:{
            'content-type':'text/html'
        }
    })
        .then(response => response.json())
        .then(books => {
            console.log(books)
            books.forEach(book => {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                
                // <td>${book.publishedDate || ''}</td>
                // <td><button onclick="deleteBook('${book.id}')">Delete</button></td>
              `;
                bookList.appendChild(row);
            });
        })
        .catch(error => console.error(error));













// Function to add a new book to the collection
// function addBook(event) {
//     event.preventDefault(); // Prevent the form from submitting
//
//     const title = document.getElementById('title').value;
//     const author = document.getElementById('author').value;
//     // const publishedDate = document.getElementById('publishedDate').value;
//
//     fetch('http://localhost:8080/add-book', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             title,
//             author,
//             // publishedDate
//         })
//     })
//         .then(response => response.json())
//         .then(book => {
//             loadBooks(); // Reload the list of books to show the new one
//             document.getElementById('title').value = ''; // Clear the form inputs
//             document.getElementById('author').value = '';
//             document.getElementById('publishedDate').value = '';
//         })
//         .catch(error => console.error(error));
// }

//     // Function to delete a book from the collection
//     function deleteBook(bookId) {
//     fetch(`/books/${bookId}`, {
//         method: 'DELETE'
//     })
//         .then(response => response.json())
//         .then(message => {
//             loadBooks(); // Reload the list of books to remove the deleted one
//             console.log(message);
//         })
//         .catch(error => console.error(error));
// }
//
//     // Load the list of books when the page loads
//     window.onload = loadBooks;

// Add an event listener to the form submit button to add a new book