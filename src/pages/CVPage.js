import React, { useEffect, useState } from 'react';
import './CVPage.css';

const CVPage = () => {
  const [cvData, setCvData] = useState({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('cvData'));
    if (storedData) {
      setCvData(storedData);
    }
  }, []);

  const { name, email, phoneNumber, degree, bio, skills, interests, profilePic, socialMedia } = cvData;

  return (
    <section className="cv-container">
      <div className="cv-box" style={{ display: 'flex', alignItems: 'flex-start' }}>
        {profilePic && (
          <img src={profilePic} alt="Profile" className="cv-profile-pic" style={{ marginRight: '20px', width: '120px', height: '120px', objectFit: 'cover', borderRadius: '10px' }} />
        )}
        <div className="cv-content" style={{ flex: 1 }}>
          <h3 className="cv-name">{name || 'Your Name'}</h3>
          <p className="cv-degree">{degree || 'Your Degree'}</p>
          <p className="cv-contact">{email || 'Your Email'}</p>
          <p className="cv-contact">{phoneNumber || 'Your Phone Number'}</p>
          <div className="cv-section">
            <h4>Bio</h4>
            <p>{bio || 'Tell us about yourself...'}</p>
          </div>
          <div className="cv-section">
            <h4>Skills</h4>
            <ul className="cv-list">
              {(skills && skills.length > 0 ? skills : ['No skills listed']).map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="cv-section">
            <h4>Interests</h4>
            <ul className="cv-list">
              {(interests && interests.length > 0 ? interests : ['No interests listed']).map((interest, idx) => (
                <li key={idx}>{interest}</li>
              ))}
            </ul>
          </div>
          <div className="cv-section">
            <h4>Social Media</h4>
            <ul className="cv-list">
              {(socialMedia && socialMedia.length > 0 ? socialMedia : [{ name: 'No links provided' }]).map((social, idx) => (
                <li key={idx}>{social.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVPage;
