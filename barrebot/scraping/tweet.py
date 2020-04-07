import tweepy
import json
import pprint
####input your credentials here
consumer_key = 'IJ2gADgpxReq4a4PCaVMrgavI'
consumer_secret = 'gdW4heQWlyhEXDFMHvEQuyAE3ycrUmGkFd84BsgrjjoLo84SZk'
access_token = '360982242-D5p9coOLQFtdDStXtSodor4XQxKj0NYet1NawFtc'
access_token_secret = 'e33PoWBq9kJGbgVhX2LeF5aZplReUhD2q1lwyJJeV6oI3'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth,wait_on_rate_limit=True)

userId = "@AgusBarreto97"

user = api.get_user(userId)

print(user.screen_name)
print(user.followers_count)

public_tweets = api.user_timeline(userId, count=26500, tweet_mode="extended")

# tweets_lista = open("tweets-lista-juli.csv", "wb")

tweets = []


for tweet in tweepy.Cursor(api.user_timeline, id=userId, tweet_mode="extended").items():
    texto = "'" + tweet.full_text  +  "',"
    if texto.find("@") == -1 and texto.find("https") == -1 and texto.find("http") == -1: 
        obj = {"texto": tweet.full_text, "id": tweet.id_str}
        tweets.append(obj)
        # tweets_lista.write(texto.encode("utf-8"))
        # tweets_lista.write("\n".encode())

print("Terminado.")

with open('tweets-barreto-2.json', 'w') as outfile:
    json.dump(tweets, outfile)

print("Archivo guardado.")

# print("Imprimiendo 500 tweets")
# for tweet in public_tweets:
#     texto = "'" + tweet.full_text +  "',"
#     if texto.find("@") == -1 and texto.find("https") == -1:
#         tweets_lista.write(texto.encode("utf-8"))
#         tweets_lista.write("\n".encode())
