import React from "react";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { FloatingDock } from "./ui/floating-dock";
import { Home, User, Briefcase, Mail, SquareTerminal } from "lucide-react";

export function DockNavbar() {
  const navItems = [
    {
      title: "Inicio",
      icon: <Home className="h-full w-full text-gray-700" />,
      href: "#inicio",
    },
    {
      title: "Sobre Mí",
      icon: <User className="h-full w-full text-gray-700" />,
      href: "#about",
    },
    {
      title: "Stack",
      icon: <SquareTerminal className="h-full w-full text-gray-700" />,
      href: "#tecno",
    },
    {
      title: "Proyectos",
      icon: <Briefcase className="h-full w-full text-gray-700" />,
      href: "#proyectos",
    },
    {
      title: "Contacto",
      icon: <Mail className="h-full w-full text-gray-700" />,
      href: "#contacto",
    },
  ];

  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (current < 0.05) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100]"
    >
      <FloatingDock items={navItems} />
    </motion.div>
  );
}
