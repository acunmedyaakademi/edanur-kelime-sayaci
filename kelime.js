/* Bir string alın ve kelimeleri bir array'e ayır.
Her kelimenin kaç kez geçtiğini hesapla ve bir obje olarak sakla. */

const metin = "Bu bir metin. Simdi bu metindeki kelimeleri ayiracagim.";
const words = metin.split(" ");
console.log(words);

let obje = {};

for (const word of words) {
  if (obje[word]) {
    obje[word]++;
  } else {
    obje[word] = 1;
  }
}

console.log(obje);
