// Petlist.js
import React, { useState } from 'react';

const Petlist = ({ pets, deletePet, editPet }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedPet, setEditedPet] = useState({
    name: '',
    species: '',
    Id: '',
    Age: '',
    Gender: '',
    Breed: '',
    Color: '',
  });

  const handleEditClick = (pet) => {
    setEditMode(pet.Id);
    setEditedPet(pet);
  };

  const handleSaveEdit = () => {
    editPet(editedPet);
    setEditMode(null);
    setEditedPet({
      name: '',
      species: '',
      Id: '',
      Age: '',
      Gender: '',
      Breed: '',
      Color: '',
    });
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
  };

  const cellStyle = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
  };

  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: '#f2f2f2',
  };

  return (
    <div className="pet-list">
      <h2>Pet List</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerCellStyle}>Name</th>
            <th style={headerCellStyle}>Species</th>
            <th style={headerCellStyle}>Petcode</th>
            <th style={headerCellStyle}>Age</th>
            <th style={headerCellStyle}>Gender</th>
            <th style={headerCellStyle}>Breed</th>
            <th style={headerCellStyle}>Color</th>
            <th style={headerCellStyle}>Description</th>
            <th style={headerCellStyle}>Image</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet, index) => (
            <tr key={index}>
              <td style={cellStyle}>{pet.name}</td>
              <td style={cellStyle}>{pet.species}</td>
              <td style={cellStyle}>{pet.Petcode}</td>
              <td style={cellStyle}>{pet.Age}</td>
              <td style={cellStyle}>{pet.Gender}</td>
              <td style={cellStyle}>{pet.Breed}</td>
              <td style={cellStyle}>{pet.Color}</td>
              <td style={cellStyle}>{pet.Description}</td>
              <td style={cellStyle}>
                {pet.Image && (
                  <img src={URL.createObjectURL(pet.Image)} alt={pet.name} style={{ width: '50px', height: '50px' }} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Petlist;
