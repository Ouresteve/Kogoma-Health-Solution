const posts = [
  {
    id: 1,
    title: "Understanding Hypertension",
    content: "Hypertension is a condition where blood pressure remains high over time...",
    type: "education",
    author: "Medical Staff",
    role: "staff",
    likes: 12,
    comments: 4
  },
  {
    id: 2,
    title: "My Asthma Journey",
    content: "Living with asthma hasn’t been easy, but learning triggers helped...",
    type: "story",
    author: "Verified User",
    role: "user",
    likes: 21,
    comments: 7
  },
  {
    id: 3,
    title: "Daily Health Tip",
    content: "Take at least 5 minutes every hour to stretch and relax your eyes.",
    type: "tip",
    author: "Health Bot",
    role: "system",
    likes: 30,
    comments: 2
  }
];

const container = document.getElementById("postsContainer");
const filters = document.querySelectorAll(".filter");

function renderPosts(filterType = "all") {
  container.innerHTML = "";

  const filtered = filterType === "all"
    ? posts
    : posts.filter(p => p.type === filterType);

  filtered.forEach(post => {
    const div = document.createElement("div");
    div.className = "post-card";

    div.innerHTML = `
      <div class="post-header">
        <strong>${post.title}</strong>
        <span class="badge ${post.role}">${post.author}</span>
      </div>

      <p>${post.content}</p>

      <div class="post-actions">
        <span><i class="fas fa-heart"></i> ${post.likes}</span>
        <span><i class="fas fa-comment"></i> ${post.comments}</span>
        <span><i class="fas fa-bookmark"></i></span>
      </div>
    `;

    container.appendChild(div);
  });
}

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderPosts(btn.dataset.type);
  });
});

renderPosts();
