import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DataEntryPage.css';

const DataEntryPage = ({ onSubmit = () => {} }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [degree, setDegree] = useState('');
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');

  const [interests, setInterests] = useState([]);
  const [interestInput, setInterestInput] = useState('');

  const [socialMedia, setSocialMedia] = useState([]);
  const [socialName, setSocialName] = useState('');
  const [socialUrl, setSocialUrl] = useState('');

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'A valid email is required.';
    if (!phoneNumber.trim() || !/^\d{10,15}$/.test(phoneNumber)) newErrors.phoneNumber = 'A valid phone number (10-15 digits) is required.';
    if (!degree.trim()) newErrors.degree = 'Degree is required.';
    if (!bio.trim()) newErrors.bio = 'Bio is required.';
    if (!profilePic) newErrors.profilePic = 'Profile picture is required.';
    if (skills.length === 0) newErrors.skills = 'At least one skill is required.';
    if (interests.length === 0) newErrors.interests = 'At least one interest is required.';
    if (socialMedia.length === 0) newErrors.socialMedia = 'At least one social media link is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addSkill = () => {
    if (!skillInput.trim()) {
      alert('Skill cannot be empty!');
      return;
    }
    setSkills([...skills, skillInput]);
    setSkillInput('');
  };

  const addInterest = () => {
    if (!interestInput.trim()) {
      alert('Interest cannot be empty!');
      return;
    }
    setInterests([...interests, interestInput]);
    setInterestInput('');
  };

  const addSocialMedia = () => {
    if (!socialName.trim() || !socialUrl.trim() || !/^https?:\/\/.+\..+/.test(socialUrl)) {
      alert('Both a valid Social Media Name and URL are required!');
      return;
    }
    setSocialMedia([...socialMedia, { name: socialName, url: socialUrl }]);
    setSocialName('');
    setSocialUrl('');
  };

  const deleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const deleteInterest = (index) => {
    const updatedInterests = interests.filter((_, i) => i !== index);
    setInterests(updatedInterests);
  };

  const deleteSocialMedia = (index) => {
    const updatedSocialMedia = socialMedia.filter((_, i) => i !== index);
    setSocialMedia(updatedSocialMedia);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const data = {
          name,
          email,
          phoneNumber,
          degree,
          bio,
          profilePic: reader.result,
          skills,
          interests,
          socialMedia,
        };
        localStorage.setItem('cvData', JSON.stringify(data));
        onSubmit(data);
        navigate('/cv');
      };
      
      if (profilePic) {
        reader.readAsDataURL(profilePic);
      }
    }
  };

  return (
    <div className="data-entry-page">
      <header className="data-entry-header">
        <h2>Portfolio Maker</h2>
      </header>
      <div className="container">
        <form onSubmit={handleSubmit} className="data-entry-form">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-6">
              <h4>Basic Information</h4>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
              </div>
              <div className="form-group">
                <label>Degree</label>
                <input
                  type="text"
                  className="form-control"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                />
                {errors.degree && <small className="text-danger">{errors.degree}</small>}
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  className="form-control"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                {errors.bio && <small className="text-danger">{errors.bio}</small>}
              </div>
              <div className="form-group">
                <label>Profile Picture</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setProfilePic(e.target.files[0])}
                />
                {errors.profilePic && <small className="text-danger">{errors.profilePic}</small>}
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-6">
              <h4>Skills & Interests</h4>
              <div className="form-group">
                <label>Skills</label>
                <input
                  type="text"
                  className="form-control"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="Add a skill"
                />
                <button type="button" className="btn btn-secondary mt-2" onClick={addSkill}>Add Skill</button>
                <div className="mt-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="d-inline-block me-2 mb-2">
                      <span className="badge bg-primary me-1">{skill}</span>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteSkill(index)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
                {errors.skills && <small className="text-danger">{errors.skills}</small>}
              </div>
              <div className="form-group">
                <label>Interests</label>
                <input
                  type="text"
                  className="form-control"
                  value={interestInput}
                  onChange={(e) => setInterestInput(e.target.value)}
                  placeholder="Add an interest"
                />
                <button type="button" className="btn btn-secondary mt-2" onClick={addInterest}>Add Interest</button>
                <div className="mt-2">
                  {interests.map((interest, index) => (
                    <div key={index} className="d-inline-block me-2 mb-2">
                      <span className="badge bg-success me-1">{interest}</span>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteInterest(index)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
                {errors.interests && <small className="text-danger">{errors.interests}</small>}
              </div>
              <div className="form-group">
                <label>Social Media Links</label>
                <input
                  type="text"
                  className="form-control"
                  value={socialName}
                  onChange={(e) => setSocialName(e.target.value)}
                  placeholder="Platform Name"
                />
                <input
                  type="url"
                  className="form-control mt-2"
                  value={socialUrl}
                  onChange={(e) => setSocialUrl(e.target.value)}
                  placeholder="Profile URL"
                />
                <button type="button" className="btn btn-secondary mt-2" onClick={addSocialMedia}>Add Social Media</button>
                <div className="mt-2">
                  {socialMedia.map((social, index) => (
                    <div key={index} className="d-block mb-2">
                      <a href={social.url} target="_blank" rel="noopener noreferrer" className="me-2">
                        {social.name}
                      </a>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteSocialMedia(index)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
                {errors.socialMedia && <small className="text-danger">{errors.socialMedia}</small>}
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-success mt-3">Generate Portfolio</button>
        </form>
      </div>
    </div>
  );
};

export default DataEntryPage;