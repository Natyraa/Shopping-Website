import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import {
  FooterContainer,
  SocialMediaList,
  SocialMediaItem,
  SocialMediaLink,
} from "./StyledFooter";

const Footer = () => {
  return (
      <FooterContainer>
      <SocialMediaList>
        <SocialMediaItem>
          <SocialMediaLink
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
            Facebook
          </SocialMediaLink>
        </SocialMediaItem>
        <SocialMediaItem>
          <SocialMediaLink
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </SocialMediaLink>
        </SocialMediaItem>
        <SocialMediaItem>
          <SocialMediaLink
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare />
            Twitter
          </SocialMediaLink>
        </SocialMediaItem>
      </SocialMediaList>
      <p>&copy; 2024 Company Name. All rights reserved.</p>
    </FooterContainer>
    
  );
};

export default Footer;