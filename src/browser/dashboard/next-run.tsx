import { DashboardThemeProvider } from './components/DashboardThemeProvider';
import { render } from '../render';
import { useReplicant } from '@nodecg/react-hooks';
import { Alert, Button, Stack } from '@mui/material';
import { Timer } from '../../../bundles/nodecg-speedcontrol/src/types/schemas/timer';
import useNextRun from '../hooks/useNextRun';
import useCurrentObsScene from '../hooks/useCurrentObsScene';

const intermissionSceneName = nodecg.bundleConfig.obs.scenes?.intermission;

export const App = () => {
  const currentObsScene = useCurrentObsScene();
  const [timer] = useReplicant<Timer | undefined>('timer', {
    bundle: 'nodecg-speedcontrol',
  });
  const nextRun = useNextRun();

  const disableChange =
    (timer && ['running', 'paused'].includes(timer.state));

  return (
    <DashboardThemeProvider>
      <Stack spacing={2}>
        <Button
          variant="contained"
          disabled={disableChange || !nextRun}
          onClick={() => {
            if (nextRun) {
              console.log('Attempting to switch to intermission scene...', {
                currentScene: currentObsScene,
                intermissionScene: intermissionSceneName,
                nextRun
              });
              nodecg.sendMessage('switchToIntermission').then(() => {
                console.log('Message sent successfully');
              }).catch((err: string) => {
                console.error('Failed to send message:', err);
              });
            }
          }}>
          <span>
            RUN ENDED - To Intermission, Advances Game
          </span>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            nodecg.sendMessage('transitionOnOBS').then(() => {
                console.log('Message sent successfully');
              }).catch((err: string) => {
                console.error('Failed to send message:', err);
              });
          }}>
          <span>
            General Transition
          </span>
        </Button>
        {disableChange && <Alert severity="info">You cannot advance the game while the run is ongoing.</Alert>}
      </Stack>
    </DashboardThemeProvider>
  );
};

render(<App />);