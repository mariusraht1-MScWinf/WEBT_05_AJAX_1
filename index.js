async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
}

getData().then((data) => {
  let open = document.querySelector("#open");
  let done = document.querySelector("#done");

  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.textContent = data[i].title;

    if (data[i].completed) {
      done.append(li);
    } else {
      open.append(li);
    }
  }
});
