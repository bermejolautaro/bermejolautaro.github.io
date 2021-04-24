import GetOldTweets3 as got
import json


tweetCriteria = got.manager.TweetCriteria().setUsername("AgusBarreto97")

tweets = got.manager.TweetManager.getTweets(tweetCriteria)
tweetsText = [tweet.text for tweet in tweets]

print('Amount of tweets ', len(tweetsText))

with open('tweets-barreto-all.json', 'w') as outfile:
    json.dump(tweetsText, outfile)