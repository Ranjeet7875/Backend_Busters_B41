fetch('https://reebokclone-5f711-default-rtdb.firebaseio.com/kids_Cat.json')
    .then((res)=>res.json())
    .then((data)=>console.log(data))