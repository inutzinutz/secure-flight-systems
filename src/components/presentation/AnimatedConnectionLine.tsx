import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ConnectionNode {
  id: string;
  label: string;
  icon?: ReactNode;
  description?: string;
  color?: string;
}

interface AnimatedConnectionLineProps {
  nodes: ConnectionNode[];
  direction?: "horizontal" | "vertical";
  showLabels?: boolean;
  animated?: boolean;
  lineColor?: string;
  className?: string;
}

export function AnimatedConnectionLine({
  nodes,
  direction = "horizontal",
  showLabels = true,
  animated = true,
  lineColor = "hsl(var(--primary))",
  className = "",
}: AnimatedConnectionLineProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={`relative ${
        isHorizontal ? "flex items-center justify-center gap-0" : "flex flex-col items-center gap-0"
      } ${className}`}
    >
      {nodes.map((node, index) => (
        <div
          key={node.id}
          className={`flex ${isHorizontal ? "flex-col items-center" : "flex-row items-center"}`}
        >
          {/* Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
            className="relative z-10"
          >
            <div
              className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg border-2 border-border ${
                node.color || "bg-card"
              }`}
              style={node.color ? { background: node.color } : undefined}
            >
              {node.icon && (
                <div className="text-white">{node.icon}</div>
              )}
            </div>
            {showLabels && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.2, duration: 0.3 }}
                className={`absolute ${
                  isHorizontal ? "top-full mt-3" : "left-full ml-4"
                } whitespace-nowrap`}
              >
                <p className="text-sm font-semibold text-foreground text-center">{node.label}</p>
                {node.description && (
                  <p className="text-xs text-muted-foreground text-center max-w-[120px]">
                    {node.description}
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Connection Line (not for last node) */}
          {index < nodes.length - 1 && (
            <div
              className={`relative ${
                isHorizontal ? "w-16 md:w-24 h-1" : "h-16 md:h-24 w-1"
              }`}
            >
              {/* Background line */}
              <div
                className={`absolute ${
                  isHorizontal ? "inset-y-0 inset-x-0" : "inset-x-0 inset-y-0"
                } bg-border rounded-full`}
              />

              {/* Animated line */}
              <motion.div
                initial={{ [isHorizontal ? "scaleX" : "scaleY"]: 0 }}
                animate={{ [isHorizontal ? "scaleX" : "scaleY"]: 1 }}
                transition={{
                  delay: index * 0.2 + 0.3,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className={`absolute ${
                  isHorizontal ? "inset-y-0 left-0 right-0 origin-left" : "inset-x-0 top-0 bottom-0 origin-top"
                } rounded-full`}
                style={{ backgroundColor: lineColor }}
              />

              {/* Animated dot traveling along the line */}
              {animated && (
                <motion.div
                  className="absolute w-3 h-3 rounded-full shadow-lg"
                  style={{ backgroundColor: lineColor }}
                  initial={{
                    [isHorizontal ? "left" : "top"]: 0,
                    opacity: 0,
                  }}
                  animate={{
                    [isHorizontal ? "left" : "top"]: ["0%", "100%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    delay: index * 0.2 + 0.8,
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: nodes.length * 0.3,
                    ease: "linear",
                  }}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Flow Diagram with multiple connection paths
interface FlowNode {
  id: string;
  label: string;
  icon?: ReactNode;
  description?: string;
  color?: string;
  children?: FlowNode[];
}

interface AnimatedFlowDiagramProps {
  title?: string;
  subtitle?: string;
  rootNode: FlowNode;
  className?: string;
}

export function AnimatedFlowDiagram({
  title,
  subtitle,
  rootNode,
  className = "",
}: AnimatedFlowDiagramProps) {
  return (
    <div className={`w-full ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && (
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-foreground mb-2"
            >
              {title}
            </motion.h3>
          )}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}

      <div className="flex flex-col items-center">
        {/* Root Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          <div
            className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center shadow-lg text-white"
            style={{ background: rootNode.color || "hsl(var(--primary))" }}
          >
            {rootNode.icon}
            <span className="text-xs font-medium mt-1">{rootNode.label}</span>
          </div>
        </motion.div>

        {/* Connection lines to children */}
        {rootNode.children && rootNode.children.length > 0 && (
          <>
            {/* Vertical line down */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="w-1 h-8 bg-primary origin-top"
            />

            {/* Horizontal connector */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="h-1 bg-primary origin-center"
              style={{
                width: `${Math.max((rootNode.children.length - 1) * 150, 100)}px`,
              }}
            />

            {/* Children */}
            <div className="flex items-start gap-8 mt-0">
              {rootNode.children.map((child, index) => (
                <motion.div
                  key={child.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.15, duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  {/* Vertical line to child */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    className="w-1 h-6 bg-primary origin-top"
                  />

                  {/* Child node */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative"
                  >
                    <div
                      className="w-20 h-20 rounded-xl flex flex-col items-center justify-center shadow-md text-white"
                      style={{ background: child.color || "hsl(var(--secondary-foreground))" }}
                    >
                      {child.icon}
                    </div>
                    <p className="text-center text-sm font-medium text-foreground mt-2 max-w-[100px]">
                      {child.label}
                    </p>
                    {child.description && (
                      <p className="text-center text-xs text-muted-foreground max-w-[120px]">
                        {child.description}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Simple animated arrow between two elements
interface AnimatedArrowProps {
  direction?: "right" | "down" | "left" | "up";
  length?: number;
  animated?: boolean;
  color?: string;
  className?: string;
}

export function AnimatedArrow({
  direction = "right",
  length = 60,
  animated = true,
  color = "hsl(var(--primary))",
  className = "",
}: AnimatedArrowProps) {
  const isHorizontal = direction === "right" || direction === "left";
  const isReverse = direction === "left" || direction === "up";

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: isHorizontal ? length : 20,
        height: isHorizontal ? 20 : length,
        transform: isReverse ? `rotate(180deg)` : undefined,
      }}
    >
      {/* Line */}
      <motion.div
        initial={{ [isHorizontal ? "scaleX" : "scaleY"]: 0 }}
        animate={{ [isHorizontal ? "scaleX" : "scaleY"]: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`absolute ${
          isHorizontal
            ? "left-0 right-4 h-0.5 origin-left"
            : "top-0 bottom-4 w-0.5 origin-top"
        }`}
        style={{ backgroundColor: color }}
      />

      {/* Arrow head */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className={`absolute ${
          isHorizontal ? "right-0" : "bottom-0"
        }`}
        style={{
          width: 0,
          height: 0,
          borderLeft: isHorizontal ? `8px solid ${color}` : "6px solid transparent",
          borderRight: isHorizontal ? "none" : "6px solid transparent",
          borderTop: isHorizontal ? "6px solid transparent" : `8px solid ${color}`,
          borderBottom: isHorizontal ? "6px solid transparent" : "none",
          transform: isHorizontal ? "rotate(180deg)" : "rotate(180deg)",
        }}
      />

      {/* Animated pulse */}
      {animated && (
        <motion.div
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
          animate={{
            [isHorizontal ? "x" : "y"]: [0, length - 10],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
}
