import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/icons/logo.png';

const HeroSection = styled.section`
  height: 85vh;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${props => props.theme.colors.contrast};
  overflow: hidden;
  padding-top: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: auto;
    min-height: 100vh;
    padding-top: 120px; /* Navbar için yer açıyoruz */
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 35%;
    height: 100%;
    background-color: ${props => props.theme.colors.primary};
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
    opacity: 0.1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 35%;
    height: 100%;
    background-color: ${props => props.theme.colors.accent};
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
    opacity: 0.07;
  }
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const HeroContent = styled(motion.div)`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    text-align: center;
    margin-bottom: 3rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  color: ${props => props.theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -15px;
    width: 80px;
    height: 4px;
    background: ${props => props.theme.colors.primary};
    border-radius: 2px;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
  
  span {
    color: ${props => props.theme.colors.primary};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 2rem;
  line-height: 1.8;
  margin-top: 1.8rem;
`;

const HeroButton = styled(motion.button)`
  background-color: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color ${props => props.theme.transitions.fast};
  box-shadow: 0 4px 15px rgba(217, 121, 65, 0.3);
  
  &:hover {
    background-color: ${props => props.theme.colors.accentDark};
  }
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    border: 3px solid ${props => props.theme.colors.accent};
    border-radius: 10px;
    top: -20px;
    right: -20px;
    z-index: -1;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    justify-content: center;
    
    &::before {
      width: 95%;
      right: auto;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer className="container">
        <HeroContent
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            İç Huzurunuza Giden <span>Yol</span>
          </HeroTitle>
          <HeroSubtitle
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ardıç Psikoloji Merkezi olarak uzman terapistlerimizle sizinle birlikte iyileşme ve gelişim yolculuğunuza eşlik ediyoruz.
          </HeroSubtitle>
          <Link to="/hakkimizda">
            <HeroButton
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Daha Fazla Bilgi
            </HeroButton>
          </Link>
        </HeroContent>
        
        <HeroImage
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logoImage} alt="Ardıç Psikoloji Logo" style={{ maxWidth: '400px' }} />
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;