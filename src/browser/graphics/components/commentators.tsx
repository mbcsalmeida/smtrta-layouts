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
        fontSize: `${commentatorsList.length > 15 ? "30px" : "40px"}`,
        justifyContent: 'center',
        ...style,
      }}
      className="shadow">
      <div>{commentatorsList}</div>
    </div>
  );
};
