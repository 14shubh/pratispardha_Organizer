import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class Tournament {
    constructor(
        public tournamentName:string,
        public tournamentTeamLimit:string,
        public tournamentAddress:string,
        public tournamentStartDate:number|string,
        public tournamentApplyDate:number|string,
        public tournamentEndDate:number|string,
        public tournamentFees:string,
        public tournamentRules:string,
        public firstPrize:string,
        public secondPrize:string,
        public thirdPrize:string,
       public organiserId:string|any,
        public tournamentId:string,
        public banner :File|string
    ){}
}
