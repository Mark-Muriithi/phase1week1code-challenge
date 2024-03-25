const gradeGenerator = function (num) {
    if (num > 79) {
      return `You have an A`;
    } else if (num >= 60 && num <= 79) {
      return `You have a B`;
    } else if (num >= 49 && num <= 59) {
      return `You have a C-`;
    } else if (num >= 40 && num < 49) {
      return `You have a D-`;
    } else if (num < 40) {
      return `You have an E`;
    }
  };