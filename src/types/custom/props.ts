import { RunData } from "bundles/nodecg-speedcontrol/src/types/schemas/runDataArray";

export type RunPropsContainer = {
  index: number;
  runData: RunData;
  currentRun: boolean;
};
