const markov = new MarkovTweetGenerator('word', 2, 500);

(function() {
  main();
})();

function main() {
  for(const tweet of tweets) {
    markov.feed(tweet);
  }

  console.log(markov.generate());
}