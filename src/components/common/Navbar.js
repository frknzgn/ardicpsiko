import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logoImage from '../../assets/images/icons/logo.png';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${props => props.scrolled ? props.theme.colors.navBg : 'transparent'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0,0,0,0.2)' : 'none'};
  transition: all ${props => props.theme.transitions.medium};
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 1rem;
  }
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  position: relative;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 70%;
  }
`;

const LogoImg = styled.img`
  height: 100px;
  width: auto;
  position: relative;
  border-radius: 5px;
  vertical-align: middle;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 60px;
  }
  
  &:after {
    content: '';
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 70%;
    background: ${props => props.scrolled ? props.theme.colors.lightCream : props.theme.colors.primary};
    border-radius: 10px;
  }
`;

const Divider = styled.div`
  width: 3px;
  min-height: 50px;
  margin: 0 6px;
  align-self: center;
  display: block;
  background: ${props => props.scrolled ? props.theme.colors.lightCream : props.theme.colors.primary};
  border-radius: 10px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    min-height: 35px;
    margin: 0 4px;
  }
`;

const Logo = styled(Link)`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 2.5rem;
  font-weight: 700;
  text-decoration: none;
  position: relative;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 0px;
  color: ${props => props.scrolled ? props.theme.colors.lightCream : props.theme.colors.primary};
  text-shadow: ${props => props.scrolled ? '0 1px 2px rgba(0,0,0,0.3)' : '0 1px 2px rgba(0,0,0,0.1)'};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
  
  span {
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 1.2rem;
    }
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${props => props.scrolled ? props.theme.colors.lightCream : props.theme.colors.primary};
    transform: scaleX(0.7);
    transform-origin: right;
    transition: transform 0.3s ease;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      display: none;
    }
  }
  
  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: ${props => props.scrolled ? props.theme.colors.lightCream : props.theme.colors.primary};
  font-weight: 500;
  padding: 0.5rem 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: ${props => props.scrolled ? props.theme.colors.lightCream : props.theme.colors.primary};
    transition: width ${props => props.theme.transitions.medium};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.scrolled ? props.theme.colors.lightCream : props.theme.colors.primary};
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1000;
`;

const MobileLink = styled(Link)`
  color: ${props => props.theme.colors.lightCream};
  font-size: 1.2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const menuVariants = {
    closed: { x: '100%' },
    open: { x: 0 }
  };
  
  const links = [
    { name: 'Anasayfa', path: '/' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Vizyon', path: '/vizyon' },
    { name: 'Misyon', path: '/misyon' },
    { name: 'Psikologlarımız', path: '/psikologlarimiz' },
    { name: 'Blog', path: '/blog' }
  ];
  
  return (
    <NavContainer scrolled={scrolled}>
      <NavWrapper>
        <LogoContainer
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          scrolled={scrolled}
        >
          <Logo to="/" scrolled={scrolled}>
            <LogoImg src={logoImage} alt="Ardıç Psikoloji Logo" scrolled={scrolled} />
            <Divider scrolled={scrolled} />
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ardıç Psikoloji
            </motion.span>
          </Logo>
        </LogoContainer>
        
        <NavLinks>
          {links.map(link => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              scrolled={scrolled}
              active={location.pathname === link.path ? 1 : 0}
            >
              {link.name}
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileMenuButton 
          scrolled={scrolled}
          onClick={() => setMobileMenuOpen(true)}
        >
          ☰
        </MobileMenuButton>
        
        {mobileMenuOpen && (
          <>
            <motion.div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.5)',
                zIndex: 999
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <MobileMenu
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div style={{ textAlign: 'right', marginBottom: '2rem' }}>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}
                >
                  ✕
                </button>
              </div>
              
              {links.map(link => (
                <MobileLink 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </MobileLink>
              ))}
            </MobileMenu>
          </>
        )}
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;