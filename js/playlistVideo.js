// Get the parent container of all video items (adjust as needed)
let videoListContainer = document.querySelector(".video-list");

videoListContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("vid")) {
    // Remove 'active' class from all videos
    document
      .querySelectorAll(".video-list .vid")
      .forEach((vid) => vid.classList.remove("active"));

    // Add 'active' class to the clicked video
    event.target.classList.add("active");

    // Update the main video and title
    let src = event.target.children[0].getAttribute("src");
    let text = event.target.children[1].innerHTML;
    document.querySelector(".main-video video").src = src;
    document.querySelector(".main-video .title").innerHTML = text;
  }
});
