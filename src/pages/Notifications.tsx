import { Bell, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
  const { t, i18n } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <motion.div 
          key={i18n.language}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Bell className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{t("notifications.title")}</h1>
            <p className="text-lg text-muted-foreground">
              {t("notifications.subtitle")}
            </p>
          </div>

          <div className="space-y-4">
            {notifications.map((notification, index) => {
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
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.01 }}
                >
                <Alert variant={alertVariant} className="border-2">
                  <Icon className="h-5 w-5" />
                  <div className="flex items-start justify-between flex-1">
                    <div>
                      <AlertTitle className="mb-2 flex items-center gap-2">
                        {notification.title}
                        <Badge className={badgeClass}>
                          {notification.type === "danger" && t("notifications.urgent")}
                          {notification.type === "warning" && t("notifications.attention")}
                          {notification.type === "success" && t("notifications.completed")}
                          {notification.type === "info" && t("notifications.info")}
                        </Badge>
                      </AlertTitle>
                      <AlertDescription className="mb-2">
                        {notification.message}
                      </AlertDescription>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                </Alert>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="mt-12 bg-card border border-border rounded-lg p-6"
            whileHover={{ scale: 1.01, y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">{t("notifications.settingsTitle")}</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{t("notifications.criticalAlerts")}</p>
                  <p className="text-sm text-muted-foreground">{t("notifications.criticalAlertsDesc")}</p>
                </div>
                <Badge className="bg-success text-white">{t("notifications.active")}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{t("notifications.maintenanceAlerts")}</p>
                  <p className="text-sm text-muted-foreground">{t("notifications.maintenanceAlertsDesc")}</p>
                </div>
                <Badge className="bg-success text-white">{t("notifications.active")}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{t("notifications.weeklyReports")}</p>
                  <p className="text-sm text-muted-foreground">{t("notifications.weeklyReportsDesc")}</p>
                </div>
                <Badge className="bg-success text-white">{t("notifications.active")}</Badge>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Notifications;
