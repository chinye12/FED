# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Chinyere Onyebuchi (vervangen door jouw naam)

  #### Je startniveau:
  blauw (kies uit zwart, rood óf blauw)

  #### Je focus:
  responsive (kies uit responsive óf surface plane)
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  link naar de website die je gaat namaken óf de naam/omschrijving van je eigen ontwerp
  https://www.aceandtate.com/nl

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  Ace & Tate Oogmeting in de winkel
  <img src="readme-images/aceandtate_oogmeting_pagina.png" width="375px" alt="Introductie oogmeting met video.">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina Ace & Tate Ons verhaal 
  <img src="readme-images/aceandtate_verhaal_pagina.png" width="375px" alt="Introductie tekst van ons verhaal.">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
1. Er zijn een paar foutmeldingen op de pagina's. 
2. Het lijkt erop dat je niet met toetsen door de pagina's kun navigeren, alleen scrollen.
3. Er wordt niet overal gebruik gemaakt van headings.
4. Veel afbeeldingen bevatten alternatieve tekst die niet beschrijvend genoeg is. 
5. Video's kunnen niet gepauzeerd worden, er wordt gebruik gemaakt van autoplay.
6. Het lijkt erop dat het niet mogelijk is om links te skippen.
7. Er is geen dark of light mode.
8. Het lijkt erop dat je tekst niet kunt vergroten, je alleen inzoomen op de pagina.
9. Contrast?
</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/FED_breakdownsketch.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/FED_breakdownsketch_kopie.jpg" width="375px" alt="breakdown van een dynamisch deel">


</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

Goed
1. Wat over het algemeen goed ging was het schrijven van de HTML voor beide pagina's. Doordat ik een breakdownsketch had gemaakt kon ik gelijk aan de slag zonder al te veel na te denken. Hier heb ik een paar kleine dingen toegevoegd of aangepast maar voor de rest klopte de basis structuur naar mijn gevoel al. 

2. Wat verder nog goed ging was het toepassen van de 'details and summary' tags binnen mijn HTML voor de oogmeting pagina. Hier was ik eerst niet bekend mee maar door de tip van Ivo heb ik op MDN hier informatie over gevonden en was het ook heel makkelijk om toe te passen. Wat ik ook heel fijn vind is dat je gelijk kunt zien dat het werkt. 
<img src="readme-images/v1_uitklapsectie_website.png" width="375px" alt="Frequently asked questioned uitklap weergave">

Lastig
1. Wat ik lastig vond was het opslaan van afbeeldingen. Op mijn website waren er een aantal afbeelding die ik niet door op de rechtermuisknop te drukken kon opslaan. Door te inspecteren ben ik uiteindelijk wel achter de bron gekomen. Soms merk ik dat dit nog wel lastig kan zijn omdat het soms wat zoekwerk kan vereisen door de hoeveelheid code. Daarbij werkt het ook niet voor alle afbeeldingen. Voor een aantal iconen in de header en footer kan ik bijvoorbeeld geen image tag vinden waardoor ik deze niet kan opslaan. Op de afbeeldingen is het verschil te zien. Dit is dan ook iets wat ik wil bespreken. 
<img src="readme-images/v1_imgfound.png" width="375px" alt="Link gevonden van de afbeelding bij het inspecteren van de Ace and tate website">
<img src="readme-images/v1_imgnotfound.png" width="375px" alt="Link komt niet tevoorschijn van de afbeelding bij het inspecteren van de Ace and tate website">

2. Verder twijfel ik over hoe ik de HTML voor de header ga moeten schrijven. Nou denk ik daarvoor dat ik weer gebruik zal moeten van maken 'details and summary' maar doordat het mij niet lukte om de iconen op te slaan heb ik dit niet goed kunnen testen. Ik heb het nu voor een klein stuk getest met een andere afbeelding wat op de afbeelding te zien is, alleen twijfel ik of dat klopt. 
<img src="readme-images/v1_codeheader.png" width="375px" alt="Code van het uitklapgedeelte van de header">
<img src="readme-images/v1_header_website.png" width="375px" alt="Website weergave waarbij het woord brillen tevoorschijnkomt als er op de afbeelding geklikt wordt">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |

