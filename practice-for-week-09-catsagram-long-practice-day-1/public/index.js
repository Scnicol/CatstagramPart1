window.onload = () => {

    const h1 = document.createElement('h1');
    h1.innerText = 'Kitten Pic'
    //console.log(h1)

    const body = document.getElementsByTagName('body')[0];
    body.appendChild(h1);

    const getKitten = async () => {
        const img = document.createElement('img');

        const res = await fetch('https://api.thecatapi.com/v1/images/search');
        //console.log(res);
        const data = await res.json()

        img.src = data[0].url;
        //console.log(data);

        body.appendChild(img);
    }
    getKitten();
}

