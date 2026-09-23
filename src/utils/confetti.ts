import confetti from 'canvas-confetti';

export const triggerPastelConfetti = () => {
  // Pastel beach colors: sky blue, coral pink, peach orange, buttery sun yellow, mint green, lavender
  const colors = ['#7DD3FC', '#FDA4AF', '#FDBA74', '#FDE047', '#86EFAC', '#D8B4FE', '#5EEAD4'];

  // Left burst
  confetti({
    particleCount: 40,
    angle: 60,
    spread: 55,
    origin: { x: 0.1, y: 0.8 },
    colors: colors,
    shapes: ['circle', 'square'],
    scalar: 1.1,
  });

  // Right burst
  confetti({
    particleCount: 40,
    angle: 120,
    spread: 55,
    origin: { x: 0.9, y: 0.8 },
    colors: colors,
    shapes: ['circle', 'square'],
    scalar: 1.1,
  });
};
