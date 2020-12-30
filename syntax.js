let api = "https://aws.random.cat/meow";
let catPic;
function getApi() {
  return fetch(api).then((res) => res.json());
}

async function wannaSeeMyCat() {
  try {
    loadingDiv.innerHTML='<img src="https://i.gifer.com/XwIB.gif">'
    const data = await getApi();
    console.log(data);
    catPic = data.file;
    catBlock.innerHTML = `<img src="${catPic}"></img>`;
  } catch (err) {console.error(err)
}finally{
    title.innerText='Just kidding, who knows? here is a picture of a random cat.'
    loadingDiv.innerHTML=''
}
}

function interval(){
    wannaSeeMyCat()
    setInterval(()=>{wannaSeeMyCat()},3000)
}