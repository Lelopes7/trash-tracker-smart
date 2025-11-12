import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Comments = () => {
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("comments.commentSent"),
      description: t("comments.commentSentDesc"),
    });
    setComment("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <motion.div 
          key={i18n.language}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{t("comments.title")}</h1>
            <p className="text-lg text-muted-foreground">
              {t("comments.subtitle")}
            </p>
          </div>

          <motion.div 
            className="bg-card border border-border rounded-lg p-8"
            whileHover={{ scale: 1.01, y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="comment" className="text-sm font-medium text-foreground block mb-2">
                  {t("comments.yourComment")}
                </label>
                <Textarea
                  id="comment"
                  placeholder={t("comments.placeholder")}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={8}
                  required
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full" size="lg">
                  {t("comments.submit")}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">{t("comments.recentTitle")}</h2>
            
            <div className="space-y-4">
              <motion.div 
                className="bg-card border border-border rounded-lg p-6"
                whileHover={{ x: 5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">M</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-foreground">Maria Silva</span>
                      <span className="text-sm text-muted-foreground">{t("comments.daysAgo", { days: 2 })}</span>
                    </div>
                    <p className="text-muted-foreground">
                      Excelente sistema! Conseguimos reduzir significativamente o desperdício com o monitoramento em tempo real.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-card border border-border rounded-lg p-6"
                whileHover={{ x: 5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">J</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-foreground">João Santos</span>
                      <span className="text-sm text-muted-foreground">{t("comments.daysAgo", { days: 5 })}</span>
                    </div>
                    <p className="text-muted-foreground">
                      Interface muito intuitiva. As notificações ajudam muito no gerenciamento eficiente das lixeiras.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Comments;
