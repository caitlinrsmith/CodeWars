// https://www.codewars.com/kata/57a9692dbb9944516d000209/train/javascript

// Steps: 
// Split the string into surnames: This includes recognizing special two-character surnames.
// Reverse the order of surnames: Handle the order of surnames correctly, especially with the two-character surnames.
// Format the reversed string: Add a Chinese comma "，" after every 4 Chinese characters and a Chinese period "。" after every 8 Chinese characters.
// Handle multiple lines if necessary: Split the output into multiple lines if the length is more than 8 characters.

function reverseSurname(surnames) {
    const special = ["万俟", "司马", "上官", "欧阳"]; // Example of special surnames
  
    function extractSurnames(surnames) {
      const surnameList = [];
      let i = 0;
      while (i < surnames.length) {
        let found = false;
        for (const specialSurname of special) {
          if (surnames.substr(i, specialSurname.length) === specialSurname) {
            surnameList.push(specialSurname);
            i += specialSurname.length;
            found = true;
            break;
          }
        }
        if (!found) {
          surnameList.push(surnames[i]);
          i++;
        }
      }
      return surnameList;
    }
  
    function formatSurnames(surnamesList) {
      let result = '';
      let currentLine = '';
      let charCount = 0;
  
      for (let i = 0; i < surnamesList.length; i++) {
        currentLine += surnamesList[i];
        charCount += surnamesList[i].length;
  
        if (charCount === 4 || charCount === 8) {
          currentLine += charCount === 4 ? '，' : '。';
          if (charCount === 8) {
            result += currentLine + '\n';
            currentLine = '';
            charCount = 0;
          }
        }
      }
  
      if (currentLine) {
        if (charCount <= 4) {
          currentLine += '，';
        } else {
          currentLine += '。';
        }
        result += currentLine;
      }
  
      return result.trim();
    }
  
    const surnamesList = extractSurnames(surnames);
    const reversedSurnamesList = surnamesList.reverse();
    return formatSurnames(reversedSurnamesList);
  }