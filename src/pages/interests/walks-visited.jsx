import React from 'react';

export default function WalksVisited() {
  return (
    <>
      <h2>Walks I've Taken</h2>
      <p>I Enjoy going on Walks, catching Sunsets and Sunrises</p>
      <ul>
        <li>Bondi to Coogee Walk</li>
        <p>I usually go to Bondi to watch the sunrise.
            The walk from Bondi to Coogee is one of my favorite coastal walks. It offers stunning views of the ocean, cliffs, and beaches along the way. I love taking this walk in the early morning to catch the sunrise over the water. The peaceful atmosphere and beautiful scenery make it a perfect way to start the day.
        </p>
        <li>Spit to Manly</li>
        <li>Urban strolls through historic neighborhoods</li>
      </ul>
      {/* <p>Photos from a few walks:</p>
      <img src="/walk1.jpg" alt="Coastal trail" style={{maxWidth:'100%', margin:'20px 0'}} />
      <img src="/walk2.jpg" alt="Forest path" style={{maxWidth:'100%', margin:'20px 0'}} />
      <video controls width="320" style={{margin:'20px 0'}}>
        <source src="/walk-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </>
  );
}