import { render } from '../render';
import layoutBg from './img/3ds.png';
import layoutBgCommentary from './img/3ds-commentary.png';
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
            left: '608.5px',
            width: '330px',
            height: '60px',
            bottom: '180px',
          }}
          maxSize={32}
        />
        <Category
          style={{
            position: 'fixed',
            left: '608.5px',
            width: '330px',
            height: '60px',
            bottom: '60px',
          }}
          maxSize={32}
        />
        <Estimate
          style={{
            position: 'fixed',
            right: '607.5px',
            width: '330px',
            height: '60px',
            bottom: '180px',
          }}
        />
        <Timer
          style={{
            position: 'fixed',
            right: '607.5px',
            width: '330px',
            height: '60px',
            bottom: '60px',
          }}
        />
        <Player
          style={{
            position: 'fixed',
            left: '195px',
            width: '240px',
            height: '40px',
            top: '852px',
            fontSize: '24px',
          }}
          slot={0}
        />
        <Commentators
          style={{
            position: 'fixed',
            left: '195px',
            width: '230px',
            height: '40px',
            top: '924px',
            fontSize: '24px',
          }}
        />
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<GameLayout />);
