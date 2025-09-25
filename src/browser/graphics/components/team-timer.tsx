import { useReplicant } from '@nodecg/react-hooks';
import { CSSProperties, useMemo } from 'react';
import { Timer as TimerType } from '../../../../../nodecg-speedcontrol/src/types/schemas/timer';
import useCurrentRun from '../../hooks/useCurrentRun';

type TimerProps = {
  style?: CSSProperties;
  slot?: number;
};

export const TeamTimer = ({ style, slot = 0 }: TimerProps) => {
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
        <div>
          {timer.teamFinishTimes["teamId"]?.time}
        </div>
      )}
    </div>
  );
};