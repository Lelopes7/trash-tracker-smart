import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const languages = [
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.9 }}>
          <Button variant="ghost" size="icon" className="transition-transform">
            <Languages className="h-5 w-5" />
            <span className="sr-only">Selecionar idioma</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-popover border-border z-50">
        {languages.map((language) => (
          <motion.div
            key={language.code}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <DropdownMenuItem
              onClick={() => i18n.changeLanguage(language.code)}
              className={`cursor-pointer ${
                i18n.language === language.code ? "bg-accent" : ""
              }`}
            >
              <span className="mr-2 text-lg">{language.flag}</span>
              <span>{language.name}</span>
            </DropdownMenuItem>
          </motion.div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
