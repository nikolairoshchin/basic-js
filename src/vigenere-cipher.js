const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  punctuation = "!#¤%&/()=? ,.;:1234567890^-_*@$|";
  constructor(direct) {
    if (direct === undefined) {
      this.direct = true;
    } else {
      this.direct = direct;
    }
  }
  encrypt(message, key) {
    if ((!message) || (!key)) throw new Error('Incorrect arguments!');
    let result = '';
    let j = 0;
    const lengthKey = Math.ceil(message.length / key.length);
    let keyPhrase = key.repeat(lengthKey).toUpperCase();
    let messageUpperCase = message.toUpperCase();
    for(let i = 0; i < message.length; i++) {
      if (this.punctuation.includes(messageUpperCase[i])) {
        result += messageUpperCase[i];
      } else {
      let indexOfT = this.alphabet.indexOf(messageUpperCase[i]);
      let indexOfE = this.alphabet.indexOf(keyPhrase[j]);
      j++;
      let indexOfKey = indexOfE + indexOfT;
      if (indexOfKey > 25) indexOfKey -= 26;
      result += this.alphabet[indexOfKey];
     }
    }
    if (this.direct) {
        return result;
    } else {
        return result.split("").reverse().join("");
    }
  }
  decrypt(message, key) {
    if ((!message) || (!key)) throw new Error('Incorrect arguments!');
    let result = '';
    let j = 0;
    const lengthKey = Math.ceil(message.length / key.length);
    let keyPhrase = key.repeat(lengthKey).toUpperCase();
    let messageUpperCase = message.toUpperCase();
    for(let i = 0; i < message.length; i++) {
      if (this.punctuation.includes(messageUpperCase[i])) {
        result += messageUpperCase[i];
      } else {
      let indexOfT = this.alphabet.indexOf(messageUpperCase[i]);
      let indexOfE = this.alphabet.indexOf(keyPhrase[j]);
      j++;
      let indexOfKey = indexOfT - indexOfE;
      if (indexOfKey < 0) indexOfKey += 26;
      result += this.alphabet[indexOfKey];
     }
    }
    if (this.direct) {
        return result;
    } else {
        return result.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
