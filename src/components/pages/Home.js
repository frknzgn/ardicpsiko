import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from '../home/Hero';
import Services from '../home/Services';
import { validateForm } from '../../utils/validator';
import { SecureInput, SecureTextarea } from '../common/SecureFormElements';

const HomeContainer = styled.div`
  width: 100%;
`;

const IntroSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.lightCream};
`;

const IntroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const IntroHeading = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const IntroText = styled(motion.p)`
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const TestimonialSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightCream};
`;

const TestimonialHeading = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TestimonialCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const TestimonialAuthor = styled.p`
  font-weight: 600;
  text-align: right;
`;

const ContactSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.darkCream};
`;

const ContactHeading = styled(motion.h2)`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
`;

const ContactForm = styled(motion.form)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`;

const SuccessMessage = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-family: ${props => props.theme.fonts.primary};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color ${props => props.theme.transitions.fast};
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const Home = () => {
  // Form state yönetimi
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  // Validasyon hataları için state
  const [errors, setErrors] = useState({});
  
  // Form gönderim durumu
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Input değişikliklerini izleme
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // SecureFormElements bileşenleri zaten sanitize işlemini yapıyor
    });
    
    // Input değiştiğinde ilgili hatayı temizle
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Form gönderimi
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Tüm formu validate et
    const validation = validateForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    // Form geçerliyse
    console.log('Form gönderiliyor:', formData);
    
    // Normalde burada API'ye form verilerini gönderecektik
    // Örnek amaçlı sadece başarılı mesajı gösteriyoruz
    setFormSubmitted(true);
    setErrors({});
    
    // Formu sıfırla
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    
    // 5 saniye sonra başarı mesajını gizle
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <HomeContainer>
      <Hero />
      
      <IntroSection>
        <div className="container">
          <IntroContent>
            <IntroHeading
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ardıç Psikoloji'ye Hoş Geldiniz
            </IntroHeading>
            <IntroText
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              İç huzura giden yolculuğunuzda yanınızdayız. Ardıç Psikoloji olarak, her bireyin kendine özgü olduğuna inanıyor ve size özel çözümler sunuyoruz. Profesyonel kadromuz ve modern yaklaşımımızla ruhsal sağlığınızı destekliyor, hayat kalitenizi artırmanızı sağlıyoruz.
            </IntroText>
          </IntroContent>
        </div>
      </IntroSection>
      
      <Services />
      
      <TestimonialSection>
        <div className="container">
          <TestimonialHeading
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Danışanlarımız Ne Diyor?
          </TestimonialHeading>
          
          <TestimonialGrid>
            {[1, 2, 3].map((item, index) => (
              <TestimonialCard
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <TestimonialText>
                  "Ardıç Psikoloji'nin sıcak ve güvenli ortamında kendimi ifade etmekte hiç zorlanmadım. Terapistim her zaman anlayışlı ve destekleyiciydi. Hayatımdaki değişim için onlara minnettarım."
                </TestimonialText>
                <TestimonialAuthor>— Anonim Danışan {item}</TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialGrid>
        </div>
      </TestimonialSection>
      
      <ContactSection>
        <div className="container">
          <ContactHeading
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Bize Ulaşın
          </ContactHeading>
          
          <ContactContent>
            <ContactInfo
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>İletişim Bilgilerimiz</h3>
              <p>Adres: Örnek Mahallesi, Örnek Sokak No:123</p>
              <p>Telefon: (0212) 555 55 55</p>
              <p>E-posta: info@ardicpsikoloji.com</p>
              <p>Çalışma Saatleri: Hafta içi 09:00 - 18:00</p>
            </ContactInfo>
            
            <ContactForm
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
            >
              {formSubmitted && (
                <SuccessMessage>
                  Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                </SuccessMessage>
              )}
              
              {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}
              
              <SecureInput 
                label="Adınız Soyadınız"
                name="name"
                type="text"
                placeholder="Adınız Soyadınız" 
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                required
              />
              
              <SecureInput 
                label="E-posta Adresiniz"
                name="email"
                type="email"
                placeholder="E-posta Adresiniz" 
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />
              
              <SecureInput 
                label="Telefon Numaranız"
                name="phone"
                type="tel"
                placeholder="Telefon Numaranız" 
                value={formData.phone}
                onChange={handleInputChange}
                error={errors.phone}
              />
              
              <SecureTextarea 
                label="Mesajınız"
                name="message"
                placeholder="Mesajınız..." 
                value={formData.message}
                onChange={handleInputChange}
                error={errors.message}
                required
                rows={6}
              />
              
              <SubmitButton type="submit">Gönder</SubmitButton>
            </ContactForm>
          </ContactContent>
        </div>
      </ContactSection>
    </HomeContainer>
  );
};

export default Home;