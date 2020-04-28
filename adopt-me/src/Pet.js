import React from "react";
export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Animal: {animal}</h2>
      <h2>Breed: {breed}</h2>
    </div>
  );
}
