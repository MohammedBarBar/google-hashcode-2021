import {Car} from "./Car";
import {Street} from "./Street";
import {Intersection} from "./Intersection";

export class Context {

    constructor(
        public readonly intersections: Intersection[],
        public readonly streets: Street[],
        public readonly cars: Car[],
        public readonly maxSeconds: number,
        public readonly maxInteractions: number,
        public readonly score: number,
    ) {
    }

}
