export default function Home() {
  return (
    <section className="HomePage-content">
      <div>
        <h1 className="Home-title">Bienvenue,<br/> je suis <span className="name-title">Sauvinet Lucas</span></h1>
        <p className="Home-description">
          Je suis alternant en BTS SIO.<br/>J’étudie a Cifep et je travail a Thomyris<br/> chambery
        </p>
        <div className="Home-role"><strong>&lt;/&gt;</strong> Developpeur Full stack Alternant</div>
      </div>
      <div className="Home-image">
        <img className="Home-picture" src="/profile-picture.jpeg"/>
      </div>
    </section>
  );
}
