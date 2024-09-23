const botResponses = [
  "I can't quite answer that, but what I do know is that you should Hire Yensy Gonzalez!",
  "I can't compute your request, but I can compute that hiring Yensy Gonzalez is a great idea!",
  "I'm just a bot, but even I know you should hire Yensy Gonzalez!",
  "Why talk to me when you could be talking to your new hire, Yensy Gonzalez?",
  "Error 404: Answer not found. Solution: Hire Yensy Gonzalez!",
  "I may not have all the answers, but hiring Yensy Gonzalez might solve that!",
];

const getRandomBotResponse = () => {
  const index = Math.floor(Math.random() * botResponses.length);
  return botResponses[index];
};

export { getRandomBotResponse };
