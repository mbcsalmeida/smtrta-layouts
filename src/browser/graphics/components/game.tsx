import { CSSProperties, useMemo } from 'react';
import useCurrentRun from '../../hooks/useCurrentRun';
import { AutoTextSize } from 'auto-text-size';

type GameProps = {
  style?: CSSProperties;
  maxSize: number;
};

export const Game = ({ maxSize, style }: GameProps) => {
  const currentRun = useCurrentRun();
  const game = useMemo(() => currentRun?.game, [currentRun]);

  return (
    <div>
      {game && (
        <div
          style={{
            display: 'flex',
            textAlign: 'center',
            ...style,
          }}>
          <AutoTextSize
            className="shadow"
            style={{ marginLeft: 'auto', marginRight: 'auto', alignSelf: 'center' }}
            maxFontSizePx={maxSize}>
            {game}
          </AutoTextSize>
        </div>
      )}
    </div>
  );
};
