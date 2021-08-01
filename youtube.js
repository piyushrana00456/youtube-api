//https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyB0p02cAvoI4tbyu_B6HGWvRBPNtp3pg4o
//AIzaSyDPsDognksNiA7UN5gcGgwYu-JXARsWl9s
//https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyB0p02cAvoI4tbyu_B6HGWvRBPNtp3pg4o&maxResults=20

let video_div=document.getElementById('videos');

async function findVideos(){

  video_div.innerHTML=null;
    
   let q=document.getElementById('query').value


  let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=AIzaSyB0p02cAvoI4tbyu_B6HGWvRBPNtp3pg4o&maxResults=12`)
 
  let data= await res.json();
  console.log("data:",data);

  
  let{items}=data; 
  items=items.filter((el)=>{
      return el.id.videoId!=undefined;
  })

  items.forEach(({id:{videoId}}) => {
    let div=document.createElement('div')
    div.innerHTML=`<iframe width="300" height="200" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    video_div.appendChild(div)
  });
}



async function popularVideo(){

  let res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyB0p02cAvoI4tbyu_B6HGWvRBPNtp3pg4o&maxResults=20`)
  let data=await res.json();
  console.log('data:',data);
 let{items}=data;
 items=items.filter((el)=>{
   return el.id!=undefined;
 })
 items.forEach(({id})=>{
  let div=document.createElement('div')
  div.innerHTML=`<iframe width="300" height="200" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

  video_div.appendChild(div)
 })
}

popularVideo()