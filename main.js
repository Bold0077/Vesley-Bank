const ctx = document.getElementById("myChart");
const getGradient = (ctx, chartArea) => {
  let gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  gradient.addColorStop(0.9, "rgba(21,123,243,0.2)");
  gradient.addColorStop(0, "transparent");
  return gradient;
};
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Mar", "April", "May", "June", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        data: [3, 2, 5, 4, 19, 20, 17, 15, 21],
        borderWidth: 2,
        borderColor: "#157bf8",
        lineTension: 0.8,
        fill: true,
        backgroundColor: (context) => {
          const Chart = context.chart;
          const { ctx, chartArea } = Chart;
          if (!chartArea) return;
          return getGradient(ctx, chartArea);
        },
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
      y: { beginAtZero: true },
    },
    plugins: {
      legend: { display: false },
    },
  },
});

/* Transactions */
const transactions = [
  {
    status: 1,
    name: "Emmauel Eze",
    image: "assets/flutterwave.jpg",
    email: "emmy@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$50",
  },
  {
    status: 2,
    name: "Steven",
    image: "assets/paystack.png",
    email: "steven@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "",
  },
  {
    status: 1,
    name: "Oluoma Patience",
    image: "assets/paypal.png",
    email: "oluoma@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$100",
  },
  {
    status: 0,
    name: "Daniel Kasi",
    image: "assets/profile.jpg",
    email: "daniel@gmail.com",
    date: new Date().toLocaleDateString(),
    amount: "$5",
  },
];

const shortenTextFormatter = (Text, maxLength) =>
  Text.length > maxLength ? "..." + text.slice(-maxLength) : text;

/* Output transactions*/
transactions.forEach((data) => {
  let status =
    data.status === 1 ? "success" : data.status === 0 ? "Failed" : "processing";
  document
    .querySelector(".transaction table tbody")
    .insertAdjacentElement("beforeend");
});

/* Switching theme */
const themeSwitch = document.getElementById("theme-switch");
const html = document.firstElementChild;
themeSwitch.onclick = () => {
  html.classList.toggle("dark");
};
