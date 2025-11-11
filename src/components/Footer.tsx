import { Recycle, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Recycle className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">TrashTracker</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Monitoramento inteligente de lixeiras para um futuro mais sustentável.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/notifications" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Notificações
                </Link>
              </li>
              <li>
                <Link to="/comments" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Comentários
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                contato@trashtracker.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                (11) 9999-9999
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                São Paulo, SP
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Sobre</h3>
            <p className="text-sm text-muted-foreground">
              Sistema de monitoramento que utiliza sensores ultrassônicos para medir níveis de lixo em tempo real.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} TrashTracker. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
