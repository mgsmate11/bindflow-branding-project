// Blog / Tudásbázis tartalom. Minden szöveg kétnyelvű ({ hu, en }); a komponensek
// a useLang() t()-jével (vagy lang szerint) renderelik. Új cikknél kövesd ezt a struktúrát.

export interface Bilingual {
  hu: string;
  en: string;
}

export interface Article {
  slug: string; // url-barát, nyelvfüggetlen
  title: Bilingual;
  excerpt: Bilingual;
  body: Bilingual[]; // bekezdés-tömb (egyszerű szöveg, markdown nélkül)
  tags: Bilingual[];
  date: string; // ISO, pl. '2026-06-11'
  readMinutes: number;
}

export const articles: Article[] = [
  {
    slug: 'ai-chatbot-idomegtakaritas-kkv',
    title: {
      hu: 'Hogyan spórol időt egy AI chatbot a magyar KKV-knak',
      en: 'How an AI chatbot saves time for Hungarian SMEs',
    },
    excerpt: {
      hu: 'Az ügyfélkérdések nagy része ismétlődik. Egy jól felépített AI chatbot ezek 60–70%-át önállóan kezeli — megmutatjuk, hol éri meg bevezetni.',
      en: 'Most customer questions repeat. A well-built AI chatbot handles 60–70% of them on its own — here is where it pays off to introduce one.',
    },
    body: [
      {
        hu: 'Egy átlagos magyar kis- és középvállalkozásnál az ügyfélszolgálatra érkező kérdések meglepően nagy része ismétlődik: nyitvatartás, árak, szállítási idő, számlázás, garancia. Ezek megválaszolása önmagában nem nehéz, de összeadódik — és pont a legértékesebb munkaidőből vesz el.',
        en: 'At a typical Hungarian small or medium-sized business, a surprisingly large share of incoming customer questions repeat: opening hours, prices, delivery times, invoicing, warranty. Answering them is not hard on its own, but it adds up — and it eats into your most valuable working hours.',
      },
      {
        hu: 'Egy AI chatbot nem azért hasznos, mert "okosnak" tűnik, hanem mert a tipikus kérdések 60–70%-át emberi beavatkozás nélkül, azonnal és a nap 24 órájában megválaszolja. Az ügyfél pillanatok alatt megkapja a választ, a csapatod pedig csak a valóban egyedi esetekkel foglalkozik.',
        en: 'An AI chatbot is useful not because it looks "smart", but because it answers 60–70% of typical questions instantly, around the clock, without human intervention. The customer gets an answer in seconds, and your team only deals with the genuinely unique cases.',
      },
      {
        hu: 'A kulcs a megfelelő tudásbázis. Egy chatbot annyit ér, amennyi információt megbízhatóan elér: a saját dokumentumaitokat, GYIK-et, termékadatokat. Ezért nálunk minden chatbot a cég valós tartalmára épül, nem általános internetes tudásra — így nem "hallucinál", hanem a tényleges válaszokat adja.',
        en: 'The key is the right knowledge base. A chatbot is only as good as the information it can reliably access: your own documents, FAQ, product data. That is why every chatbot we build is grounded in the company\'s real content, not general internet knowledge — so it does not "hallucinate", it gives the actual answers.',
      },
      {
        hu: 'Mikor éri meg bevezetni? Ha napi szinten 10-nél több ismétlődő kérdés érkezik, ha a válaszidő üzleti kockázat, vagy ha a csapat túl sok időt tölt rutinválaszokkal. A megtérülés általában néhány hónapon belül látszik a felszabaduló munkaidőben.',
        en: 'When is it worth it? If you receive more than 10 repetitive questions a day, if response time is a business risk, or if your team spends too much time on routine replies. The return usually shows within a few months in the working hours you reclaim.',
      },
      {
        hu: 'A bevezetés nem ugrás a sötétbe. Egy jól körülhatárolt területtel (pl. csak a leggyakoribb GYIK) érdemes kezdeni, mérni a találati arányt, majd fokozatosan bővíteni. Így a kockázat alacsony, az eredmény pedig az első héttől mérhető.',
        en: 'Adoption is not a leap in the dark. It is best to start with a well-defined scope (e.g. just the most common FAQ), measure the hit rate, then expand gradually. This keeps the risk low while the result is measurable from the first week.',
      },
    ],
    tags: [
      { hu: 'Chatbot', en: 'Chatbot' },
      { hu: 'Ügyfélszolgálat', en: 'Customer service' },
      { hu: 'KKV', en: 'SME' },
    ],
    date: '2026-05-20',
    readMinutes: 4,
  },
  {
    slug: 'folyamatautomatizalas-n8n-hol-kezdje-egy-ceg',
    title: {
      hu: 'Folyamatautomatizálás n8n-nel: hol kezdje egy cég',
      en: 'Workflow automation with n8n: where a business should start',
    },
    excerpt: {
      hu: 'Az automatizálás nem nagy szoftverprojekt. A legtöbb cég a manuális adatmásolás kiváltásával kezdi — és ott a leggyorsabb a megtérülés is.',
      en: 'Automation is not a big software project. Most companies start by eliminating manual data copying — and that is also where the payback is fastest.',
    },
    body: [
      {
        hu: 'Sok cégvezető fejében az "automatizálás" egy drága, hónapokig tartó szoftverfejlesztés képét idézi. A valóság ennél sokkal földhözragadtabb: a legnagyobb veszteség általában a rendszerek közötti kézi adatmásolásban van — amikor ugyanazt az információt e-mailből táblázatba, táblázatból számlázóba, onnan CRM-be pötyögik be.',
        en: 'In many business owners\' minds, "automation" conjures an expensive software project lasting months. The reality is far more down-to-earth: the biggest loss is usually in manual data copying between systems — when the same information is keyed from email to spreadsheet, from spreadsheet to invoicing, and from there to CRM.',
      },
      {
        hu: 'Az n8n egy no-code/low-code automatizációs eszköz, amellyel ezeket a lépéseket vizuálisan, "ha ez történik, akkor azt csináld" logika mentén köthetjük össze. Nem kell hozzá fejlesztőcsapat, és — a felhős alternatívákkal szemben — saját környezetben is futtatható, ami adatvédelmi szempontból fontos lehet.',
        en: 'n8n is a no-code/low-code automation tool that lets you connect these steps visually, along "if this happens, then do that" logic. It does not require a developer team and — unlike cloud-only alternatives — can run in your own environment, which can matter for data protection.',
      },
      {
        hu: 'Hol kezdje egy cég? A jó első projekt három ismérve: gyakori (naponta vagy hetente ismétlődik), szabályalapú (nincs benne sok kivétel), és mérhető (látszik, mennyi időt vesz el ma). Tipikus példák: beérkező űrlapok rögzítése, ajánlatkérések továbbítása, riportok összeállítása, számlák lekönyvelése.',
        en: 'Where should a company start? A good first project has three traits: frequent (repeats daily or weekly), rule-based (few exceptions), and measurable (you can see how much time it takes today). Typical examples: capturing incoming form submissions, routing quote requests, assembling reports, posting invoices.',
      },
      {
        hu: 'Fontos a "human in the loop" elv: az automatizálás nem azt jelenti, hogy az ember kikerül a folyamatból, hanem hogy a rutinból kikerül. A kritikus döntéseknél (pl. egy nagy értékű ajánlat) az automatizmus előkészíti a munkát, de a jóváhagyás emberi marad.',
        en: 'The "human in the loop" principle matters: automation does not mean the human is removed from the process, only from the routine. At critical decisions (e.g. a high-value quote), the automation prepares the work, but approval stays human.',
      },
      {
        hu: 'A tapasztalatunk az, hogy egyetlen jól megválasztott első folyamat heti több órát szabadít fel, és — ami fontosabb — bizalmat épít a csapatban a technológia iránt. Innen a bővítés már sokkal könnyebb.',
        en: 'Our experience is that a single well-chosen first process frees up several hours a week and — more importantly — builds the team\'s trust in the technology. From there, expanding becomes much easier.',
      },
    ],
    tags: [
      { hu: 'Automatizáció', en: 'Automation' },
      { hu: 'n8n', en: 'n8n' },
      { hu: 'No-code', en: 'No-code' },
    ],
    date: '2026-05-28',
    readMinutes: 5,
  },
  {
    slug: 'ai-bevezetes-lepesrol-lepesre-mitoszok',
    title: {
      hu: 'AI bevezetés lépésről lépésre — mítoszok és valóság',
      en: 'Adopting AI step by step — myths and reality',
    },
    excerpt: {
      hu: 'Az AI nem mindent-vagy-semmit döntés. A legjobb eredményt egy szűk, jól mérhető pilottal érik el a cégek — eloszlatjuk a leggyakoribb tévhiteket.',
      en: 'AI is not an all-or-nothing decision. Companies get the best results with a narrow, measurable pilot — we dispel the most common misconceptions.',
    },
    body: [
      {
        hu: 'Az AI körüli zaj két véglet felé tolja a cégvezetőket: vagy azt hiszik, hogy egyetlen eszköz mindent megold, vagy azt, hogy ez csak a nagyvállalatoknak való. Mindkettő tévhit. Az AI ma egy gyakorlati eszköz, amely konkrét, jól körülhatárolt feladatokban hoz mérhető értéket.',
        en: 'The noise around AI pushes business owners toward two extremes: either they believe a single tool solves everything, or that it is only for large enterprises. Both are myths. Today AI is a practical tool that delivers measurable value on concrete, well-defined tasks.',
      },
      {
        hu: 'Első mítosz: "Az AI bevezetése drága és kockázatos." Valójában a jól megtervezett bevezetés egy szűk pilottal indul — egy folyamattal, amit hetek alatt élesíthetünk, és amin azonnal látszik a megtérülés. A kockázat így nem a teljes cégre, hanem egyetlen, visszafordítható lépésre korlátozódik.',
        en: 'First myth: "Adopting AI is expensive and risky." In reality, a well-planned rollout starts with a narrow pilot — one process you can go live with in weeks, where the payback is immediately visible. The risk is thus limited to a single, reversible step rather than the whole company.',
      },
      {
        hu: 'Második mítosz: "Az AI elveszi az emberek munkáját." A gyakorlatban inkább a legunalmasabb részét veszi el. A csapat felszabaduló idejét értékteremtő feladatokra fordíthatja — ügyfélkapcsolatra, stratégiára, kreatív munkára —, amire eddig nem jutott idő.',
        en: 'Second myth: "AI takes people\'s jobs." In practice it tends to take the most tedious part of them. The team can spend the freed-up time on value-creating tasks — customer relationships, strategy, creative work — for which there was no time before.',
      },
      {
        hu: 'Harmadik mítosz: "Előbb minden adatunkat rendbe kell tennünk." Hasznos, ha az adat rendezett, de nem előfeltétel. A legtöbb projekt épp azzal kezdődik, hogy egy szűk területen rendet teszünk az adatban — és már ez önmagában értéket ad.',
        en: 'Third myth: "We must first get all our data in order." Tidy data helps, but it is not a precondition. Most projects actually begin by cleaning up data in a narrow area — and that alone already delivers value.',
      },
      {
        hu: 'A mi módszerünk: felmérés → szűk pilot → mérés → bővítés. Először megnézzük, hol a legnagyobb a fájdalom, kiválasztunk egy mérhető folyamatot, élesítjük, majd a tanulságok alapján bővítünk. Így az AI nem egy nagy ugrás, hanem egy sor kis, biztos lépés.',
        en: 'Our method: assessment → narrow pilot → measurement → expansion. First we find where the pain is greatest, pick a measurable process, go live, then expand based on what we learn. This way AI is not one big leap but a series of small, safe steps.',
      },
    ],
    tags: [
      { hu: 'AI stratégia', en: 'AI strategy' },
      { hu: 'Digitális transzformáció', en: 'Digital transformation' },
      { hu: 'Bevezetés', en: 'Adoption' },
    ],
    date: '2026-06-04',
    readMinutes: 5,
  },
];

export const getArticleBySlug = (slug?: string): Article | undefined =>
  articles.find((a) => a.slug === slug);
