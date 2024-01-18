import React, { useState } from 'react';
import './petform.css'; // You can create a CSS file for styling
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const Petform = ({ addPet }) => {
  const [petName, setPetName] = useState('');
  const [petSpecies, setPetSpecies] = useState('');
  const [petPetcode, setPetcode] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petGender, setPetGender] = useState(''); // Updated to a single string
  const [petBreed, setPetBreed] = useState('');
  const [petColor, setPetColor] = useState('');
  const [petImage, setPetImage] = useState(null);
  const [petDescription, setPetDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPet({
      name: petName,
      species: petSpecies,
      Petcode: petPetcode,
      Age: petAge,
      Gender: petGender,
      Breed: petBreed,
      Color: petColor,
      Image: petImage, // Include the image in the submitted data
      Description: petDescription, // Include the description in the submitted data
    });
    setPetName('');
    setPetSpecies('');
    setPetcode('');
    setPetAge('');
    setPetGender('');
    setPetBreed('');
    setPetColor('');
    setPetImage(null);
    setPetDescription('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // You can perform additional validations if needed
    setPetImage(file);
  };

  return (
    <div className="pet-card">
      <h2>Add Pet</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pet Name:</label>
          <input
            type="text"
            placeholder="Pet Name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Species:</label>
          <input
            type="text"
            placeholder="Species"
            value={petSpecies}
            onChange={(e) => setPetSpecies(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Petcode:</label>
          <input
            type="text"
            placeholder="Petcode"
            value={petPetcode}
            onChange={(e) => setPetcode(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="text"
            placeholder="Age"
            value={petAge}
            onChange={(e) => setPetAge(e.target.value)}
            required
          />
        </div>

        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={petGender}
          onChange={(e) => setPetGender(e.target.value)}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>

        <div className="form-group">
          <label>Breed:</label>
          <input
            type="text"
            placeholder="Breed"
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Color:</label>
          <input
            type="text"
            placeholder="Color"
            value={petColor}
            onChange={(e) => setPetColor(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            placeholder="Description"
            value={petDescription}
            onChange={(e) => setPetDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
};

export default Petform;
