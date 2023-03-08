import schedule from "node-schedule";
import * as dotenv from "dotenv";
dotenv.config();

import { MessagesDict, MessageTypes, IntervalsDict } from "./messages";
const EcstaticVoiceOfTheTribe_botAPIKEY = process.env
    .ECSTATICVOICEOFTHETRIBE_BOTAPIKEY as string;
const makeRequest = (mesageType: MessageTypes) => async () => {
    const body = {
        chat_id: 293790727,
        text: MessagesDict[mesageType],
    };

    const response = await fetch(
        `https://api.telegram.org/bot${EcstaticVoiceOfTheTribe_botAPIKEY}/sendMessage`,
        {
            method: "post",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" },
        }
    );
    const data = await response.text();
    console.log(data);
};

// Schedule the function to run every week
const interval = 6 * 1000; // 1 week in milliseconds
schedule.scheduleJob(
    IntervalsDict[MessageTypes.ecstaticMeet],
    makeRequest(MessageTypes.ecstaticMeet)
).on;
schedule.scheduleJob(
    IntervalsDict[MessageTypes.ecstaticFriends],
    makeRequest(MessageTypes.ecstaticFriends)
).on;
schedule.scheduleJob(
    IntervalsDict[MessageTypes.ecstaticMarket],
    makeRequest(MessageTypes.ecstaticMarket)
).on;
schedule.scheduleJob(
    IntervalsDict[MessageTypes.whatATrack],
    makeRequest(MessageTypes.whatATrack)
).on;
