import { useState, useEffect } from "react";
import { Trash2, TrendingUp, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-recycling.jpg";

const Index = () => {
  const [trashData, setTrashData] = useState([
    { name: "Lixeira 1", nivel: 85, status: "warning" },
    { name: "Lixeira 2", nivel: 45, status: "normal" },
    { name: "Lixeira 3", nivel: 95, status: "danger" },
    { name: "Lixeira 4", nivel: 30, status: "normal" },
    { name: "Lixeira 5", nivel: 70, status: "warning" },
  ]);

  // Simula atualização dos dados do sensor
  useEffect(() => {
    const interval = setInterval(() => {
      setTrashData((prevData) =>
        prevData.map((item) => {
          const randomChange = Math.floor(Math.random() * 10) - 5;
          const newLevel = Math.max(0, Math.min(100, item.nivel + randomChange));
          let status = "normal";
          if (newLevel >= 90) status = "danger";
          else if (newLevel >= 70) status = "warning";
          return { ...item, nivel: newLevel, status };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getBarColor = (status: string) => {
    if (status === "danger") return "hsl(var(--danger))";
    if (status === "warning") return "hsl(var(--warning))";
    return "hsl(var(--success))";
  };

  const totalTrash = trashData.reduce((sum, item) => sum + item.nivel, 0);
  const averageLevel = Math.round(totalTrash / trashData.length);
  const criticalBins = trashData.filter((item) => item.status === "danger").length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={heroImage}
            alt="Sistema de Reciclagem Inteligente"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50 flex items-center">
            <div className="container">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                TrashTracker
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Monitoramento inteligente de lixeiras com sensores ultrassônicos para um gerenciamento mais eficiente e sustentável.
              </p>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="container py-12">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Nível Médio</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{averageLevel}%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Média de todas as lixeiras
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Lixeiras Ativas</CardTitle>
                <Trash2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{trashData.length}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Total em monitoramento
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Alertas Críticos</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{criticalBins}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Requerem atenção imediata
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Nível das Lixeiras em Tempo Real</CardTitle>
              <CardDescription>
                Dados atualizados automaticamente pelo sensor ultrassônico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={trashData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    domain={[0, 100]}
                    label={{ value: "Nível (%)", angle: -90, position: "insideLeft" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Bar
                    dataKey="nivel"
                    radius={[8, 8, 0, 0]}
                  >
                    {trashData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getBarColor(entry.status)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: "hsl(var(--success))" }}></div>
              <span className="text-sm text-muted-foreground">Normal (0-69%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: "hsl(var(--warning))" }}></div>
              <span className="text-sm text-muted-foreground">Atenção (70-89%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: "hsl(var(--danger))" }}></div>
              <span className="text-sm text-muted-foreground">Crítico (90-100%)</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
