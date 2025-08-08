import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 17px;
  line-height: 30px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 16px;
  padding: 0.2rem 0;
  text-align: center;
  
  @media ${props => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    padding: 0.1rem 0;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media ${props => props.theme.breakpoints.md} {
    padding: 0 15px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 10px;
  }
`

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  
  @media ${props => props.theme.breakpoints.lg}{
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media ${props => props.theme.breakpoints.md}{
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
  
  svg {
    margin-bottom: 8px;
    color: #fff;
  }
  
  span {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
  }
  
  @media ${props => props.theme.breakpoints.md}{
    padding: 10px 5px;
    
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    
    span {
      font-size: 12px;
    }
  }
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
