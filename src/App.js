import './App.css';

function App() {
  const wishList = [
    {name: "Tripode flexible para camara", image: "https://m.media-amazon.com/images/I/71PG4wrSMrL._AC_SX569_.jpg", class:"Fotografia", owned: false},
    {name: "Keychron k4", image: "https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K4-version2-hot-swappable-wireless-mechanical-keyboard-96percent-layout-for-Mac-Windows-iOS-Gateron-switch-blue-with-type-C-RGB-white-backlight-aluminum-frame_44ed9c5f-0614-40a7-885b-e3baeff412e2_1800x1800.jpg?v=1644399874", class:"Trabajo", owned: false},
    {name: "Funda Silicona para A7III", image: "https://m.media-amazon.com/images/I/716tfBHuQcL._AC_SX679_.jpg", class:"Fotografia", owned: false},
    {name: "Soporte articulado microfono", image: "https://m.media-amazon.com/images/I/61YnaxAjIWL._AC_SL1500_.jpg", class:"Audio", owned: false},
    {name: "Cable XLR", image: "https://m.media-amazon.com/images/I/71d8ALVvC1S._AC_SX522_.jpg", class:"Audio", owned: false},
    {name: "Mochila fotografia", image: "https://m.media-amazon.com/images/I/71L0ybfNIEL._AC_SL1000_.jpg", class:"Fotografia", owned: false},
    {name: "MacBook Air M2 (2022) Midnight", image: "https://img.pccomponentes.com/articles/1039/10392472/3148-apple-macbook-air-apple-m2-8gb-256gb-ssd-gpu-octa-core-136-midnight-mejor-precio.jpg", class:"Trabajo", owned: false},
    {name: "Sony A6300", image: "https://m.media-amazon.com/images/I/71ieGbb-MOL._AC_SL1500_.jpg", class:"Fotografia", owned: false},
    {name: "De Missisipi a Madrid", image: "https://m.media-amazon.com/images/I/41uU85OBDIL.jpg", class:"Libro", owned: false},
    {name: "Tarjeta SD (>150MB/s)", image: "https://m.media-amazon.com/images/I/71xOzoeO3-L._AC_AA180_.jpg", class:"Fotografia", owned: false},
    {name: "Discos olimpicos de 2,5", image: "https://maniakfitness.com/media/images/142-Discos-de-metal-calibrados-para-Powerlifting-PWR-Set-de-2-2-5-kilos-v6362a35f17f45.jpg", class:"Gym", owned: false},
    {name: "Funda protectora de objetivo", image: "https://m.media-amazon.com/images/I/71gpQJya-BL._AC_SL1500_.jpg", class:"Fotografia", owned: false},
    {name: "Manta akatsuki", image: "https://ae01.alicdn.com/kf/Sc10167f087ac47488eeacb832b62b7a6l/Akatsuki-Juego-de-ropa-de-cama-con-Logo-de-nube-roja-juego-de-fundas-de-edred.jpg_Q90.jpg_.webp", class:"Casa", owned: false},
    {name: "Pastilla SH-4 Gold", image: "https://bdbo2.thomann.de/thumb/bdb3000/pics/bdbo/10366257.jpg", class:"Musica", owned: false},
    {name: "Seymour Duncan SH2N-4C GC", image: "https://bdbo1.thomann.de/thumb/bdb3000/pics/bdbo/12609581.jpg", class:"Musica", owned: false},


    

  ]
  return (
    <div className="App">
     {wishList.map(w => {
      return(<div className='card'>
        {w.owned === true ? 
        <div className='header'> 
          <div className='circle_red'></div>
          <div className='title_owned'>{w.name}</div>
        </div> :  
        <div className='header'> 
          <div className='circle_green'></div>
          <div className='title'>{w.name}</div>
        </div>}
      <div className='category'>{w.class}</div>
      <img src={w.image} className="image" alt=""/>
      
    
      </div>)
     })}
    </div>
  );
}

export default App;
