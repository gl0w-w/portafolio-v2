"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FadeUp } from "../animations/FadeUp";

type Card = {
  id: number;
  title?: string;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "overflow-hidden",
              selected?.id === card.id
                ? "rounded-2xl cursor-pointer fixed inset-0 h-[85%] w-[90%] md:h-[80%] md:w-[70%] m-auto z-[60] flex justify-center items-center flex-wrap flex-col shadow-[0_0_50px_-10px_rgba(255,255,255,0.15)]"
                : lastSelected?.id === card.id
                  ? "relative z-40 bg-[#1a1a1a] rounded-3xl h-full w-full border border-white/10 group hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] hover:-translate-y-2 transition-all duration-700 text-white"
                  : "relative bg-[#1a1a1a] rounded-3xl h-full w-full border border-white/10 group hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] hover:-translate-y-2 transition-all duration-700 text-white",
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed inset-0 h-full w-full z-40 transition-all duration-700 ease-in-out",
          selected?.id
            ? "pointer-events-auto bg-black/60 backdrop-blur-md"
            : "pointer-events-none opacity-0 backdrop-blur-none",
        )}
        animate={{ opacity: selected?.id ? 1 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <>
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        height="500"
        width="500"
        className={cn(
          "object-cover object-top absolute inset-0 h-full w-full transition-all duration-700 group-hover:scale-110 group-hover:opacity-60",
        )}
        alt="thumbnail"
      />
      {}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-    
  opacity duration-500 pointer-events-none"
      />
      <div className="absolute bottom-4 left-6 z-20 pointer-events-none">
        <p className="text-white font-bold text-2xl drop-shadow-md">
          {card.title}
        </p>

        <p className="text-blue-400 text-sm mt-1 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ✨ Haz clic para explorar
        </p>
      </div>
    </>
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent z-10 rounded-lg"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
