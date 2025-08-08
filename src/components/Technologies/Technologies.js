import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
// Import additional icons from react-icons for specific technologies
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaAngular, FaReact,
  FaJava, FaPython, FaJenkins, FaGitlab
} from 'react-icons/fa';
import {
  SiSpringboot, SiTensorflow,
  SiMysql, SiPostgresql, SiMongodb, SiIntellijidea, SiVisualstudiocode,
  SiJira, SiConfluence
} from 'react-icons/si';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { 
  List, 
  ListContainer, 
  ListItem, 
  ListParagraph, 
  ListTitle,
  ListGrid,
  SkillItem
} from './TechnologiesStyles';

const Technologies = () => (
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a diverse range of technologies in the web development world,
        from front-end design to back-end development and CI/CD practices.
      </SectionText>
      <List>
        <ListItem>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListGrid>
              <SkillItem>
                <FaHtml5 size="3rem" />
                <span>HTML5</span>
              </SkillItem>
              <SkillItem>
                <FaCss3Alt size="3rem" />
                <span>CSS3</span>
              </SkillItem>
              <SkillItem>
                <FaJsSquare size="3rem" />
                <span>JavaScript</span>
              </SkillItem>
              <SkillItem>
                <FaBootstrap size="3rem" />
                <span>Bootstrap</span>
              </SkillItem>
              <SkillItem>
                <FaAngular size="3rem" />
                <span>Angular</span>
              </SkillItem>
              <SkillItem>
                <FaReact size="3rem" />
                <span>React.js</span>
              </SkillItem>
            </ListGrid>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>Back-End & Databases</ListTitle>
            <ListGrid>
              <SkillItem>
                <FaJava size="3rem" />
                <span>Java</span>
              </SkillItem>
              <SkillItem>
                <SiSpringboot size="3rem" />
                <span>Spring Boot</span>
              </SkillItem>
              <SkillItem>
                <FaPython size="3rem" />
                <span>Python</span>
              </SkillItem>
              <SkillItem>
                <SiTensorflow size="3rem" />
                <span>TensorFlow</span>
              </SkillItem>
              <SkillItem>
                <SiMysql size="3rem" />
                <span>MySQL</span>
              </SkillItem>
              <SkillItem>
                <SiPostgresql size="3rem" />
                <span>PostgreSQL</span>
              </SkillItem>
              <SkillItem>
                <SiMongodb size="3rem" />
                <span>MongoDB</span>
              </SkillItem>
            </ListGrid>
          </ListContainer>
        </ListItem>
        <ListItem>
        </ListItem>
      </List>
      <SectionDivider colorAlt />
    </Section>
);

export default Technologies;
