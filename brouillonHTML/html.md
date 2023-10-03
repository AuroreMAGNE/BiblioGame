<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BiblioGame</title>
  <link rel="stylesheet" href="styles.css">
</head>
  <header>
      <h1>BiblioGame</h1>
          <div>
            <nav>
              <ul>
                <li className="deroulant">
                    <a href="#">Tous</a>
                      <ul className="sous">
                          <li>
                              <a href="#">de 0 à 3 ans</a>
                          </li>
                          <li>
                              <a href="#">de 3 à 6 ans</a>
                          </li>
                          <li>
                              <a href="#">de 6 à 10 ans</a>
                          </li>
                          <li>
                              <a href="#">au-delà de 10 ans</a>
                          </li>
                      </ul>
                </li>
                <li>
                    <a href="#">Carte</a>
                    <Subfolder />
                </li>
                <li>
                    <a href="#">Stratégie</a>
                    <Subfolder />
                </li>
                <li>
                    <a href="#">Lettre</a>
                    <Subfolder />
                </li>
                <li>
                    <a href="#">Hasard</a>
                    <Subfolder />
                </li>
                <li>
                    <a href="#">Adresse</a>
                    <Subfolder />
                </li>
                <li>
                    <a href="#">Coopératif</a>
                    <Subfolder />
                </li>
                <li>
                    <a href="#">Ambiance</a>
                    <Subfolder />
                </li>
            </ul>
        </nav>
      </div>
  </header>
<body>
  <div id="mainContent"></div> 
  <div>
        <img src="../../images/jeu 1.jpg" />
        <title>Jeu de société</title>
        <p>Marque</p>
    </div>

  <noscript>
      Javascript est nécessaire pour consulter ce site.
  </noscript>

  <script type="module" src="/index.js"></script>
</body>
</html>
