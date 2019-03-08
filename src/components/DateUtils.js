 export function IsDateValid(date){
  var timestamp = Date.parse(date);
  return !isNaN(timestamp)
}

export function CalculateDateDiff(dateFrom, dateTo){
  if(dateFrom === "" && dateTo === ""){
    return "";
  }
  var isValideDates = IsDateValid(dateFrom) && IsDateValid(dateTo);
  var result;
  if(isValideDates){
    
    var timeDiff = Math.abs(new Date(dateFrom).getTime() - new Date(dateTo).getTime());
    result = 'La différence entre les deux date est : ' + Math.ceil(timeDiff / (1000 * 3600 * 24)) + ' jours'; 
  }
  else {
    result = 'Merci de saisir des dates valides';
  }

  return result;
}
