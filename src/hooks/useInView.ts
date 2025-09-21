import { useEffect, useRef, useState } from 'react';

export const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Verificar se já está na viewport no carregamento inicial
    const checkInitialView = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isVisible = rect.top < windowHeight && rect.bottom > 0;
      
      if (isVisible) {
        setIsInView(true);
        return true;
      }
      return false;
    };

    // Se já está visível no carregamento, não precisa do observer
    if (checkInitialView()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Para de observar após entrar na view
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isInView };
};
