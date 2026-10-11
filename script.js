const items = [
  ["Newspaper", "paper"], ["Cereal box", "paper"], ["Exercise book", "paper"],
  ["Water bottle (plastic)", "plastic"], ["Soda can", "plastic"], ["Yoghurt cup", "plastic"],
  ["Glass jar", "glass"], ["Juice bottle (glass)", "glass"],
  ["Banana peel", "trash"], ["Used tissue", "trash"], ["Chip packet", "trash"]
];

const binNames = {
  paper: "Paper",
  plastic: "Plastic & metal",
  glass: "Glass",
  trash: "General waste"
};

let current = null;
let right = 0;
let total = 0;

const $ = id => document.getElementById(id);

function nextItem() {
  let n;
  do {
    n = items[Math.floor(Math.random() * items.length)];
  } while (n === current);
  current = n;
  $("item").textContent = n[0];
}

document.querySelectorAll(".bin").forEach(button => {
  button.addEventListener("click", () => {
    total++;
    if (button.dataset.bin === current[1]) {
      right++;
      $("msg").textContent = "Correct!";
    } else {
      $("msg").textContent = "Not quite. " + current[0] + " goes in: " + binNames[current[1]] + ".";
    }
    $("score").textContent = "Score: " + right + " / " + total;
    nextItem();
  });
});

nextItem();