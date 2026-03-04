import React from 'react';

export default function ReadingList() {
  return (
    <>
      <h2>My Reading List</h2>
      <p>I organize my bookshelves into three categories:</p>
      <h3>Completed</h3>
      <ul>
        <li>Renegade Immortal – Er Gen</li>
        <li>I Shall Seal the Heavens – Er Gen</li>
        <li>Coiling Dragons – Wo Chi Xihong Shi</li>
      </ul>
      <h3>Currently Reading</h3>
      <ul>
        <li>A World Worth Protecting – Er Gen</li>
        <li>Stellar Transformations – Wo Chi Xihong Shi</li>
        <li>Fourth Wing – Rebecca Yarros</li>
      </ul>
      <h3>Want to Read</h3>
      <ul>
        <li>A Court of Thorns and Roses – Sarah J. Maas</li>
      </ul>
      {/* <p>Book cover examples:</p>
      <img src="/book1.jpg" alt="Book cover 1" style={{maxWidth:'100%', margin:'20px 0'}} />
      <img src="/book2.jpg" alt="Book cover 2" style={{maxWidth:'100%', margin:'20px 0'}} /> */}
    </>
  );
}