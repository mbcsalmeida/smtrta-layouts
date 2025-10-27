import { useReplicant } from '@nodecg/react-hooks';

export function useGameTextSize() {
  const [gameTextSize] = useReplicant<string>('layoutGameTextSize');

  return gameTextSize ?? '';
}

export function useRunnerTextSize() {
  const [runnerTextSize] = useReplicant<string>('runnerTextSize');

  return runnerTextSize ?? '';
}

export function useCategoryTextSize() {
  const [categoryTextSize] = useReplicant<string>('categoryTextSize');

  return categoryTextSize ?? '';
}

export function useCommentatorTextSize() {
  const [commentatorTextSize] = useReplicant<string>('commentatorTextSize');

  return commentatorTextSize ?? '';
}