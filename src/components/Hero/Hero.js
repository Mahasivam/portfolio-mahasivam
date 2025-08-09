import React from 'react';
import { motion } from 'framer-motion';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle main center>
            Welcome to My Portfolio
          </SectionTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SectionText>
            Building fast, reliable, and user-friendly applications for the modern web.<br />
            Passionate about solving problems through technology.
          </SectionText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button onClick={() => window.open('/resume.pdf', '_blank')}>Download CV</Button>
        </motion.div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
