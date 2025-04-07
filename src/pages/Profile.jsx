import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Profile = () => {
  const [searchParams] = useSearchParams();

  return (
    <div className="card">
      <h2>{searchParams.get("name")}</h2>
      <p>Phone: {searchParams.get("phone")}</p>
      <p>Email: {searchParams.get("email")}</p>
      <p>
        Website: <a href={searchParams.get("website")} target="_blank" rel="noopener noreferrer">
          {searchParams.get("website")}
        </a>
      </p>
    </div>
  );
};

export default Profile;
