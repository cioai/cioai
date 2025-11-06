import { useState, useEffect } from "react";
import { Search, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchDialog = ({ isOpen, onClose }: SearchDialogProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        // Toggle search
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const recentSearches = ["Sora 2", "Prompt engineering", "IA video"];
  const trending = [
    { title: "Sora 2 vs Veo 3.1", category: "Comparativas" },
    { title: "Acceder gratis a Sora 2", category: "Tutoriales" },
    { title: "Prompt Engineering", category: "Guías" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Search Modal */}
      <div className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 animate-slide-up">
        <div className="mx-4 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-6 py-5 border-b">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar artículos, tutoriales, comparativas..."
              className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg"
              autoFocus
            />
            <Badge variant="outline" className="text-xs">
              <kbd className="font-mono">ESC</kbd>
            </Badge>
          </div>

          <ScrollArea className="max-h-[60vh]">
            {query ? (
              /* Search Results */
              <div className="p-4">
                <p className="text-sm text-muted-foreground px-2 mb-3">
                  Resultados para "{query}"
                </p>
                <div className="space-y-1">
                  {[1, 2, 3].map((i) => (
                    <button
                      key={i}
                      className="w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                            Artículo de ejemplo {i}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            Descripción breve del artículo...
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="secondary" className="text-xs">
                              Tutoriales
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              5 min
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Empty State */
              <div className="p-6">
                {/* Recent Searches */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <h3 className="text-sm font-semibold">Búsquedas recientes</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search) => (
                      <Button
                        key={search}
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                        onClick={() => setQuery(search)}
                      >
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Trending */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    <h3 className="text-sm font-semibold">Tendencias</h3>
                  </div>
                  <div className="space-y-1">
                    {trending.map((item) => (
                      <button
                        key={item.title}
                        className="w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium group-hover:text-accent transition-colors">
                              {item.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {item.category}
                            </p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 bg-secondary/50 border-t text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-background rounded border font-mono">
                  ↑↓
                </kbd>
                navegar
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-background rounded border font-mono">
                  ↵
                </kbd>
                seleccionar
              </span>
            </div>
            <span>Buscar con IA →</span>
          </div>
        </div>
      </div>
    </>
  );
};
