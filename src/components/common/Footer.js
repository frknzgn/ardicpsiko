import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightCream};
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.lightCream};
  margin-bottom: 0.8rem;
  transition: color ${props => props.theme.transitions.fast};
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
    color: ${props => props.theme.colors.darkCream};
  }
`;

const FooterText = styled.p`
  margin-bottom: 1rem;
  opacity: 0.8;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.lightCream};
  transition: all ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.lightCream};
    color: ${props => props.theme.colors.primary};
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 2rem auto;
  max-width: 1200px;
`;

const Copyright = styled.div`
  text-align: center;
  opacity: 0.8;
  font-size: 0.9rem;
  padding: 0 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Ardıç Psikoloji</FooterTitle>
          <FooterText>
            Sağlıklı bir zihin ve huzurlu bir yaşam için profesyonel psikolojik destek hizmetleri sunuyoruz.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">f</SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">i</SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">t</SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">in</SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Sayfalar</FooterTitle>
          <FooterLink to="/">Anasayfa</FooterLink>
          <FooterLink to="/hakkimizda">Hakkımızda</FooterLink>
          <FooterLink to="/vizyon">Vizyon</FooterLink>
          <FooterLink to="/misyon">Misyon</FooterLink>
          <FooterLink to="/psikologlarimiz">Psikologlarımız</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Hizmetlerimiz</FooterTitle>
          <FooterLink to="/#bireysel">Bireysel Terapi</FooterLink>
          <FooterLink to="/#aile">Aile Terapisi</FooterLink>
          <FooterLink to="/#cift">Çift Terapisi</FooterLink>
          <FooterLink to="/#cocuk">Çocuk Terapisi</FooterLink>
          <FooterLink to="/#stres">Stres Yönetimi</FooterLink>
          <FooterLink to="/#kisisel">Kişisel Gelişim</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>İletişim</FooterTitle>
          <FooterText>Örnek Mahallesi, Örnek Sokak No:123</FooterText>
          <FooterText>Telefon: (0212) 555 55 55</FooterText>
          <FooterText>E-posta: info@ardicpsikoloji.com</FooterText>
          <FooterText>Çalışma Saatleri: Hafta içi 09:00 - 18:00</FooterText>
        </FooterColumn>
      </FooterContent>
      
      <Divider />
      
      <Copyright>
        &copy; {new Date().getFullYear()} Ardıç Psikoloji. Tüm hakları saklıdır.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;