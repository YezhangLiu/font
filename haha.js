function myFunction(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("demo").style.fontSize = listValue;
  }