import { DashboardThemeProvider } from './components/DashboardThemeProvider';
import { Button } from '@mui/material';
import { render } from '../render';

export const RefreshPlayer = () => {
     const refreshPlayerCommand = () => {
    void nodecg.sendMessage("refreshPlayerCommand");
    };

    return(
        <DashboardThemeProvider>
            <Button
                 variant="contained"
                 onClick={() => {
                    refreshPlayerCommand();
                 }}
            >
                Refresh Twitch Player
            </Button>
        </DashboardThemeProvider>
    );
}

render(<RefreshPlayer />)