import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

export default function SocialMediaIcons() {
  return (
    <>
      <ul className="container-social-media-list">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaPinterest />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
    </>
  );
}
