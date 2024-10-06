import { render } from '../render';
import intermissionBg from './img/intermission.png';
import useCurrentRun from '../hooks/useCurrentRun';
import styled from '@emotion/styled';
import { AutoTextSize } from 'auto-text-size';
import { ThemeProvider } from './components';

const LayoutContainer = styled.div`
  background-image: url(${intermissionBg});
  margin: 0;
  padding: 0;
  width: 1920px;
  height: 1080px;
`;

const IntermissionRunInfo = styled.div`
  width: 675px;
  height: 160px;
  position: fixed;
  bottom: 165px;
  left: 620px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Intermission = () => {
  const currentRun = useCurrentRun();

  return (
    <ThemeProvider>
      <LayoutContainer>
        {currentRun && (
          <IntermissionRunInfo>
            <AutoTextSize
              mode="box"
              className="shadow"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '25px',
                marginBottom: '-30px',
              }}
              maxFontSizePx={48}>
              {currentRun.game}
            </AutoTextSize>
            <p
              className="shadow"
              style={{
                fontSize: '36px',
                marginLeft: 'auto',
                marginRight: 'auto',
                fontWeight: 500,
              }}>
              {currentRun.category}
            </p>
          </IntermissionRunInfo>
        )}
      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<Intermission />);
