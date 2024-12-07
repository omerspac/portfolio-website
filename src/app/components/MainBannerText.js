"use client"
import { useEffect, useState } from "react";

export default function MainBannerText() {
  const [text, setText] = useState("");
  const words = ["NextJS Developer", "Graphics Designer", "3D Artist"];
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      setText(currentChar); 

      if (!isDeleting && currentChar.length < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
      } else if (isDeleting && currentChar.length > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
      } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
      }
    };

    typeEffect();

    return () => {
      wordIndex = 0;
      charIndex = 0;
      isDeleting = false;
    };
  }, []);
  return (
    <p className="home-text2">{text}</p>
  );
}
