import NewArticleCard from "./NewArticleCard";

const dummyData = [
  {
    media: "/girl.jpeg",
    title: `Your Health`,
    date: "27 Février 2024",
    description: `Journée des maladies
    rares 2024 : L'équité en
    action`,
  },
  {
    media: "/nojargon.png",
    title: `Your Health`,
    date: "27 Février 2024",
    description: `#NoJargon: Plongez
    dans le monde de la
    science`,
  },
  {
    media: "/people.png",
    title: `Your Health`,
    date: "27 Février 2024",
    description: `Cancer et travail : Agir
    ensemble`,
  },
];

const NewArticlesSection = () => {
  return (
    <div className="">
      <hr className="bg-slate-300 h-[1px]" />
      <h1 className="text-2xl font-bold mt-4">Entreprise</h1>
      <h1 className="text-2xl font-bold">Today</h1>
      <div className="flex items-center gap-4">
        <h2 className="font-bold">Lisez nos derniers articles</h2>
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.6228 8.7627C18.1111 8.27441 18.1111 7.48145 17.6228 6.99316L11.3728 0.743164C10.8845 0.254883 10.0916 0.254883 9.60327 0.743164C9.11499 1.23145 9.11499 2.02441 9.60327 2.5127L13.7244 6.62988H1.73999C1.04858 6.62988 0.48999 7.18848 0.48999 7.87988C0.48999 8.57129 1.04858 9.12988 1.73999 9.12988H13.7205L9.60718 13.2471C9.1189 13.7354 9.1189 14.5283 9.60718 15.0166C10.0955 15.5049 10.8884 15.5049 11.3767 15.0166L17.6267 8.7666L17.6228 8.7627Z"
            fill="#7A00E6"
          />
        </svg>
      </div>
      <div className="my-8 flex gap-4 overflow-hidden">
        {dummyData.map((d) => (
          <NewArticleCard key={d.title} {...d} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div>1/3</div>
        <div className="flex gap-4">
          <svg
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="1.02979"
              width="35"
              height="35"
              rx="17.5"
              stroke="#AEAEAE"
            />
            <path
              d="M11.2937 17.8234C10.9031 18.2141 10.9031 18.8484 11.2937 19.2391L16.2937 24.2391C16.6843 24.6297 17.3187 24.6297 17.7093 24.2391C18.1 23.8484 18.1 23.2141 17.7093 22.8234L14.4125 19.5297H24C24.5531 19.5297 25 19.0828 25 18.5297C25 17.9766 24.5531 17.5297 24 17.5297H14.4156L17.7062 14.2359C18.0968 13.8453 18.0968 13.2109 17.7062 12.8203C17.3156 12.4297 16.6812 12.4297 16.2906 12.8203L11.2906 17.8203L11.2937 17.8234Z"
              fill="#AEAEAE"
            />
          </svg>
          <svg
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0.5"
              y="1.02979"
              width="35"
              height="35"
              rx="17.5"
              stroke="#7A00E6"
            />
            <path
              d="M24.7063 19.2359C25.0969 18.8453 25.0969 18.2109 24.7063 17.8203L19.7063 12.8203C19.3156 12.4297 18.6813 12.4297 18.2906 12.8203C17.9 13.2109 17.9 13.8453 18.2906 14.2359L21.5875 17.5297H12C11.4469 17.5297 11 17.9766 11 18.5297C11 19.0828 11.4469 19.5297 12 19.5297H21.5844L18.2937 22.8234C17.9031 23.2141 17.9031 23.8484 18.2937 24.2391C18.6844 24.6297 19.3188 24.6297 19.7094 24.2391L24.7094 19.2391L24.7063 19.2359Z"
              fill="#7A00E6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NewArticlesSection;
