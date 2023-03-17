let data1 = [
  ["Range", "390 miles"],
  ["Acceralation", "1.99sec 0-60mph"],
  ["Top Speed", "200mph"],
  ["Peak Power", "1,020hp"],
  ["Weight", "4766 lbs"],
  ["Powertrain", "Tri Motor"],
  ["Charging Capacity", "250 kW"],
  ["Ground Clearence", "116mm"],
];

let data2 = [
  ["Range", "412 miles"],
  ["Acceralation", "3.1sec 0-60mph"],
  ["Top Speed", "155mph"],
  ["Peak Power", "670 hp"],
  ["Weight", "4,561 lbs"],
  ["Powertrain", "Dual Motor"],
  ["Charging Capacity", "250 kW"],
  ["Ground Clearence", "116mm"],
];

function divTemplate(dataName, dataValue) {
  return `
  <div class="data-card">
    <h4>${dataName}</h4>
    <p>${dataValue}</p>
  </div>`;
}

let GenerateData1 = "";
let GenerateData2 = "";

for (let i = 0; i < data1.length; i++) {
  const pieceOfData = data1[i];
  let x = divTemplate(pieceOfData[0], pieceOfData[1]);
  GenerateData1 += x;
}

for (let i = 0; i < data2.length; i++) {
  const pieceOfData = data2[i];
  let x = divTemplate(pieceOfData[0], pieceOfData[1]);
  GenerateData2 += x;
}

//console.log(GenerateData);
let plaidBtn = document.getElementById("radio-one");
let longRanBtn = document.getElementById("radio-two");
let DataDiv = document.getElementById("data-table");

plaidBtn.onclick = () => {
  DataDiv.innerHTML = GenerateData1;
};
longRanBtn.onclick = () => {
  DataDiv.innerHTML = GenerateData2;
};

plaidBtn.click();

//range
//acceralation
//top speed
//peak power
//wheels
//power-train
//weight
//super-charging max


function switchEDIT(evt, tabName) {
  var i, editors, switcher;
  editors = document.getElementsByClassName("editors");
  for (i = 0; i < editors.length; i++) {
    editors[i].style.display = "none";
  }
  switcher = document.getElementsByClassName("switcher");
  for (i = 0; i < switcher.length; i++) {
    switcher[i].className = switcher[i].className.replace(" now", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " now";
}