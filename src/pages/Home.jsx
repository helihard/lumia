function Home() {
  return (
    <main>
      <div>
        <input
          className="flex-sm-fill text-sm-center nav-link"
          type="text"
          id="search"
          placeholder="Type to search"
          data-change="search"
        ></input>

        <div className="lamps">
          <div className="product clearfix">
            <img
              src="https://www.trademax.se/assets/blobs/belysning-inomhusbelysning-lampor-bordslampa-cottex/1808702(1)-c355d4aec2.jpeg?preset=medium&dpr=2"
              alt="Bordslampa i guld"
            ></img>
            <div className="content">
              <h2>Bordslampa i guld</h2>
              <p>Mått Ø 55 cm, höjd 30 cm.</p>
              <button data-click="buy">Köp för 6900 kr</button>
            </div>
          </div>
          <div className="product clearfix">
            <img
              src="https://www.trademax.se/assets/blobs/belysning-inomhusbelysning-lampor-taklampa-pendellampor-hanglampor-kaptan/2270074(1)-523b50e44e.jpeg?preset=medium&dpr=2"
              alt="Vit taklampa"
            ></img>
            <div className="content">
              <h2>Vit taklampa</h2>
              <p>Mått Ø 25 cm, höjd 20 cm.</p>
              <button data-click="buy">Köp för 2500 kr</button>
            </div>
          </div>
          <div className="product clearfix">
            <img src="https://d2lhb5rbruih0q.cloudfront.net/eyJ2IjoxMTMsInQiOiJwcm9kdWN0IiwibiI6IjEwNTQ2Ni5qcGcifQ==/5778.jpg?q=85&amp;w=670&amp;h=447&amp;dpr=2"></img>
            <div className="content">
              <h2>Vit golvlampa</h2>
              <p>Mått Ø 15 cm, höjd 200 cm.</p>
              <button data-click="buy">Köp för 1780 kr</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
