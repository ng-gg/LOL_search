const tier = function (tier, number) {
  switch (number) {
    case 'IV':
      number = 4;
      break;
    case 'III':
      number = 3;
      break;
    case 'II':
      number = 2;
      break;
    case 'I':
      number = 1;
      break;
    default:
      break;
  }
  return `https://opgg-static.akamaized.net/images/medals/${tier}_${number}.png?image=q_auto:best&v=1`;
};

export default tier;
