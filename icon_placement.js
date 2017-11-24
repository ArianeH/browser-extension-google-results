var listOfUrls = document.getElementsByClassName("_Rm");

for (var i = 0; i < listOfUrls.length; i++) {
  var searchResultBlock = listOfUrls[i].parentElement.parentElement.parentElement.parentElement;

  var icon = document.createElement("img");
  icon.className = "fundraiser-icon";
  icon.src = "http://www.bellevuehighptsa.com/wp/wp-content/uploads/2016/03/icon_grant.png";

  searchResultBlock.appendChild(icon);
}
