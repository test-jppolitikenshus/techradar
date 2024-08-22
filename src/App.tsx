import { useState } from 'react';
import Techradar, { TechradarData } from '../lib/main'
import idp from './techradarIdp';
import feat from './techradarFeat';
import ops from './techradarInf';
import dut from './techradarDut';

function App() {
  const [example, setExample] = useState<TechradarData>(idp);

  return (
    <>
      <div style={{ paddingLeft: "20px" }}>
        <i className="fa-brands fa-facebook"></i>
        <div style={{ paddingBottom: "10px" }}>
          <h2 style={{ fontFamily: "Arial, Helvetica", fontSize: "20px", fontWeight: "bold", marginBottom: "0px" }}>Vælg en radar:</h2>
          <button style={{ margin: "5px", marginLeft: "0px" }} onClick={() => setExample(idp)}>IDP</button>
          <button style={{ margin: "5px" }} onClick={() => setExample(feat)}>Produkt Teams</button>
          <button style={{ margin: "5px" }} onClick={() => setExample(ops)}>Operations</button>
          <button style={{ margin: "5px" }} onClick={() => setExample(dut)}>Samlet DUT radar</button>
        </div>

        <h1 style={{ fontFamily: "Arial, Helvetica", fontSize: "30px", fontWeight: "bold", marginBottom: "0px" }}>Techradar</h1>
        {example.id &&
          <p style={{ fontFamily: "Arial, Helvetica", fontSize: "14px", color: "rgb(153, 153, 153)", marginTop: "0px", marginLeft: "5px" }}>{example.id}</p>
        }
      </div>
      <div style={{ width: "100%", paddingBottom: "10px", paddingLeft: "20px" }}>
        <Techradar data={example} options={{ radarSize: 600, colorScheme: 'white' }} />
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <h3 style={{ fontFamily: "Geneva, Arial, Helvetica, sans-serif", fontSize: "16px" }}>Hvad er en techradar?</h3>
              <p style={{ fontFamily: "Geneva, Arial, Helvetica, sans-serif", fontSize: "14px" }}>
                En techradar er en oversigt over teknologier, suppleret med en status, og grupperet i relevante <em>kategorier</em> for hvert område. Ovenfor kan der vælges en radar der forholder sig til henholdvsis Platform Teams, Produkt Teams eller Operations Teams teknologier. Der anvendes følgende områder:
              </p>

              <ul style={{ fontFamily: "Geneva, Arial, Helvetica, sans-serif", fontSize: "14px" }} >
                <li><strong>ADOPT</strong> &mdash; Teknologier, som vi understøtter og supporterer, og har stor tillid til opfylder vores formål, også i stor skala. Teknologier med en anvendelseskultur i vores produktionsmiljø, lav risiko og som anbefales til bred anvendelse.</li>
                <li><strong>TRIAL</strong> &mdash; Teknologier, som vi har set fungere med succes i projektarbejde til at løse et reelt problem; spæde anvendelseserfaringer, der bekræfter fordele og kan afdække begrænsninger. TRIAL-teknologier er lidt mere risikable; nogle udviklere i vores organisation har afprøvet disse teknologier og vil dele viden og erfaringer. </li>
                <li><strong>ASSESS</strong> &mdash; Teknologier, der er lovende og har klart potentiale til at tilføre værdi for os; teknologier, det er værd at investere analyse og prototyping i for at se, om de har en effekt. ASSESS-teknologier har højere risici; de er ofte helt nye og meget uprøvede i vores organisation. Der vil findes nogle udviklere, der har viden om teknologien og promoverer den, og du kan endda finde teams, der har startet en prototypeindsats. </li>
                <li><strong>HOLD</strong> &mdash; Teknologier, der ikke anbefales til brug i nye projekter. Teknologier, som vi ikke mener er værd at investere yderligere i. HOLD-teknologier bør ikke anvendes i nye projekter, men kan normalt fortsættes i eksisterende projekter.</li>
              </ul>

            </td><td>

              <h3 style={{ fontFamily: "Geneva, Arial, Helvetica, sans-serif", fontSize: "16px" }}>Hvad er formålet ?</h3>

              <p style={{ fontFamily: "Geneva, Arial, Helvetica, sans-serif", fontSize: "14px" }}>
                En techradar er et værktøj til at inspirere og støtte digitale produktteams i at vælge de bedste teknologier til nye projekter. Det giver en platform til at dele viden og erfaringer om teknologier, reflektere over teknologibeslutninger og kontinuerligt udvikle vores teknologilandskab. Baseret på <a href="https://opensource.zalando.com/tech-radar/#">Zalando's tech-radar</a>, opstiller denne techradar ændringer i teknologier, der er interessante inden for softwareudvikling &mdash; ændringer, som vi mener, vores produktteams bør være opmærksomme på og bruge i deres projekter.</p>

              <h3 style={{ fontFamily: "Geneva, Arial, Helvetica, sans-serif", fontSize: "16px" }}>Hvem opdaterer den ?</h3>

              <p style={{ fontFamily: "Geneva, Arial, Helvetica, sans-serif", fontSize: "14px" }}>
                Vores teknologiske radarskærme vedligeholdes af vores <em>Arkitekt Team</em> &mdash; som faciliterer og driver diskussionerne om teknologivalg på tværs af vores produkt og platform teams. Tildelingen af teknologier til ringe er resultatet af forslag til ændringer, der diskuteres og stemmes om. Techradar er åben for bidrag fra alle produkt- og platformteams hos JP/Politikens Hus og afhænger af deres aktive deltagelse for at dele erfaringer, faldgruber og bidrage til gode praksisser for brugen af teknologierne.
              </p>
            </td></tr>
        </tbody>
      </table >
    </>
  )
}

export default App
