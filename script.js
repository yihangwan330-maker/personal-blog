const posts = [
  {
    id: "turning-a-middle-school-irrational-idea-into-a-website",
    title: "Turning a Middle School Irrational Idea into a Website",
    date: "2026-04-23",
    readTime: "12 min",
    tags: ["personal project"],
    excerpt: "How a middle school curiosity about irrational numbers became Number Trace, a website for searching personal digit sequences inside mathematical constants.",
    body: [
      "In middle school, I once had an “interest class” where the teacher asked us to design a project proposal. We did not actually have to finish the project. We only needed to come up with an idea and explain how it might work.",
      "At that time, we were learning about irrational numbers.",
      "That was probably the first time I seriously thought about numbers like π. I knew that their decimal expansions did not terminate or repeat, but what fascinated me was not just the definition. It was the feeling that behind the decimal point, there was an endless world made only of digits.",
      "So I came up with an idea: what if there were a website where you could type in a number, and it would tell you where that sequence first appears in π?",
      "Back then, it was only a project proposal. A small mathematical curiosity written on paper, then left unfinished.",
      "Years later, I finally made it.",
      "Coincidentally, this semester I am also studying probability theory. That gave this old idea a new layer of meaning.",
      "In probability theory, the Borel–Cantelli lemma tells us something powerful about events that happen infinitely many times. Roughly speaking, if we model the decimal expansion as a random sequence of digits, then any fixed finite string of digits should appear not just once, but infinitely many times with probability 1.",
      "For example, take any number you care about: your birthday, a phone number, or a random sequence you typed without thinking. If the digits behave like independent random digits, then the probability that this exact sequence appears somewhere is 1.",
      "In other words, it is almost surely there.",
      "Of course, this does not prove that every sequence appears in the actual decimal expansion of π or e. That would require knowing that these constants are normal numbers, which is still unproven for many famous constants. But the probabilistic model gives the idea its mathematical atmosphere: in a truly random infinite decimal, every finite number string is destined to appear.",
      "This is what made the project feel so attractive to me. It is not only a mathematical toy. It also has a slightly philosophical feeling.",
      "An irrational number is infinite and non-repeating. If we imagine its decimal expansion as an endless river of digits, then maybe your birthday, your phone number, or some private number meaningful only to you has already been hidden somewhere inside it.",
      "Not because anyone placed it there deliberately.",
      "It is simply there, as a consequence of infinity, randomness, and probability.",
      "That feeling is strange and beautiful: a number that belongs to you may already exist quietly inside a mathematical constant that has nothing to do with you.",
      "The website is now called Number Trace. Its function is simple: you enter a string of digits, choose a constant such as π, e, √2, or φ, and the website searches for the first place where that sequence appears in the decimal expansion.",
      "You can type in a birthday, an anniversary, or just a random number that means something to you. The site will try to tell you from which digit to which digit it appears.",
      "Of course, once I actually started building the project, I quickly realized that poetic ideas and engineering reality are very different things.",
      "At first, I thought it would just be a simple webpage: input a number, search π, show the result. But soon I ran into the first real problem.",
      "Short sequences are easy. If you search for three or four digits, they are likely to appear fairly early. But if you search for an eight-digit sequence, the situation changes completely.",
      "If we roughly treat the decimal expansion as a random stream of digits, then a specific eight-digit sequence is expected to appear once every 100,000,000 digits. In other words, if I only search the first tens of thousands or hundreds of thousands of digits, failing to find the sequence does not mean the program is broken. It simply means the probability is too low.",
      "That was one of the first things this project taught me:",
      "Algorithms can make computation faster, but they cannot defeat probability.",
      "So I started thinking about making it a dynamic website. A static website can only compute so much inside the browser. A dynamic website, on the other hand, could store the first 100 million digits of π and e on a server, then let the backend perform the search.",
      "That sounded like the “real” version of the project.",
      "I actually built part of that direction. I added a backend API, designed a chunked data format, and made the server capable of searching through large digit files. For a moment, the project felt much closer to becoming a serious tool.",
      "Then another reality appeared: dynamic websites cost money.",
      "This was something I had not fully understood before. Writing a webpage and running a website are not the same thing. A static website can be hosted for free on GitHub Pages. But a dynamic website needs a server that stays online. A server consumes computing resources, storage, and bandwidth. Even when nobody is using the site, it still has to keep running.",
      "I originally thought deployment simply meant “putting the website online.” Later I realized that for a dynamic website, deployment also means infrastructure, maintenance, and cost.",
      "So the project turned back.",
      "In the end, I decided to make the current version a static website. All calculations happen directly in the browser. The user’s input is not uploaded anywhere. The site does not depend on a backend server, and it can be hosted for free.",
      "This is a compromise.",
      "The static version is not perfect. It can generate digits of π, e, √2, and φ, search for the input sequence, and return the first matching interval. But for longer sequences, especially eight digits or more, it may often fail to find a result within the search range.",
      "The website now shows an estimated probability, so users can understand that “not found” does not necessarily mean “not there.” It only means we have not searched far enough.",
      "In a way, this limitation makes the project feel more honest.",
      "It shows the distance between an idea and its implementation. A concept that feels elegant in your mind has to pass through probability, algorithms, browser performance, deployment choices, data storage, and cost before it becomes something real.",
      "Engineering is not simply turning imagination into reality. It is negotiating with constraints until the idea finds a form that can exist.",
      "This project is still imperfect, but it helped me understand the distance between poetry and engineering.",
      "When I first thought of it in middle school, I was simply fascinated by irrational numbers. I liked the idea that meaningful digits might be hidden somewhere inside π.",
      "Now, years later, that curiosity is still there. Probability theory gave it a sharper mathematical shape, while building the website taught me the practical limits around it.",
      "Maybe one day I will upgrade the project again, with a backend, a larger dataset, or a faster index. Maybe it will eventually search hundreds of millions of digits.",
      "But for now, that small idea from a middle school project proposal is no longer just a sentence on paper.",
      "It has become a website that can actually be opened.",
      {
        type: "links",
        items: [
          {
            label: "Number Trace",
            href: "https://github.com/yihangwan330-maker/pi-finder"
          }
        ]
      }
    ]
  },
  {
    id: "monologue-of-fire",
    title: "火的独白",
    date: "2026-04-22",
    readTime: "7 min",
    tags: ["writing"],
    excerpt: "一篇小说",
    body: [
      "火是谁放的？来不及关心这个问题，我们把塑料船们涂上黑色的防火油漆，匆匆忙忙推入水中，就这样四散在燃烧的海洋中。",
      "火焰在海平面舞动，贴着那流动、醇厚的液体，无声地燃烧，浮光跃金，火光奇异，时而磷火般幽蓝，时而荣金般炽白。空气里弥漫着浓烈的、甜腻的酒精气息，混合着某种焦灼的余韵。海风卷着淡色的火焰拂过面颊，没有想象中燎人的燥热，却带来一种反常的清凉。",
      "我探出手，将一支烟的尾端凑近船外那层跃动的火膜，嗤地一声轻响，烟卷被点燃，明灭的红点在瑰丽的火光映衬下，显得格外黯淡。",
      "“能别抽了吗？”她问。",
      "火光下，她的脸庞如同在急促地眨眼，轮廓随着光焰的跳跃时而清晰时而模糊。眼角处那点湿润的痕迹，也随着青焰的摇曳若隐若现。",
      "我深吸了一口，将刚点燃的烟卷随手抛入海中。",
      "“听说——以前海里的不是酒精，是水……很久以前。”我说。",
      "她白了我一眼：“……你总是有那种不切实际的幻想。”",
      "话音在燃烧的噼啪声中落下，显得空洞而无谓。这时，一个更为巨大的阴影，缓缓切入了这片被火光照亮的领域——一艘残破的、如同幽灵般的巨轮。",
      "“它来了。”",
      "它庞大的身躯倾斜着，船体上布满了被火焰灼烧和岁月侵蚀的痕迹，漆黑的锈迹与剥落的漆皮如同丑陋的伤疤。它没有动力，只是随着燃烧的酒精海流，无声地、缓慢地漂移。这具残骸的内部，断断续续地飘来了音乐。是华尔兹。声音失真，带着电流的杂音和唱片跳针般的卡顿，在空无一人的、被废弃的舞厅里固执地旋转。",
      "“跳支舞吧。”我的声音干涩，朝她伸出一只手。",
      "“在这里？”她犹豫着，抓住我的手，站了起来。",
      "我靠近她的头，对她耳语：“音乐正好。”",
      "我们在燃烧的海面上，巨大残骸的阴影里，跳着支离破碎的舞。她的脸颊靠在我肩头，目光空洞地望着那艘近在咫尺的、播放着生前音乐的尸体。",
      "……",
      "“你说——我们能顺利到达对岸吗？”不久前，她哽咽地说完这句话，圆圆的眼睛里就起了一层氤氲。我能理解她。生活被一场大火毁了，不得不挣扎于困境之上——这是最常见的、最致命的难题。",
      "我向来不会安慰别人，哪怕对自己也是如此；只好伸出手，指向面前燃烧的海洋：“不知道……但你不觉得这景象特美吗？”",
      "……",
      "音乐还在继续，我们的舞步永不停歇；火是我放的，可是没人懂我的隐喻。",
      {
        type: "image",
        src: "assets/blue-fire.jpg",
        alt: "Blue fire flowing across a dark desert landscape",
        caption: "Blue fire across the burning sea."
      }
    ]
  }
];

