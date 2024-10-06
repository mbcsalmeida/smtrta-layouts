import { CSSProperties } from 'react';
import useCurrentRun from '../../hooks/useCurrentRun';
import { AutoTextSize } from 'auto-text-size';

type CategoryProps = {
  style?: CSSProperties;
  maxSize: number;
};

export const Category = ({ maxSize, style }: CategoryProps) => {
  const currentRun = useCurrentRun();

  return (
    <div>
      {currentRun && currentRun.category && (
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
            {currentRun.category}
          </AutoTextSize>
        </div>
      )}
    </div>
  );
};
