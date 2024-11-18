    // Handle the form submission
    document.getElementById('searchForm').addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent the default form submission behavior

      const query = document.getElementById('query').value;  // Get the search query
      const resultsContainer = document.getElementById('results');

      // Clear previous results
      resultsContainer.innerHTML = '';

      // Make a fetch request to the TVMaze API
      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
          // Check if there are any results
          if (data.length === 0) {
            resultsContainer.innerHTML = '<p>No shows found. Try a different search.</p>';
            return;
          }

          // Loop through each show and create an article element with the required data
          data.forEach(item => {
            const tvShow = item.show;

            // Create an article element for each show
            const article = document.createElement('article');

            // Show Name
            const showName = document.createElement('h2');
            showName.textContent = tvShow.name;
            article.appendChild(showName);

            // Link to Show Details
            const showLink = document.createElement('a');
            showLink.href = tvShow.url;
            showLink.target = "_blank";
            showLink.textContent = 'More details';
            article.appendChild(showLink);

            // Image (with optional chaining)
            if (tvShow.image?.medium) {
              const showImage = document.createElement('img');
              showImage.src = tvShow.image.medium;
              showImage.alt = tvShow.name;
              article.appendChild(showImage);
            } else {
              const noImage = document.createElement('p');
              noImage.textContent = 'No image available';
              article.appendChild(noImage);
            }

            // Show Summary
            const showSummary = document.createElement('div');
            showSummary.innerHTML = tvShow.summary || 'No summary available.';
            article.appendChild(showSummary);

            // Append the article to the results container
            resultsContainer.appendChild(article);
          });
        })
        .catch(error => {
          console.error('Error fetching data from TVMaze API:', error);
        });
    });