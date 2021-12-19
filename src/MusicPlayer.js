import React from "react";
import "./MusicPlayer.css";

export default function MusicPlayer(props) {
  const codeMapping = {
    "01d":
      "https://open.spotify.com/embed/playlist/3sr9s0oBCa1FrbNv9WOfmp?utm_source=generator",
    "01n":
      "https://open.spotify.com/embed/playlist/3sr9s0oBCa1FrbNv9WOfmp?utm_source=generator",
    "02d":
      "https://open.spotify.com/embed/playlist/3sr9s0oBCa1FrbNv9WOfmp?utm_source=generator",
    "02n":
      "https://open.spotify.com/embed/playlist/7zzQIKEsu9SlTwRB1T8b8s?utm_source=generator",
    "03d":
      "https://open.spotify.com/embed/playlist/7zzQIKEsu9SlTwRB1T8b8s?utm_source=generator",
    "03n":
      "https://open.spotify.com/embed/playlist/7zzQIKEsu9SlTwRB1T8b8s?utm_source=generator",
    "04d":
      "https://open.spotify.com/embed/playlist/7zzQIKEsu9SlTwRB1T8b8s?utm_source=generator",
    "04n":
      "https://open.spotify.com/embed/playlist/7zzQIKEsu9SlTwRB1T8b8s?utm_source=generator",
    "09d":
      "https://open.spotify.com/embed/playlist/3fXcsed3jQxjqGeSdoJ9jN?utm_source=generator",
    "09n":
      "https://open.spotify.com/embed/playlist/3fXcsed3jQxjqGeSdoJ9jN?utm_source=generator",
    "10d":
      "https://open.spotify.com/embed/playlist/3fXcsed3jQxjqGeSdoJ9jN?utm_source=generator",
    "10n":
      "https://open.spotify.com/embed/playlist/3fXcsed3jQxjqGeSdoJ9jN?utm_source=generator",
    "11d":
      "https://open.spotify.com/embed/playlist/3fXcsed3jQxjqGeSdoJ9jN?utm_source=generator",
    "11n":
      "https://open.spotify.com/embed/playlist/3fXcsed3jQxjqGeSdoJ9jN?utm_source=generator",
    "13d":
      "https://open.spotify.com/embed/playlist/2mE6ajAGurIPK6qUu1r7zJ?utm_source=generator",
    "13n":
      "https://open.spotify.com/embed/playlist/2mE6ajAGurIPK6qUu1r7zJ?utm_source=generator",
    "50d":
      "https://open.spotify.com/embed/playlist/7caekjzU5qY305TcAzWfpV?utm_source=generator",
    "50n":
      "https://open.spotify.com/embed/playlist/7caekjzU5qY305TcAzWfpV?utm_source=generator",
  };

  return (
    <div className="row">
      <iframe
        title="rainy-playlist"
        src={codeMapping[props.code]}
        width="100%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
}
