import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PsychologistsContainer = styled.div`
  padding-top: 100px;
`;

const HeroSection = styled.section`
  padding: 3rem 0;
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

const IntroSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.lightCream};
`;

const IntroContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const IntroText = styled(motion.p)`
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const TeamSection = styled.section`
  padding: 5rem 0;
  background-color: white;
`;

const TeamContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TeamHeading = styled(motion.h2)`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const PsychologistCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.lightCream};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
`;

const PsychologistImageContainer = styled.div`
  height: 300px;
  overflow: hidden;
`;

const PsychologistImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.primaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const PsychologistInfo = styled.div`
  padding: 2rem;
`;

const PsychologistName = styled.h3`
  color: ${props => props.theme.colors.primary};
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const PsychologistTitle = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-weight: 500;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

const PsychologistDesc = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const SpecialtiesList = styled.ul`
  padding-left: 1.2rem;
  margin-bottom: 1.5rem;
`;

const SpecialtyItem = styled.li`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

const EducationSection = styled.div`
  margin-top: 1.5rem;
`;

const EducationTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
`;

const EducationList = styled.ul`
  padding-left: 1.2rem;
`;

const EducationItem = styled.li`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  line-height: 1.5;
`;

const Psychologists = () => {
  const psychologists = [
    {
      name: "Pelin ALPSOY",
      title: "Klinik Psikolog",
      description: "ABOUT PELO",
      specialties: [
        "Travma Sonrası Stres Bozukluğu (TSSB)",
        "Kaygı ve Panik Bozuklukları",
        "Depresyon ve Duygudurum Bozuklukları",
        "Bilişsel Davranışçı Terapi (BDT)"
      ],
      education: [
        "İstanbul Üniversitesi, Psikoloji Lisans",
        "Boğaziçi Üniversitesi, Klinik Psikoloji Yüksek Lisans",
        "Oxford Üniversitesi, Klinik Psikoloji Doktora"
      ]
    },
    {
      name: "Seray Nur ÇINAR",
      title: "Uzman Psikolog",
      description: "ABOUT SERO",
      specialties: [
        "Çift ve Evlilik Terapisi",
        "Aile Danışmanlığı",
        "İlişki Problemleri",
        "Ebeveyn-Çocuk İlişkileri",
        "Çözüm Odaklı Kısa Süreli Terapi"
      ],
      education: [
        "Hacettepe Üniversitesi, Psikoloji Lisans",
        "ODTÜ, Aile ve Çift Danışmanlığı Yüksek Lisans",
        "Gottman Enstitüsü, Çift Terapisi Sertifikası"
      ]
    }
  ];

  return (
    <PsychologistsContainer>
      <HeroSection>
        <div className="container">
          <HeroTitle>Psikologlarımız</HeroTitle>
        </div>
      </HeroSection>
      
      <IntroSection>
        <IntroContainer>
          <IntroText
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ardıç Psikoloji'de alanında uzman, deneyimli ve etik değerlere bağlı psikologlarımızla 
            sizlere kaliteli hizmet sunmaktan gurur duyuyoruz. Ekibimiz, sürekli eğitim ve gelişim ilkesiyle 
            çalışarak psikoloji alanındaki en güncel yaklaşımları takip etmektedir.
          </IntroText>
        </IntroContainer>
      </IntroSection>
      
      <TeamSection>
        <TeamContainer>
          <TeamHeading
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Uzman Ekibimiz
          </TeamHeading>
          
          <TeamGrid>
            {psychologists.map((psychologist, index) => (
              <PsychologistCard
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <PsychologistImageContainer>
                  <PsychologistImagePlaceholder>
                    {psychologist.name} Fotoğrafı
                  </PsychologistImagePlaceholder>
                </PsychologistImageContainer>
                
                <PsychologistInfo>
                  <PsychologistName>{psychologist.name}</PsychologistName>
                  <PsychologistTitle>{psychologist.title}</PsychologistTitle>
                  <PsychologistDesc>{psychologist.description}</PsychologistDesc>
                  
                  <div>
                    <strong>Uzmanlık Alanları:</strong>
                    <SpecialtiesList>
                      {psychologist.specialties.map((specialty, idx) => (
                        <SpecialtyItem key={idx}>{specialty}</SpecialtyItem>
                      ))}
                    </SpecialtiesList>
                  </div>
                  
                  <EducationSection>
                    <EducationTitle>Eğitim</EducationTitle>
                    <EducationList>
                      {psychologist.education.map((edu, idx) => (
                        <EducationItem key={idx}>{edu}</EducationItem>
                      ))}
                    </EducationList>
                  </EducationSection>
                </PsychologistInfo>
              </PsychologistCard>
            ))}
          </TeamGrid>
        </TeamContainer>
      </TeamSection>
    </PsychologistsContainer>
  );
};

export default Psychologists;