Mijn vragen: 
1. Is er een manier om iconen op te slaan als het via het inspecteren niet lukt? Of mag je dan een zelfde soort icoon online opzoeken? (Kan ook screenshot maken natuurlijk en backgroundremover) 
2. Klopt de code die ik nu heb voor het uitklapmenu in de header?  
3. De validator geeft aan dat de header geen heading bevat. Moet ook daar een "verborgen" header gemaakt worden? 
4. Moet ik links toevoegen aan img grid van instagram posts? 
5. Moeten de twee pagina's die je maakt wel naar elkaar toe kunnen navigeren? 
6. Wat plaatsen bij form action?
7. Voor wat een id aanmaken regel 106? De validator geeft aan dat het moet. 
8. Mag je iconen in html gebruiken of moet je a.d.v. een ol stijlen? Gaat om frequent asked questions gedeelte.
9. Voor grote spaties door p en link gebruik kun je stijlen met CSS, klopt dat?

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

Antwoorden:
1. Je kunt het beste de website icon.js gebruiken om iconen als svg toe te voegen. Als je een icoon aanklikt kopieren je de code van het icoon en dan kun je deze in je code plaatsen. (done)
2. Ja, je kunt summary and details gebruiken voor het hamburger menu. (done)
3. Ja, het beste is om wel een heading toe te voegen zodat het voor een screenreader goed te lezen is. 
4. Meestal wel maar hoeft niet per se in dit geval. 
5. Vergeten te vragen 
6. Is voor deze opdracht n.v.t. aangezien dit gebruikt wordt om naar echt naar andere pagina's te kunnen gaan. 
7. Je moet een id aanmaken voor de checkbox waaraan het label gelinkt is zodat het voor de browser duidelijk is.
8. Beide niet, beter om svg te vinden en die te gebruiken door een image tag toe te voegen. (done)
9. Nee, beter om de a link tag binnen de p tag te plaatsen. (done)

+ Een link maken van de afbeelding van het logo aangezien dit ook klikbaar is. (done)

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Goed
  1. Voor mijn gevoel heb ik niet teveel classes of id's gebruikt dus dat gaat voor mijn gevoel wel goed. Ik kijk eerst echt of een element op een andere manier geselecteerd kunnen worden.

  2. Wat verder denk ik ook goed gaat is het indelen van mijn css. Toen ik begon was het heel slordig en stonden sommige dingen dubbel maar dat heb ik nu allemaal georganiseerd waardoor ik een beter overzicht heb. 

<img src="readme-images/v2_css.png" width="375px" alt="Indeling css">


  Lastig
  1. Het positioneren van de elementen in de header gaat ook lastig. Ik heb dit eerst met grid geprobeerd maar kwam er niet uit. Met flexbox ben ik een stuk verder gekomen maar de iconen heb ik nog niet allemaal op de juiste plaats kunnen krijgen. Daarnaast heb ik ook nog geen idee hoe ik het hamburger menu moet oplossen.
<img src="readme-images/v2_header.png" width="375px" alt="Weergave van header in browser">

  2. Het selecteren van de juiste selector. Ik merk dat ik nog erg door de war raak met nth-child en nth-of-type. Nu probeer ik steeds beide om te kijken of het lukt.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

Mijn vragen/problemen
1. Ik kom er met de header niet uit. Grid geprobeerd, niet gelukt met flexbox verder gekomen maar positioneren van iconen lukt niet goed en het uitklap menu.
2. De validator geeft aan 'Start tag “body” seen but an element of the same type was already open.' Er is echter geen tweede body tag, wat houdt dit in?
3. Er moet een lijn tussen img en onze winkels zijn maar dit lukt mij niet om toe te voegen. Nummering van child vind ik onduidelijk.
4. Hoe kun je een checkbox selecteren om te stijlen? input type=["checkbox"] werkt niet, ook andere dingen geprobeerd.
5. Hoe kan ik de witruimte weghalen voor de link 'privacybeleid'?
6. Hoe kan ik laatste img in footer selecteren? last-child of nth type werkt niet
7. Is het erg als ik soortgelijke kleuren kies en niet die met dezelfde hexcode? Kan de hexcodes niet vinden bij het inspecteren. 
8. Moeten alle kleuren in de root of alleen de meest gebruikte? Fonts?
9. Zijn alt teksten nodig voor svg's? 

</details>

1.
2.
3.Inmiddels gelukt door de img te selecteren binnen de class.
4.
5.
6. Inmiddels gelukt met last-child
7.
8.
9.



## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

Goed



Lastig

  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. HTML uitleg formulier opstellen https://www.w3schools.com/tags/tag_label.asp 
  2. HTML uitleg formulier - input tag https://www.w3schools.com/tags/att_input_placeholder.asp
  3. HTML uitleg figure caption https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/figcaption
  4. HTML uitleg svg opslaan Ivo 
  5. HTML uitleg details and summary https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details
  6. HTML Twee classes voor 1 tag kan https://www.w3schools.com/html/html_classes.asp
  7. CSS instructie tekst positioneren op afbeelding https://www.youtube.com/watch?v=z-naBVXTi6g


</details>