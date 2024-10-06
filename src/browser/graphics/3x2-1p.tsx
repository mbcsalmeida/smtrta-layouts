import { render } from '../render';
import layoutBg from './img/3x2-1p.png';
import layoutBgCommentary from './img/3x2-1p-commentary.png';
import { ThemeProvider, Game, Category, Estimate, Timer, Player } from './components';
import styled from '@emotion/styled';
import useCommentators from '../hooks/useCommentators';

const LayoutContainer = styled.div<{ hasCommentators: boolean }>`
  background-image: url(${(props) => (props.hasCommentators ? layoutBgCommentary : layoutBg)});
  margin: 0;
  padding: 0;
  width: 1920px;
  height: 1080px;
`;

const GameLayout = () => {
  const commentators = useCommentators();
  const hasCommentators = commentators.length > 0;

  return (
    <ThemeProvider>
      <LayoutContainer hasCommentators={hasCommentators}>
        <Game
          style={{
            position: 'fixed',
            left: '37.5px',
            width: '350px',
            height: '60px',
            top: '310px',
          }}
          maxSize={32}
        />
        <Category
          style={{
            position: 'fixed',
            left: '37.5px',
            width: '350px',
            height: '60px',
            top: '425px',
          }}
          maxSize={32}
        />
        <Estimate
          style={{
            position: 'fixed',
            left: '37.5px',
            width: '350px',
            height: '60px',
            top: '538px',
          }}
        />
        <Timer
          style={{
            position: 'fixed',
            left: '37.5px',
            width: '350px',
            height: '60px',
            top: '653px',
          }}
        />
        <Player
          style={{
            position: 'fixed',
            left: '150px',
            width: '260px',
            height: '40px',
            top: '830px',
            fontSize: '28px',
          }}
          slot={0}
        />
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<GameLayout />);
