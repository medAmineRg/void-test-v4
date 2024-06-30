import LatestNewsCard from "./LatestNewsCard";

const dummyData = [
  {
    date: "24 février 2024",
    description: `Communiqué : Résultats de phase
  II montrent que le rilzabrutinib
  permet de réduire rapidement la
  sévérité des démangeaisons
  causées par l’urticaire chronique
  spontanée et d’améliorer
  significativement l’activité de la
  maladie chez l’adulte`,
  },
  {
    date: "24 février 2024",
    description: `Media Update: Dupixent®
    continues scientific leadership
    with late-breaking results showing
    reduced airway inflammation and
    mucus plugging in adults with
    uncontrolled moderate-to-severe
    asthma`,
  },
  {
    date: "24 février 2024",
    description: `Communiqué de presse : Dépôt du
    Document d’Enregistrement
    Universel 2023, contenant le
    Rapport Financier Annuel, et du «
    Form 20-F » américain`,
  },
  {
    date: "24 février 2024",
    description: `Communiqué de presse : La FDA
    accorde un examen prioritaire à la
    demande de licence de produits
    biologique relative à Dupixent®
    pour le traitement de la BPCO avec
    inflammation de type 2`,
  },
];

const LatestNewsSection = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-8">Nos dernières informations</h1>
      <div>
        {dummyData.map((d, i) => (
          <div key={i}>
            <hr className="bg-slate-300 h-[1px]" />
            <LatestNewsCard {...d} />
            <hr className="bg-slate-300 h-[1px]" />
          </div>
        ))}
      </div>
      <div className="flex justify-around items-center my-10 lg:justify-end lg:gap-4">
        <p className="font-bold text-lg text-center">
          Voir tous les communiqués de presse
        </p>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.3828 11.4126C18.8711 10.9243 18.8711 10.1313 18.3828 9.64307L12.1328 3.39307C11.6445 2.90479 10.8516 2.90479 10.3633 3.39307C9.875 3.88135 9.875 4.67432 10.3633 5.1626L14.4844 9.27979H2.5C1.80859 9.27979 1.25 9.83838 1.25 10.5298C1.25 11.2212 1.80859 11.7798 2.5 11.7798H14.4805L10.3672 15.897C9.87891 16.3853 9.87891 17.1782 10.3672 17.6665C10.8555 18.1548 11.6484 18.1548 12.1367 17.6665L18.3867 11.4165L18.3828 11.4126Z"
            fill="#7A00E6"
          />
        </svg>
      </div>
    </div>
  );
};

export default LatestNewsSection;
