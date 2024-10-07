import { get } from './nodecg';
import { CurrentOBSScene } from '@smtrta-layouts/types/generated';

const nodecg = get();

export const commentators = nodecg.Replicant<string>('commentators');
export const currentOBSScene = nodecg.Replicant<CurrentOBSScene>('currentOBSScene');
