getCatFact();

async function getCatFact() {
  const url = new URL(`https://catfact.ninja/fact`);
  const response = await fetch(url);
  if (response.status >= 200 && response.status <= 300) {
    const jsonResponse = await response.json();
    const catFact = document.getElementById("catFact");
    catFact.innerText = `Kattfakta: ${jsonResponse.fact}`;
  }
}
