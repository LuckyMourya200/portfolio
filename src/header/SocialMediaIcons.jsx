import React from "react";
import FaceBookicon from "../assets/facebook.png";
import TwitterIcon from "../assets/twitter.png";
import InstagramIcon from "../assets/Instagram.png";
import LinkedinIcon from "../assets/Linkedin.png";
import GithubIcon from "../assets/github.png";

import "./Home.css";

const SocialMediaIcons = ({ style }) => {
  const icons = [
    {
      id: "linkedin",
      url: "https://www.linkedin.com/in/lucky-mourya-968b6126b/",
      alt: "LinkedIn",
      src: LinkedinIcon,
    },

    {
      id: "github",
      url: "https://github.com/DEveL0perLuckY",
      alt: "GitHub",
      src: GithubIcon,
    },
    {
      id: "facebook",
      url: "https://www.facebook.com/DeveloperLucky",
      alt: "Facebook",
      src: FaceBookicon,
    },
    {
      id: "twitter",
      url: "https://x.com/LuckyMoury93731",
      alt: "Twitter",
      src: TwitterIcon,
    },
    {
      id: "instagram",
      url: "https://www.instagram.com/luckymourya007/",
      alt: "Instagram",
      src: InstagramIcon,
    },
  ];

  return (
    <div className="social-media-container" style={style}>
      {icons.map((icon) => (
        <a
          key={icon.id}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-media-icon"
        >
          <img src={icon.src} alt={icon.alt} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
