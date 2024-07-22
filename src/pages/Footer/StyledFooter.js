import styled from "styled-components";

export const FooterContainer = styled.footer`
 background-color: #28282b;
  width: 100%;
  font-size: 14px;
  color: white;
  padding: 20px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const SocialMediaList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const SocialMediaItem = styled.li`
  margin: 0 10px;
`;

export const SocialMediaLink = styled.a`
  color: #fff;
  text-decoration: none;
`;
