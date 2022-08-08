//youtube API 불러오는 부분
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//플레이어 변수 설정
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
    //width&height를 설정할 수 있으나, 따로 css영역으로 뺐다.
    videoId: 'PXh-skxWEKY', //최초 재생할 유투브 영상 ID
    playerVars:{
        autoplay:true, //자동재생 
        loop:true, //반복재생
        playlist:'PXh-skxWEKY' //반복재생할 유투브 ID
    },
     events:{
        onReady:function(event){
            event.target.mute() //음소거

        }
    } 

  });
}