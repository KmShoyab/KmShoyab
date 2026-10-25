export type Article = {
number: string;
category: string;
title: string;
description: string;
date: string;
readTime: string;
slug: string;
content: string[];
};

export const articles: Article[] = [
{
number: "01",
category: "Blog",
title: "Your First Article",
description:
"A place for your thoughts, ideas, and experiences. Replace this text with your own introduction.",
date: "Coming soon",
readTime: "5 min read",
slug: "your-first-article",
content: [
"This is where your first article begins. Replace this text with your own writing.",
"You can divide your article into multiple paragraphs by adding more strings to this array.",
],
},
{
number: "02",
category: "Literature",
title: "A Piece of Literature",
description:
"Stories, poetry, and creative writing that express ideas, feelings, and observations.",
date: "Coming soon",
readTime: "3 min read",
slug: "a-piece-of-literature",
content: [
"This is where your literary work begins.",
"Add your stories, poetry, or other creative writing here.",
],
},
{
number: "03",
category: "Essay",
title: "Ideas Worth Exploring",
description:
"A space for thoughtful essays, opinions, questions, and reflections on the world.",
date: "Coming soon",
readTime: "7 min read",
slug: "ideas-worth-exploring",
content: [
"This is where your essay begins.",
"Develop your ideas here, one paragraph at a time.",
],
},
];