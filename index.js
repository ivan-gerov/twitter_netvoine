import { twitterFirebasePipeline } from "./utils/twitterFirebasePipelineManager.js";
import { readAllTweets } from "./utils/storage.js";

await twitterFirebasePipeline();
let all_tweets = await readAllTweets();
console.log(all_tweets.length);
