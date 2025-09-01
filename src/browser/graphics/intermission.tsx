import { render } from '../render';
import intermissionBg from './img/intermission.png';
import useCurrentRun from '../hooks/useCurrentRun';
import styled from '@emotion/styled';
import { AutoTextSize } from 'auto-text-size';
import { ThemeProvider } from './components';
import useNextRun from '../hooks/useNextRun';

const LayoutContainer = styled.div`
  background-image: url(${intermissionBg});
  margin: 0;
  padding: 0;
  width: 1920px;
  height: 1080px;
`;

const IntermissionRunInfo = styled.div`
  width: 700px;
  position: fixed;
  text-align: right;
  display: flex;
  flex-direction: column;
  line-height: 3.5rem;
  align-items: end !important;
`;

const InfoContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
	width: 734px;
	height: 100%;
	position: fixed;
	right: 0;
	top: 0;
}`

const IntermissionCurrentRunInfo = styled(IntermissionRunInfo)`
  top: 200px;
  right: 8px;
`

const IntermissionNextRunInfo = styled(IntermissionRunInfo)`
  top: 540px;
  right: 8px;
`

const HeaderText = styled.h2<{ $distance: number }>`
  position: fixed;
  right: 8px;
  top: ${props => props.$distance}px;
  font-size: 36px;
`

const MusicText = styled.h2`
  position: fixed;
  left: 190px;
  top: 560px;
  font-size: 33px;
`

function MultipleRunners(props){
  const teams = props.teams;
  const names = [];
  const name = teams.map((team) => (
    names.push(team.players[0].name)
  ))
    return names.join(" vs ");
}

const Intermission = () => {
  const currentRun = useCurrentRun();
  const nextRun = useNextRun();

  return (
    <ThemeProvider>
      <LayoutContainer>
        <MusicText>Deja Vu - Majin Tensei 2 Spiral Nemesis</MusicText>
        <InfoContainer>
          <HeaderText $distance={128} className='shadow'>Coming Up</HeaderText>
          {currentRun && (
            <IntermissionCurrentRunInfo>
              <AutoTextSize
                mode="box"
                className="shadow"
                maxFontSizePx={48}>
                {currentRun.game}
              </AutoTextSize>
              <span
                className="shadow"
                style={{
                  fontSize: "36px"
                }}
              >
                {currentRun.category}
              </span>
              <span
                  className="shadow"
                  style={{
                    fontSize: "30px"
                  }}
                >
                  {(currentRun.teams.length ?? 1) > 1 ?
                    <MultipleRunners teams={currentRun.teams}/> : 
                    currentRun.teams[0]?.players[0]?.name
                }
                </span>
            </IntermissionCurrentRunInfo>
          )}
          {nextRun && (
            <>
              <HeaderText $distance={460} className='shadow'>On Deck</HeaderText>
              <IntermissionNextRunInfo>
                <AutoTextSize
                  mode="box"
                  className="shadow"
                  maxFontSizePx={40}>
                  {nextRun.game}
                </AutoTextSize>
                <span
                  className="shadow"
                  style={{
                    fontSize: "30px"
                  }}
                >
                  {nextRun.category}
                </span>
                <span
                  className="shadow"
                  style={{
                    fontSize: "30px"
                  }}
                >
                  {(nextRun.teams.length ?? 1) > 1 ?
                    <MultipleRunners teams={nextRun.teams}/> : 
                    nextRun.teams[0]?.players[0]?.name
                }
                </span>
              </IntermissionNextRunInfo>
            </>

          )}
        </InfoContainer>

      </LayoutContainer>
    </ThemeProvider>
  );
};

render(<Intermission />);
