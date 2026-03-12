import { useState, useEffect, useCallback } from "react";

const typingTexts = [
  "I build ML models with 99.76% accuracy.",
  "I detect network intrusions with Random Forest.",
  "I analyze data with Pandas & Scikit-Learn.",
  "I build real-time apps with WebSockets.",
  "I solve DSA problems — LeetCode 1495 rating.",
  "I turn raw data into actionable insights.",
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
