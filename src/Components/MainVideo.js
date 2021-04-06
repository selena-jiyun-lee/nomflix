import styled from 'styled-components';
import { faPlay, faInfoCircle, faStream, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 56.25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  filter: brightness(80%);
`;

const Title = styled.h1`
  font-size: 6vw;
  text-shadow: 1px 1px 2px black;
  width: 70%;
  min-width: 600px;
  flex: none;
`
const Desc = styled.span`
  width: 60%;
  min-width: 600px;
  font-size: 1.4vw;
  margin: 20px 0;
  line-height: 1.4;
  /* text-shadow: 1px 1px 2px black; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word;
  flex: none;
`;

const Buttons = styled.div`
  margin-top: 10px;
  padding-bottom: 70px;
  flex: 1;
`;

const Button = styled.button`
  background-color: ${props => props.color === 'white' ? 'rgba(256, 256, 256, 0.8)' : 'rgba(20, 20, 20, 0.8)'};
  border: none;
  color: ${props => props.color === 'white' ? 'black' : 'white'};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2vw;
  margin-right: 15px;
`;

const Section = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 70px 30px;
  flex: 1 auto;
`;

const SectionTitle = styled.h1`
  font-size: 3vw;
  font-weight: 700;
`;

const Modes = styled.div``;

const Mode = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 5px 10px;
`;

const Icon = styled(FontAwesomeIcon)`
`;

const MainVideo = ({ video, section, handleChangeMode }) => <Container>
  <Section>
    {section && (
      <>
      <SectionTitle>{section}</SectionTitle>
      <Modes>
        <Mode id="slider" onClick={handleChangeMode}><Icon id="slider" icon={faStream} /></Mode>
        <Mode id="grid" onClick={handleChangeMode}><Icon id="grid" icon={faThLarge} onClick={handleChangeMode}/></Mode>
        </Modes>
      </>
    )}
  </Section>
<Image src={video.backdrop_path && `https://image.tmdb.org/t/p/original${video.backdrop_path}`} />
  <Title>{video.name || video.title}</Title>
  <Desc>{video.overview}</Desc>
  <Buttons>
    <Button color="white"> <FontAwesomeIcon icon={faPlay} /> Play Now</Button>
    <Button color="black"> <FontAwesomeIcon icon={faInfoCircle} /> Information</Button>
  </Buttons>
</Container>

export default MainVideo;