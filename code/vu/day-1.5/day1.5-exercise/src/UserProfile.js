import React, { useState } from 'react';

function UserProfile() {
  // Multiple state variables
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [country, setCountry] = useState(''); // New state for country

  return (
    <div style={{ padding: '20px', border: '1px solid green', maxWidth: '400px' }}>
      <h3>User Profile Form</h3>

      {/* Input for name */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      {/* Input for age */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="Enter your age"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      {/* Input for email */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      {/* Input for country */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter your country"
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      {/* Toggle login status */}
      <div style={{ marginBottom: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={isLoggedIn}
            onChange={(e) => setIsLoggedIn(e.target.checked)}
          />
          {' '}Logged In
        </label>
      </div>

      {/* Display current state */}
      <div style={{
        marginTop: '20px',
        padding: '10px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px'
      }}>
        <h4>Current State:</h4>
        <p><strong>Name:</strong> {name || '(not set)'}</p>
        <p><strong>Age:</strong> {age || '(not set)'}</p>
        <p><strong>Email:</strong> {email || '(not set)'}</p>
        <p><strong>Country:</strong> {country || '(not set)'}</p>
        <p><strong>Status:</strong> {isLoggedIn ? '✅ Logged In' : '❌ Logged Out'}</p>
      </div>

      {/* Reset button */}
      <button
        onClick={() => {
          setName('');
          setAge(0);
          setEmail('');
          setCountry('');
          setIsLoggedIn(false);
        }}
        style={{ marginTop: '10px', padding: '8px 16px', marginRight: '10px' }}
      >
        Reset Form
      </button>

      {/* Save Profile button */}
      <button
        onClick={() => {
          console.log('Profile Saved:', { name, age, email, country, isLoggedIn });
        }}
        style={{ marginTop: '10px', padding: '8px 16px' }}
      >
        Save Profile
      </button>
    </div>
  );
}

export default UserProfile;