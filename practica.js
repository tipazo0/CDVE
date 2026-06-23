async function mostrarPosts() {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await respuesta.json();

  const contenedor = document.getElementById("practica");

  posts.forEach((post) => {
    contenedor.innerHTML += `
      <div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>
    `;
  });
}

mostrarPosts();