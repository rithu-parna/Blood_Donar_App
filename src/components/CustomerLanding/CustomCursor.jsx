import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Trailing ring spring configuration
    const ringX = useSpring(mouseX, { damping: 30, stiffness: 200 });
    const ringY = useSpring(mouseY, { damping: 30, stiffness: 200 });

    // Direct dot spring configuration (faster)
    const dotX = useSpring(mouseX, { damping: 50, stiffness: 1000 });
    const dotY = useSpring(mouseY, { damping: 50, stiffness: 1000 });

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive');

        window.addEventListener("mousemove", moveMouse);

        interactiveElements.forEach(el => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        // Cleanup observer for dynamic content
        const observer = new MutationObserver(() => {
            const currentElements = document.querySelectorAll('a, button, [role="button"], .interactive');
            currentElements.forEach(el => {
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            interactiveElements.forEach(el => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <style>
                {`
          body, a, button, [role="button"], .interactive {
            cursor: none !important;
          }
        `}
            </style>

            {/* Outer Ring */}
            <motion.div
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? "rgba(225, 29, 72, 0.1)" : "rgba(225, 29, 72, 0)",
                    borderColor: isHovering ? "#E11D48" : "#E11D48",
                }}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    border: "1.5px solid #E11D48",
                    pointerEvents: "none",
                    zIndex: 99999,
                    translateX: ringX,
                    translateY: ringY,
                    x: "-50%",
                    y: "-50%",
                }}
            />

            {/* Inner Dot */}
            <motion.div
                animate={{
                    scale: isHovering ? 0.5 : 1,
                }}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#E11D48",
                    pointerEvents: "none",
                    zIndex: 99999,
                    translateX: dotX,
                    translateY: dotY,
                    x: "-50%",
                    y: "-50%",
                }}
            />
        </>
    );
};

export default CustomCursor;
