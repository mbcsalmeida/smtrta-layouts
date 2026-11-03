import { get } from './nodecg';
import { CurrentOBSScene } from '@smtrta-layouts/types/generated';
import { type Commentator } from "../../types/custom/commentators";

const nodecg = get();

export const commentators = nodecg.Replicant<Commentator[]>('commentators');
export const currentOBSScene = nodecg.Replicant<CurrentOBSScene>('currentOBSScene');
