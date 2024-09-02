import React, { useState } from 'react';
import style from "./admin.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Adminprofile = () => {
    const [name, setName] = useState('NuaScan');
    const [logoUrl, setLogoUrl] = useState('https://via.placeholder.com/150'); // Default logo URL
    const [location, setLocation] = useState('Bhubaneswar');
    const [phone, setPhone] = useState('987654321');
    const [email, setEmail] = useState('nuascan@gmail.com');
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
    const [facebookUrl, setFacebookUrl] = useState('https://facebook.com');
    const [instagramUrl, setInstagramUrl] = useState('https://instagram.com');

    const handleLogoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleLogoDelete = () => {
        setLogoUrl('https://via.placeholder.com/150'); // Reset to default logo URL
    };

    return (
        <div className={style.adminProfileContainer}>
            <div className={style.profileContent}>
                <div className={style.logoSection}>
                    {logoUrl ? (
                        <img src={logoUrl} alt="Logo" className={style.logo} />
                    ) : (
                        <div className={style.noLogo}>No Logo</div>
                    )}
                    <input 
                        type="file" 
                        onChange={handleLogoUpload} 
                        className={style.fileInput} 
                    />
                    {logoUrl && logoUrl !== 'https://via.placeholder.com/150' && (
                        <button onClick={handleLogoDelete} className={style.deleteLogoButton}>
                            Delete Logo
                        </button>
                    )}
                </div>
                <div className={style.detailsSection}>
                    <h1 className={style.name}>{name}</h1>
                    <div className={style.editableField}>
                        <label>Location:</label>
                        <input 
                            type="text" 
                            value={location} 
                            onChange={(e) => setLocation(e.target.value)} 
                            className={style.inputField} 
                        />
                    </div>
                    <div className={style.editableField}>
                        <label>Phone:</label>
                        <input 
                            type="text" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            className={style.inputField} 
                        />
                    </div>
                    <div className={style.editableField}>
                        <label>Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className={style.inputField} 
                        />
                    </div>
                    <div className={style.editableField}>
                        <label>Description:</label>
                        <textarea 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            className={style.textareaField} 
                        />
                    </div>
                    <div className={style.socialMediaSection}>
                        <h2>Connect with us:</h2>
                        <div className={style.socialIcons}>
                            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ color: "blue" }} className={style.icon} />
                            </a>
                            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ color: "purple" }} className={style.icon} />
                            </a>
                        </div>
                        <div className={style.editableField}>
                            <label>Facebook URL:</label>
                            <input 
                                type="text" 
                                value={facebookUrl} 
                                onChange={(e) => setFacebookUrl(e.target.value)} 
                                className={style.inputField} 
                            />
                        </div>
                        <div className={style.editableField}>
                            <label>Instagram URL:</label>
                            <input 
                                type="text" 
                                value={instagramUrl} 
                                onChange={(e) => setInstagramUrl(e.target.value)} 
                                className={style.inputField} 
                            />
                        </div>
                    </div>
                    <button className={style.saveButton}>Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default Adminprofile;
