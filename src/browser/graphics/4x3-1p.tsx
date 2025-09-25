import { render } from '../render';
import layoutBg from './img/4x3-1p.png';
import layoutBgCommentary from './img/4x3-1p-commentary.png';
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
            left: '107px',
            width: '350px',
            height: '72px',
            top: `${hasCommentators ? "334px" : "334px"}`,
            overflowWrap: "break-word",
            inlineSize: "325px",
            fontSize: "30px"
          }}
          maxSize={32}
        />
        <Category
          style={{
            position: 'fixed',
            left: '107px',
            width: '350px',
            height: '72px',
            top: `${hasCommentators ? "490px" : "490px"}`,
            overflowWrap: "break-word",
            inlineSize: "325px",
            fontSize: "38px"
          }}
          maxSize={32}
        />
        <Estimate
          style={{
            position: 'fixed',
            left: '92px',
            width: '350px',
            height: '60px',
            top: `${hasCommentators ? "634px" : "634px"}`,
            fontSize: "55px"
          }}
        />
        <Timer
          style={{
            position: 'fixed',
            left: '92px',
            width: '350px',
            height: '60px',
            top: `${hasCommentators ? "794px" : "794px"}`,
            fontSize: "55px"
          }}
        />
        <Player
          style={{
            position: 'fixed',
            left: '73px',
            width: '260px',
            height: '60px',
            top: `${hasCommentators ? "55px" : "130px"}`,
            fontSize: '40px',
            overflowWrap: "break-word",
            inlineSize: "400px",
          }}
          slot={0}
        />
        <Commentators
          style={{
            position: 'fixed',
            left: '73px',
            width: '250px',
            height: '60px',
            top: '178px',
            fontSize: '40px',
            overflowWrap: "break-word",
            inlineSize: "400px",
          }}
        />
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<GameLayout />);
