import useCurrentRun from '../../hooks/useCurrentRun';
import { CSSProperties } from 'react';

type PlayerProps = {
  style?: CSSProperties;
  slot?: number;
};

export const Player = ({ style, slot = 0 }: PlayerProps) => {
  const currentRun = useCurrentRun();

  const getPlayerNames = () => {
    return (
      currentRun?.teams[slot]?.players
        .map((player) => player.social.twitch || player.name)
        .join(', ') ?? ''
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        ...style,
      }}
      className="shadow">
      {currentRun && currentRun.teams.length > 0 && <div>{getPlayerNames()}</div>}
    </div>
  );
};
