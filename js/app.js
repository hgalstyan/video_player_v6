const video = document.getElementById('player');
const span = document.getElementsByTagName('span');
console.log(video);

video.addEventListener('timeupdate', function(){
	for(let i = 0; i < span.length; i++){
		let start = span[i].getAttribute('data-startTime');
		let end = span[i].getAttribute('data-endTime');
		let videoTime = video.currentTime;
		if(video >= start && video <=end) {
			span[i].classList.add('highlight');
		}else span[i].classList.remove('highlight');
	}
});
