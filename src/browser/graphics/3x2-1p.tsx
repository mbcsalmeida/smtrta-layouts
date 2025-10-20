import { render } from '../render';
import layoutBg from './img/3x2-1p.png';
import layoutBgCommentary from './img/3x2-1p-commentary.png';
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
            left: '144px',
            width: '350px',
            height: '72px',
            top: `${hasCommentators ? "325px" : "315px"}`,
            overflowWrap: "break-word",
            inlineSize: "325px",
            fontSize: "24px"
          }}
          maxSize={32}
        />
        <Category
          style={{
            position: 'fixed',
            left: '144px',
            width: '350px',
            height: '72px',
            top: `${hasCommentators ? "485px" : "465px"}`,
            overflowWrap: "break-word",
            inlineSize: "325px",
            fontSize: "30px"
          }}
          maxSize={32}
        />
        <Estimate
          style={{
            position: 'fixed',
            left: '130px',
            width: '350px',
            height: '60px',
            top: `${hasCommentators ? "625px" : "605px"}`,
            fontSize: "55px"
          }}
        />
        <Timer
          style={{
            position: 'fixed',
            left: '130px',
            width: '350px',
            height: '60px',
            top: `${hasCommentators ? "785px" : "765px"}`,
            fontSize: "55px"
          }}
        />
        <Player
          style={{
            position: 'fixed',
            left: '165px',
            width: '260px',
            height: '40px',
            top: `${hasCommentators ? "50px" : "108px"}`,
            fontSize: '40px',
          }}
          slot={0}
        />
        <Commentators
          style={{
            position: 'fixed',
            left: '175px',
            width: '250px',
            height: '40px',
            top: '178px',
            fontSize: '40px',
          }}
        />
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<GameLayout />);
