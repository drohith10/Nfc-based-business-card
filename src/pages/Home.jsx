import React, { useState } from 'react';

const Home = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    website: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const profileUrl = `${window.location.origin}/profile?name=${encodeURIComponent(form.name)}&phone=${form.phone}&email=${form.email}&website=${encodeURIComponent(form.website)}`;

    try {
      if ('NDEFWriter' in window) {
        const ndef = new NDEFWriter();
        await ndef.write({ records: [{ recordType: 'url', data: profileUrl }] });
        alert('NFC tag written successfully!');
      } else {
        alert('Web NFC is not supported on this device/browser.');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to write NFC tag.');
    }
  };

  return (
    <div>
      <h2>Create Your NFC Business Card</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Full Name" required />
        <input name="phone" onChange={handleChange} placeholder="Phone" required />
        <input name="email" onChange={handleChange} placeholder="Email" required />
        <input name="website" onChange={handleChange} placeholder="Website" />
        <button type="submit">Write to NFC</button>
      </form>
    </div>
  );
};

export default Home;
