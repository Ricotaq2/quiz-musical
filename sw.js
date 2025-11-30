<!-- sw.js -->
<!--
// Nouveau service worker avec mise à jour automatique
self.addEventListener('install', event => {
  self.skipWaiting(); // force l'installation immédiate
  event.waitUntil(
    caches.open('quiz-cache-v2').then(cache => cache.addAll([
      './',
      './index.html',
    './Music_01_Lorie.mp3',
    './Music_02_Laurent Voulzy.mp3',
    './Music_03_Serge Lama.mp3',
    './Music_04_Liane Foly.mp3',
    './Music_05_Lara Fabian.mp3',
    './Music_06_David Charvet.mp3',
    './Music_07_Laam.mp3',
    './Music_08_Florent Pagny.mp3',
    './Music_09_Visage.mp3',
    './Music_10_Era.mp3',
    './Music_11_MC Solar.mp3',
    './Music_12_Danyel Gérard.mp3',
    './Music_13_Mike Brant.mp3',
    './Music_14_C. Jerôme.mp3',
    './Music_15_Jean-Luc Lahaye.mp3',
    './Music_16_Fréderic François.mp3',
    './Music_17_Gilbert Bécaud.mp3',
    './Music_18_Bernard Lavilliers.mp3',
    './Music_19_François Valery.mp3',
    './Music_20_Daniel Guichard.mp3',
    './Music_21_Nicolas Peyrac.mp3',
    './Music_22_David Hallyday.mp3',
    './Music_23_Dave.mp3',
    './Music_24_Nino Ferrer.mp3',
    './Music_25_Léo Ferré.mp3',
    './Music_26_Max. Leforestier.mp3',
    './Music_27_Yves Duteil.mp3',
    './Music_28_G. Moustaki.mp3',
    './Music_29_Nana Mouskouri.mp3',
    './Music_30_Yves Simon.mp3',
    './Music_31_Véronique Sanson.mp3',
    './Music_32_Richard Anthony.mp3',
    './Music_33_Petula Clark.mp3',
    './Music_34_Eric Charden.mp3',
    './Music_35_Brigitte Bardot.mp3',
    './Music_36_Jean Ferrat.mp3',
    './Music_37_Jenifer.mp3',
    './Music_38_Yannick Noah.mp3',
    './Music_39_Hélène Ségara.mp3',
    './Music_40_Roch Voisine.mp3',
    './Music_41_Natacha St-Pierre.mp3',
    './Music_42_Daniel Balavoine.mp3',
    './Music_43_Michel Sardou.mp3',
    './Music_44_Christophe.mp3',
    './Music_45_J.L. Aubert.mp3',
    './Music_46_Dalida.mp3',
    './Music_47_J.J. Goldman.mp3',
    './Music_48_D. Barbelivien.mp3',
    './Music_49_Céline Dion.mp3',
    './Music_50_Charles Trenet.mp3',
    './Music_51_F. Feldman.mp3',
    './Music_52_Axel Bauer.mp3',
    './Music_53_Claude Barzotti.mp3',
    './Music_54_Patricia Kaas.mp3',
    './Music_55_Gérard Blanc.mp3',
    './Music_56_Thierry Pastor.mp3',
    './Music_57_Patrick Coutin.mp3',
    './Music_58_Phil Barney.mp3',
    './Music_59_Serge Gainsbourg.mp3',
    './Music_60_Michel Jonasz.mp3',
    './Music_61_Sheila.mp3',
    './Music_62_R. Gotainer.mp3',
    './Music_63_Catherine Lara.mp3',
    './Music_64_Bibie.mp3',
    './Music_65_Salvatore Adamo.mp3',
    './Music_66_Corynne Charby.mp3',
    './Music_67_Julie Pietri.mp3',
    './Music_68_Lio.mp3',
    './Music_69_Jeanne Mas.mp3',
    './Music_70_Elsa.mp3',
    './Music_71_Desireless.mp3',
    './Music_72_Caroline Loeb.mp3',
    './Music_73_Johnny Hallyday.mp3',
    './Music_74_Ophélie Winter.mp3',
    './Music_75_Isabelle Boulay.mp3',
    './Music_76_Michèle Torr.mp3',
    './Music_77_Patrick Fiori.mp3',
    './Music_78_Marc Lavoine.mp3',
    './Music_79_Patrick Bruel.mp3',
    './Music_80_Pascal Obispo.mp3',
    './Music_81_Charles Anavour.mp3',
    './Music_82_Pierre Perret.mp3',
    './Music_83_Régine.mp3',
    './Music_84_Jacques Dutronc.mp3',
    './Music_85_Julien Clerc.mp3',
    './Music_86_Joe Dassin.mp3',
    './Music_87_Yves Montant.mp3',
    './Music_88_Eddy Mitchell.mp3',
    './Music_89_Gérard Lenorman.mp3',
    './Music_90_Enrico Macias.mp3',
    './Music_91_Herbert Leonard.mp3',
    './Music_92_Jacques Brel.mp3',
    './Music_93_Dick Rivers.mp3',
    './Music_94_Georges Brassens.mp3',
    './Music_95_Sylvie Vartan.mp3',
    './Music_96_France Gall.mp3',
    './Music_97_Antoine.mp3',
    './Music_98_Françoise Hardy.mp3',
    './Music_99_Claude François.mp3',
    './Music_100_Michel Berger.mp3',
    './Music_101_Michel Polnareff.mp3',
    './Music_102_Alain Souchon.mp3',
    './Music_103_Patrick Juvet.mp3',
    './Music_104_Francis Cabrel.mp3',
    './Music_105_Michel Delpech.mp3',
    './Music_106_Sacha Distel.mp3',
    './Music_107_Mireille Mathieu.mp3',
    './Music_108_Alain Barrière.mp3',
    './Music_109_Huges Auffray.mp3',
    './Music_110_Claude Nougaro.mp3',
    './Music_111_Pierre Vassiliu.mp3',
    './Music_112_Marcel Zanini.mp3',
    './Music_113_Garou.mp3',
          
      
      
      './icon-192.png',
      './icon-512.png',
      './manifest.json'
    ]))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== 'quiz-cache-v2') return caches.delete(key);
      }))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
-->


