import {
  motion,
  useMotionTemplate,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import { GridPattern } from "./GridPattern";
import BlurFade from "./ui/blur-fade";

interface CardHoverEffectProps {
  title: string;
  url: string;
  description: string;
  icon: React.ReactNode;
}

export const CardHoverEffect: React.FC<CardHoverEffectProps> = ({
  title,
  // url,
  description,
  icon,
}) => {
  const pattern = {
    y: 16,
    squares: [
      [0, 1],
      [1, 3],
    ] as Array<[number, number]>,
  };

  // Explicitly type mouseX and mouseY as MotionValue<number>
  const mouseX: MotionValue<number> = useMotionValue(0);
  const mouseY: MotionValue<number> = useMotionValue(0);

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <BlurFade delay={0.4} inView>
      <div
        onMouseMove={onMouseMove}
        // onClick={() => window.open(url, "_blank")}
        className="group rounded-2xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-8 relative max-w-sm cursor-pointer"
      >
        <Effect {...pattern} mouseX={mouseX} mouseY={mouseY} />
        <div className="relative z-10">
          <span>{icon}</span>
          <h3 className="mt-6 text-lg font-semibold text-gray-900 tracking-wide leading-6 antialiased dark:text-slate-100">
            {title}
          </h3>
          <p className="mt-2 text-gray-700 text-[15px] leading-6 antialiased dark:text-slate-100">
            {description}
          </p>
        </div>
      </div>
    </BlurFade>
  );
};

interface EffectProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  squares: Array<[number, number]>;
  x?: string | number;
  y?: string | number;
}

function Effect({ mouseX, mouseY, ...gridProps }: EffectProps) {
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}
