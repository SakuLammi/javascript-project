"use strict";

document.addEventListener("DOMContentLoaded", function() {
    // The picArray containing the image data
    const picArray = [
{
            title: 'Title 1',
            caption: 'Caption 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
            image: { large: 'module3-starters-main/t5/img/pic1.jpg', medium: 'module3-starters-main/t5/thumbnails/pic1.jpg' }
        },
        {
            title: 'Title 2',
            caption: 'Caption 2',
            description: 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar.',
            image: { large: 'module3-starters-main/t5/img/pic2.jpg', medium: 'module3-starters-main/t5/thumbnails/pic2.jpg' }
        },
        {
            title: 'Title 3',
            caption: 'Caption 3',
            description: 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id.',
            image: { large: 'module3-starters-main/t5/img/pic3.jpg', medium: 'module3-starters-main/t5/thumbnails/pic3.jpg' }
        },
        {
            title: 'Title 4',
            caption: 'Caption 4',
            description: 'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: { large: 'module3-starters-main/t5/img/pic4.jpg', medium: 'module3-starters-main/t5/thumbnails/pic4.jpg' }
        },
        {
            title: 'Title 5',
            caption: 'Caption 5',
            description: 'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut.',
            image: { large: 'module3-starters-main/t5/img/pic5.jpg', medium: 'module3-starters-main/t5/thumbnails/pic5.jpg' }
        },
        {
            title: 'Title 6',
            caption: 'Caption 6',
            description: 'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
            image: { large: 'module3-starters-main/t5/img/pic6.jpg', medium: 'module3-starters-main/t5/thumbnails/pic6.jpg' }
        },
        {
            title: 'Title 7',
            caption: 'Caption 7',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
            image: { large: 'module3-starters-main/t5/img/pic7.jpg', medium: 'module3-starters-main/t5/thumbnails/pic7.jpg' }
        },
        {
            title: 'Title 8',
            caption: 'Caption 8',
            description: 'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna.',
            image: { large: 'module3-starters-main/t5/img/pic8.jpg', medium: 'module3-starters-main/t5/thumbnails/pic8.jpg' }
        },
        {
            title: 'Title 9',
            caption: 'Caption 9',
            description: 'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna.',
            image: { large: 'module3-starters-main/t5/img/pic9.jpg', medium: 'module3-starters-main/t5/thumbnails/pic9.jpg' }
        }
    ];

    // Get the <section> element where the articles will be appended
    const sectionElement = document.getElementById('pictures');
    const dialog = document.querySelector('dialog');
    const dialogImg = dialog.querySelector('img');
    const closeBtn = dialog.querySelector('span');

    // Loop through the picArray to create the articles
    picArray.forEach(function(pic) {
        // Create the <article> element
        const article = document.createElement("article");
        article.classList.add("card");

        // Create and append the <h2> for the title
        const h2 = document.createElement("h2");
        h2.textContent = pic.title;
        article.appendChild(h2);

        // Create the <figure> element
        const figure = document.createElement("figure");

        // Create the <img> element and set the src and alt attributes
        const img = document.createElement("img");
        img.src = pic.image.medium;  // Use medium image
        img.alt = pic.title;         // Use title as alt text
        figure.appendChild(img);

        // Create the <figcaption> for the caption and append it
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = pic.caption;
        figure.appendChild(figcaption);

        // Append the <figure> to the <article>
        article.appendChild(figure);

        // Create the <p> element for the description and append it
        const p = document.createElement("p");
        p.textContent = pic.description;
        article.appendChild(p);

        // Add a click event listener to open the modal
        article.addEventListener('click', () => {
            // Set the large image in the modal
            dialogImg.src = pic.image.large;
            dialogImg.alt = pic.title; // Set alt text
            dialog.showModal(); // Open the modal
        });

        // Append the <article> to the <section>
        sectionElement.appendChild(article);
    });

    // Add a click event to the close button in the modal to close it
    closeBtn.addEventListener('click', () => {
        dialog.close(); // Close the modal
    });
});