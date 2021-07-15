fetch("http://localhost:3000/destinations")
  .then((res) => res.json())
  .then((destinations) => {
    for (const dest of destinations) {
      console.log(dest);
      const card = document.createElement("div");
      card.innerHTML = `
      <h4 class="myH4" uid=${dest._id}>${dest.name}</h4>
    `;

      document.body.appendChild(card);
    }
  });

document.body.addEventListener("click", (evt) => {
  console.log("something on the body got clicked");
  if (evt.target.classList.contains("myH4")) {
    alert(evt.target.getAttribute("uid"));
  }
});