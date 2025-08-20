import { useTranslation } from "react-i18next";

const languages = {
  en: { nativeName: "english" },
  es: { nativeName: "spanish" },
};

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const onChange = (e) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <select
      defaultValue="Server location"
      className="select select-neutral h-[30px] border border-[#c5c5c5] w-auto text-sm font-normal capitalize text-gray-500 bg-transparent outline-none focus:outline-none rounded"
      onChange={onChange}
    >
      {Object.keys(languages)?.map((language) => {
        return (
          <option key={language} className="text-black" value={language}>
            {t(`header.${languages[language]?.nativeName}`)}
          </option>
        );
      })}
    </select>
  );
};

export default LanguageSelector;
