function calculateTimeSince(num){
  const currentTime = Math.floor(Date.now()/1000);
  const timestamp = parseInt(num);
  const timeSince = currentTime - timestamp;

  var timeAgo;
  var timeTag;
  var minute = 60;
  var hour = 3600;
  var day = 86400;
  var week = 604800;
  var month = 2.628e+6;
  var year = 3.154e+7;

  if (timeSince < minute ) {
    timeAgo = 1;
    timeTag = timeAgo < 2 ? 'MIN' : 'MINS';
  } else if (timeSince > minute && timeSince < hour ) {
    timeAgo = Math.ceil(timeSince / minute);
    timeTag = timeAgo < 2 ? 'MIN' : 'MINS';
  } else if (timeSince > hour && timeSince < day ) {
    timeAgo = Math.floor(timeSince / hour);
    timeTag = timeAgo < 2 ? 'HR' : 'HRS';
  } else if (timeSince > day && timeSince < week) {
    timeAgo = Math.floor(timeSince / day);
    timeTag = timeAgo < 2 ? 'DAY' : 'DAYS';
  } else if (timeSince > week && timeSince < month) {
    timeAgo = Math.floor(timeSince / week);
    timeTag = timeAgo < 2 ? 'WK' : 'WKS';
  } else if (timeSince > month && timeSince < year) {
    timeAgo = Math.floor(timeSince / month);
    timeTag = timeAgo < 2 ? 'MONTH' : 'MONTHS';
  } else if (timeSince > year) {
    timeAgo = Math.floor(timeSince / year);
    timeTag = timeAgo < 2 ? 'YR' : 'YRS';
  }

  return `${timeAgo}&nbsp;${timeTag} AGO`;
}

function populateCommentsTime(nodes) {
  if (nodes) {
    nodes.forEach(function(node) {
      let durationTime = node.dataset.time;
      let durationSeconds = Math.ceil(Date.parse(durationTime) / 1000) ;
      let durationSince = calculateTimeSince(durationSeconds);
      node.innerHTML = `${durationSince}`;
    });
  }
}

const durations = document.querySelectorAll('.comment_heading');

populateCommentsTime(durations);
