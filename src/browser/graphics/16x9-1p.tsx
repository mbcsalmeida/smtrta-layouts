import { render } from '../render';
import layoutBg from './img/16x9-1p.png';
import layoutBgCommentary from './img/16x9-1p-commentary.png';
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
            left: '81px',
            width: '350px',
            height: '85px',
            top: "180px",
            overflowWrap: "break-word",
            inlineSize: "325px",
            fontSize: "28px"
          }}
          maxSize={32}
        />
        <Category
          style={{
            position: 'fixed',
            left: '81px',
            width: '350px',
            height: '85px',
            top: "320px",
            overflowWrap: "break-word",
            inlineSize: "325px",
            fontSize: "38px"
          }}
          maxSize={32}
        />
        <Estimate
          style={{
            position: 'fixed',
            left: '84px',
            width: '350px',
            height: '85px',
            top: "469px",
            overflowWrap: "break-word",
            inlineSize: "325px",
            fontSize: "53px"
          }}
        />
        <Timer
          style={{
            position: 'fixed',
            left: '84px',
            width: '350px',
            height: '85px',
            top: "621px",
            overflowWrap: "break-word",
            inlineSize: "325px",
            fontSize: "53px"
          }}
        />
        <Player
          style={{
            position: 'fixed',
            left: `${hasCommentators ? "743px" : "1033px"}`,
            width: '260px',
            height: '60px',
            top: "943px",
            fontSize: '40px',
            overflowWrap: "break-word",
            inlineSize: "360px",
          }}
          slot={0}
        />
        <Commentators
          style={{
            position: 'fixed',
            left: `${hasCommentators ? "1320px" : "305px"}`,
            width: '250px',
            height: '60px',
            top: '943px',
            overflowWrap: "break-word",
            inlineSize: "420px",
          }}
        />
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<GameLayout />);
