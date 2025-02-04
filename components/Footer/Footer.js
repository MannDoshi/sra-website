import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { SocialMediaLinks } from '../../data';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <h3>Connect with us</h3>
        <div className={styles.footerIcons}>
          <a href={SocialMediaLinks.facebook} target='_blank'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href={SocialMediaLinks.youtube} target='_blank'>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href={SocialMediaLinks.twitter} target='_blank'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={SocialMediaLinks.instagram} target='_blank'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
