const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((item) => {
  const categoryName = item.querySelector("h2");
  const categoryElementsCount = item.querySelectorAll("li");
  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryElementsCount.length}`);
});