const postGrid = document.querySelector("#postGrid");
const tagFilters = document.querySelector("#tagFilters");
const searchInput = document.querySelector("#searchInput");
const reader = document.querySelector("#reader");
const readerContent = document.querySelector("#readerContent");
const closeReader = document.querySelector("#closeReader");

let activeTag = "All";

function getAllTags() {
  return ["All", "mathematics", "coding", "personal project", "writing"];
}

function renderFilters() {
  tagFilters.innerHTML = getAllTags()
    .map((tag) => {
      const activeClass = tag === activeTag ? " active" : "";
      return `<button class="filter-button${activeClass}" type="button" data-tag="${tag}">${tag}</button>`;
    })
    .join("");
}

function matchesSearch(post, query) {
  const content = [post.title, post.excerpt, post.date, ...post.tags].join(" ").toLowerCase();
  return content.includes(query.trim().toLowerCase());
}

function getFilteredPosts() {
  const query = searchInput.value;
  return posts.filter((post) => {
    const tagMatch = activeTag === "All" || post.tags.includes(activeTag);
    return tagMatch && matchesSearch(post, query);
  });
}

function renderPosts() {
  const filteredPosts = getFilteredPosts();

  if (filteredPosts.length === 0) {
    postGrid.innerHTML = `<p class="empty">No matching posts found. Try another keyword.</p>`;
    return;
  }

  postGrid.innerHTML = filteredPosts
    .map((post) => {
      const tags = post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
      return `
        <article class="post-card" tabindex="0" data-post-id="${post.id}">
          <div>
            <div class="post-meta">
              <span>${post.date}</span>
              <span>${post.readTime}</span>
            </div>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
          </div>
          <div class="tag-row">${tags}</div>
        </article>
      `;
    })
    .join("");
}

