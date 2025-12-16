export interface Location {
  name?: string;
  position?: Position;
  id: string;
  solution?: string;
  paragraphs: string[];
  skipText?: string[];
  next: Next[],
  hints: string[]
}

export interface Next {
  player: string,
  nextId: string,
}

export interface Position {
  latitude: number;
  longitude: number;
}




export const locations: Location[] = [
  {
    name: "Was passiert hier?",
    id: 'tutorial_nohint1',
    hints: [
      'Nach dem letzten Hinweis bekommt ihr die Lösung.'
    ],
    paragraphs: [
      'Willkommen zur Überbleibselweihnachsrätselsause!',
      '',
      'Ich hab eine kleine Rätselrally durch Wien mit einer aufregenden und durchdachten Story für euch gebastelt.',
      '',
      'Als ich es abgefahren bin, hab ich 3 Stunden gebraucht, da ist auch ein bisschen Zeit fürs Nachdenken eingerechnet - aber warscheinlich viel zu wenig.',
      '',
      'Und so funktioniert das Ganze:',
      '',
      'Gleich zuerst, wenn etwas nicht funktioniert, habt ihr unten immer den "überspringen" button, den ihr zwei Mal drücken müsst, damit ihr nicht unabsichtlich schummelt.',
      'Probiert den jetzt einmal.'
    ],
    next: [
      {
        player: 'any',
        nextId: 'tutorial_nohint2',
      }
    ]
  },
  {
    name: "Ausserdem",
    id: 'tutorial_nohint2',
    hints: [
      'Nach dem letzten Hinweis, bekommt ihr die Lösung.'
    ],
    skipText: [
      'etwas Anderes'
    ],
    paragraphs: [
      'Manchmal steht auf dem Knopf etwas Anderes, oder mehrmals drücken ist nicht nötig.',
      'Er tut aber immer das Gleiche.'
    ],
    next: [
      {
        player: 'any',
        nextId: 'tutorial3',
      }
    ]
  },
  {
    name: "Ausserdem",
    id: 'tutorial3',
    hints: [
      'So bekommt ihr eine unterschiedliche Anzahl an Hinweisen',
      'Nach dem letzten Hinweis, bekommt ihr die Lösung.',
      'Hier müsst ihr einfach "weiter" drücken.',
    ],
    skipText: ['weiter'],
    paragraphs: [
      'Wenn ihr nicht weiterkommt aber denkt, dass das Spiel eigentlich funktioniert, könnt ihr Hilfe bekommen.',
      'Jedes Mal wenn ihr den Knopf drückt, bekommt ihr einen neuen Hinweis',
      'Der letzte Hinweis ist immer die Lösung.'
    ],
    next: [
      {
        player: 'any',
        nextId: 'tutorial4',
      }
    ]
  },
  {
    name: "Rätsel",
    id: 'tutorial4',
    hints: [
      'Was denn, es steht doch da was du tun sollst.',
      'Gibt "die richtige lösung" ein',
    ],
    paragraphs: [
      'Wenn ihr nicht zufrieden damit seid, 5 Minuten nur "überspringen" zu drücken, hab ich auch ein paar Rätsel eingebaut!',
      '',
      'Unten gibt es manchmal die Möglichkeit etwas einzutippen. Das Spiel geht sofort weiter, wenn ihr die richtige Lösung eingegeben habt.',
      'Gross- und Kleinschreibung sind egal.',
    ],
    solution: 'die richtige lösung',
    next: [
      {
        player: 'any',
        nextId: 'tutorial5',
      }
    ]
  },
  {
    name: "Mehr Rätsel",
    id: 'tutorial5',
    hints: [
      'Entweder ihr fahrt jetzt zum Stephansdom, oder drückt weiter.',
    ],
    skipText: [
      'weiter'
    ],
    paragraphs: [
      'Zuerst mal, keine Panik. Das Spiel schickt euren Standort nie irgendwo hin, alles passiert nur auf eurem Handy.',
      'Ausserdem fragt das Spiel den Standort nur einmalig ab, wenn ihr den Knopf drückt.',
      '',
      'Wo das gesagt ist - für einige Rätsel müsst ihr einen Ort in Wien finden.',
      'Wenn ihr glaubt, dass ihr angekommen seid, oder wenn ihr wissen wollt, ob ihr am richtigen Weg seid, fragt einfach ob hr schon da seid.',
      '',
      'Wenn ihr 50 Meter an das Ziel herankommt, geht das Spiel weiter.',
      'Davor sagt euch der Knopf wie weit ihr vom Ziel entfernt seid.',
      '',
      'Ihr könnt den Knopf so oft drücken wie ihr wollt.',
      'In dem Beispiel ist das Ziel der Stephansdom - wenn ihr da jetzt nicht hinfahren wollt, benutzt ausnahmsweise "weiter".'
    ],
    position: {
      latitude: 48.2050491798,
      longitude: 16.3701485194,
    },
    next: [
      {
        player: 'any',
        nextId: 'tutorial_nohint6',
      }
    ]
  },
  {
    name: "So.",
    id: 'tutorial_nohint6',
    hints: [
      'los gehts!'
    ],
    skipText: [
      'los gehts!'
    ],
    paragraphs: [
      'Gibt es noch andere Rätsel? Vielleicht.',
      '',
      'Wenn ihr etwas nicht versteht oder etwas überhaupt nicht funktionieren sollte, müsst ihr mich anrufen!',
      'Und jetzt los!'
    ],
    next: [
      {
        player: 'any',
        nextId: 'start',
      }
    ]
  },
  {
    name: "Am Anfang",
    id: "start",
    hints:[
      'Wo haben wir zum ersten Mal Vampire gespielt?',
      'Ihr müsst zum Yella Yella.'
    ],
    position: {
      latitude: 48.22488081787097,
      longitude: 16.497051648696154
    },
    paragraphs: [
      'Wie jede gute Geschichte beginnt auch diese hier an ihrem Anfang.',
      'An einem lauen Abend, früh im Sommer, finden sich ein paar Menschen eben da ein, wo ich euch jetzt noch einmal hin schicke.',
      'Und dabei wäre ich damals fast nicht aufgetaucht!',
      'Drei Mal hatte ich solche Treffen schon ausprobiert und drei Mal wäre ich eigentlich lieber woanders gewesen.',
      'Und trotzdem hab ich mich aufgerafft.',
      'Einmal noch, hab ich mir gedacht, ein Mal probier ich’s noch aus.',
      '',
      'Und wisst ihr was? War schon eine gute Zeit.',
    ],
    next: [
      {
        player: 'any',
        nextId: 'b098bad9908b50885bad274880dbc8bc',
      }
    ]
  },
  {
    name: "Yella Yella",
    id: "b098bad9908b50885bad274880dbc8bc",
    paragraphs: [
      'Ja, genau hier war es! Ich kann mich noch erinnern, als wäre es am 4.6.2024 gewesen!',
      'Was sich gut trifft, weil genau da wars ja auch.',
      'Hier wurde ich, Dagobert, das zweite Mal geboren.',
      'Und mit mir begann hier eine lange und verwirrende Konversation.',
      '',
      'Es gab kurzlebige Geheimsprachen und den besten Witz der Witzgeschichte.',
      'Dann gab es einen Aufstand indem sich mehrere Rebellengruppen gebildet haben...',
      'Aber was war denn nochmal das Erste, das in dieser Konversation gesagt wurde?'
    ],
    solution: '04.07',
    hints: [
      'Ihr müsst euch an nichts erinnern können.',
      'Viva la Seestadt!.',
      'Tobi hat als erstes direkt nur "04.07" geschrieben.'
    ],
    next: [
      {
        player: 'any',
        nextId: 'g02855d99hub50l35bad274540dfc8bf',
      }
    ]
  },
  {
    name: 'Hunger',
    hints: [
      'Was kann Dagobert denn essen?',
      'Was wäre denn die einfachste Möglichkeit für ihn an Essen zu kommen?',
      'Es hat nicht direkt etwas mit der Kirche zu tun, es kommt aber ein Kreuz vor.',
      'Dagobert könnte das an vielen Orten in Wien bekommen - aber er will zum Zentrum.',
      'Ihr müsst zur Blutspendezentrale im 4. Bezirk.'
    ],
    id: 'g02855d99hub50l35bad274540dfc8bf',
    next: [
      {
        player: 'any',
        nextId: '2028sd3fgd99ybb534uiob274540dfc8kg',
      }
    ],
    position: {
      latitude: 48.1954187026802,
      longitude: 16.366976926984005
    },
    paragraphs: [
      'Genau! Manchmal hab ich ein Gedächtnis wie Elena.',
      'Naja wo war ich? Ach ja.',
      'Bei allem was schön ist an meinem neuen Leben, eines ist doch immer mühseelig',
      'Essen.',
      'Findet einmal einen Ort an dem wir alle drei etwas essen könnten!',
      'Das ist einfach unmöglich!',
      'Fast.',
      'Ein wahres Buffet, an dem sogar ich mitessen kann!',
      'Wenn es den Namen nicht schon gäbe, wäre er wirlich eine gute Wahl für ein Restaurant in dem jemand wie ich essen kann.',
      'In Wien ist sogar das Zentrum dieser Buffetkette, ihr findet da bestimmt auch etwas.',
      'Und wenn nicht, im selben Bezirk ist auch eine Universität und ein Markt voller teurer Lokale.',
      'Ich warte also am Buffet.',
      '',
      'Wir haben übrigens einen wichtigen Auftrag zu erledigen!',
      '',
      'Es geht um eine mysteriöse Party...'
    ]
  },
  {
    name: 'Der Auftrag',
    id: '2028sd3fgd99ybb534uiob274540dfc8kg',
    next: [
      {
        player: 'any',
        nextId: '8890sd98v98sd8934nnv894908hvndfg',
      }
    ],
    hints: [
      'Wieviele berühmte Vampirjäger kennt ihr denn so?',
      'Es geht nicht um den Hof für den er gearbeitet hat.',
      'Die Ruprechtskirche ist die älteste Kirche in Wien - schaut mal da in der Umgebung nach einem "Hof".',
      'Ihr müsst zum Van Swieten Hof in der Rotenturmstrasse 19.'
    ],
    position: {
      latitude: 48.21061466967007,
      longitude: 16.37470521598213
    },
    paragraphs: [
      'Gut das ihr da seid! Mir wurde eben gerade von einem Fremden auf der Strasse ein wichtiger Auftrag erteilt!',
      'Wir sollen niemandem etwas erzählen und dringend und konzentriert daran arbeiten. Wie immer also.',
      '',
      'Party? Welche Party? Wir haben jetzt keine Zeit für solchen Unsinn!',
      'Scheinbar macht ein Vampirjäger Wien unsicher! Ich bin schoneinmal losgegangen.',
      '',
      'Wie, wohin?',
      'Natürlich zum Hof des berühmtesten Vampirjägers Wiens!',
      'Vielleicht schau ich mir vorher noch die älteste Kirche der Stadt an, die ist da gleich um die Ecke.',
      'Wir treffen uns dann dort, ja?',
    ],
  },
  {
    name: 'Bei Gerard van Swieten',
    id: '8890sd98v98sd8934nnv894908hvndfg',
    next: [
      {
        player: 'any',
        nextId: 'f39c9cmn230nmcn38988dvcjn34n9nncv9',
      }
    ],
    position: {
      latitude: 48.18965209658004,
      longitude: 16.414155250266678
    },
    hints: [
      'Wo waren wir denn schoneinmal eingesperrt?',
      'Wir haben sogar bezahlt um rein zu dürfen.',
      'Ihr müsst zum Masters of Escape bei der U3 Erdberg.'
    ],
    paragraphs: [
      'Schlechte Nachrichten Leute. Es hat sich herausgestellt, dass es ein Problem mit diesem van Swieten gibt.',
      'Erstens ist er schon lange tot.',
      'Zweitens, hat er hier nie gewohnt und auch sonst kaum etwas mit diesem Haus zu tun.',
      '',
      'Naja, Fehler passieren.',
      '',
      'Das is alles sowieso egal, weil es sich ergeben hat, dass ich von jemandem entführt wurde!',
      'Offenbar ermitteln wir zu einer Verschwörung. Ich hab gefragt, es hat nichts mit dem Jäger und auch nichts mit einer Party zu tun.',
      '',
      'Ehrlich gesagt, diese Entführer haben nicht weniger verwirrt gewirkt als ihr gerade.',
      'Das Merkwürdigste ist ja, dass sie mir gesagt haben wohin sie mich entführen!',
      'Hat mich direkt gewundert. Dort waren wir gemeinsam schoneinmal eingesperrt und sind in Rekordzeit entkommen!',
      '',
      'Kommt ihr mich abholen?'
    ],
  },
  {
    name: 'Ein Entkommen',
    id: 'f39c9cmn230nmcn38988dvcjn34n9nncv9',
    next: [
      {
        player: 'any',
        nextId: '78923bn2345c297234fccwed234sdfgfv',
      }
    ],
    position: {
      latitude: 48.20227065199294,
      longitude:  16.39230540974233
    },
    hints: [
      'Am besten mal in die Karten schauen.',
      'Mit welchem Symbol markiert man üblicherweise einen Ort?',
      'Der Ort is sicher ein Ort der etwas mit euch und Dagobert zu tun hat.',
      'Ihr müsst zum Ballsaal im dritten Bezirk.'
    ],
    paragraphs: [
      'Ha!',
      'Ihr Narren.',
      'Ihr seid direkt in alle meine Fallen getappt!',
      'Ich bin garnicht Dagobert, ich bin es, PAUL, euer Erzfeind!',
      'Haha! Ich sehe das Entsetzen auf euren Gesichtern. Wie kann es sein, dass dieser gewiefte Bösewicht, der uns schon so oft begegnet ist und an den wir uns immer erinnern werden, auch hinter dieser Falle steckt!?',
      '',
      'Oh ja! Ich bin wie eine Spinne und ihr zappelt in meinem Netz!',
      'Eine vom Narrativ lange angelegte und aufgebaute Spinne die zurecht am Höhepunkt der Spannung auftritt!',
      '',
      'Und wie bei jedem guten, bösen, Plan steckt hinter den Fallen in die ich euch geleitet habe ein Hinweis!',
      'Ein Zeichen dass auf den Ort hinweist, an dem ich Dagobert gefangen halte!',
      'Welches Zeichen? So leicht lasse ich mir nicht in die Karten schauen!',
    ]
  },
  {
    name: 'Des Pudels Kern',
    id: '78923bn2345c297234fccwed234sdfgfv',
    hints: [
      'Na wer ist der Meister von Elenas, Jeremiah, Dagoberts und Pauls, ihres bekannten Erzfeindes(!), Geschichte?',
      'TOBIAS. Leute. So lang is es jetzt auch nicht her.'
    ],
    next: [
      {
        player: 'any',
        nextId: 'asdfbn9pt7345nvp79w4bn0gn78werv',
      }
    ],
    paragraphs: [
      'Ihr habt mein Rätsel also lösen können!?',
      'Damit seit ihr erneut in meine Falle getappt.',
      'Noch tiefer in die Falle.',
      'Eine Falle in der Falle in die man nur fallen kann im Fall, dass die Falle euch nicht zu Fall gebracht haben solle!',
      '',
      'Eine Falle so perfiede, dass nur er sie sich ausdenken konnte!',
      'Er, der Meister unserer Geschichte!',
      '',
      'Und nur dieser Name öffnet das Siegel!',
      'Das Siegel, der zentrale Gegenstand um den es in dieser ganzen Geschichte ging, den ihr die ganze Zeit dabei hattet und den ich nicht eben zum ersten Mal erwähnt habe!',
      'Nur wenn ihr dieses unknackbare Schloss aufbekommt, kommt ihr auch hier weiter!'
    ],
    solution: 'ponyschlecken'
  },
  {
    next: [
      {
        player: 'any',
        nextId: '9247835y9234hcnm2397h0fbn283ndsaf',
      }
    ],
    hints: [
      'HAHAHAHAHA',
      'Er hat euch nichteinmal eine Aufgabe gestellt. Das ist eigentlich geschummelt...',
      'Warum solltet ihr dann nicht schummeln?',
      'überspringt diesen Unsinn einfach.'
    ],
    name: 'Paul.',
    id: 'asdfbn9pt7345nvp79w4bn0gn78werv',
    paragraphs: [
      'Wahnsinn!',
      'Ihr habt es geschafft!',
      'Ihr habt es geschafft in meine fieseste Falle zu tappen!',
      'AHAHAHAHA',
      'Es gibt keinen Weg weiter zu kommen',
      '',
      'KEINEN!',
      '',
      'Ihr seid hier für immer gefangen!',
      'AHAHAHAHAHAHAH'.repeat(300),
    ],
    skipText: [
      'nicht einmal hier!',
      'wirklich!',
      'nein, wirklich wirklich!',
      'lass das!',
      'bitte?'
    ]
  },
  {
    name: 'Reingelegt! HAHAHA',
    id: '9247835y9234hcnm2397h0fbn283ndsaf',
    hints: [
      'Scheinbar kommt IHR hier nicht raus.',
      'Woher weiss diese Falle denn, wer du bist und wer müsstest du sein um hier raus zu kommen?',
      'Ersetze deinen Namen in der Adresse durch "paul" und versuch nocheinmal zu entkommen.(?ich=paul&station=9247835y9234hcnm2397h0fbn283ndsaf)'
    ],
    next: [
      {
        player: 'paul',
        nextId: 'df345trvr3fr43453asdf23423f4c23kltg',
      },
      {
        player: 'any',
        nextId: '9247835y9234hcnm2397h0fbn283ndsaf',
      }
    ],
    paragraphs: [
      'Nur ich, Paul, kann aus dieser Falle entkommen!',
      'AHAHAHAHAHAHAHAHAHAHAHAHAHAHA'.repeat(300),
    ],
    skipText: [
      'Der Ausweg!',
    ]
  },
  {
    name: 'Liebes Tagebuch',
    next: [
      {
        player: 'any',
        nextId: 'a012838dyb120b3bdn291mwkmd123893d7nm12',
      }
    ],
    hints: [
      'Stellt nocheinmal TOBIAS ein und schaut mal was sonst so auf den Rädern steht.',
      'Ja es ist falsch geschrieben.',
      'Da steht "JERYQI"',
      'gebt "qi" ein'
    ],
    id: 'df345trvr3fr43453asdf23423f4c23kltg',
    paragraphs: [
      'Heute habe ich ein Rätsel für Elena und Jeremiah enwickelt, auf das ich wahnsinnig stolz bin.',
      'Sie müssen ein Kryptex auf TOBIAS einstellen!',
      'Was daran so toll sein soll?',
      'Hihi',

      'Ich hoffe "Doktor Böhring" stellt es selbst ein.',
      'Der wird sich so ärgern wenn ihm auffällt, was er damit an einer anderen Stelle auch geschrieben hat.',
      'Das wird der schlimmste Moment in seinem Leben!',
      'Ich meine, abgesehen von den Anschlägen.',
      'Und als da seine Kollegin erschossen wurde.',
      'Ah, und die Suspendierung.',
      'Und als sein alter Freund ausgeraubt wurde.',
      'Die Messerstecherei.',
      'Das mit der Wohnung...',
      '',
      'Ja, nein.',
      'Aber trotzdem unter den schlimmsten 7 Dingen die ihm jemals angetan wurden!',
      'Ah, das mit seinen Eltern und...',
      'Unter den schlimmsten zehn bis zwanzing Dingen die ihm jemals angetan wurden!',
      '',
      'Und im mich immer daran zu erinnern, werde ich diese Seite nur umblättern wenn ich die Buchstaben eingebe, die nach dieser bombastischen Demütigung stehen.'
    ],
    solution: 'qi',
  },
  {
    name: 'Liebes Tagebuch',
    next: [
      {
        player: 'any',
        nextId: '012838dyb120b3bdn291mwkmd123893d7nm12',
      }
    ],
    hints: [
      'umblättern'
    ],
    skipText: [
      'umblättern'
    ],
    id: 'a012838dyb120b3bdn291mwkmd123893d7nm12',
    paragraphs: [
      'Ich habe die Fallen für Elena, Jeremiah jetzt fertig.',
      'Diesmal bekomme ich sie bestimmt.',
      'Wenn die wüssten!',
      '',
      'Wenn die wüssten wie gern ich sie eigentlich hab.',
      'Hätten sie mir mal frohe Weihnachten gewünscht, dann hätte das alle nicht passieren müssen.',
      'Jedem wird frohe Weihnachten gewünscht, nur mir nicht!',
      'Und so muss ich sie, wie alle schlimmen Kinder, eben immer wieder bestrafen, bis sie er lernen!',
      '',
      'Es ist ein hartes Leben, aber es ist nuneinmal meins.',
      '',
      'So, jetzt muss ich aber weiter - ich muss noch ein paar Leute engagieren, die den bieden sinnlose Aufträge erteilen die zu nichts führen.',
    ]
  },
  {
    name: 'Eine leere Seite',
    next: [
      {
        player: 'any',
        nextId: 'gg3g346gh3465h4hgergertg43',
      },
    ],
    hints: [
      'Paul hat noch nicht weitergeschrieben.',
      'Zeit das Buch zuzumachen.'
    ],
    id: '012838dyb120b3bdn291mwkmd123893d7nm12',
    paragraphs: [
      '',
    ],
    skipText: [
      'Buch schliessen'
    ],
  },
  {
    name: 'Hm',
    next: [
      {
        player: 'any',
        nextId: '123o4m346m34ntmdd23snfsdv',
      },
      {
        player: 'paul',
        nextId: 'gg3g346gh3465h4hgergertg43',
      }
    ],
    hints: [
      'Paul muss gerade nichts weiter tun als auf euch zu warten.',
      'Vielleicht solltet ihr mal wieder in eure eigene Geschichte wechseln.',
      'Tragt in der Adresse unter "ích=" wieder euren Namen statt pauls ein.'
    ],
    id: 'gg3g346gh3465h4hgergertg43',
    paragraphs: [
      'dum di dum.',
      '',
      '*hust*'
    ],
    skipText: [
      'weitermachen'
    ],
  },
  {
    name: 'Wie habt ihr das geschafft?',
    next: [
      {
        player: 'any',
        nextId: '1hu23oih12fnnsdasdifn34un',
      },
    ],
    hints: [
      'Hier hilft euch wirklich nichts weiter!',
      'Nur wenn ihr mein Tagebuch gelesen hättet, hättet ihr eine Chance!'
    ],
    id: '123o4m346m34ntmdd23snfsdv',
    solution: 'frohe weihnachten',
    paragraphs: [
      'Nur ich sollte entkommen können!',
      '',
      'Ihr Ratten! Aber was ihr nicht wisst, SIE Dr. Böhring, haben sich beim Lösen meines Kryptext selbst auf unglaublich peinliche weise zum Gespött gemacht!',
      'Sie haben nämlich als die die Lösung eingestellt haben ohne es zu wissen...',
      '',
      'Wie, Sie wussten das schon?',
      'Moment mal! Haben Sie etwa? Nein, das ist zu gut versteckt!',
      '',
      'Offenbar habe ich ihre Fähigkeiten unterschätzt!',
      'Ihre Fähigkeiten sich selbst zu Demütigen! HAHA!',
      '',
      'Am Ende bin ich Ihnen immernoch in allen Belangen überlegen und es gibt nichts, dass Sie sagen oder tun könnten um mich zu bezwingen!'
    ]
  },
  {
    name: 'Was?',
    next: [
      {
        player: 'any',
        nextId: '1hu23oih12fnnsdasdifnsss34un',
      }
    ],
    hints: [
    ],
    id: '1hu23oih12fnnsdasdifn34un',
    skipText: [
      '...'
    ],
    paragraphs: [
      'Was?',
      'Das ist ja ein geradezu lächerlicher Versuch!',
      '',
      '...',
      'Ein gerade zu lächerlicher Versuch von mir zu tun als wäre ich nicht gerührt!',
      'Aber heisst das, ich muss garkeine komplizierten Fallen stellen, damit wir gemeinsam etwas unternehmen können?',
      '',
      'Es macht aber schon Spass irgendwie.',
      'Also wenn ihr möchtet können wir das gern trotzdem weiter so machen...',
    ]
  },
  {
    name: '...',
    next: [
      {
        player: 'elena',
        nextId: 'schluss_elena',
      },
      {
        player: 'jeremiah',
        nextId: 'schluss_jeremiah',
      }
    ],
    hints: [
    ],
    id: '1hu23oih12fnnsdasdifnsss34un',
    skipText: [
      'ja!'
    ],
    paragraphs: [
      '...',
      'Ein gerade zu lächerlicher Versuch von mir zu tun als wäre ich nicht gerührt!',
      '',
      'Endlich habt ihr mich befreit von dieser Last. Diesem Zwang!',
      'Ich muss garkeine komplizierten Fallen stellen, damit wir gemeinsam etwas unternehmen können!',
      '',
      'Es macht aber schon Spass irgendwie.',
      'Also wenn ihr möchtet können wir das gern trotzdem weiter so machen...',
    ]
  },
  {
    name: 'The End',
    next: [
    ],
    hints: [
      'Das wars.'
    ],
    id: 'schluss_jeremiah',
    paragraphs: [
      'Und so endet unsere Geschichte.',
      'Da wo alle guten Geschichten enden, an ihrem Ende.',
      '',
      'Wiedereinmal haben Jeremiah und Elena Weihnachten gerettet.',
      'Weil, wie ihr euch bestimmt schon gedacht habt, bin ich weder Dagobert noch Paul.',
      'Ich war die ganze Zeit der Weihnachtsmann.',
      'Eines Dämon namens Nasenbär hatte mich unter seiner Kontrolle und so musste ich sein Spiel mitspielen.',
      'Nur weil ihr klug genug wart, das zu erkennen und mich mit der magischen Formel zu befreien, kann ich noch rechtzeitig alle Kinder der Welt beschenken!',
      '',
      'Der Siebenunzwanzigste schon??',
      'Aber die Sonne geht immernoch auf. Irgendjemand muss zu Weihnachten meine Pflichten übernommen haben.',
      'Aber das ist eine andere Geschichte.',
      '',
      'Jetzt verlassen wir Jeremiah und Elena.',
      'Sie haben es sich jetzt verdient sich hin zu setzen, etwas warmes zu essen und zu trinken, und ihr ewiges Leben zu geniessen.',
      'Ohne Dämonen. Ohne Aufträge. Ohne Anschläge und Entführungen.',
      '',
      '',
      'Ich bin sicher Dr. Jeremiah Böhriung hat seine Forschung erfolgreich abgeschlossen.',
      'Vermutlich ist er sogar Professor.',
      'Mr. O und Mir. K schikanieren ihn immernoch, aber wenn niemand hinsieht treffen sich ihre und Jeremiahs Blicke und alle wissen: sie sind stolz auf ihn.',
      'In der ganzen Vampirgesellschafft ist er angesehen als erfolgreicher Wissenschaftler und einer der wenigen, der halbwegs vernünftig mit Malkavianern umzugehen weiss.',
      'In seiner neuen Wohnung nahe der Universität hat er eine Bibliothek voller Manuskripte der Trimere aus aller Welt, die bei ihm studieren wollten.',
      '',
      'Mitten in der Bibliothek sitzt er am frühen Morgen, nach einer erfolgreichen Nacht auf einem weichen Ohrensessel.',
      'Zu leiser Musik aus einem Plattenspieler fällt sein Blick, über die Kante seines Buchs hinweg, auf einen alten, schiefen, billigen Schrank.',
      '',
      'Zufrieden lächelt er in dem Wissen, dass einige Schrauben darin fehlen.'
    ]
  },
  {
    name: 'The End',
    next: [
    ],
    hints: [
      'Das wars.'
    ],
    id: 'schluss_elena',
    paragraphs: [
      'Und so endet unsere Geschichte.',
      'Da wo alle guten Geschichten enden, an ihrem Ende.',
      '',
      'Wiedereinmal haben Jeremiah und Elena Weihnachten gerettet.',
      'Weil, wie ihr euch bestimmt schon gedacht habt, bin ich weder Dagobert noch Paul.',
      'Ich war die ganze Zeit der Weihnachtsmann.',
      'Eines Dämon namens Nasenbär hatte mich unter seiner Kontrolle und so musste ich sein Spiel mitspielen.',
      'Nur weil ihr klug genug wart, das zu erkennen und mich mit der magischen Formel zu befreien, kann ich noch rechtzeitig alle Kinder der Welt beschenken!',
      '',
      'Der Siebenunzwanzigste schon??',
      'Aber die Sonne geht immernoch auf. Irgendjemand muss zu Weihnachten meine Pflichten übernommen haben.',
      'Aber das ist eine andere Geschichte.',
      '',
      'Jetzt verlassen wir Jeremiah und Elena.',
      'Sie haben es sich jetzt verdient sich hin zu setzen, etwas warmes zu essen und zu trinken, und ihr ewiges Leben zu geniessen.',
      'Ohne Dämonen. Ohne Aufträge. Ohne Anschläge und Entführungen.',
      '',
      '',
      'Ich bin sicher Elena Cruz hat einen Weg gefunden mit dem Tod ihres Bruders umzugehen.',
      'Zurückgeholt hat sie ihn warscheinlich nicht. Seine Zeit hier war vorbei.',
      'Nachdem Elena Dr. Walter Bishop über Luis gestohlenes Geld mit diversen ungeklärten, mysteriösen Mordfällen und Terrorakten in Verbindung bringen konnte, verlor sich jede Spur von ihm.',
      'Luis hatte Bishop als den wahnsinnigen Magier Nephrandi entlarvt der Vampire und Menschen gleichermassen quälte und versuchte beide Welten im Chaos untergehen zu lassen.',
      'Die Camarilla, die Giovanni, sogar der Sabbat litten unter Nephrandis Einfluss.',
      'Luis versuchte ihn im Alleingang zu stoppen.',
      'Elena hat er nie etwas erzählt um sie vor der gefährlichen Welt zu beschützen in die er sich begeben hatte.',
      '',
      'Der Anschlag auf die Trimere in Amerika wurde ebenfalls Bishop`s alias Nephrandi`s Einfluss zugeschrieben.',
      'Die Menschen Amerikas und Mexikos feierten Luis mutiges Opfer. Mit seinem Geld konnte er einem Massenmoörder die Mittel nehmen weiterzumachen.',
      'Aber auch die Vampirgesellschafft war ungewohnt geeint im Andenken an Luis Cruz - den Sterblichen die sie alle gerettet hatte.',
      '',
      'In einem nie dagewesenen Akt der Einigkeit, vollführten alle grossen Clans ein Ritual um einen historischen Pakt zu schliessen.',
      '',
      'Jedes Jahr, wenn sich der Tag jährt an dem Luis Nephrandi`s Magie zum Opfer fiehl, herrscht Frieden.',
      'Und alle Vampire sehen zum Himmel und erinnern sich beim Anblick eines neuen Sterns am Himmel an Luis Cruz.',
      'Und was auch immer in Elenas Kopf verloren geht, nichteinmal sie wird Luis vergessen können.'
    ]
  },
]

export function metersAway(position: Position, target: Position): number {
  const R = 6371; // Earth radius in km
  const toRad = (x: number) => x * Math.PI / 180;

  const dLat = toRad(position.latitude - target.latitude);
  const dLon = toRad(position.longitude - target.longitude);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(position.latitude)) *
    Math.cos(toRad(target.latitude)) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.asin(Math.sqrt(a));
  return R * c * 1000;
}
