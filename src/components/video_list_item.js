import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <div>
      <li
        onKeyPress={() => onVideoSelect(video)}
        onClick={() => onVideoSelect(video)}
        className="list-group-item"
        role="presentation"
      >
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} alt="" />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default VideoListItem;
