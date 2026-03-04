import React from 'react';

export default function ClubsVisited() {
  return (
    <>
      <h2>Clubs I've Been To</h2>
      <p>I’ve experienced some incredible nightlife at these venues:</p>
      <ul>
        <li>Club A – rooftop with amazing DJs</li>
        <li>Club B – underground techno spot</li>
        <li>Club C – beachside party</li>
      </ul>
      <p>Here are a few snapshots from my nights out:</p>
      <img src="/club1.jpg" alt="Club A interior" style={{maxWidth: '100%', margin: '20px 0'}} />
      <img src="/club2.jpg" alt="Club B dance floor" style={{maxWidth: '100%', margin: '20px 0'}} />
      <p>I also sometimes record short video clips:</p>
      <video controls width="320" style={{margin: '20px 0'}}>
        <source src="/club-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}