import { get } from './nodecg';

const nodecg = get();

export const commentators = nodecg.Replicant<string>('commentators');
