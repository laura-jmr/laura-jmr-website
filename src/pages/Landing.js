import './Landing.css'

function Landing() {
  const lauraImagePath = `${process.env.PUBLIC_URL}/assets/laura.png`;

  return (
    <div id='page-landing' className="page">
      <h1 class="page-h1">Laura Jürgensmeier</h1>
      <img src={lauraImagePath} alt="Laura" id="landing-laura-image"/>
    </div>
  );
}

export default Landing;
