import { render } from '../render';
import layoutBg from './img/16x9-1p.png';
import layoutBgCommentary from './img/16x9-1p-commentary.png';
import { ThemeProvider, Game, Category, Estimate, Timer, Player } from './components';
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
            left: '32.5px',
            width: '280px',
            height: '60px',
            top: '160px',
          }}
          maxSize={32}
        />
        <Category
          style={{
            position: 'fixed',
            left: '32.5px',
            width: '280px',
            height: '60px',
            top: '270px',
          }}
          maxSize={32}
        />
        <Estimate
          style={{
            position: 'fixed',
            left: '32.5px',
            width: '280px',
            height: '60px',
            top: '380px',
          }}
        />
        <Timer
          style={{
            position: 'fixed',
            left: '32.5px',
            width: '280px',
            height: '60px',
            top: '495px',
          }}
        />
        <Player
          style={{
            position: 'fixed',
            left: '82px',
            width: '260px',
            height: '40px',
            top: '708px',
            fontSize: '28px',
          }}
          slot={0}
        />
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<GameLayout />);
