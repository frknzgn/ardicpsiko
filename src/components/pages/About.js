import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
<<<<<<< HEAD
  padding-top: 100px;
`;

const HeroSection = styled.section`
  padding: 3rem 0;
=======
  padding-top: 80px;
`;

const HeroSection = styled.section`
  padding: 5rem 0;
>>>>>>> 719c234afa10900af3710f18cce8e0da0e400a60
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

const StorySection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.lightCream};
`;

const StoryContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const StoryHeading = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const StoryText = styled(motion.p)`
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
  text-align: center;
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.5rem;
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

const TeamSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.darkCream};
`;

const TeamHeading = styled(motion.h2)`
  text-align: center;
  color: ${props => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const TeamSubheading = styled(motion.p)`
  text-align: center;
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const About = () => {
  const values = [
    {
      icon: "❤️",
      title: "Empati",
      description: "Her danışanımızın benzersiz olduğunu biliyor ve onların bakış açısından dünyayı anlamaya çalışıyoruz."
    },
    {
      icon: "🤝",
      title: "Güven",
      description: "Güvenli ve yargısız bir ortam yaratarak, danışanlarımızın kendilerini rahatça ifade etmelerini sağlıyoruz."
    },
    {
      icon: "🔍",
      title: "Profesyonellik",
      description: "En güncel bilimsel yaklaşımları takip ederek, etik standartlara uygun hizmet veriyoruz."
    },
    {
      icon: "🌱",
      title: "Gelişim",
      description: "Danışanlarımızın kişisel gelişimlerini destekleyerek potansiyellerini keşfetmelerine yardımcı oluyoruz."
    }
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <div className="container">
          <HeroTitle>Hakkımızda</HeroTitle>
        </div>
      </HeroSection>
      
      <StorySection>
        <StoryContainer>
          <StoryHeading
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Hikayemiz
          </StoryHeading>
          
          <StoryText
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ardıç Psikoloji, 2015 yılında bir grup tutkulu psikolog tarafından kurulmuştur. Amacımız, toplumun her kesiminden bireylere ulaşılabilir, kaliteli ve kişiye özel psikolojik destek hizmetleri sunmaktır.
          </StoryText>
          
          <StoryText
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Kuruluşumuzdan bu yana, binlerce danışana hizmet verdik ve onların hayatlarında olumlu değişimler yaratmaya yardımcı olduk. Ardıç Psikoloji olarak, her bireyin kendi içinde iyileşme gücüne sahip olduğuna inanıyoruz. Bizim görevimiz, bu gücü ortaya çıkarmak ve desteklemektir.
          </StoryText>
          
          <StoryText
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Merkezimizde, bireysel terapi, çift terapisi, aile terapisi, çocuk ve ergen terapisi gibi çeşitli alanlarda hizmet vermekteyiz. Uzman kadromuz, farklı yaklaşımları benimseyerek her danışanın ihtiyaçlarına uygun çözümler sunmaktadır.
          </StoryText>
        </StoryContainer>
      </StorySection>
      
      <ValuesSection>
        <div className="container">
          <ValuesHeading
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Değerlerimiz
          </ValuesHeading>
          
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </div>
      </ValuesSection>
      
      <TeamSection>
        <div className="container">
          <TeamHeading
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ekibimiz
          </TeamHeading>
          
          <TeamSubheading
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ardıç Psikoloji'de, alanında uzman ve deneyimli psikologlarla çalışıyoruz. Her bir ekip üyemiz, danışanlarımıza en iyi hizmeti sunmak için sürekli kendini geliştirmektedir.
          </TeamSubheading>
          
          <div style={{ textAlign: 'center' }}>
            <motion.a
              href="/psikologlarimiz"
              style={{
                display: 'inline-block',
                padding: '0.8rem 2rem',
                backgroundColor: '#2F4F4F',
                color: 'white',
                borderRadius: '4px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '0.9rem'
              }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{
                backgroundColor: '#5F9EA0',
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              Psikologlarımızı Tanıyın
            </motion.a>
          </div>
        </div>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;