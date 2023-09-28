import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="01123456789"
      email="asdfghjkl@yahoo.in"
    />

    <Card
      name="Jawa"
      img="https://i.pinimg.com/originals/a6/e5/1b/a6e51b78065d41e010ca63e09a29a759.jpg"
      tel="9876543210"
      email="lkjhgfdsa@gmail.com"
    />

    <Card />
  </div>,
  document.getElementById("root")
);
