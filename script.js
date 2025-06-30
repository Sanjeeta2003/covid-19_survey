const apiURL = "https://disease.sh/v3/covid-19/all";

async function fetchData() {
  const response = await fetch(apiURL);
  const data = await response.json();
  document.getElementById("cases").innerText = data.cases.toLocaleString();
  document.getElementById("recovered").innerText = data.recovered.toLocaleString();
  document.getElementById("deaths").innerText = data.deaths.toLocaleString();
  loadChart(data);
}

function loadChart(data) {
  const ctx = document.getElementById('covidChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Cases', 'Recovered', 'Deaths'],
      datasets: [{
        label: 'COVID-19 Stats',
        data: [data.cases, data.recovered, data.deaths],
        backgroundColor: ['blue', 'green', 'red']
      }]
    }
  });
}

window.onload = fetchData;
