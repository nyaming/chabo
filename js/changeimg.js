function changeImg(idImage,imageName,idName,name) {
    document.getElementById(idImage).src = "../images/whatischabo/variation_" + imageName + ".png";
    document.getElementById(idName).innerHTML = name;
  }