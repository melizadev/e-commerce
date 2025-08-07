import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-pink-600 mb-4">
              {t("footer.contact")}
            </h3>
            <p className="text-sm">Email: beuhelp@tiendam.com</p>
            <p className="text-sm">Tel: +34 912 325 1111</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-pink-600 mb-4">
              {t("footer.follow")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-pink-600 mb-4">
              {t("footer.location")}
            </h3>
            <p className="text-sm">Calle de la Moda 123</p>
            <p className="text-sm">Madrid, España</p>
            <p className="text-sm">C.P. 28001</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-pink-600 mb-4">
              {t("footer.help")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/faq" className="hover:underline">
                  {t("footer.faqs")}
                </a>
              </li>
              <li>
                <a href="/envios" className="hover:underline">
                  {t("footer.shipping")}
                </a>
              </li>
              <li>
                <a href="#">{t("footer.privacy")}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
