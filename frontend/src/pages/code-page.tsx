import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useParams } from "react-router-dom";

const CodePreviewer = () => {
  const { num } = useParams<{ num: string }>();
  const [code, setCode] = useState<string>("Завантаження...");
  const [copied, setCopied] = useState(false);
  const files = import.meta.glob("/src/code/*.cs", {
    query: "?raw",
    import: "default",
  });

  useEffect(() => {
    if (!num) return;

    const loadCode = async () => {
      try {
        const filePath = `/src/code/Code${num}.cs`;
        if (files[filePath]) {
          const text = await files[filePath]();
          if (typeof text === "string") {
            setCode(text);
          } else {
            setCode("// Помилка завантаження файлу");
          }
        } else {
          throw new Error("Файл не знайдено");
        }
      } catch (error) {
        console.error(error);
        setCode("// Помилка завантаження файлу");
      }
    };

    loadCode();
  }, [num]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="overflow-hidden m-8">
      <CardHeader className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold">Code Preview</h2>
        <Button variant="ghost" size="sm" onClick={handleCopy}>
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </CardHeader>
      <Separator />
      <CardContent className="p-4">
        <SyntaxHighlighter language="csharp" style={oneDark} showLineNumbers>
          {code}
        </SyntaxHighlighter>
      </CardContent>
    </Card>
  );
};

export default CodePreviewer;
