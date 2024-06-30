import Image from "next/image";
import Link from "next/link";

export const Card = ({
  media,
  title,
  description,
  isVideo,
  style,
  special,
}) => {
  return (
    <div className="px-2 my-8 lg:my-12 lg:flex-1">
      <div
        className={`border border-slate-300 rounded-xl lg:flex ${
          !special && " lg:border-0 lg:gap-16"
        } ${style}`}>
        <div
          className={`relative h-[358px] ${
            special ? "lg:w-full" : "lg:w-1/2"
          } lg:h-[300px]`}>
          <Link href={"#"}>
            <Image
              src={media}
              fill
              alt="flag"
              className={`object-cover ${
                special ? "rounded-t-xl" : "rounded-xl"
              }`}
            />
            {isVideo && (
              <div className="h-16 w-16 absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={"/play.png"}
                  fill
                  alt="play btn"
                  className="object-cover"
                />
              </div>
            )}
          </Link>
        </div>
        <div
          className={`p-4 ${
            special ? "" : "lg:w-1/2"
          } lg:flex lg:flex-col lg:gap-4`}>
          <Link href={"#"}>
            <h1 className="font-bold text-2xl">{title}</h1>
          </Link>
          <p className="text-sm my-4 lg:text-base">{description}</p>
          <div className="flex gap-4 items-center">
            <Link href={"#"} className="font-bold">
              En savoir plus
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
    </div>
  );
};
