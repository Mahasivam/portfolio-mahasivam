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
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

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
            <ListParagraph>
              <FaHtml5 size="3rem" /><br />HTML5
            </ListParagraph>
            <ListParagraph>
              <FaCss3Alt size="3rem" /><br />CSS3
            </ListParagraph>
            <ListParagraph>
              <FaJsSquare size="3rem" /><br />JavaScript
            </ListParagraph>
            <ListParagraph>
              <FaBootstrap size="3rem" /><br />Bootstrap
            </ListParagraph>
            <ListParagraph>
              <FaAngular size="3rem" /><br />Angular
            </ListParagraph>
            <ListParagraph>
              <FaReact size="3rem" /><br />React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>Back-End & Databases</ListTitle>
            <ListParagraph>
              <FaJava size="3rem" /><br />Java
            </ListParagraph>
            <ListParagraph>
              <SiSpringboot size="3rem" /><br />Spring Boot
            </ListParagraph>
            <ListParagraph>
              <FaPython size="3rem" /><br />Python
            </ListParagraph>
            <ListParagraph>
              <SiTensorflow size="3rem" /><br />TensorFlow
            </ListParagraph>
            <ListParagraph>
              <SiMysql size="3rem" /><br />MySQL
            </ListParagraph>
            <ListParagraph>
              <SiPostgresql size="3rem" /><br />PostgreSQL
            </ListParagraph>
            <ListParagraph>
              <SiMongodb size="3rem" /><br />MongoDB
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>CI/CD & Tools</ListTitle>
            <ListParagraph>
              <FaJenkins size="3rem" /><br />Jenkins
            </ListParagraph>
            <ListParagraph>
              <FaGitlab size="3rem" /><br />GitLab CI/CD
            </ListParagraph>
            <ListParagraph>
              <SiIntellijidea size="3rem" /><br />IntelliJ IDEA
            </ListParagraph>
            <ListParagraph>
              <SiVisualstudiocode size="3rem" /><br />VS Code
            </ListParagraph>
            <ListParagraph>
              <SiJira size="3rem" /><br />Jira
            </ListParagraph>
            <ListParagraph>
              <SiConfluence size="3rem" /><br />Confluence
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider colorAlt />
    </Section>
);

export default Technologies;
