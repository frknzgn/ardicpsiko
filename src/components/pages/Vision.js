import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const VisionContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightCream};
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const ContentSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.lightCream};
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ContentHeading = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContentText = styled(motion.p)`
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const FutureSection = styled.section`
  padding: 5rem 0;
  background-color: white;
`;

const FutureHeading = styled(motion.h2)`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const FutureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FutureCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.lightCream};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const FutureTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const FutureDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.7;
`;

const Vision = () => {
  const futureGoals = [
    {
      title: "Yaygın Erişim",
      description: "Tüm sosyoekonomik gruplardan insanların kaliteli psikolojik destek hizmetlerine erişebilmesini sağlamak."
    },
    {
      title: "Yenilikçi Yaklaşımlar",
      description: "Psikoloji alanındaki en güncel yaklaşımları takip ederek, danışanlarımıza en etkili tedavi yöntemlerini sunmak."
    },
    {
      title: "Toplum Bilinci",
      description: "Ruh sağlığı konusunda toplum bilincini artırmak ve psikolojik destek almanın normalleşmesine katkıda bulunmak."
    }
  ];

  return (
    <VisionContainer>
      <HeroSection>
        <div className="container">
          <HeroTitle>Vizyonumuz</HeroTitle>
        </div>
      </HeroSection>
      
      <ContentSection>
        <ContentContainer>
          <ContentHeading
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ardıç Psikoloji'nin Vizyonu
          </ContentHeading>
          
          <ContentText
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ardıç Psikoloji olarak vizyonumuz, ruh sağlığı hizmetlerini herkes için erişilebilir kılmak ve toplumumuzda 
            psikolojik iyilik halini desteklemektir. Bireylerin potansiyellerini en üst düzeyde gerçekleştirmelerine 
            yardımcı olmak için bilimsel temelli, etik ve insancıl bir yaklaşım benimsiyoruz.
          </ContentText>

          <ContentText
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Uzmanlığımızı ve tutkumuzu birleştirerek, danışanlarımızın yaşam kalitesini iyileştirmek ve onları daha 
            sağlıklı bir geleceğe hazırlamak için çalışıyoruz. Her bireyin kendine özgü ihtiyaçlarını anlayarak 
            kişiselleştirilmiş çözümler sunmayı hedefliyoruz.
          </ContentText>
        </ContentContainer>
      </ContentSection>

      <FutureSection>
        <FutureHeading
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Geleceğe Yönelik Hedeflerimiz
        </FutureHeading>

        <FutureGrid>
          {futureGoals.map((goal, index) => (
            <FutureCard
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <FutureTitle>{goal.title}</FutureTitle>
              <FutureDescription>{goal.description}</FutureDescription>
            </FutureCard>
          ))}
        </FutureGrid>
      </FutureSection>
    </VisionContainer>
  );
};

export default Vision;