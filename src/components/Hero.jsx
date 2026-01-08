import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Wrapper specifically for parallax
const ParallaxSticker = ({ speed = 1, mouseX, mouseY, ...props }) => {
    const { scrollY } = useScroll();
    const yScroll = useTransform(scrollY, [0, 1000], [0, speed * 200]);

    // Mouse Parallax: Move slightly based on mouse position
    // Speed determines direction and magnitude
    const xMouse = useTransform(mouseX, [0, window.innerWidth], [-20 * speed, 20 * speed]);
    const yMouse = useTransform(mouseY, [0, window.innerHeight], [-20 * speed, 20 * speed]);

    const springConfig = { damping: 15, stiffness: 150 };
    const x = useSpring(xMouse, springConfig);
    const y = useSpring(useTransform(yScroll, v => v + yMouse.get()), springConfig);

    return (
        <motion.div style={{ x, y, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {/* We need to reset pointer events for the sticker itself to be draggable */}
            <div style={{ pointerEvents: 'auto' }}>
                <Sticker {...props} />
            </div>
        </motion.div>
    );
}

const Sticker = ({ text, style, delay, rotate }) => (
    <motion.div
        initial={{ scale: 0, rotate: rotate || 0 }}
        animate={{
            scale: 1,
            rotate: rotate || 0,
            y: [0, -15, 0]
        }}
        whileHover={{ scale: 1.1, rotate: (rotate || 0) + 10, cursor: 'grab' }}
        whileTap={{ scale: 0.95 }}
        transition={{
            scale: { type: 'spring', stiffness: 300, damping: 15, delay },
            y: { duration: 3 + Math.random(), repeat: Infinity, ease: "easeInOut" }
        }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        style={{
            position: 'absolute',
            padding: '12px 24px',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            boxShadow: '8px 8px 0px rgba(0,0,0,0.1)', // Deeper shadow for "more UI"
            zIndex: 10,
            border: '2px solid rgba(0,0,0,0.05)',
            ...style
        }}
    >
        {text}
    </motion.div>
);

const MagneticButton = ({ children, style }) => {
    const ref = useRef(null);
    const position = { x: useMotionValue(0), y: useMotionValue(0) };

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        position.x.set(middleX * 0.3); // Magnetic strength
        position.y.set(middleY * 0.3);
    };

    const handleMouseLeave = () => {
        position.x.set(0);
        position.y.set(0);
    };

    const { x, y } = position;
    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: 0, y: 0 }} // Reset visual spring handled by drag, but here we use motion values
            style={{ x, y, ...style }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.button>
    )
}

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Mouse position state
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        }
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section ref={ref} style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px',
            overflow: 'hidden'
        }}>
            {/* Stickers with Parallax Speeds - Note: Position is relative to container */}

            {/* We need to pass absolute positions to the stickers, but wrap them in parallax transforms */}
            <motion.div className="hero-stickers" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none' }}>
                {/* Layer 1: Slow */}
                <ParallaxSticker
                    speed={-0.5}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    text="Unique"
                    delay={0.5}
                    rotate={-12}
                    style={{
                        top: '25%',
                        left: '15%',
                        backgroundColor: 'var(--accent-lime)',
                        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
                    }}
                />
                {/* Layer 2: Fast */}
                <ParallaxSticker
                    speed={-1.2}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    text="Timeless"
                    delay={0.7}
                    rotate={8}
                    style={{
                        top: '20%',
                        right: '18%',
                        backgroundColor: 'var(--accent-pink)',
                        borderRadius: '50% 20% 30% 70% / 60% 40% 60% 40%'
                    }}
                />

                <ParallaxSticker
                    speed={-0.8}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    text="Modern"
                    delay={0.9}
                    rotate={-5}
                    style={{
                        bottom: '25%',
                        left: '20%',
                        backgroundColor: 'var(--accent-lavender)',
                        borderRadius: '20px'
                    }}
                />

                <ParallaxSticker
                    speed={-1.5}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    text="Bold"
                    delay={1.1}
                    rotate={15}
                    style={{
                        bottom: '30%',
                        right: '12%',
                        backgroundColor: 'var(--accent-orange)',
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                    }}
                />
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', zIndex: 5, y: textY, opacity }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <h1 style={{
                    fontSize: 'clamp(3.5rem, 12vw, 8rem)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.04em',
                    marginBottom: '24px',
                    color: 'var(--text-maroon)'
                }}>
                    ONE DREAM<br />
                    <span style={{
                        color: 'transparent',
                        WebkitTextStroke: '2px var(--text-maroon)',
                        position: 'relative'
                    }}>
                        LAB
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ delay: 1, duration: 0.8 }}
                            style={{
                                position: 'absolute', left: 0, top: '50%', height: '4px',
                                backgroundColor: 'var(--accent-lime)', opacity: 0.8
                            }}
                        />
                    </span>
                </h1>

                <p style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                    maxWidth: '600px',
                    margin: '0 auto 40px',
                    opacity: 0.8
                }}>
                    We craft digital experiences that your audience will <br />
                    <span style={{ fontStyle: 'italic', fontWeight: 600 }}>never forget.</span>
                </p>

                <MagneticButton
                    style={{
                        padding: '24px 48px',
                        borderRadius: '20px',
                        backgroundColor: 'var(--text-maroon)',
                        color: 'var(--bg-cream)',
                        fontSize: '1.2rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer',
                        pointerEvents: 'auto'
                    }}
                >
                    Let's Talk
                </MagneticButton>
            </motion.div>
        </section>
    );
};

export default Hero;
