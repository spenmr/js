function mutation(arr) {
  var lArr = arr[0].toLowerCase().split('');
  var lArr2 = arr[1].toLowerCase().split('');
  
  for (var i = 0; i < lArr2.length; i++)  {
    if(lArr.indexOf(lArr2[i]) == -1)  {
      return false;
    }
  }
  return true;
}

mutation(['alien', 'line']);

mutation(["hello", "hey"]);