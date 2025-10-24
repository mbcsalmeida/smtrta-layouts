import { CSSProperties, useMemo } from 'react';
import useCurrentRun from '../../hooks/useCurrentRun';

type GameProps = {
  style?: CSSProperties;
};

export const Game = ({ style }: GameProps) => {
  const currentRun = useCurrentRun();
  const game = useMemo(() => currentRun?.game, [currentRun]);

  return (
    <div
            className="shadow"
            style={{ marginLeft: 'auto', marginRight: 'auto', alignSelf: 'center', textAlign: "center", whiteSpace: "normal !important", ...style }}>
            
            {game}
          </div>
  );
};
