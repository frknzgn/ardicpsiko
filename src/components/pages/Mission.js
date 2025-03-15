import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MissionContainer = styled.div`
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

const ValuesSection = styled.section`
  padding: 5rem 0;
  background-color: white;
`;

const ValuesHeading = styled(motion.h2)`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ValueCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.lightCream};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const ValueTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ValueDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.7;
`;

const ApproachSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.lightCream};
`;

const ApproachContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ApproachHeading = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Mission = () => {
  const coreValues = [
    {
      title: "Güven",
      description: "Danışanlarımızla güvene dayalı ilişkiler kurar, gizlilik ve profesyonelliği en üst düzeyde tutarız."
    },
    {
      title: "Empati",
      description: "Her danışanımızın benzersiz deneyimlerini anlamak için derin bir empati ile yaklaşırız."
    },
    {
      title: "Bilimsellik",
      description: "Uygulamalarımızı güncel bilimsel araştırmalar ve kanıta dayalı tekniklerle şekillendiririz."
    },
    {
      title: "Kapsayıcılık",
      description: "Farklı geçmişlere, kültürlere ve ihtiyaçlara sahip tüm bireyleri kucaklayan bir yaklaşım benimseriz."
    }
  ];

  return (
    <MissionContainer>
      <HeroSection>
        <div className="container">
          <HeroTitle>Misyonumuz</HeroTitle>
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
            Ardıç Psikoloji'nin Misyonu
          </ContentHeading>
          
          <ContentText
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ardıç Psikoloji olarak misyonumuz, bilimsel temelli ve etik değerlere bağlı kalarak, 
            bireylerin ruhsal sağlığını iyileştirmek ve yaşam kalitelerini artırmaktır. Her danışanımızın
            benzersiz ihtiyaçlarını anlayarak, onlara özgü çözümler sunmayı ve kişisel gelişimlerine 
            eşlik etmeyi amaçlıyoruz.
          </ContentText>

          <ContentText
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Toplumda ruh sağlığı konusunda farkındalık yaratmak, damgalanmayı azaltmak ve herkesin 
            ihtiyaç duyduğunda kaliteli psikolojik destek alabilmesini sağlamak için çalışıyoruz. 
            Empati, saygı ve profesyonellik ilkelerimizle, danışanlarımızın güvenilir rehberi olmayı hedefliyoruz.
          </ContentText>
        </ContentContainer>
      </ContentSection>

      <ValuesSection>
        <ValuesHeading
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Temel Değerlerimiz
        </ValuesHeading>

        <ValuesGrid>
          {coreValues.map((value, index) => (
            <ValueCard
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesSection>

      <ApproachSection>
        <ApproachContainer>
          <ApproachHeading
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Çalışma Yaklaşımımız
          </ApproachHeading>
          
          <ContentText
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ardıç Psikoloji'de her danışanımızı bütüncül bir yaklaşımla değerlendiriyoruz. Bireysel ihtiyaçları ve
            hedefleri göz önünde bulundurarak, en uygun terapi yöntemlerini ve teknikleri bir araya getiriyoruz.
            Danışanlarımızın aktif katılımını destekliyor ve onlarla işbirliği içinde çalışarak en etkili sonuçları
            elde etmeyi amaçlıyoruz.
          </ContentText>

          <ContentText
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Sürekli eğitim ve gelişimi önemsiyor, psikoloji alanındaki güncel araştırmaları ve yeni yaklaşımları 
            takip ederek hizmet kalitemizi sürekli yükseltiyoruz. Her danışanımızın kendini güvende ve anlaşılmış 
            hissettiği bir ortam yaratmak önceliğimizdir.
          </ContentText>
        </ApproachContainer>
      </ApproachSection>
    </MissionContainer>
  );
};

export default Mission;