import Link from "next/link";

const CardItem = ({ image, name, url }) => {
  return (
    <div className="p-2 group cursor-pointer hover:bg-gray-300 hover:bg-opacity-60 rounded-md flex flex-col items-center">
      <img className="w-[75px] h-[75px] rounded-md" />
      <p className="text-sm group-hover:text-blue-600 mt-2 font-bold text-center group-hover:underline group-hover:underline-offset-4">
        Saadaoui Salah
      </p>
    </div>
  );
};

const GroupOfCards = ({ title, link, data }) => {
  return (
    <section className="lg:w-[400px] mb-4 md:w-[310px] p-2 border rounded-md border-slate-300">
      <div className="w-full flex justify-center my-2">
        <Link
          href={link}
          className="px-3  text-[24px] hover:text-blue-600 cursor-pointer hover:underline hover:underline-offset-4 font-bold"
        >
          {title}
        </Link>
      </div>
      <div className="flex gap-2 flex-wrap pb-2">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </section>
  );
};
export default GroupOfCards;
