import { render } from '../render';
import intermissionBg from './img/backgrounds/bg-intermission.png';
import useCurrentRun from '../hooks/useCurrentRun';
import styled from '@emotion/styled';
import { ThemeProvider } from './components';
import useNextRun from '../hooks/useNextRun';
import Logo from "./img/rta2026.png";

const LayoutContainer = styled.div`
  background-image: url(${intermissionBg});
  background-blend-mode: overlay;
  background-size:cover;
  background-position: center; 
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

function MultipleRunners(props: { teams: Array<{ players: Array<{ name: string }> }> }) {
  const teams = props.teams;
  const names = teams.map((team) => team.players[0]?.name || 'Unknown').filter(Boolean);
  return names.join(" vs ");
}

const Intermission = () => {
  const currentRun = useCurrentRun();
  const nextRun = useNextRun();
  

  return (
    <ThemeProvider>
      <LayoutContainer>
        <div className='w-[1186px] absolute top-0 left-0'>
            <img width={900} src={Logo} className="m-auto mt-[100px]" />
            <div className='w-[900px] h-[60px] m-auto mt-5 bg-[#4b9d99]/80 rounded-2xl shadow-amber-50 shadow-md ring-2 ring-sky-200'></div>
        </div>
        <InfoContainer>
          <HeaderText $distance={128} className='shadow'>Coming Up</HeaderText>
          {currentRun && (
            <IntermissionCurrentRunInfo>
              <div
                className="shadow"
                style={{
                  fontSize: '40px',
                  overflowWrap: "break-word",
                  inlineSize: "600px",
                  marginTop: "10px"
                }}>
                {currentRun.game}
              </div>
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
                by {(currentRun.teams.length ?? 1) > 1 ?
                  <MultipleRunners teams={currentRun.teams} /> :
                  currentRun.teams[0]?.players[0]?.name
                }
              </span>
            </IntermissionCurrentRunInfo>
          )}
          {nextRun && (
            <>
              <HeaderText $distance={460} className='shadow'>On Deck</HeaderText>
              <IntermissionNextRunInfo>
                <div
                  className="shadow"
                  style={{
                    fontSize: '34px',
                    overflowWrap: "break-word",
                    inlineSize: "600px",
                    marginTop: "10px"
                  }}>

                  {nextRun.game}
                </div>
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
                  by {(nextRun.teams.length ?? 1) > 1 ?
                    <MultipleRunners teams={nextRun.teams} /> :
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
