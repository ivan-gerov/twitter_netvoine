import { twitterFirebasePipeline } from "./utils/twitterFirebasePipelineManager.js";
import { readAllTweets } from "./utils/storage.js";

await twitterFirebasePipeline();
let all_tweets = await readAllTweets();
console.log(all_tweets.length);
process.exit()

// import fs from "fs";
// let data = JSON.parse(fs.readFileSync("sample_data/tweetsData.json", "utf-8"))

// console.log(data)

// import { getLatest100Tweets } from "./utils/getTweets.js";

// console.log(await getLatest100Tweets())