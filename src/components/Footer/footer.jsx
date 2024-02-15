import React from 'react';
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import FacebookIcon from '../../assets/social/facebook-white.svg';
import TwitterIcon from '../../assets/social/twitter-white.svg';
import InstagramIcon from '../../assets/social/instagram-white.svg';
import AppStoreIcon from '../../assets/store/app-store.svg';
import GooglePlayIcon from '../../assets/store/play-store.svg';
import MicrosoftStoreIcon from '../../assets/store/windows-store.svg';
import './footer.css'; 

function Footer() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="footer">
      <Typography variant="body1" className="footer-text">
        Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account
      </Typography>
      <Typography variant="body2" className="footer-text">
        Copyright © 2016 DEMO Streaming. All Rights Reserved.
      </Typography>
      <div className="icons">
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
          className="bottomNavigation"
        >
          <BottomNavigationAction icon={<img src={FacebookIcon} alt="Facebook" />} />
          <BottomNavigationAction icon={<img src={TwitterIcon} alt="Twitter" />} />
          <BottomNavigationAction icon={<img src={InstagramIcon} alt="Instagram" />} />
        </BottomNavigation>
        <div className="store-icons">
          <img src={AppStoreIcon} alt="App Store" />
          <img src={GooglePlayIcon} alt="Google Play" />
          <img src={MicrosoftStoreIcon} alt="Microsoft Store" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
