window.onload = () => {
  console.log("Window loaded");

  fetch("/.netlify/functions/test1?s=red&type=movie")
    .then((res) => res.json())
    .then((data) => {
      data.Search.forEach((movie) => {
        console.log(movie);
      });
    });
};
