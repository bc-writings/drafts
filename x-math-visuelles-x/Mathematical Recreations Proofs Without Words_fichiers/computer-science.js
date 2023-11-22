// BEGIN Needed for Research Papers article
function show(targetID) {
  target = document.getElementById(targetID);
  if (target.style.display == "none")
       { target.style.display = ""; }
}
function hide(targetID) {
  target = document.getElementById(targetID);
  target.style.display = "none";
}
function toggle(targetID) {
  target = document.getElementById(targetID);
  if (target.style.display == "none")
       { target.style.display = ""; }
  else { target.style.display = "none"; }
}
// END Needed for Research Papers article
