import { Link } from "react-router-dom";
import { Recycle, Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSelector from "@/components/LanguageSelector";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  
  const navLinks = [
    { to: "/", label: t("header.dashboard") },
    { to: "/notifications", label: t("header.notifications") },
    { to: "/comments", label: t("header.comments") },
    { to: "/contact", label: t("header.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Recycle className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">TrashTracker</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link to="/notifications">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                3
              </Badge>
            </Link>
          </Button>

          <LanguageSelector />
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover border-border z-50">
              <DropdownMenuLabel>{t("header.account")}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{t("header.profile")}</DropdownMenuItem>
              <DropdownMenuItem>{t("header.settings")}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{t("header.logout")}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSelector />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                <DropdownMenuSeparator />
                <Link
                  to="/notifications"
                  className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary flex items-center gap-2"
                >
                  <Bell className="h-5 w-5" />
                  {t("header.notifications")}
                  <Badge className="ml-auto">3</Badge>
                </Link>
                <DropdownMenuSeparator />
                <div className="text-sm text-muted-foreground mt-4">
                  <p className="font-medium mb-2">{t("header.account")}</p>
                  <div className="space-y-2">
                    <button className="w-full text-left hover:text-primary transition-colors">
                      {t("header.profile")}
                    </button>
                    <button className="w-full text-left hover:text-primary transition-colors">
                      {t("header.settings")}
                    </button>
                    <button className="w-full text-left hover:text-primary transition-colors">
                      {t("header.logout")}
                    </button>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
