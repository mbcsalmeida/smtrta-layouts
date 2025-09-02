import { render } from '../render';
import layoutBg from './img/4x3-3P-commentary.png';
import { ThemeProvider, Game, Category, Estimate, Timer, Player } from './components';
import styled from '@emotion/styled';

const LayoutContainer = styled.div`
  background-image: url(${layoutBg});
  margin: 0;
  padding: 0;
  width: 1920px;
  height: 1080px;
`;

const GameLayout = () => {
  return (
    <ThemeProvider>
      <LayoutContainer>
        <Game
          style={{
            position: 'fixed',
            left: '797.5px',
            width: '345px',
            height: '60px',
            top: '265px',
          }}
          maxSize={32}
        />
        <Category
          style={{
            position: 'fixed',
            left: '797.5px',
            width: '345px',
            height: '60px',
            top: '387px',
          }}
          maxSize={32}
        />
        <Timer
          style={{
            position: 'fixed',
            left: '797.5px',
            width: '345px',
            height: '60px',
            bottom: '357px',
          }}
        />
        <Estimate
          style={{
            position: 'fixed',
            left: '797.5px',
            width: '345px',
            height: '60px',
            bottom: '237px',
          }}
        />
        <Player
          style={{
            position: 'fixed',
            left: '730px',
            width: '260px',
            height: '40px',
            top: '102px',
            fontSize: '28px',
          }}
          slot={0}
        />
        <Player
          style={{
            position: 'fixed',
            right: '700px',
            width: '245px',
            height: '40px',
            top: '30px',
            fontSize: '28px',
          }}
          slot={1}
        />
        <Player
          style={{
            position: 'fixed',
            left: '730px',
            width: '260px',
            height: '40px',
            bottom: '110px',
            fontSize: '28px',
          }}
          slot={2}
        />
        <Player
          style={{
            position: 'fixed',
            right: '700px',
            width: '245px',
            height: '40px',
            bottom: '30px',
            fontSize: '28px',
          }}
          slot={3}
        />
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<GameLayout />);
