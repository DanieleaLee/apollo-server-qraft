import { Database } from "fakebase";

const db = new Database('./data');

export const CandleStickData = db.table('candlestick');