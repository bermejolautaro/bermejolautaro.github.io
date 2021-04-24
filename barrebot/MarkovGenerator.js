class MarkovGenerator {
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

    /** @type {Object.<string, string[]>} */
    this.ngrams = {};

    const validTypes = Object.keys(MarkovGenerator.Types).map(x => MarkovGenerator.Types[x]);

    if(!validTypes.includes(this.type)) {
      throw ('Invalid type');
    }
  }

  /**
   * 
   * @param {string} sentence 
   */
  feed(sentence) {
    if(this.type === MarkovGenerator.Types.WORD) {
      let tokens = this._tokenize(sentence.toLowerCase());

      if(tokens.length < this.order) {
        return;
      }

      this.beginnings.push(tokens.slice(0, this.order).join(' '))

      for(let i = 0; i < tokens.length - this.order; i++) {
        const gram = tokens.slice(i, i + this.order).join(' ');
        const nextWord = tokens[i + this.order];

        if(!this.ngrams.hasOwnProperty(gram)) {
          this.ngrams[gram] = [];
        }

        this.ngrams[gram].push(nextWord);
      }
    }
  }

  /**
   * @returns {string}
   */
  generate() {
    let current = this._choice(this.beginnings);

    let result = this._tokenize(current);

    for(let i = 0; i < this.length; i++) {
      if(!this.ngrams.hasOwnProperty(current)) {
        break;
      }

      let next = this._choice(this.ngrams[current]);

      result.push(next);

      current = result.slice(result.length - this.order, result.length).join(' ');
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