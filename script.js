function generateQuote() {
  const quotes = [
    {
      quote: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "Don't let yesterday take up too much of today.",
      author: "Will Rogers"
    },
    {
      quote: "It's not whether you get knocked down, it's whether you get up.",
      author: "Vince Lombardi"
    },
    {
      quote: "If you are working on something exciting, it will keep you motivated.",
      author: "Steve Jobs"
    },
    {
      quote: "Success is not in what you have, but who you are.",
      author: "Bo Bennett"
    }
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[randomIndex].quote;
  const authorText = quotes[randomIndex].author;

  document.getElementById('quote').textContent = `"${quoteText}"`;
  document.getElementById('author').textContent = `- ${authorText}`;
}
