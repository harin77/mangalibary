// Sample manga data (replace this with your actual data)
const mangaData = [
    { title: 'Naruto', author: 'Masashi Kishimoto', image: 'images/naruto.web.jpg' },
    { title: 'One Piece', author: 'Eiichiro Oda', image: 'images/one-pice.jpg' },
    { title: 'Attack on Titan', author: 'Hajime Isayama', image: 'images/ttack-on-titan.jpg' },
    { title: 'Death Note', author: 'Tsugumi Ohba', image: 'images/death-note.jpg' },
    { title: 'My Hero Academia', author: 'Kohei Horikoshi', image: 'images/myhero.jpg' },
    // Add more manga objects as needed
  ];
  
  // Function to create a manga card element
  function createMangaCard(manga) {
    const mangaCard = document.createElement('div');
    mangaCard.classList.add('manga-card');
    
    const mangaImage = document.createElement('img');
    mangaImage.src = manga.image;
    mangaImage.alt = manga.title;
    mangaCard.appendChild(mangaImage);
  
    const mangaTitle = document.createElement('h3');
    mangaTitle.textContent = manga.title;
    mangaCard.appendChild(mangaTitle);
  
    const mangaAuthor = document.createElement('p');
    mangaAuthor.textContent = `Author: ${manga.author}`;
    mangaCard.appendChild(mangaAuthor);
  
    return mangaCard;
  }
  
  // Function to display manga cards
  function displayMangaCards(mangaList) {
    const mangaContainer = document.getElementById('mangaContainer');
  
    // Clear existing content
    mangaContainer.innerHTML = '';
  
    // Create and append manga cards
    mangaList.forEach((manga) => {
      const mangaCard = createMangaCard(manga);
      mangaContainer.appendChild(mangaCard);
    });
  }
  
  // Initial display of manga cards
  displayMangaCards(mangaData);
  
  // Function to perform search
  function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredManga = mangaData.filter((manga) =>
      manga.title.toLowerCase().includes(searchTerm) ||
      manga.author.toLowerCase().includes(searchTerm)
    );
    displayMangaCards(filteredManga);
  }
  