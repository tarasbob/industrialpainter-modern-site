import React from "react";

const filterMotionProps = (props: Record<string, unknown>) => {
  const motionKeys = [
    "initial",
    "animate",
    "whileInView",
    "whileHover",
    "whileTap",
    "viewport",
    "transition",
    "exit",
    "variants",
    "layout",
    "layoutId",
  ];
  const filtered: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(props)) {
    if (!motionKeys.includes(key)) {
      filtered[key] = val;
    }
  }
  return filtered;
};

const handler: ProxyHandler<Record<string, unknown>> = {
  get(_target, prop: string) {
    const Component = React.forwardRef(
      (
        {
          children,
          ...props
        }: React.PropsWithChildren<Record<string, unknown>>,
        ref: React.Ref<unknown>
      ) => React.createElement(prop, { ...filterMotionProps(props), ref }, children)
    );
    Component.displayName = `motion.${prop}`;
    return Component;
  },
};

export const motion = new Proxy({}, handler);

export const AnimatePresence = ({
  children,
}: React.PropsWithChildren) => <>{children}</>;

export const useAnimation = () => ({
  start: () => Promise.resolve(),
  set: () => {},
});

export const useInView = () => true;

export const useScroll = () => ({
  scrollYProgress: { get: () => 0 },
});

export const useTransform = () => 0;
