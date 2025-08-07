import { useTranslation } from "react-i18next";
const Descount = () => {
  const { t } = useTranslation();
  return (
    <div className="container flex flex-col items-center gap-2 justify-center mt-2 mb-2 min-h-[300px] px-2 bg-pink-500 text-1xl text-white text-bold">
      <h2 className="text-2xl"> {t("offers.title")}</h2>
      <h2> {t("offers.subtitle")}</h2>
      <button className="mt-2 bg-white text-pink-500 py-1 px-2 rounded-sm cursor-pointer hover:bg-pink-50 duration-200">
        {" "}
        {t("offers.button")}
      </button>
    </div>
  );
};

export default Descount;
