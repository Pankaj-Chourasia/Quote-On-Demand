
document.addEventListener('DOMContentLoaded', () => {
  const themedQuotes = {
    motivation: [
      { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
      { quote: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
      { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
      { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
      { quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
      { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
      { quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
      { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
      { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
      { quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.", author: "Confucius" },
      { quote: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" },
      { quote: "Your success and happiness lie in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.", author: "Helen Keller" },
      { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
      { quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", author: "Jordan Belfort" },
      { quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
      { quote: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston S. Churchill" },
      { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
      { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
      { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
      { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
      { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
      { quote: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
      { quote: "Challenges are what make life interesting. Overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
    { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
    { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
    { quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.", author: "Confucius" },
    { quote: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" },
    { quote: "Your success and happiness lie in you. Resolve to keep happy, and your joy and you shall form an invincible host against difficulties.", author: "Helen Keller" },
    { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
    { quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", author: "Jordan Belfort" },
    { quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { quote: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston S. Churchill" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
    { quote: "Challenges are what make life interesting. Overcoming them is what makes life meaningful.", author: "Joshua J. Marine" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    ],
    humor: [
      { quote: "I'm writing a book. I've got the page numbers done.", author: "Steven Wright" },
      { quote: "Why do they call it rush hour? Nothing moves.", author: "Robin Williams" },
      { quote: "I can resist everything except temptation.", author: "Oscar Wilde" },
      { quote: "A day without laughter is a day wasted.", author: "Charlie Chaplin" },
      { quote: "The early bird might get the worm, but the second mouse gets the cheese.", author: "Anonymous" },
      { quote: "Why don't scientists trust atoms? Because they make up everything.", author: "Anonymous" },
      { quote: "I told my wife she was drawing her eyebrows too high. She looked surprised.", author: "Anonymous" },
      { quote: "I don't need a hairstylist; my pillow gives me a new hairstyle every morning.", author: "Anonymous" },
      { quote: "If at first, you don't succeed, then skydiving definitely isn't for you.", author: "Steven Wright" },
      { quote: "I asked God for a bike, but I know God doesn't work that way. So I stole a bike and asked for forgiveness.", author: "Anonymous" },
      { quote: "I used to be indecisive, but now I'm not too sure.", author: "Anonymous" },
      { quote: "Why don't skeletons fight each other? They don't have the guts.", author: "Anonymous" },
      { quote: "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'", author: "Anonymous" },
      { quote: "I told my computer I needed a break, and now it won't stop sending me vacation ads.", author: "Anonymous" },
      { quote: "I'm reading a book on anti-gravity. It's impossible to put down.", author: "Anonymous" },
      { quote: "I'm on a whiskey diet. I've lost three days already.", author: "Anonymous" },
      { quote: "I used to be a baker because I kneaded dough.", author: "Anonymous" },
      { quote: "I told my wife she was drawing her eyebrows too high. She looked surprised.", author: "Anonymous" },
      { quote: "I'm reading a book about anti-gravity. It's impossible to put down.", author: "Anonymous" },
      { quote: "I only know 25 letters of the alphabet. I don't know y.", author: "Anonymous" },
      { quote: "I couldn't figure out how to put my seatbelt on. Then it just 'clicked'!", author: "Anonymous" },
      { quote: "I used to be a baker because I kneaded dough.", author: "Anonymous" },
      { quote: "I told my computer I needed a break, and now it won't stop sending me vacation ads.", author: "Anonymous" },
      { quote: "Why don't skeletons fight each other? They don't have the guts.", author: "Anonymous" },
      { quote: "Why don't scientists trust atoms? Because they make up everything.", author: "Anonymous" },
      { quote: "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'", author: "Anonymous" },
      { quote: "The early bird might get the worm, but the second mouse gets the cheese.", author: "Anonymous" },
      { quote: "I asked God for a bike, but I know God doesn't work that way. So I stole a bike and asked for forgiveness.", author: "Anonymous" },
      { quote: "If at first, you don't succeed, then skydiving definitely isn't for you.", author: "Steven Wright" },
      { quote: "I used to be indecisive, but now I'm not too sure.", author: "Anonymous" },
      { quote: "I'm on a whiskey diet. I've lost three days already.", author: "Anonymous" },
      
    ],
    love: [
      { quote: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
      { quote: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
      { quote: "Love is an endless mystery, for it has nothing else to explain it.", author: "Rabindranath Tagore" },
      { quote: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
      { quote: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.", author: "Maya Angelou" },
      { quote: "The greatest happiness you can have is knowing that you do not necessarily require happiness.", author: "William Saroyan" },
      { quote: "Love is the triumph of imagination over intelligence.", author: "H. L. Mencken" },
      { quote: "Love is a friendship set to music.", author: "Joseph Campbell" },
      { quote: "To the world, you may be one person, but to one person you are the world.", author: "Bill Wilson" },
      { quote: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", author: "Unknown" },
      { quote: "You know it's love when all you want is that person to be happy, even if you're not part of their happiness.", author: "Julia Roberts" },
      { quote: "Love is like the wind, you can't see it, but you can feel it.", author: "Nicholas Sparks" },
      { quote: "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.", author: "Nicholas Sparks" },
      { quote: "The giving of love is an education in itself.", author: "Eleanor Roosevelt" },
      { quote: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
      { quote: "A successful marriage requires falling in love many times, always with the same person.", author: "Mignon McLaughlin" },
      { quote: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
      { quote: "Love is an endless mystery, for it has nothing else to explain it.", author: "Rabindranath Tagore" },
      { quote: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
      { quote: "Love is not just looking at each other, it's looking in the same direction.", author: "Antoine de Saint-Exupéry" },
      { quote: "The greatest thing you'll ever learn is just to love and be loved in return.", author: "Eden Ahbez" },
      { quote: "Being deeply loved by someone gives you strength while loving someone deeply gives you courage.", author: "Lao Tzu" },
      { quote: "Love does not consist in gazing at each other, but in looking outward together in the same direction.", author: "Antoine de Saint-Exupéry" },
      { quote: "Love is that condition in which the happiness of another person is essential to your own.", author: "Robert A. Heinlein" },
      { quote: "Love is like a beautiful flower which I may not touch, but whose fragrance makes the garden a place of delight just the same.", author: "Helen Keller" },
      { quote: "Love is the only force capable of transforming an enemy into a friend.", author: "Martin Luther King Jr." },
      { quote: "To love oneself is the beginning of a lifelong romance.", author: "Oscar Wilde" },
      { quote: "Love is a friendship set to music.", author: "Joseph Campbell" },
      { quote: "Love is not only something you feel, it is something you do.", author: "David Wilkerson" },
      { quote: "Love is the greatest refreshment in life.", author: "Pablo Picasso" },
      { quote: "The greatest happiness you can have is knowing that you do not necessarily require happiness.", author: "William Saroyan" },
      { quote: "Love is the triumph of imagination over intelligence.", author: "H. L. Mencken" },
      { quote: "Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell.", author: "Joan Crawford" },
      { quote: "To the world, you may be one person, but to one person you are the world.", author: "Bill Wilson" },
      { quote: "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.", author: "Nicholas Sparks" },
      { quote: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", author: "Unknown" },
      { quote: "You know it's love when all you want is that person to be happy, even if you're not part of their happiness.", author: "Julia Roberts" },
      { quote: "Love is like the wind, you can't see it, but you can feel it.", author: "Nicholas Sparks" },
      { quote: "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.", author: "Nicholas Sparks" },
      // Add more love quotes as needed
    ],
    wisdom: [
      { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
      { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
      { quote: "Knowledge speaks, but wisdom listens.", author: "Jimi Hendrix" },
      { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
      { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
      { quote: "The way is not in the sky. The way is in the heart.", author: "Buddha" },
      { quote: "You yourself, as much as anybody in the entire universe, deserve your love and affection.", author: "Buddha" },
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
      { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
      { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
      { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
      { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
      { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
      { quote: "The way is not in the sky. The way is in the heart.", author: "Buddha" },
      { quote: "You yourself, as much as anybody in the entire universe, deserve your love and affection.", author: "Buddha" },
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
      { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
      { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
      { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
      { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
      { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
      { quote: "The way is not in the sky. The way is in the heart.", author: "Buddha" },
      { quote: "You yourself, as much as anybody in the entire universe, deserve your love and affection.", author: "Buddha" },
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
      { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
      { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
      { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
      { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
      { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
      { quote: "The way is not in the sky. The way is in the heart.", author: "Buddha" },
      { quote: "You yourself, as much as anybody in the entire universe, deserve your love and affection.", author: "Buddha" },
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
      { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
      { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
      { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
      { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
      { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
      { quote: "The way is not in the sky. The way is in the heart.", author: "Buddha" },
      { quote: "You yourself, as much as anybody in the entire universe, deserve your love and affection.", author: "Buddha" },
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
      { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
      { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
      { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
      { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
      { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
      { quote: "The way is not in the sky. The way is in the heart.", author: "Buddha" },
      { quote: "You yourself, as much as anybody in the entire universe, deserve your love and affection.", author: "Buddha" },
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
      { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
      { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
      { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
      { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
      { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    ],
    technology: [
      { quote: "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.", author: "Bill Gates" },
      { quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.", author: "Bill Gates" },
      { quote: "It has become appallingly obvious that our technology has exceeded our humanity.", author: "Albert Einstein" },
      { quote: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke" },
      { quote: "The great growling engine of change - technology.", author: "Alvin Toffler" },
      { quote: "The science of today is the technology of tomorrow.", author: "Edward Teller" },
      { quote: "The real danger is not that computers will begin to think like men, but that men will begin to think like computers.", author: "Sydney J. Harris" },
      { quote: "Technology is anything that wasn’t around when you were born.", author: "Alan Kay" },
      { quote: "The technology you use impresses no one. The experience you create with it is everything.", author: "Sean Gerety" },
      { quote: "The art challenges the technology, and the technology inspires the art.", author: "John Lasseter" },
      { quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.", author: "Bill Gates" },
      { quote: "Our technological powers increase, but the side effects and potential hazards also escalate.", author: "Alvin Toffler" },
      { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
      { quote: "The technology you use impresses no one. The experience you create with it is everything.", author: "Sean Gerety" },
      { quote: "The art challenges the technology, and the technology inspires the art.", author: "John Lasseter" },
      { quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.", author: "Bill Gates" },
      { quote: "Our technological powers increase, but the side effects and potential hazards also escalate.", author: "Alvin Toffler" },
      { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
      { quote: "The technology you use impresses no one. The experience you create with it is everything.", author: "Sean Gerety" },
      { quote: "The art challenges the technology, and the technology inspires the art.", author: "John Lasseter" },
      { quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.", author: "Bill Gates" },
      { quote: "Our technological powers increase, but the side effects and potential hazards also escalate.", author: "Alvin Toffler" },
      { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
      { quote: "The technology you use impresses no one. The experience you create with it is everything.", author: "Sean Gerety" },
      { quote: "The art challenges the technology, and the technology inspires the art.", author: "John Lasseter" },
      { quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.", author: "Bill Gates" },
      { quote: "Our technological powers increase, but the side effects and potential hazards also escalate.", author: "Alvin Toffler" },
      { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
      { quote: "The technology you use impresses no one. The experience you create with it is everything.", author: "Sean Gerety" },
      { quote: "The art challenges the technology, and the technology inspires the art.", author: "John Lasseter" },
    ],
    friendship: [
      { quote: "A real friend is one who walks in when the rest of the world walks out.", author: "Walter Winchell" },
      { quote: "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'", author: "C.S. Lewis" },
      { quote: "A true friend is somebody who can make us feel better no matter how bad things may be.", author: "Ralph Waldo Emerson" },
      { quote: "Friendship is the only cement that will ever hold the world together.", author: "Woodrow Wilson" },
      { quote: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
      { quote: "Friendship is the only thing in the world concerning the usefulness of which all mankind are agreed.", author: "Cicero" },
      { quote: "A friend is someone who gives you total freedom to be yourself.", author: "Jim Morrison" },
      { quote: "A true friend never gets in your way unless you happen to be going down.", author: "Arnold H. Glasow" },
      { quote: "Friendship is always a sweet responsibility, never an opportunity.", author: "Khalil Gibran" },
      { quote: "A friend is what the heart needs all the time.", author: "Henry Van Dyke" },
      { quote: "Friendship is the golden thread that ties the heart of all the world.", author: "John Evelyn" },
      { quote: "A friend may be waiting behind a stranger's face.", author: "Maya Angelou" },
      { quote: "Friendship is unnecessary, like philosophy, like art. It has no survival value; rather it is one of those things which give value to survival.", author: "C.S. Lewis" },
      { quote: "Friendship is the only cement that will ever hold the world together.", author: "Woodrow Wilson" },
      { quote: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
      { quote: "Friendship is the only thing in the world concerning the usefulness of which all mankind are agreed.", author: "Cicero" },
      { quote: "A friend is someone who gives you total freedom to be yourself.", author: "Jim Morrison" },
      { quote: "A true friend never gets in your way unless you happen to be going down.", author: "Arnold H. Glasow" },
      { quote: "Friendship is always a sweet responsibility, never an opportunity.", author: "Khalil Gibran" },
      { quote: "A friend is what the heart needs all the time.", author: "Henry Van Dyke" },
      { quote: "Friendship is the golden thread that ties the heart of all the world.", author: "John Evelyn" },
      { quote: "A friend may be waiting behind a stranger's face.", author: "Maya Angelou" },
      { quote: "Friendship is unnecessary, like philosophy, like art. It has no survival value; rather it is one of those things which give value to survival.", author: "C.S. Lewis" },
    ],
    positivity: [
      { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
      { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
      { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
      { quote: "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.", author: "William Arthur Ward" },
      { quote: "Your attitude, not your aptitude, will determine your altitude.", author: "Zig Ziglar" },
      { quote: "A positive attitude can really make dreams come true.", author: "David Bailey" },
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "Positive thinking will let you do everything better than negative thinking will.", author: "Zig Ziglar" },
      { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
      { quote: "The more you praise and celebrate your life, the more there is in life to celebrate.", author: "Oprah Winfrey" },
      { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
      { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
      { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { quote: "In order to carry a positive action we must develop here a positive vision.", author: "Dalai Lama" },
      { quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
      { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
      { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
      { quote: "A positive mind finds opportunity in everything. A negative mind finds fault in everything.", author: "Unknown" },
      { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
      { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
      { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
      { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
      { quote: "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.", author: "William Arthur Ward" },
      { quote: "Your attitude, not your aptitude, will determine your altitude.", author: "Zig Ziglar" },
      { quote: "A positive attitude can really make dreams come true.", author: "David Bailey" },
      { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { quote: "Positive thinking will let you do everything better than negative thinking will.", author: "Zig Ziglar" },
      { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
      { quote: "The more you praise and celebrate your life, the more there is in life to celebrate.", author: "Oprah Winfrey" },
      { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
      { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
      { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
      { quote: "In order to carry a positive action we must develop here a positive vision.", author: "Dalai Lama" },
      { quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D. Larson" },
      { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
      { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
      { quote: "A positive mind finds opportunity in everything. A negative mind finds fault in everything.", author: "Unknown" },
    ],
  };

  const button = document.getElementById('button');
  const quoteContainer = document.getElementById('quote-container');
  const categorySelector = document.getElementById('category');
  const dynamicTextElement = document.getElementById('dynamicText');
  const dynamicWords = ['Inspiration', 'Tech', 'Wisdom', 'Life']; 
  let currentWordIndex = 0;

 
  function getRandomQuote(category) {
    const selectedCategory = category === 'all' ? Object.values(themedQuotes).flat() : themedQuotes[category] || [];
    const randomIndex = Math.floor(Math.random() * selectedCategory.length);
    return selectedCategory[randomIndex];
  }
  

  function displayQuote(quoteData) {
    quoteContainer.innerHTML = `"${quoteData.quote}" - ${quoteData.author}`;
  }

  button.addEventListener('click', () => {
    const selectedCategory = categorySelector.value;
    const quoteData = getRandomQuote(selectedCategory);
    quoteContainer.classList.remove('show');
    setTimeout(() => {
      displayQuote(quoteData);
      quoteContainer.classList.add('show');
    }, 500);
  });

  // Additional function to update background image based on category
  function updateBackground(category) {
    const body = document.body;
    switch (category) {
      case 'motivation':
        body.style.backgroundImage = 'url("https://img.freepik.com/premium-photo/man-stands-mountain-peak-with-title-he-is-standing-mountain-peak_14117-18560.jpg?w=1060")';
        break;
      case 'humor':
        body.style.backgroundImage = 'url("https://ik.imagekit.io/freeflo/production/05afb9af-0c5a-443d-b525-cfd147c20619.png?tr=w-2048,q-80&alt=media&pr-true")';
        break;
      case 'love':
        body.style.backgroundImage = 'url("https://img.freepik.com/free-photo/cute-couple-with-flowers_23-2150894504.jpg?t=st=1709732176~exp=1709735776~hmac=b7b5689e909cdc3def4b2b5045a3e0c4782385f76ea4917b1eab7ed0ca338ffc&w=900")';
        break;
      case 'wisdom':
        body.style.backgroundImage = 'url("https://img.freepik.com/free-photo/fantasy-style-scene-international-day-education_23-2151040322.jpg?t=st=1709737384~exp=1709740984~hmac=d854e6c2a26a3c5045d38a54966340947771fabf3c05c388def4f97bf399b558&w=900")';
        break;
      case 'technology':
        body.style.backgroundImage = 'url("https://img.freepik.com/free-photo/woman-with-vr-glasses-futuristic-city_23-2150904661.jpg?t=st=1709737608~exp=1709741208~hmac=87f0493968e42ebd382980e157b3fd2a1d6f1a4d63820643fa4904934b11ae9e&w=1060")';
        break;
      case 'friendship':
        body.style.backgroundImage = 'url("https://img.freepik.com/free-photo/american-football-character-with-equipment_23-2151154210.jpg?t=st=1709738153~exp=1709741753~hmac=d7046f34e3d5f6d3cb3ef0eb2a4f379760797c5852204486204567589c9af11b&w=996")';
        break;
      case 'positivity':
        body.style.backgroundImage = 'url("https://img.freepik.com/premium-photo/source-consciousness-energy-universe-life-force-prana-mind-god-spirit_742252-7279.jpg?w=900")'
        break;

      default:
        body.style.backgroundImage = 'url("https://img.freepik.com/free-photo/galactic-night-sky-astronomy-science-combined-generative-ai_188544-9656.jpg?w=1060&t=st=1709730284~exp=1709730884~hmac=91ea8239e79e16ba059a16088edac87e361a617fe14be3ca36b1d1b6a2876b8c")';
    }
  }

  // Trigger background update when the page loads
  updateBackground(categorySelector.value);

  // Update background when the category changes
  categorySelector.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    updateBackground(selectedCategory);
  });
  function animateText() {
    const currentWord = dynamicWords[currentWordIndex];
    const wordLength = currentWord.length;
    let charIndex = 0;
  
    function showNextCharacter() {
      if (charIndex < wordLength) {
        dynamicTextElement.textContent = currentWord.substring(0, charIndex + 1) + '|'; 
        charIndex++;
        setTimeout(showNextCharacter, 100); 
      } else {
        setTimeout(() => {
          dynamicTextElement.textContent = currentWord + '|';
          setTimeout(startNextWord, 1000); 
        }, 500); 
      }
    }
  
    showNextCharacter();
  }
  
  function startNextWord() {
    dynamicTextElement.textContent = ''; 
    currentWordIndex = (currentWordIndex + 1) % dynamicWords.length;
    animateText();
  }
  
  // Initial call to start the animation
  animateText();
});
