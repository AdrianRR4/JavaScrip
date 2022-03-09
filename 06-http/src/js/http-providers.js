const jokeUrl = "https://api.chucknorris.io/jokes/random";

const obtenerChiste = async () => {
  try {
    const repuesta = await fetch(jokeUrl);

    if (!repuesta.ok) return alert("no se pudo realizar la operacion");

    const chiste = await repuesta.json();

    return chiste;
  } catch (error) {}
};

export { obtenerChiste };
