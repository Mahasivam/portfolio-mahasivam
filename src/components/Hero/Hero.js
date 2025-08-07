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
          I'm a Software Engineer who is excited to work with new technologies and languages, especially Generative AI. I design smart software solutions to enhance and innovate applications in the real-world.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
