import React, { useState, useEffect } from 'react';
import useForm from '../hooks/useForm';
import validate from '../hooks/validate';

const EventRegistrationForm = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  const [showGuest, setShowGuest] = useState(false);

  useEffect(() => {
    setShowGuest(values.attendingWithGuest === 'yes');
  }, [values.attendingWithGuest]);

  return (
    <form onSubmit={handleSubmit} className="comps">
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={values.age || ''}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </label>
      </div>
      <div>
        <label>
          Are you attending with a guest?
          <select name="attendingWithGuest" onChange={handleChange}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </label>
      </div>
      {showGuest && (
        <div>
          <label>
            Guest Name:
            <input
              type="text"
              name="guestName"
              value={values.guestName || ''}
              onChange={handleChange}
            />
            {errors.guestName && <p>{errors.guestName}</p>}
          </label>
        </div>
      )}
      <button type="submit">Submit</button>
      {values.submitted && (
        <div>
          <h3>Form Submitted</h3>
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Age: {values.age}</p>
          <p>Attending with guest: {values.attendingWithGuest}</p>
          {showGuest && <p>Guest Name: {values.guestName}</p>}
        </div>
      )}
    </form>
  );
};

export default EventRegistrationForm;
