import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Comments = () => {
  const { toast } = useToast();
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Comentário enviado!",
      description: "Obrigado pelo seu feedback.",
    });
    setComment("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Comentários e Sugestões</h1>
            <p className="text-lg text-muted-foreground">
              Sua opinião é muito importante para melhorarmos nosso serviço.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="comment" className="text-sm font-medium text-foreground block mb-2">
                  Seu Comentário
                </label>
                <Textarea
                  id="comment"
                  placeholder="Compartilhe suas ideias, sugestões ou experiências com o TrashTracker..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={8}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Enviar Comentário
              </Button>
            </form>
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Comentários Recentes</h2>
            
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">M</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-foreground">Maria Silva</span>
                      <span className="text-sm text-muted-foreground">há 2 dias</span>
                    </div>
                    <p className="text-muted-foreground">
                      Excelente sistema! Conseguimos reduzir significativamente o desperdício com o monitoramento em tempo real.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">J</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-foreground">João Santos</span>
                      <span className="text-sm text-muted-foreground">há 5 dias</span>
                    </div>
                    <p className="text-muted-foreground">
                      Interface muito intuitiva. As notificações ajudam muito no gerenciamento eficiente das lixeiras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Comments;
