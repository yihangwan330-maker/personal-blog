const posts = [
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
