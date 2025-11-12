import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Contact = () => {
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("contact.messageSent"),
      description: t("contact.messageSentDesc"),
    });
    setFormData({ name: "", email: "", message: "" });
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
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">{t("contact.title")}</h1>
            <p className="text-lg text-muted-foreground">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div 
              className="bg-card border border-border rounded-lg p-6"
              whileHover={{ scale: 1.01, y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">{t("contact.formTitle")}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                    {t("contact.name")}
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                    {t("contact.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                    {t("contact.message")}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full">
                    {t("contact.send")}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div 
                className="bg-card border border-border rounded-lg p-6"
                whileHover={{ scale: 1.01, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h2 className="text-2xl font-semibold text-foreground mb-6">{t("contact.infoTitle")}</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t("contact.email")}</h3>
                      <p className="text-muted-foreground">contato@trashtracker.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t("contact.phone")}</h3>
                      <p className="text-muted-foreground">(11) 9999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t("contact.address")}</h3>
                      <p className="text-muted-foreground">São Paulo, SP<br />Brasil</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-card border border-border rounded-lg p-6"
                whileHover={{ scale: 1.01, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{t("contact.hoursTitle")}</h3>
                <p className="text-muted-foreground" style={{ whiteSpace: "pre-line" }}>
                  {t("contact.hours")}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
