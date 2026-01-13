import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-8xl font-serif font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Página Não Encontrada
            </h2>
            <p className="text-muted-foreground mb-8">
              Desculpe, a página que você está procurando não existe ou foi movida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Voltar ao Início
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-primary bg-muted text-foreground hover:bg-muted/80 inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Página Anterior
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
