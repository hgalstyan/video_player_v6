const video = document.getElementById('player');
const span = document.getElementById('capture').getElementsByTagName('span');

video.addEventListener('timeupdate', function(){
	for(let i = 0; i < span.length; i++){
		let start = span[i].getAttribute('data-startTime');
		let end = span[i].getAttribute('data-endTime');
		let videoTime = video.currentTime;
		console.log(start, end, videoTime, span[i]);
		if(videoTime >= start && videoTime <= end) {
			span[i].classList.add('highlight');
		}else span[i].classList.remove('highlight');
	}
});

for (let i = 0; i < span.length; i++) {
  span[i].addEventListener('click', function (event) {
    video.currentTime = event.target.getAttribute("data-startTime");
    video.play();
    if( !event ) event = window.event;

  });
  span[i].addEventListener('mouseover', function () {
    span[i].classList.add("mouseover");
  });
  span[i].addEventListener('mouseout', function () {
    span[i].classList.remove("mouseover");
  });
}
