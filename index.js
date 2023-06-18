let marksgotten = ()
let grade 

if (marksgotten >= 79){
    grade = 'A'
} else if (marksgotten >= 60 && marksgotten <= 79) {
    grade = 'B';
  } else if ( marksgotten >= 50 && marksgotten <= 59) {
    grade = 'C';
  } else if ( marksgotten >= 40 && marksgotten <= 49) {
    grade = 'D';
  } else {
    grade = 'E';
  }
  console.log(`${grade}`)