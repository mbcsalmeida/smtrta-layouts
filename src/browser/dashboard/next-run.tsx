import { DashboardThemeProvider } from './components/DashboardThemeProvider';
import { render } from '../render';
import { useReplicant } from '@nodecg/react-hooks';
import { Alert, Button, Stack } from '@mui/material';
import { Timer } from '../../../../nodecg-speedcontrol/src/types/schemas/timer';
import { useEffect, useState } from 'react';
import useNextRun from '../hooks/useNextRun';
import useCurrentObsScene from '../hooks/useCurrentObsScene';

const intermissionSceneName = nodecg.bundleConfig.obs.scenes?.intermission;

export const App = () => {
  const currentObsScene = useCurrentObsScene();
  const [timer] = useReplicant<Timer | undefined>('timer', {
    bundle: 'nodecg-speedcontrol',
  });
  const [nextRunGameName, setNextRunGameName] = useState<string>('');
  const nextRun = useNextRun();

  const getNextRunGameName = () => {
    if (nextRun && nextRun.game) {
      return `${nextRun.game.slice(0, 35)}${nextRun.game.length > 35 ? '...' : ''}`;
    }
    return '(Run with no name)';
  };

  useEffect(() => {
    setNextRunGameName(getNextRunGameName());
  }, [nextRun]);

  const disableChange =
    (timer && ['running', 'paused'].includes(timer.state)) ||
    currentObsScene === intermissionSceneName;

  return (
    <DashboardThemeProvider>
      <Stack spacing={2}>
        <Button
          variant="contained"
          disabled={disableChange || !nextRun}
          onClick={() => {
            if (nextRun) {
              nodecg.sendMessage('switchToIntermission');
            }
          }}>
          <span>
            {nextRun ? <>{nextRunGameName}</> : nextRun ? <>No next runs</> : <>No added runs</>}
          </span>
        </Button>
        {disableChange && <Alert severity="info">You cannot change the game right now.</Alert>}
      </Stack>
    </DashboardThemeProvider>
  );
};

render(<App />);
