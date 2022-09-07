import { CandleStickData } from "./db.js";

export const resolvers = {
  Query:{
    candleSticks:() => CandleStickData.findAll(),
    candleSticksByNumber: async(_root, {limit}) =>{
      const numOfCandleSticks =  await CandleStickData.findAll();
      const limits = numOfCandleSticks.slice(0, limit);
      return limits;
    },
    getCandleStickByDate: async(_root, {date}) => {
      const dateInfo = await CandleStickData.findOne((d) => d.date === date);
      return dateInfo;
    },
  }
}
 