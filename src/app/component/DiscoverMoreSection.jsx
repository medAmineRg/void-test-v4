import { Card } from "./Card";

const dummyData = [
  {
    media: "/men.png",
    isVideo: false,
    title: "Rapport diversité, équité et inclusion",
    description: `Au cours de la première année complète
      de notre nouvelle stratégie People &
      Culture, les enjeux de Diversité, Équité et
      Inclusion (DE&I) ont occupé le devant de
      la scène. Ce rapport célèbre les progrès
      concrets que nous avons réalisés pour
      refléter la diversité dans nos équipes
      dirigeantes, libérer tout le potentiel de nos
      collaborateurs et collaboratrices et avoir
      un impact sur l’environnement de travail
      mais aussi au-delà.`,
  },
  {
    media: "/micro.png",
    isVideo: false,
    title: "Notre héritage",
    description: `Notre societé d’aujourd’hui s’appuie sur un
    héritage qui consiste à transformer
    l’impossible en possible.`,
  },
  {
    media: "/girl.png",
    isVideo: false,
    title: "Notre rapport intégré 2022",
    description: `Découvrez comment nous rendons
    possible l'impossible pour améliorer la vie
    des gens dans le monde.`,
  },
];

export const DiscoverMoreSection = () => {
  return (
    <div>
      <p className="font-bold text-2xl">Découvrir plus</p>
      {dummyData.map((d) => (
        <Card
          key={d.title}
          media={d.media}
          title={d.title}
          description={d.description}
          isVideo={d.isVideo}
        />
      ))}
    </div>
  );
};
