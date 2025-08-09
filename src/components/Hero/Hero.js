import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br/>
          My Portfolio
        </SectionTitle>
        <SectionText>
          Building fast, reliable, and user-friendly applications for the modern web.<br/>
          Passionate about solving problems through technology.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
