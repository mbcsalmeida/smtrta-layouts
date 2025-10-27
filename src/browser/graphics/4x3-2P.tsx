import { render } from '../render';
import layoutBg from './img/4x3-2P-commentary.png';
import { ThemeProvider, Game, Category, Estimate, Timer, Player, Commentators, TeamTimer } from './components';
import styled from '@emotion/styled';
import useCommentators from '../hooks/useCommentators';
import { useMemo } from 'react';
import useCurrentRun from '../hooks/useCurrentRun';

const LayoutContainer = styled.div`
  background-image: url(${layoutBg});
  margin: 0;
  padding: 0;
  width: 1920px;
  height: 1080px;
`;

const GameLayout = () => {
  const commentators = useCommentators();
  const currentRun = useCurrentRun();
  const hasCommentators = useMemo(() => commentators.length > 0, [commentators]);

  console.log(currentRun);

  return (
    <ThemeProvider>
      <LayoutContainer>
      <Game
          style={{
            position: 'fixed',
            left: '114px',
            width: '350px',
            height: '85px',
            top: `${hasCommentators ? "774px" : "334px"}`,
            overflowWrap: "break-word",
            inlineSize: "325px",
            fontSize: "30px"
          }}
        />
        <Category
          style={{
            position: 'fixed',
            left: '114px',
            width: '350px',
            height: '85px',
            top: `${hasCommentators ? "947px" : "490px"}`,
            overflowWrap: "break-word",
            inlineSize: "325px",
            fontSize: "38px"
          }}
        />
        <Estimate
          style={{
            position: 'fixed',
            right: '50px',
            width: '350px',
            height: '60px',
            top: "774px",
            fontSize: "55px"
          }}
        />
        <Timer
          style={{
            position: 'fixed',
            right: '45px',
            width: '350px',
            height: '60px',
            top: "947px",
            fontSize: "55px"
          }}
        />
        <Player
          style={{
            position: 'fixed',
            left: '52px',
            width: '260px',
            height: '60px',
            top: `${hasCommentators ? "636px" : "130px"}`,
            fontSize: '40px',
            overflowWrap: "break-word",
            inlineSize: "340px",
          }}
          slot={0}
        />
        <Player
          style={{
            position: 'fixed',
            right: '40px',
            width: '260px',
            height: '60px',
            top: `${hasCommentators ? "636px" : "468px"}`,
            fontSize: '40px',
            overflowWrap: "break-word",
            inlineSize: "340px",
          }}
          slot={1}
        />
        <Commentators
          style={{
            position: 'fixed',
            left: '802px',
            width: '250px',
            height: '60px',
            top: '712px',
            fontSize: '36px',
            overflowWrap: "break-word",
            inlineSize: "340px",
          }}
        />
        <TeamTimer style={{
            position: 'fixed',
            left: '572px',
            width: '250px',
            height: '60px',
            top: '563px',
            fontSize: '40px',
            overflowWrap: "break-word",
            inlineSize: "340px",
          }} slot={0} />
          <TeamTimer style={{
            position: 'fixed',
            right: '16px',
            width: '250px',
            height: '60px',
            top: '563px',
            fontSize: '40px',
            overflowWrap: "break-word",
            inlineSize: "340px",
          }} slot={1} />
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<GameLayout />);
