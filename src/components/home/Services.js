import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  padding: 5rem 0;
  background-color: white;
`;

const SectionHeading = styled(motion.h2)`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ServiceCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.lightCream};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform ${props => props.theme.transitions.medium};
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const ServiceTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.7;
`;

const Services = () => {
  const services = [
    {
      icon: "🧠",
      title: "Bireysel Terapi",
      description: "Kişiye özel yaklaşımla, günlük zorlukları aşmanıza, kaygı ve depresyon gibi durumlarla başa çıkmanıza yardımcı oluyoruz."
    },
    {
      icon: "👩‍👧‍👦",
      title: "Aile Terapisi",
      description: "Aile içi iletişimi güçlendirerek, çatışmaları çözümlemenize ve daha sağlıklı ilişkiler kurmanıza destek oluyoruz."
    },
    {
      icon: "💑",
      title: "Çift Terapisi",
      description: "İlişkinizdeki zorlukları aşmanıza, iletişim becerilerinizi geliştirmenize ve bağınızı güçlendirmenize yardımcı oluyoruz."
    },
    {
      icon: "👶",
      title: "Çocuk Terapisi",
      description: "Çocuğunuzun duygusal ve davranışsal zorluklarını aşmasına, özgüvenini geliştirmesine destek oluyoruz."
    },
    {
      icon: "🧘‍♀️",
      title: "Stres Yönetimi",
      description: "Günlük hayatın stresini etkili bir şekilde yönetmeniz için teknikler öğretiyoruz."
    },
    {
      icon: "🌱",
      title: "Kişisel Gelişim",
      description: "Potansiyelinizi keşfetmenize ve hayatınızda pozitif değişimler yaratmanıza destek oluyoruz."
    }
  ];

  return (
    <ServicesSection id="hizmetler">
      <div className="container">
        <SectionHeading
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hizmetlerimiz
        </SectionHeading>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </ServicesSection>
  );
};

export default Services;