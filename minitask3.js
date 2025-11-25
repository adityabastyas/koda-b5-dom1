const h1 = document.createElement("h1");
h1.textContent = "Form Survey Perokok";

let br1 = document.createElement("br");
let br2 = document.createElement("br");
let br3 = document.createElement("br");
let br4 = document.createElement("br");
let br5 = document.createElement("br");
let br6 = document.createElement("br");
let br7 = document.createElement("br");

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");
const div9 = document.createElement("div");

const form = document.createElement("form");
const labelNama = document.createElement("label");
labelNama.setAttribute("for", "nama");
labelNama.textContent = "Nama ";
const inputText = document.createElement("input");
inputText.type = "text";
inputText.id = "nama";
inputText.placeholder = "Masukkan Nama";
inputText.required = true;

const labelUmur = document.createElement("label");
labelUmur.setAttribute("for", "umur");
labelUmur.textContent = "Umur ";
const inputNumber = document.createElement("input");
inputNumber.type = "number";
inputNumber.name = "umur";
inputNumber.id = "umur";
inputNumber.required = true;

const jenisKelamin = document.createElement("p");
jenisKelamin.textContent = "Jenis Kelamin";

const inputRadioLk = document.createElement("input");

const isiRlaki = {
  type: "radio",
  name: "gender",
  id: "lk",
};

Object.entries(isiRlaki).forEach(([key, value]) => {
  inputRadioLk.setAttribute(key, value);
});

const labelLk = document.createElement("label");
labelLk.setAttribute("for", "lk");
labelLk.textContent = "L";

div2.append(inputRadioLk, labelLk);

const inputRadioPr = document.createElement("input");

const isiRprempuan = {
  type: "radio",
  name: "gender",
  id: "pr",
};

Object.entries(isiRprempuan).forEach(([key, value]) => {
  inputRadioPr.setAttribute(key, value);
});

const labelPr = document.createElement("label");
labelPr.setAttribute("for", "pr");
labelPr.textContent = "P";

div3.append(inputRadioPr, labelPr);

const labelSmoke = document.createElement("label");
labelSmoke.setAttribute("for", "perokok");
labelSmoke.textContent = "Apakah anda seorang perokok?";

const select = document.createElement("select");
select.setAttribute("name", "perokok");
select.id = "perokok";

const optionDisabled = document.createElement("option");
optionDisabled.disabled = true;
optionDisabled.selected = true;
optionDisabled.textContent = "Pilih Jawaban";

const optionYa = document.createElement("option");
optionYa.value = "ya";
optionYa.textContent = "Ya";

const optionTidak = document.createElement("option");
optionTidak.value = "tidak";
optionTidak.textContent = "Tidak";

select.append(optionDisabled, optionYa, optionTidak);

const labelBrand = document.createElement("label");
labelBrand.textContent = "Brand rokok yang digunakan";

const inputCheckM = document.createElement("input");

const valueInputCheck = {
  type: "checkbox",
  name: "malboro",
  id: "malboro",
};

Object.entries(valueInputCheck).forEach(([key, value]) => {
  inputCheckM.setAttribute(key, value);
});

const labelMalboro = document.createElement("label");
labelMalboro.htmlFor = "malboro";
labelMalboro.textContent = "Malboro";

div5.appendChild(inputCheckM);
div5.appendChild(labelMalboro);

const inputCheckS = document.createElement("input");

const valueInputCheckS = {
  type: "checkbox",
  name: "sampoernaMild",
  id: "sampoernaMild",
};

Object.entries(valueInputCheckS).forEach(([key, value]) => {
  inputCheckS.setAttribute(key, value);
});

div6.appendChild(inputCheckS);

const labelSampoerna = document.createElement("label");
labelSampoerna.htmlFor = "sampoernaMild";
labelSampoerna.textContent = "Sampoerna Mild";

div6.appendChild(labelSampoerna);

const inputCheckG = document.createElement("input");

const valueInputCheckG = {
  type: "checkbox",
  name: "gudangGaram",
  id: "gudangGaram",
};

Object.entries(valueInputCheckG).forEach(([key, value]) => {
  inputCheckG.setAttribute(key, value);
});

div7.appendChild(inputCheckG);

const labelGudang = document.createElement("label");
labelGudang.htmlFor = "gudangGaram";
labelGudang.textContent = "Gudang Garam";

div7.appendChild(labelGudang);
div6.appendChild(labelSampoerna);

const inputCheckJ = document.createElement("input");

const valueInputCheckJ = {
  type: "checkbox",
  name: "jarumSuper",
  id: "jarumSuper",
};

Object.entries(valueInputCheckJ).forEach(([key, value]) => {
  inputCheckJ.setAttribute(key, value);
});

div8.appendChild(inputCheckJ);

const labelJarum = document.createElement("label");
labelJarum.htmlFor = "jarumSuper";
labelJarum.textContent = "jarum Super";

div8.appendChild(labelJarum);
div6.appendChild(labelSampoerna);

const inputCheckW = document.createElement("input");

const valueInputCheckW = {
  type: "checkbox",
  name: "wismilak",
  id: "wismilak",
};

Object.entries(valueInputCheckW).forEach(([key, value]) => {
  inputCheckW.setAttribute(key, value);
});

div9.appendChild(inputCheckW);

const labelWismilak = document.createElement("label");
labelWismilak.htmlFor = "wismilak";
labelWismilak.textContent = "Wismilak";

div9.appendChild(labelWismilak);

const inputSubmit = document.createElement("input");
inputSubmit.type = "submit";
inputSubmit.value = "submit";

form.appendChild(labelNama);
form.appendChild(inputText);
form.appendChild(br1);
form.appendChild(labelUmur);
form.appendChild(inputNumber);
form.appendChild(br2);
form.appendChild(jenisKelamin);
form.appendChild(div2);
form.appendChild(div3);
form.appendChild(br3);
form.appendChild(labelSmoke);
form.appendChild(select);
form.appendChild(br4);
form.appendChild(br5);
form.appendChild(labelBrand);
form.appendChild(div5);
form.appendChild(div6);
form.appendChild(div7);
form.appendChild(div8);
form.appendChild(div9);
form.appendChild(br6);
form.appendChild(br7);
form.appendChild(inputSubmit);

div1.appendChild(form);

document.body.appendChild(h1);
document.body.appendChild(div1);
