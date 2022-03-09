
const str="dcode";
const base64=btoa(str);
const decoded=atob(base64);

console.log("Original " +str);
console.log("Base64 " + base64);
console.log("Decode "+ decoded);