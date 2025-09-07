require('./index.css');
const visaImg = require('./assets/visa.png');
const mcImg = require('./assets/mastercard.png');

function isValidCard(number) {
  const digits = number.replace(/\D/g, '').split('').reverse().map(d => parseInt(d));
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  return sum % 10 === 0;
}

function getCardType(number) {
  if (/^4/.test(number)) return { type: 'Visa', img: visaImg };
  if (/^5[1-5]/.test(number)) return { type: 'MasterCard', img: mcImg };
  return { type: 'Unknown', img: null };
}

// DOM
const input = document.getElementById('cardNumber');
const btn = document.getElementById('validateBtn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  const number = input.value;
  const valid = isValidCard(number);
  const { type, img } = getCardType(number);
  result.innerHTML = valid ? `Valid ${type} card` : `Invalid card`;
  if (img) {
    const image = document.createElement('img');
    image.src = img;
    result.prepend(image);
  }
});

module.exports = { isValidCard, getCardType };
