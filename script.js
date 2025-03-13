import videos from "./data.js";

//generate videos html

let renderedHTML = '';

videos.forEach((video) => {
  renderedHTML += `
    <div class="video-preview">
      <div class="thumbnail-row">
        <a href="${video.videoLink}">
          <img class="thumbnail" src="${video.thumbnail}">
          <div class="video-time">${video.time}</div>
        </a>
      </div>
      <div class="video-info-grid">
        <div class="channel-picture">
          <div class="profile-picture-container">
            <a href="${video.channelLink}">
            <img class="profile-picture" src="${video.icon}">
          </a>
          <div class="channel-tooltip">
            <img class="channel-tooltip-picture" src="${video.icon}">
            <div>
              <div class="channel-tooltip-name">
                ${video.account}
              </div>
              <div class="channel-tooltip-stats">
                ${video.subscribers} subscribers
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="video-info">
          <p class="video-title">
            <a href="${video.videoLink}">
              ${video.title}
            </a>
          </p>
          <p class="video-author">
            <a href="${video.channelLink}">
              ${video.account}
            </a>
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