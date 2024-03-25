import {IApply} from "../types/types.tsx";

export default function CompareArrays (first:IApply,second:IApply){
    return Object.keys({ ...first, ...second }).every(key => first[key] === second[key]);
}