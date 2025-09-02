import { render } from '../render';
import layoutBg from './img/5x3-1p.png';
import layoutBgCommentary from './img/5x3-1p-commentary.png';
import { ThemeProvider, Game, Category, Estimate, Timer, Player, Commentators } from './components';
import styled from '@emotion/styled';
import useCommentators from '../hooks/useCommentators';
import { useMemo } from 'react';

const LayoutContainer = styled.div<{ hasCommentators: boolean }>`
  background-image: url(${(props) => (props.hasCommentators ? layoutBgCommentary : layoutBg)});
  margin: 0;
  padding: 0;
  width: 1920px;
  height: 1080px;
`;

const GameLayout = () => {
  const commentators = useCommentators();
  const hasCommentators = useMemo(() => commentators.length > 0, [commentators]);

  return (
    <ThemeProvider>
      <LayoutContainer hasCommentators={hasCommentators}>
        <Game
          style={{
            position: 'fixed',
            left: '82.5px',
            width: '350px',
            height: '60px',
            top: '350px',
          }}
          maxSize={32}
        />
        <Category
          style={{
            position: 'fixed',
            left: '82.5px',
            width: '350px',
            height: '60px',
            top: '465px',
          }}
          maxSize={32}
        />
        <Estimate
          style={{
            position: 'fixed',
            left: '82.5px',
            width: '350px',
            height: '60px',
            top: '578px',
          }}
        />
        <Timer
          style={{
            position: 'fixed',
            left: '82.5px',
            width: '350px',
            height: '60px',
            top: '693px',
          }}
        />
        <Player
          style={{
            position: 'fixed',
            left: '252px',
            width: '260px',
            height: '40px',
            top: '887px',
            fontSize: '28px',
          }}
          slot={0}
        />
        <Commentators
          style={{
            position: 'fixed',
            left: '262px',
            width: '250px',
            height: '40px',
            top: '954px',
            fontSize: '28px',
          }}
        />
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<GameLayout />);
