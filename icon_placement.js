window.onload = function getUrls(){
  var listOfUrls = document.getElementsByClassName("_Rm");

  for (var i = 0; i < listOfUrls.length; i++) {
    var searchResultInfo = listOfUrls[i].parentElement.parentElement.parentElement;
    var searchResultBlock = searchResultInfo.parentElement;
    var wrapperOfSearchResultBlock = searchResultBlock.parentElement;
    var linkToUrl = searchResultInfo.previousSibling.firstChild;
    var urlText = listOfUrls[i].innerHTML;

    var icon = document.createElement("img");
    icon.className = "fundraiser-icon";
    icon.src = "http://www.bellevuehighptsa.com/wp/wp-content/uploads/2016/03/icon_grant.png";
    addIconForFundraisers();
  }

  function addIconForFundraisers() {
    if ((/www.goertz.de/.test(urlText)) || (/www.schuhcenter.de/.test(urlText))) {
      wrapperOfSearchResultBlock.classList.add("removed-margin");
      searchResultInfo.classList.add("additional-margin");
      linkToUrl.classList.add("additional-margin");
      searchResultBlock.appendChild(icon);
    }
  }
}
