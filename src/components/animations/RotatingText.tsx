import React, { useState, useEffect } from "react";

export const RotatingText = ({ 
  words, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 2000 
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Si está borrando, va más rápido
      setTypingDelay(isDeleting ? deletingSpeed : typingSpeed);

      if (!isDeleting && text === fullText) {
        // Pausa antes de borrar
        setTypingDelay(pauseDuration);
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        // Pasa a la siguiente palabra
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingDelay(500); // pequeña pausa antes de volver a escribir
      }
    };

    const timer = setTimeout(handleTyping, typingDelay);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingDelay, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-block text-white font-bold">
      {text}
      <span className="animate-pulse ml-[2px] w-[3px] h-6 inline-block bg-blue-500 align-middle -mt-1"></span>
    </span>
  );
};
