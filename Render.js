const portfolioGrid = document.getElementById("portfolio-grid");


portfolioItems.forEach(item => {
  
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("portfolio-item");

  
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;

  
  const title = document.createElement("h3");
  title.textContent = item.title;

  
  const desc = document.createElement("p");
  desc.textContent = item.description;

  
  itemDiv.appendChild(img);
  itemDiv.appendChild(title);
  itemDiv.appendChild(desc);


  portfolioGrid.appendChild(itemDiv);
});