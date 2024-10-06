import { useReplicant } from '@nodecg/react-hooks';
import { CSSProperties } from 'react';
import { Timer as TimerType } from '../../../../../nodecg-speedcontrol/src/types/schemas/timer';

type TimerProps = {
  style?: CSSProperties;
};

const timerColors = {
  running: 'white',
  finished: '#34cceb',
  stopped: '#a5a3a3',
  paused: '#a5a3a3',
};

export const Timer = ({ style }: TimerProps) => {
  const [timer] = useReplicant<TimerType>('timer', { bundle: 'nodecg-speedcontrol' });

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
      {timer && (
        <div style={{ color: timerColors[timer.state], transition: 'color 0.5s' }}>
          {timer.time}
        </div>
      )}
    </div>
  );
};
