'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState('');
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 130, damping: 22, mass: 0.25 });
  const ringY = useSpring(mouseY, { stiffness: 130, damping: 22, mass: 0.25 });

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)');
    const updateEnabled = () => setEnabled(media.matches);
    updateEnabled();
    media.addEventListener('change', updateEnabled);
    return () => media.removeEventListener('change', updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add('custom-cursor-enabled');

    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      const target = event.target as HTMLElement;
      const hoverable = target.closest('[data-cursor]') as HTMLElement | null;
      setActive(Boolean(hoverable));
      setLabel(hoverable?.dataset.cursor ?? '');
    };

    const down = () => setActive(true);
    const up = () => setActive(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[100] h-2.5 w-2.5 rounded-full bg-brand-600 dark:bg-brand-300" style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }} />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] grid h-10 w-10 place-items-center rounded-full border border-brand-500/50 bg-white/10 text-[10px] font-semibold uppercase tracking-wider text-brand-700 backdrop-blur dark:text-brand-200"
        animate={{ scale: active ? 1.65 : 1, opacity: active ? 1 : 0.72 }}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        {active ? label : ''}
      </motion.div>
    </>
  );
}
