import { useReplicant } from '@nodecg/react-hooks';

function useCommentators() {
  const [commentators] = useReplicant<string>('commentators');

  return commentators ?? '';
}

export default useCommentators;
