import Image from "next/image";
import Link from "next/link";

const NewArticleCard = ({ media, date, title, description }) => {
  return (
    <div className="rounded-xl border border-slate-300 overflow-hidden flex-shrink-0 w-[280px] lg:flex-1">
      <div className="relative h-[358px]">
        <Image
          src={media}
          fill
          alt={title}
          className="object-cover rounded-t-xl"
        />
      </div>
      <div className="p-4">
        <p>{title}</p>
        <p>{date}</p>
        <h1 className="font-bold text-lg mt-1 mb-4">{description}</h1>
        <div className="flex gap-4 items-center">
          <Link href={"#"} className="font-bold">
            {`Lire l'article`}
          </Link>
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.1162 7.33604C14.5068 6.94541 14.5068 6.31104 14.1162 5.92041L9.11616 0.92041C8.72554 0.529785 8.09116 0.529785 7.70054 0.92041C7.30991 1.31104 7.30991 1.94541 7.70054 2.33604L10.9974 5.62979H1.40991C0.856787 5.62979 0.409912 6.07666 0.409912 6.62979C0.409912 7.18291 0.856787 7.62979 1.40991 7.62979H10.9943L7.70366 10.9235C7.31304 11.3142 7.31304 11.9485 7.70366 12.3392C8.09429 12.7298 8.72866 12.7298 9.11929 12.3392L14.1193 7.33916L14.1162 7.33604Z"
              fill="#7A00E6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NewArticleCard;
