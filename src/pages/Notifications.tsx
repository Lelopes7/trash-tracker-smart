import { Bell, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notifications = [
  {
    id: 1,
    type: "danger",
    title: "Lixeira Crítica",
    message: "Lixeira #1 está 95% cheia. Esvaziamento urgente necessário.",
    time: "5 minutos atrás",
    icon: AlertCircle,
  },
  {
    id: 2,
    type: "warning",
    title: "Nível Alto",
    message: "Lixeira #2 atingiu 80% da capacidade.",
    time: "1 hora atrás",
    icon: AlertCircle,
  },
  {
    id: 3,
    type: "success",
    title: "Lixeira Esvaziada",
    message: "Lixeira #3 foi esvaziada com sucesso.",
    time: "2 horas atrás",
    icon: CheckCircle,
  },
  {
    id: 4,
    type: "info",
    title: "Manutenção Programada",
    message: "Manutenção preventiva agendada para amanhã.",
    time: "3 horas atrás",
    icon: Info,
  },
];

const Notifications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Bell className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Notificações</h1>
            <p className="text-lg text-muted-foreground">
              Acompanhe os alertas sobre o nível das lixeiras em tempo real
            </p>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => {
              const Icon = notification.icon;
              let alertVariant: "default" | "destructive" = "default";
              let badgeClass = "bg-primary";

              if (notification.type === "danger") {
                alertVariant = "destructive";
                badgeClass = "bg-danger text-white";
              } else if (notification.type === "warning") {
                badgeClass = "bg-warning text-white";
              } else if (notification.type === "success") {
                badgeClass = "bg-success text-white";
              }

              return (
                <Alert key={notification.id} variant={alertVariant} className="border-2">
                  <Icon className="h-5 w-5" />
                  <div className="flex items-start justify-between flex-1">
                    <div>
                      <AlertTitle className="mb-2 flex items-center gap-2">
                        {notification.title}
                        <Badge className={badgeClass}>
                          {notification.type === "danger" && "Urgente"}
                          {notification.type === "warning" && "Atenção"}
                          {notification.type === "success" && "Concluído"}
                          {notification.type === "info" && "Info"}
                        </Badge>
                      </AlertTitle>
                      <AlertDescription className="mb-2">
                        {notification.message}
                      </AlertDescription>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                </Alert>
              );
            })}
          </div>

          <div className="mt-12 bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Configurações de Notificações</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Alertas de Nível Crítico</p>
                  <p className="text-sm text-muted-foreground">Receba notificações quando a lixeira estiver 90% cheia</p>
                </div>
                <Badge className="bg-success text-white">Ativo</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Alertas de Manutenção</p>
                  <p className="text-sm text-muted-foreground">Notificações sobre manutenções programadas</p>
                </div>
                <Badge className="bg-success text-white">Ativo</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Relatórios Semanais</p>
                  <p className="text-sm text-muted-foreground">Resumo semanal do status das lixeiras</p>
                </div>
                <Badge className="bg-success text-white">Ativo</Badge>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Notifications;
