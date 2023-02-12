class CatFact {
  constructor(text) {
    this.text = text;
  }
}

getCatFact();

async function getCatFact() {
  const url = new URL(`https://catfact.ninja/fact`);
  const response = await fetch(url);
  if (response.status >= 200 && response.status <= 300) {
    const jsonResponse = await response.json();
    const rndCatFact = new CatFact(jsonResponse.fact);
    const catFact = document.getElementById("catFact");
    catFact.innerText = `Kattfakta: ${rndCatFact.text}`;
  }
}
