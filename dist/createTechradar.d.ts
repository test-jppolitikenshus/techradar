import { type TechradarData, type TechradarOptions, type TechradarVizData } from "./types";
declare const createTechradar: (targetEl: HTMLElement | null, data: TechradarData, options?: TechradarOptions) => {
    vizData: TechradarVizData;
    destroy: () => void;
};
export default createTechradar;
