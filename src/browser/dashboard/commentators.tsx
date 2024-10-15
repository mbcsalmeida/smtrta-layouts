import { DashboardThemeProvider } from './components/DashboardThemeProvider';
import { render } from '../render';
import { useReplicant } from '@nodecg/react-hooks';
import { useEffect, useState } from 'react';
import { Button, Container, TextField } from '@mui/material';

const Commentators = () => {
  const [liveCommentators, setLiveCommentators] = useReplicant<string>('commentators');
  const [localCommentators, setLocalCommentators] = useState('');

  useEffect(() => {
    if (liveCommentators === undefined) return;

    setLocalCommentators(liveCommentators);
  }, [liveCommentators]);
  return (
    <DashboardThemeProvider>
      <Container>
        <TextField
          label="Commentators"
          variant="outlined"
          value={localCommentators}
          fullWidth
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLocalCommentators(event.target.value);
          }}
        />
        <Button
          variant="contained"
          disabled={localCommentators === liveCommentators}
          onClick={() => {
            setLiveCommentators(localCommentators);
          }}>
          Update commentators
        </Button>
      </Container>
    </DashboardThemeProvider>
  );
};

render(<Commentators />);
