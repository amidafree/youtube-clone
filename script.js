import videos from "./data.js";

//generate videos html

let renderedHTML = '';

videos.forEach((video) => {
  renderedHTML += `
    <div class="video-preview">
      <div class="thumbnail-row">
        <img class="thumbnail" src="${video.thumbnail}">
        <div class="video-time">${video.time}</div>
      </div>
      <div class="video-info-grid">
        <div class="channel-picture">
          <img class="profile-picture" src="${video.icon}">
        </div>
        <div class="video-info">
          <p class="video-title">
            ${video.title}
          </p>
          <p class="video-author">
            ${video.account}
          </p>
          <p class="video-stats">
            ${video.views} views &#183; ${video.day} ago
          </p>
        </div>
      </div>
    </div>
  `;
});


document.querySelector('#video-grid')
  .innerHTML = renderedHTML;