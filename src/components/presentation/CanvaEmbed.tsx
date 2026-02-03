import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";
import { useState } from "react";

interface CanvaEmbedProps {
  /** Canva design embed URL (from Share > Embed) */
  embedUrl: string;
  /** Title for accessibility */
  title?: string;
  /** Optional width (default: 100%) */
  width?: string;
  /** Optional height (default: 600px) */
  height?: string;
  /** Show "Open in Canva" link */
  showExternalLink?: boolean;
  /** Canva design URL for external link */
  designUrl?: string;
}

export function CanvaEmbed({
  embedUrl,
  title = "Canva Design",
  width = "100%",
  height = "600px",
  showExternalLink = true,
  designUrl,
}: CanvaEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full"
    >
      {/* Header with title and external link */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {showExternalLink && designUrl && (
          <a
            href={designUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <span>เปิดใน Canva</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Embed container */}
      <div
        className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-lg"
        style={{ width, height }}
      >
        {/* Loading state */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-card z-10">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <p className="text-sm text-muted-foreground">กำลังโหลด...</p>
            </div>
          </div>
        )}

        {/* Error state */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-card z-10">
            <div className="flex flex-col items-center gap-3 text-center p-6">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-destructive" />
              </div>
              <p className="text-foreground font-medium">ไม่สามารถโหลด Canva Design ได้</p>
              <p className="text-sm text-muted-foreground">กรุณาตรวจสอบ URL หรือสิทธิ์การเข้าถึง</p>
              {designUrl && (
                <a
                  href={designUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <span>เปิดใน Canva</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Canva iframe */}
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          style={{ border: "none" }}
          allowFullScreen
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />
      </div>

      {/* Footer hint */}
      <p className="mt-3 text-xs text-muted-foreground text-center">
        💡 คลิกที่ Presentation เพื่อดูแบบเต็มจอ หรือกด Play เพื่อดู Animation
      </p>
    </motion.div>
  );
}

// Placeholder component when no Canva URL is provided
export function CanvaPlaceholder({
  title = "Canva Design",
  description = "เชื่อมต่อ Canva Design ของคุณเพื่อแสดงที่นี่",
  height = "400px",
}: {
  title?: string;
  description?: string;
  height?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div
        className="relative rounded-2xl overflow-hidden border-2 border-dashed border-border bg-secondary/30 flex flex-col items-center justify-center"
        style={{ height }}
      >
        <div className="text-center p-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V5zm2 2v10h12V7H6zm3 2h6c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 max-w-md">{description}</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground">
            <code className="text-primary">embedUrl="https://www.canva.com/design/..."</code>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
