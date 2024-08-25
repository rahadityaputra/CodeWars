// IP Validation

// split string dengan .split('.') 
// kemudian hitung apakah ada 4 elemen 
// jika tidak 4 elemen
//    maka return false;
// akhir jika
// jika 4 elemen
//    maka cek setiap element harus bernilai antara 0 - 255
//    jika tidak
//       maka return false
//    jika iya
//       maka return true;

function isValidIP(str) {
  const numbers =  str.split('.');
  // return numbers
  if (numbers.length === 4) {
    console.log(numbers.length);
    
    return numbers.every(number => {
      return number === String(parseInt(number)) && parseInt(number) >= 0 && parseInt(number) <= 255;
    })
  } else {
    return false;
  }
}