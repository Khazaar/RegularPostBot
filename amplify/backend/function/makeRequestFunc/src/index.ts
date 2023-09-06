import * as dotenv from "dotenv";
import axios from "axios";
import { Callback, Context, Handler } from "aws-lambda";
dotenv.config();

import { MessagesDict, MessageTypes, IntervalsDict } from "./messages";
const EcstaticVoiceOfTheTribe_botAPIKEY = process.env
    .ECSTATICVOICEOFTHETRIBE_BOTAPIKEY as string;

const chatIds = [
    process.env.CHAT_ID_EWD_DANCERS,
    process.env.CHAT_ID_EGOR,
] as string[];

interface TriggerEvent {
    key1: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const handler = async (
    event: TriggerEvent,
    context: Context,
    callback: Callback<string>
) => {
    for (const chatId of chatIds) {
        console.log("Posting... Chat ID is ", chatId);
        const msTp = MessageTypes[event.key1 as keyof typeof MessageTypes];
        try {
            await axios.post(
                `https://api.telegram.org/bot${EcstaticVoiceOfTheTribe_botAPIKEY}/sendMessage`,
                {
                    chat_id: chatId,
                    text: MessagesDict[msTp],
                }
            );
        } catch (e) {
            console.log(e);
        }
        await sleep(1000);
    }
    callback(null, event.key1.toString());
};
