import { useReplicant } from '@nodecg/react-hooks';
import { CSSProperties, useEffect } from 'react';
import { Timer as TimerType } from '../../../../bundles/nodecg-speedcontrol/src/types/schemas/timer';
import useCurrentRun from '../../hooks/useCurrentRun';

type TimerProps = {
  style?: CSSProperties;
  slot?: number;
};

export const TeamTimer = ({ style, slot = 0 }: TimerProps) => {
  const [timer] = useReplicant<TimerType>('timer', { bundle: 'nodecg-speedcontrol' });
  const currentRun = useCurrentRun();
  const id = currentRun?.teams[slot]?.id ?? "";

  useEffect(() => {
    console.log(id)
  }, [timer])

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
          {timer.teamFinishTimes[id]?.time}
        </div>
      )}
    </div>
  );
};