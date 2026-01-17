import React from 'react';

const Greet = () => {
  return <div>hello</div>;
};

export default Greet;

/* use-case : we are building a gen ai application where we will take links of different articles and build an application which will summarize and provide answers.
  issues : 
  1. copy-pasting articles in chatGPT is tedious and takes a lot of time
  2. we need an aggregate knowledge base : if we have searched a query and the article is present in some nth article link. ChatGPT will not know which article to look into.
  3. Chat GPT has work limit - 2000 lines


  we are building something we will be performing and also there will be something i need to understand
*/
