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
            width: '330px',
          height: '40px',
          position: 'fixed',
          right: '515px',
          top: '750px',
          fontSize: '22px',

            overflowWrap:"break-word",
            inlineSize: "330px",
          }}
          maxSize={30}
        />
        
        <Category
          style={{
            position: 'fixed',
            right: '100.5px',
            width: '230px',
            height: '40px',
            top: '760px',
            fontSize: '50px',
          }}
          maxSize={38}
        />
        <Estimate
          style={{
            position: 'fixed',
            right: '515px',
            width: '230px',
            height: '40px',
            top: '935px',
            fontSize: '48px',
          }}
        />
        <Timer
          style={{
            position: 'fixed',
            right: '50.5px',
            width: '230px',
            height: '40px',
            top: '935px',
            fontSize: '48px',
          }}
        />
        <Player
          style={{
            position: 'fixed',
            left: '190px',
            width: '230px',
            height: '40px',
            top: '760px',
            fontSize: '36px',
          }}
          slot={0}
        />
        <Commentators
          style={{
            position: 'fixed',
            left: '195px',
            width: '230px',
            height: '40px',
            top: '935px',
            fontSize: '36px',
          }}
        />
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<GameLayout />);
