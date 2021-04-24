/**
 * @typedef {{texto: string, id: string}} Tweet
 */

class MarkovTweetGenerator {
  static Types = {
    WORD: 'word',
    CHARACTER: 'character'
  }
  /**
   * 
   * @param {'word' | 'character'} type 
   * @param {number} order 
   * @param {number} length 
   */
  constructor(type, order, length) {
    this.type = type;
    this.order = order;
    this.length = length;

    /** @type {string[]} */
    this.beginnings = [];

    /** @type {Object.<string, {text: string, tweetId: number}[]>} */
    this.ngrams = {};

    const validTypes = Object.keys(MarkovTweetGenerator.Types).map(x => MarkovTweetGenerator.Types[x]);

    if (!validTypes.includes(this.type)) {
      throw ('Invalid type');
    }
  }

  /**
   * 
   * @param {Tweet} tweet 
   */
  feed(tweet) {
    if (this.type === MarkovTweetGenerator.Types.WORD) {
      let tokens = this._tokenize(tweet.texto.toLowerCase());

      if (tokens.length < this.order) {
        return;
      }

      this.beginnings.push({ text: tokens.slice(0, this.order).join(' '), tweetId: tweet.id })

      for (let i = 0; i < tokens.length - this.order; i++) {
        const gram = tokens.slice(i, i + this.order).join(' ');
        const nextWord = tokens[i + this.order];

        if (!this.ngrams.hasOwnProperty(gram)) {
          this.ngrams[gram] = [];
        }

        this.ngrams[gram].push({ text: nextWord, tweetId: tweet.id });
      }
    }
  }

  /**
   * @returns {string}
   */
  generate() {
    let current = this._choice(this.beginnings);

    console.log(current);

    let result = this._tokenize(current.text);

    let lastTweetsIds = [];

    if (!lastTweetsIds.includes(current.tweetId)) {
      twttr.widgets.createTweet(
        current.tweetId,
        document.body,
        {theme: 'dark'}
      );
    }

    lastTweetsIds.push(current.tweetId);

    console.log(`{${current.text} - ${current.tweetId}}`);

    for (let i = 0; i < this.length; i++) {
      if (!this.ngrams.hasOwnProperty(current.text)) {
        break;
      }

      /**@type {{text: string, tweetId: number}} */
      let next = this._choice(this.ngrams[current.text]);
      result.push(next.text);
      console.log(`{${result.join(' ')} - ${next.tweetId}}`);

      if (!lastTweetsIds.includes(next.tweetId)) {
        twttr.widgets.createTweet(
          next.tweetId,
          document.body,
          {theme: 'dark'}
        );
      }

      lastTweetsIds.push(next.tweetId);

      current.text = result.slice(result.length - this.order, result.length).join(' ');
    }

    return this._capitalize(result.join(' '));
  }

  /**
   * 
   * @param {string} text 
   * @returns {string[]}
   */
  _tokenize(text) {
    return text.split(/\s+/);
  }

  /**
   * 
   * @param {Array} list 
   */
  _choice(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  /**
   * 
   * @param {string} text 
   */
  _capitalize(text) {
    return text[0].toUpperCase() + text.substring(1, text.length);
  }
}