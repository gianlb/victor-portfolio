'use client'

import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'

const AnimatedText: React.FC = () => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    'Olá, me chamo Victor Zampella',
    'Sou desenvolvedor Mobile'
  ];

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings: [''],
        typeSpeed: 50,
        backSpeed: 30,
        showCursor: true,
        cursorChar: '|',
      });

      const typeText = (text: string) => {
        return new Promise<void>((resolve) => {
          if (typed.current) {
            typed.current.strings = [text];
            typed.current.reset(true);
            typed.current.options.onComplete = () => {
              setTimeout(resolve, 1000);
            };
          }
        });
      };

      const eraseText = () => {
        return new Promise<void>((resolve) => {
          if (typed.current && el.current) {
            const text = el.current.textContent || '';
            let i = text.length;
            const interval = setInterval(() => {
              if (i > 0) {
                el.current!.textContent = text.slice(0, --i);
              } else {
                clearInterval(interval);
                resolve();
              }
            }, 30);
          } else {
            resolve();
          }
        });
      };

      const animate = async () => {
        while (true) {
          await typeText(texts[currentTextIndex] + '...');
          await eraseText();
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      };

      animate();
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [currentTextIndex]);

  return (
    <h1 className="text-5xl lg:text-6xl font-bold text-red-600">
      <span ref={el}></span>
    </h1>
  )
}

export default AnimatedText

