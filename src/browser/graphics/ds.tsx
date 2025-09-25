import { render } from '../render';
import layoutBg from './img/DS-1P.png';
import layoutBgCommentary from './img/DS-1P-commentary.png';
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
          position: 'fixed',
          right: '515px',
          top: '743px',
          fontSize: '28px',
            overflowWrap:"break-word",
            inlineSize: "330px",
          }}
          maxSize={30}
        />
        
        <Category
          style={{
            position: 'fixed',
            right: '50.5px',     
            width: '330px',
            height: '40px',
            top: '760px',
            fontSize: '40px',
            overflowWrap:"break-word",
            inlineSize: "330px",
          }}
          maxSize={38}
        />
        <Estimate
          style={{
            position: 'fixed',
            right: '515px',
            width: '330px',
            height: '40px',
            top: '915px',
            fontSize: '53px',
          }}
        />
        <Timer
          style={{
            width: '330px',
            position: 'fixed',
            right: '50.5px',
            height: '40px',
            top: '915px',
            fontSize: '53px',
          }}
        />
        <Player
          style={{
            position: 'fixed',
            left: '125px',
            width: '230px',
            height: '60px',
            top: `${hasCommentators ? "760px" : "840px"}`,
            overflowWrap: "break-word",
            inlineSize: "325px",
            fontSize: '36px',
          }}
          slot={0}
        />
        <Commentators
          style={{
            position: 'fixed',
            left: '120px',
            width: '230px',
            height: '60px',
            top: '935px',
            overflowWrap:"break-word",
            inlineSize: "325px",
          }}
        />
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<GameLayout />);
