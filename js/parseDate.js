function parseDate(dateStr){
  var dateIndex = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];

  var date = new Date(dateStr);

  return dateIndex[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}