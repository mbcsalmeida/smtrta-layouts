import { CSSProperties } from 'react';
import useCurrentRun from '../../hooks/useCurrentRun';

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
          <div
            className="shadow"
            style={{ marginLeft: 'auto', marginRight: 'auto', alignSelf: 'center' }}>
            {currentRun.category}
          </div>
        </div>
      )}
    </div>
  );
};