function openPost(postId) {
  const post = posts.find((item) => item.id === postId);
  if (!post) return;

  readerContent.innerHTML = `
    <div class="post-meta">
      <span>${post.date}</span>
      <span>${post.readTime}</span>
    </div>
    <h2>${post.title}</h2>
    ${post.body.map(renderBodyBlock).join("")}
    <div class="tag-row">${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
  `;

  reader.hidden = false;
  reader.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderBodyBlock(block) {
  if (typeof block === "string") {
    return `<p>${block}</p>`;
  }

  if (block.type === "image") {
    const caption = block.caption ? `<figcaption>${block.caption}</figcaption>` : "";
    return `
      <figure class="post-image">
        <img src="${block.src}" alt="${block.alt}">
        ${caption}
      </figure>
    `;
  }

  if (block.type === "links") {
    return `
      <div class="post-links">
        ${block.items
          .map((item) => `<a href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>`)
          .join("")}
      </div>
    `;
  }

  return "";
}

tagFilters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-tag]");
  if (!button) return;

  activeTag = button.dataset.tag;
  renderFilters();
  renderPosts();
});

searchInput.addEventListener("input", renderPosts);

postGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".post-card");
  if (card) openPost(card.dataset.postId);
});

postGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const card = event.target.closest(".post-card");
  if (!card) return;

  event.preventDefault();
  openPost(card.dataset.postId);
});

closeReader.addEventListener("click", () => {
  reader.hidden = true;
  document.querySelector("#posts").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderFilters();
renderPosts();
