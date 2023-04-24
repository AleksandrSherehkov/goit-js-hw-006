const allCategoriesEl = document.querySelectorAll('.item');
console.log(allCategoriesEl);

allCategoriesEl.forEach(element => {
  console.log(`Category: ${element.children[0].textContent}
//   Elements: ${element.children[1].children.length}`);
});

// const categoriesArr = [...allCategoriesEl]
//   .map(
//     categories => `Category: ${categories.children[0].textContent}
//   Elements: ${categories.children[1].children.length}`
//   )
//   .join('\n');
// console.log(categoriesArr);
