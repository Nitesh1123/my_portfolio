import { useState, useEffect, useCallback } from "react";

const typingTexts = [
  "I build RAG pipelines & LLM apps.",
  "I train ML models that solve real problems.",
  "I turn data into actionable insights.",
  "I design end-to-end analytics systems.",
  "I make AI work in the real world.",
];

export const useTypingEffect = (typeSpeed = 100, deleteSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentText = typingTexts[currentIndex];

    if (isDeleting) {
      setDisplayText(currentText.substring(0, displayText.length - 1));
    } else {
      setDisplayText(currentText.substring(0, displayText.length + 1));
    }
  }, [currentIndex, displayText, isDeleting]);

  useEffect(() => {
    const currentText = typingTexts[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
    } else {
      timeout = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, tick, typeSpeed, deleteSpeed, pauseDuration]);

  return displayText;
};
