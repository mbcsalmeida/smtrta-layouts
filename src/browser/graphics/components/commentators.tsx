import { CSSProperties } from 'react';
import useCommentators from '../../hooks/useCommentators';

type CommentatorsProps = {
  style?: CSSProperties;
};

export const Commentators = ({ style }: CommentatorsProps) => {
  const commentatorsList = useCommentators();

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
      <div>{commentatorsList}</div>
    </div>
  );
};
