import { CSSProperties } from 'react';
import useCurrentRun from '../../hooks/useCurrentRun';

type EstimateProps = {
  style?: CSSProperties;
};

export const Estimate = ({ style }: EstimateProps) => {
  const currentRun = useCurrentRun();

  return (
    <div
      style={{
        display: 'flex',
        textAlign: 'center',
        fontSize: '40px',
        justifyContent: 'center',
        ...style,
      }}
      className="shadow">
      {currentRun && currentRun.estimate && <div>{currentRun.estimate}</div>}
    </div>
  );
};
