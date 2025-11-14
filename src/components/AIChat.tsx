import { useState, useRef, useEffect } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const AIChat = ({ isOpen, onClose }: AIChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "👋 ¡Hola! Es un placer conocerte. Como asistente de CioAI, estoy aquí para ayudarte con cualquier cosa relacionada con la generación de vídeo con IA.\n\n¿En qué puedo ayudarte hoy?\n\nPor ejemplo, podría:\n\n🔍 **Comparar herramientas** como Sora 2, Veo 3.1 o Runway Gen-3\n\n📚 **Explicarte cómo funcionan** estas herramientas\n\n💰 **Darte información** sobre acceso y precios\n\n📖 **Sugerirte artículos** específicos de nuestro sitio\n\n¡Solo dime lo que necesitas!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const quickSuggestions = [
    { emoji: "⚖️", text: "Comparar Sora 2 vs Veo 3.1", query: "Compara Sora 2 y Veo 3.1 en detalle" },
    { emoji: "📚", text: "Tutorial de Sora 2", query: "¿Tienes un tutorial completo de Sora 2?" },
    { emoji: "💰", text: "Precios y acceso", query: "¿Cuánto cuesta Sora 2 y cómo puedo acceder?" },
    { emoji: "🎬", text: "Mejores herramientas", query: "¿Cuál es la mejor herramienta de IA para crear videos?" },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat`;
      
      const response = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error("Error al conectar con el asistente");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let assistantContent = "";

      if (!reader) throw new Error("No se pudo iniciar la respuesta");

      // Add empty assistant message
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        textBuffer += decoder.decode(value, { stream: true });
        let newlineIndex: number;

        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages((prev) => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  role: "assistant",
                  content: assistantContent,
                };
                return newMessages;
              });
            }
          } catch {
            // Incomplete JSON, wait for more data
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "❌ Error",
        description: "No se pudo conectar con el asistente. Intenta de nuevo.",
        variant: "destructive",
      });
      // Remove the empty assistant message on error
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickSuggestion = (query: string) => {
    setInput(query);
  };

  return (
    <div
      className={cn(
        "fixed top-0 right-0 h-screen w-[420px] bg-background border-l border-border/50 shadow-xl transition-transform duration-300 ease-in-out z-50 flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 shrink-0">
        <div className="flex items-center gap-3">
          <div className="text-2xl">✨</div>
          <div>
            <h3 className="font-semibold text-base">Asistente CioAI</h3>
            <p className="text-xs text-muted-foreground">Pregunta lo que necesites</p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="rounded-full h-8 w-8 hover:bg-secondary/50"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 px-6 py-4" ref={scrollRef as any}>
        <div className="space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                "flex gap-3 animate-fade-in",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "assistant" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-lg shadow-sm">
                  ✨
                </div>
              )}
              <div
                className={cn(
                  "max-w-[85%] rounded-3xl px-4 py-3 text-[13px] leading-relaxed",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary/30 text-foreground"
                )}
              >
                {message.role === "assistant" ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_p]:my-2 [&_strong]:font-semibold [&_ul]:my-2 [&_ol]:my-2 [&_li]:my-0.5">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({ ...props }) => (
                          <a
                            {...props}
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        ),
                        img: ({ ...props }) => (
                          <img {...props} className="rounded-lg my-2 max-w-full" />
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap">{message.content}</div>
                )}
              </div>
              {message.role === "user" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center text-lg shadow-sm">
                  👤
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 animate-fade-in">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-lg shadow-sm">
                ✨
              </div>
              <div className="bg-secondary/30 rounded-3xl px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Quick Suggestions */}
      {messages.length === 1 && !isLoading && (
        <div className="px-6 pb-4 border-t border-border/50 shrink-0">
          <p className="text-xs font-medium text-muted-foreground mb-3 mt-4">💡 Sugerencias:</p>
          <div className="grid grid-cols-2 gap-2">
            {quickSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleQuickSuggestion(suggestion.query)}
                className="p-3 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-border/30 hover:border-border/60 transition-all text-left group"
              >
                <div className="text-xl mb-1 group-hover:scale-105 transition-transform">{suggestion.emoji}</div>
                <p className="text-[11px] font-medium leading-tight text-foreground/90">{suggestion.text}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="px-6 py-4 border-t border-border/50 shrink-0">
        <div className="flex gap-2 items-end">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            placeholder="Escribe tu pregunta..."
            disabled={isLoading}
            className="flex-1 rounded-full border-border/50 bg-secondary/30 focus-visible:ring-1 focus-visible:ring-primary px-4 text-sm"
          />
          <Button 
            onClick={handleSend} 
            disabled={isLoading || !input.trim()} 
            size="icon"
            className="rounded-full h-10 w-10 shrink-0 shadow-sm hover:shadow-md transition-all disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-[10px] text-muted-foreground/60 mt-2 text-center">
          Asistente potenciado por IA
        </p>
      </div>
    </div>
  );
};
