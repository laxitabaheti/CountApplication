
const TOTALBID = 10;
let bidCount = 0;

var incVoteCount = (event) => {
  let parentEle = document.querySelector(`#${event.target.id}`);
  if (parentEle.onclick){
    let ele = document.querySelector(`#${event.target.id}ClickCount`);
    ele.innerHTML = Number(ele.innerHTML) + 1;
    parentEle.onclick = null;
  }
};

var incBidCount = (event) => {
   let ele = document.querySelector(`#${event.target.id}ClickCount`);
   if (bidCount < TOTALBID){
    ele.innerHTML = Number(ele.innerHTML) + 1;
    bidCount += 1;
   }
};

document.getElementById("firstPic").onclick = incVoteCount;
document.getElementById("secondPic").onclick = incVoteCount;
document.getElementById("thirdPic").onclick = incVoteCount;
document.getElementById("fourthPic").onclick = incVoteCount;
document.getElementById("fifthPic").onclick = incVoteCount;
document.getElementById("sixthPic").onclick = incVoteCount;
