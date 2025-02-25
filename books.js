document.addEventListener("DOMContentLoaded", function() {
    const books = [
        {"return_date": "2025-03-14", "title": "500 Fantastic Facts", "author": "Dan Green", "image": "500 fantastic facts- non fiction.jpg", "category": "non-fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Unavailable"},
        {"return_date": "", "title": "A Map of Days (The Fourth Novel of Miss Peregrine's Peculiar Children)", "author": "Ransom Riggs", "image": "a map of days- fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Available"},
        {"return_date": "2025-03-21", "title": "Diary of a Wimpy Kid The Meltdown", "author": "Jeff Kinney", "image": "diary of a wimpy kid the meltdown- fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Unavailable"},
        {"return_date": "", "title": "Fantastic Beasts: The Crimes of Grindelwald 2", "author": "J.K. Rowling", "image": "fantastic beast- fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Available"},
        {"return_date": "2025-03-16", "title": "Guinness World Records", "author": "Guinness World Records", "image": "guinness world records 2019- non fiction.jpg", "category": "non-fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2019", "status": "Unavailable"},
        {"return_date": "", "title": "I Can't Believe It! 2", "author": "D.K.", "image": "i cant believe it 2- non fiction.jpg", "category": "non-fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Available"},
        {"return_date": "2025-03-30", "title": "Love Looks Pretty on You", "author": "Lang Leav", "image": "love looks pretty on you-fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2019", "status": "Unavailable"},
        {"return_date": "", "title": "Pope Francis God is Young", "author": "Pope Francis and Thomas Leoncini", "image": "pope francis god is young- non fiction.jpg", "category": "non-fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Available"},
        {"return_date": "", "title": "Love Looks Pretty on You", "author": "Lang Leav", "image": "love looks pretty on you-fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2019", "status": "Available"},
        {"return_date": "", "title": "Queen of Air Darkness (The Dark Artifices) Book Three", "author": "Cassandra Clare", "image": "Queen of Air and Darkness- fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Available"},
        {"return_date": "", "title": "Someday", "author": "J S Mayank", "image": "someday- fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Available"},
        {"return_date": "", "title": "Taylor Swift - Evermore", "author": "Taylor Swift", "image": "taylor swift evermore- non fiction.jpg", "category": "non-fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2020", "status": "Available"},
        {"return_date": "", "title": "The Old Farmer's 2018 Almanac", "author": "Robert B. Thomas", "image": "the old farmers 2018 almanac- non fiction.jpg", "category": "non-fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Available"},
        {"return_date": "", "title": "The Way You Make Me Feel", "author": "Maureen Goo", "image": "the way you make me feel- fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Available"},
        {"return_date": "", "title": "The Wicked King", "author": "Holly Black", "image": "the wicked king- fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Available"},
        {"return_date": "", "title": "The World of Harry Potter", "author": "J.K. Rowling", "image": "the world of harry potter- fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Available"},
        {"return_date": "", "title": "Unearthed", "author": "Amie Kaufman and Meagan Spooner", "image": "Unearthed- fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Available"},
        {"return_date": "", "title": "War Storm", "author": "Victoria Aveyard", "image": "war storm- fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2019", "status": "Available"},
        {"return_date": "", "title": "Winter of Summers", "author": "Michael Faudet", "image": "winter of summer- fiction.jpg", "category": "fiction", "type": "Foreign", "shelf" : "Third Shelf", "year": "2018", "status": "Available"},
        {"return_date" : "" ,"status" : "Available" , "title": "Always Be Creating", "author": "Abbey Sy", "image": "Always Be Creating.jpg", "category": "Non-fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "" ,"status" : "Available" , "title": "History of the Philippines", "author": "Jose Raymund Canoy", "image": "An Illustrated History of the Philippines.jpg", "category": "Non-fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "" ,"status" : "Available" , "title": "Are You Called to Go or Called to Say?", "author": "Ana Gamez & Lollette Calingasan", "image": "Are You Called To Go or Called To Stay_.jpg", "category": "Non-fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "" ,"status" : "Available" , "title": "Balarila ng Wikang Pambansa", "author": "Lope K. Santos", "image": "Balarila Ng Wikang Pambansa.jpg", "category": "Non-fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2019" },
        {"return_date" : "" ,"status" : "Available" , "title": "Business Finance for Senior High School", "author": "Angeles A. Guzman", "image": "Business Finance for Senior High School.jpg", "category": "Non-fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2019" },
        {"return_date" : "" ,"status" : "Available" , "title": "Dish Karte", "author": "Chef Tatung Sarthou", "image": "Dish Karte.jpg", "category": "Non-fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "" ,"status" : "Available" , "title": "El Tiempo Cura Todo", "author": "Binibining Mia", "image": "El Tiempo Cura Todo.jpg", "category": "Fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2019" },
        {"return_date" : "" ,"status" : "Available" , "title": "History with Lourd", "author": "Lourd Ernesth H. De Veyra", "image": "History With Lourd.jpg", "category": "Non-fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "" ,"status" : "Available" , "title": "I Love You Since 1892", "author": "Binibining Mia", "image": "I Love You Since 1892.jpg", "category": "Fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "" ,"status" : "Available" , "title": "Kulto", "author": "Gerald Gruezo", "image": "Kulto.jpg", "category": "Fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "" ,"status" : "Available" , "title": "Librong Itim", "author": "Maureen Nica B. Lacuata", "image": "Librong Itim.jpg", "category": "Fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "" ,"status" : "Available" , "title": "Make Love Not War", "author": "Nancy Binay, Senyora", "image": "Make Love Not War.jpg", "category": "Fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "" ,"status" : "Available" , "title": "Minsan Okay Lang Ma-Traffic", "author": "Charina Clarice Echaluce", "image": "Minsan Okay Lang Ma-Traffic.jpg", "category": "Fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "" ,"status" : "Available" , "title": "Miss Granny", "author": "Rinka Sycip", "image": "Miss Granny.jpg", "category": "Fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "2025-03-04" ,"status" : "Unavailable" , "title": "Queen of the Universe", "author": "Pia Wurtzbach", "image": "Queen of the Universe.jpg", "category": "Fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "" ,"status" : "Available" , "title": "Soaring High", "author": "Nelson Dy", "image": "Soaring High.jpg", "category": "Fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "2025-03-07" ,"status" : "Unavailable" , "title": "Su Punto de Vista", "author": "Binibining Mia", "image": "Su Punto De Vista.jpg", "category": "Fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2019" },
        {"return_date" : "" ,"status" : "Available" , "title": "The Education Act", "author": "Joseph Noel M. Estrada", "image": "The Education Act.png", "category": "Fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" },
        {"return_date" : "2025-03-21" ,"status" : "Unavailable" , "title": "The Hows of Us", "author": "Charmain Lasar", "image": "The Hows Of Us.jpg", "category": "Fiction", "type": "Filipiniana", "shelf" : "Second Shelf", "year": "2018" }
    ];
    
    function displayBooks(filteredBooks = books) {
        const container = document.getElementById('bookContainer');
        container.innerHTML = '';
        filteredBooks.forEach((book, index) => {
            const bookCard = document.createElement("div");
            bookCard.className = "col-md-4 mb-3";
            bookCard.innerHTML = `
                <div class="card book-card" data-index="${index}">
                    <img src="${book.image}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text"><strong>Author:</strong> ${book.author}</p>
                        <p class="card-text"><strong>Category:</strong> ${book.category}</p>
                        <p class="card-text"><strong>Type:</strong> ${book.type}</p>
                        <p class="card-text"><strong>Year:</strong> ${book.year}</p>
                        <p class="card-text"><strong>Shelf:</strong> ${book.shelf}</p>
                        <p class="card-text"><strong>Status:</strong> ${book.status}</p>
                        <p class="card-text"><strong>Return Date:</strong> ${book.return_date}</p>
                    </div>
                </div>
            `;
            container.appendChild(bookCard);
    
            // Add click event to open modal
            bookCard.addEventListener("click", function () {
                openBookModal(index);
            });
        });
    }
    
    function openBookModal(index) {
        const book = books[index];
        document.getElementById("bookTitle").innerText = book.title;
        document.getElementById("bookImage").src = book.image;
        const bookModal = new bootstrap.Modal(document.getElementById("bookModal"));
        bookModal.show();
    }
    
    window.searchBooks = function() {
        const searchValue = document.getElementById('searchInput').value.toLowerCase();
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(searchValue) ||
            book.author.toLowerCase().includes(searchValue) ||
            book.category.toLowerCase().includes(searchValue) ||
            book.type.toLowerCase().includes(searchValue) ||
            book.shelf.toLowerCase().includes(searchValue) ||
            book.year.toLowerCase().includes(searchValue) ||
            book.status.toLowerCase().includes(searchValue)
        );
        displayBooks(filteredBooks);
    };

    window.sortBooks = function() {
        const sortBy = document.getElementById('sortSelect').value;
        const sortedBooks = [...books].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        displayBooks(sortedBooks);
    };

    // Add event listeners instead of using inline event handlers
    document.getElementById("searchInput").addEventListener("keyup", searchBooks);
    document.getElementById("sortSelect").addEventListener("change", sortBooks);
    
    // Display books on page load
    displayBooks();
});

function logout() {
    alert("You have been logged out.");
    // Add your logout logic here (e.g., clearing session storage, redirecting to login page)
    window.location.href = "index.html"; // Redirect to login page
}