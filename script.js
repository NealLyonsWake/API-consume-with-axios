// DOMs
const showInput = document.querySelector("input");
const button = document.querySelector("button");
const imgContainer = document.querySelector("#container");

// HTML Manipulation
async function addThumbnail(url) {
  //console.log(url);
  const thumbnail = document.createElement("img");
  thumbnail.src = url;
  // console.log(thumbnail.src);
  imgContainer.appendChild(thumbnail);
}

// API call
const getShowSearch = async (input) => {
  try {
    // to try and get API and return "resolved" response
    const endPoint = "https://api.tvmaze.com/";
    const param = "search/shows?q=";

    /* eslint-disable */
    const res = await axios.get(`${endPoint}${param}${input}`);

    return res;
  } catch (e) {
    // action if rejected if above fails
    return alert("Error returning data from the server, check your connection");
  }
};

// Event Listener
button.addEventListener("click", () => {
  getShowSearch(showInput.value).then((res) => {
    res.data.forEach((item) => {
      addThumbnail(item.show.image.medium);
    });
  });
});
