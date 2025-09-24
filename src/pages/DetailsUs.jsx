export default function DetailsUs() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Il Caffè nel Mondo</h1>

      <section className="mb-5">
        <p>
          Il caffè è una delle bevande più amate e consumate al mondo, ma il suo
          gusto, aroma e intensità cambiano molto a seconda della{" "}
          <strong>regione di coltivazione</strong>, del{" "}
          <strong>tipo di pianta</strong> e della <strong>tostatura</strong>.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">🌱 Le Principali Varietà</h2>
        <h5>Arabica</h5>
        <p>
          È la varietà più diffusa e pregiata. Ha un gusto dolce, morbido e
          aromatico, con acidità più pronunciata e caffeina più bassa rispetto
          ad altre varietà (1-1,5%). È coltivata soprattutto in America Latina e
          in zone ad alta quota.
        </p>

        <h5>Robusta</h5>
        <p>
          Ha un gusto più forte, amaro e “terroso”, con maggiore corpo e
          caffeina più elevata (2-2,7%). È molto utilizzata negli{" "}
          <strong>espresso italiani</strong> per dare più crema e intensità.
          Cresce bene a basse altitudini e resiste di più a malattie e
          parassiti.
        </p>

        <h5>Liberica</h5>
        <p>
          Meno diffusa, dal gusto molto particolare: fruttato, legnoso e
          speziato. Contiene meno caffeina della Robusta ma più dell’Arabica. È
          coltivata soprattutto in Africa occidentale e in alcune zone del
          Sud-Est asiatico.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">🔥 Tipi di Tostatura</h2>
        <h5>Chiara (Light Roast)</h5>
        <p>
          Chicchi più chiari, gusto più delicato, alta acidità e aromi floreali
          o fruttati. Perfetta per chi vuole sentire le sfumature del singolo
          caffè.
        </p>

        <h5>Media (Medium Roast)</h5>
        <p>
          Equilibrio tra aroma, dolcezza e corpo. L’acidità è moderata e il
          gusto diventa più rotondo. È la tostatura più comune per chi cerca un
          caffè versatile.
        </p>

        <h5>Scura (Dark Roast)</h5>
        <p>
          Chicchi quasi neri, gusto intenso e amaro, con note di cioccolato e
          caramello. L’acidità è quasi assente. È la tipica tostatura usata per
          espresso dal gusto deciso.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">☕ Intensità del Caffè</h2>
        <p>
          L’<strong>intensità</strong> è un valore indicativo (spesso da 1 a 10)
          che combina:
        </p>
        <ul>
          <li>Corpo (quanto il caffè è “pieno” e denso in bocca)</li>
          <li>Aroma (forza degli aromi percepiti)</li>
          <li>
            Amarezza e persistenza (quanto il sapore rimane dopo il sorso)
          </li>
        </ul>
        <p>
          <strong>Attenzione:</strong> l’intensità non indica quanta caffeina è
          presente! Un caffè può essere molto intenso ma avere poca caffeina
          (es. un 100% Arabica scuro).
        </p>
      </section>

      {/* <section className="mb-5">
        <h2 className="mb-3">💊 Contenuto di Caffeina</h2>
        <p>
          La <strong>caffeina</strong> si calcola di solito in{" "}
          <strong>mg per 100 g di caffè tostato</strong> o per tazza. Il
          contenuto dipende da:
        </p>
        <ul>
          <li>
            Tipo di pianta (Robusta ≈ doppia caffeina rispetto ad Arabica)
          </li>
          <li>
            Metodo di estrazione (espresso concentra più caffeina rispetto a
            moka o filtro)
          </li>
          <li>Quantità di caffè usato per tazza</li>
        </ul>

        <p>Ecco i valori medi di caffeina per varietà:</p>
        <ul>
          <li>
            <strong>Arabica</strong>: 1,0 – 1,5%
          </li>
          <li>
            <strong>Robusta</strong>: 2,0 – 2,7%
          </li>
          <li>
            <strong>Liberica</strong>: 1,2 – 1,5%
          </li>
        </ul>
      </section> */}
    </div>
  );
}
