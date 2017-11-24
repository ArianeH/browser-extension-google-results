var listOfUrls = document.getElementsByClassName("_Rm");

for (var i = 0; i < listOfUrls.length; i++) {
  var searchResultInfo = listOfUrls[i].parentElement.parentElement.parentElement;
  var searchResultBlock = searchResultInfo.parentElement;
  var parentOfSearchResultBlock = searchResultBlock.parentElement;
  var linkToUrl = searchResultInfo.previousSibling.firstChild;

  var icon = document.createElement("img");
  icon.className = "fundraiser-icon";
  icon.src = "http://www.bellevuehighptsa.com/wp/wp-content/uploads/2016/03/icon_grant.png";

  parentOfSearchResultBlock.classList.add("removed-margin");
  searchResultInfo.classList.add("additional-margin");
  linkToUrl.classList.add("additional-margin");
  searchResultBlock.appendChild(icon);
}
