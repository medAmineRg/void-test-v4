import { Card } from "./Card";

const dummyData = [
  {
    media: "/flag.png",
    isVideo: false,
    title: "Le drapeau de la lutte contre les méningites",
    description: `Créé en collaboration avec trois para-athlètes, Ellie Challis, Théo
    Curin, Davide Morana et plusieurs membres de la Meningitis Research
    Foundation / Confederation of Meningitis Organisations, le drapeau de
    la lutte contre les méningites vise à sensibiliser le public à une
    maladie qui reste encore, à ce jour, un problème majeur de santé
    publique à l’échelle mondiale.`,
  },
  {
    media: "/doctor.png",
    isVideo: true,
    title: `Les femmes au sein de
    Entreprise - Cristina`,
    description: `Rencontrez Cristina Zamora, notre cheffe de projet pour les
    opérations de R&D en Amérique du Nord et l'une des
    nombreuses scientifiques inspirantes qui contribuent à
    renforcer la prochaine génération de femmes leaders dans le
    domaine de la santé et au-delà.`,
  },
  {
    media: "/paris.png",
    isVideo: true,
    title: `200 jours avant les Jeux
    Paralympiques`,
    description: `Si vous n'avez pas encore entendu parler du
    #DrapeauMéningites, regardez la vidéo de
    Vaskange et découvrez la signification de chaque
    couleur.`,
  },
];

const secondDummyData = [
  {
    media: "/talk.png",
    isVideo: true,
    title: `Virus VS Bacteria`,
    description: `Ils font partie de votre vie, mais les
  connaissez-vous vraiment ? Nos
  scientifiques vous expliquent les
  principales différences entre un virus et
  une bactérie.`,
  },
  {
    media: "/sanofi.png",
    title: `Le parcours B Corp de Notre
  Santé Grand Public`,
    description: `En obtenant la certification B Corp pour
  Entreprise Santé Grand Public en Amérique du
  Nord, en Allemagne, en Italie et en
  Amérique latine, nous faisons partie d'une
  communauté mondiale qui transforme le
  monde des affaires en une force pour le
  bien.`,
  },
  {
    media: "/baby.png",
    isVideo: true,
    title: `Maladie du sommeil : Ne laisser
  personne de côté`,
    description: `Maladie tropicale négligée, la maladie du
  sommeil est généralement mortelle en
  l'absence de traitement. Les patients
  infectés par la variante la plus aiguë de la
  maladie, le T.b rhodesiense, n'ont
  malheureusement bénéficié que de peu
  d'innovations en matière de traitement.
  Mais l'espoir pointe à l'horizon. Pour ces
  patients, nous voyons le potentiel du
  premier traitement oral pour cette
  variante de la maladie,
  soutenant ainsi l'objectif d'élimination de
  la maladie du sommeil chez l’humain d'ici
  2030.`,
  },
];

export const CardItem = () => {
  return (
    <>
      {dummyData.map((data, i) => (
        <Card
          key={data.title}
          media={data.media}
          title={data.title}
          description={data.description}
          isVideo={data.isVideo}
          style={i % 2 === 0 && "lg:flex-row-reverse"}
        />
      ))}
      <div className="lg:flex">
        {secondDummyData.map((data, i) => (
          <Card
            key={data.title}
            media={data.media}
            title={data.title}
            description={data.description}
            isVideo={data.isVideo}
            style={"lg:flex-col lg:h-full"}
            special={true}
          />
        ))}
      </div>
    </>
  );
};
