document.addEventListener("DOMContentLoaded", function() {
    const movies = [
        { title: "Movie 1", image: "images/movie1.jpg" },
        { title: "Movie 2", image: "images/movie2.jpg" },
        { title: "Movie 3", image: "images/movie3.jpg" },
        { title: "Movie 4", image: "images/movie4.jpg" },
        { title: "Movie 5", image: "images/movie5.jpg" },
        { title: "Movie 6", image: "images/movie6.jpg" },
        { title: "Movie 7", image: "images/movie7.jpg" },
        { title: "Movie 8", image: "images/movie8.jpg" },
        { title: "Movie 9", image: "images/movie9.jpg" },
        { title: "Movie 10", image: "images/movie10.jpg" },
        { title: "Movie 11", image: "images/movie11.jpg" },
        { title: "Movie 12", image: "images/movie12.jpg" },
        { title: "Movie 13", image: "images/movie13.jpg" },
        { title: "Movie 14", image: "images/movie14.jpg" },
        { title: "Movie 15", image: "images/movie15.jpg" },
        { title: "Movie 16", image: "images/movie16.jpg" },
        { title: "Movie 17", image: "images/movie17.jpg" },
        { title: "Movie 18", image: "images/movie18.jpg" },
        { title: "Movie 19", image: "images/movie19.jpg" },
        { title: "Movie 20", image: "images/movie20.jpg" },
        { title: "Movie 21", image: "images/movie21.jpg" },
        { title: "Movie 22", image: "images/movie22.jpg" },
        { title: "Movie 23", image: "images/movie23.jpg" },
        { title: "Movie 24", image: "images/movie24.jpg" },
        { title: "Movie 25", image: "images/movie25.jpg" },
        { title: "Movie 26", image: "images/movie26.jpg" },
        { title: "Movie 27", image: "images/movie27.jpg" },
        { title: "Movie 28", image: "images/movie28.jpg" },
        { title: "Movie 29", image: "images/movie29.jpg" },
        { title: "Movie 30", image: "images/movie30.jpg" },
        { title: "Movie 31", image: "images/movie31.jpg" },
        { title: "Movie 32", image: "images/movie32.jpg" },
    ];

    const moviesContainer = document.querySelector(".movies");

    movies.forEach(movie => {
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");

        const movieImage = document.createElement("img");
        movieImage.src = movie.image;
        movieImage.alt = movie.title;

        const movieTitle = document.createElement("h3");
        movieTitle.textContent = movie.title;

        movieItem.appendChild(movieImage);
        movieItem.appendChild(movieTitle);
        moviesContainer.appendChild(movieItem);

        movieItem.addEventListener('click', () => {
            const modal = document.getElementById("trailerModal");
            const trailerVideo = document.getElementById("trailerVideo");
            modal.style.display = "flex";
            trailerVideo.play();
        });
    });

    // Modal functionality for featured movie
    const modal = document.getElementById("trailerModal");
    const btnPlay = document.querySelector(".btn-play");
    const span = document.getElementsByClassName("close")[0];
    const trailerVideo = document.getElementById("trailerVideo");

    btnPlay.onclick = function() {
        modal.style.display = "flex";
        trailerVideo.play();
    }

    span.onclick = function() {
        modal.style.display = "none";
        trailerVideo.pause();
        trailerVideo.currentTime = 0;
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            trailerVideo.pause();
            trailerVideo.currentTime = 0;
        }
    }
});

// Sticky header effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});
