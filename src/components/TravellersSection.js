import React from 'react'
import img1 from "../img/feedbackpicture1.jpg"
import img2 from "../img/feedbackpicture2.jpg"
import img3 from "../img/feedbackpicture3.jpg"

export default function TravellersSection() {
  return (
    <div>TravellersSection
    <h2>Satisfied Travellers around the world</h2>
    
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h3>Customer Feedback 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ligula quis leo suscipit sagittis vel eu est. Nam tristique massa vel ante malesuada, et dictum nisi consequat. Nullam vel tellus sed mauris pellentesque mattis.</p>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Customer Feedback 2</h3>
          <p>Curabitur consequat fringilla enim eu suscipit. Nulla facilisi. Nullam vitae sem ac turpis convallis faucibus in non justo. Aenean consectetur leo eget eros eleifend vestibulum. Sed tincidunt sit amet orci vel ullamcorper. </p>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Customer Feedback 3</h3>
          <p>Maecenas euismod enim eu metus blandit, ut mollis metus ultricies. Donec bibendum ligula a ipsum venenatis, eu ultrices quam bibendum. Aliquam vestibulum neque eu diam volutpat facilisis. Nulla facilisi. </p>
        </div>
      </div>

<img className="bild1" src={img1} />  

<img className="bild2" src={img2} />

<img className="bild3" src={img3} />

    </div>

  )
}
