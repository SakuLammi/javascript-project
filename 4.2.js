// Handle the form submission
    document.getElementById('searchForm').addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent the default form submission behavior

      const query = document.getElementById('query').value;  // Get the search query

      // Make a fetch request to the TVMaze API
      fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
          // Print the result to the console
          console.log(data);

          // Display the result in the "results" <pre> element
          document.getElementById('results').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
          console.error('Error fetching data from TVMaze API:', error);
        });
    });