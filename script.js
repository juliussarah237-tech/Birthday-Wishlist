function copyAcc(){
navigator.clipboard.writeText(document.getElementById("acc").innerText);
alert("Copied");
}

const bars = document.querySelectorAll(".progress-bar");

window.onload = () => {
bars.forEach(b=>{
b.style.width = b.dataset.progress + "%";
});
};

const supportersData = [
{name:"Sarah James", item:"MacBook Support"},
{name:"John Doe", item:"iPhone Support"}
];

const container = document.getElementById("supporters");

supportersData.forEach(s=>{
container.innerHTML += `
<div class="card">
<h3>${s.name}</h3>
<p>${s.item}</p>
</div>`;
});