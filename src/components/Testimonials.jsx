import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const testimonials = [
    {
        quote: "One Dream Lab transformed our vague ideas into a digital masterpiece. Their attention to detail is unmatched.",
        author: "Sarah Jenkins",
        role: "CEO, Lumina",
        color: "var(--accent-lime)"
    },
    {
        quote: "The best agency experience we've ever had. They truly understand modern aesthetics and user behavior.",
        author: "Marcus Chen",
        role: "Founder, Urban Shift",
        color: "var(--accent-pink)"
    },
    {
        quote: "Professional, creative, and timely. Our conversion rates doubled after the rebrand.",
        author: "Elena Rodriguez",
        role: "CMO, Neon Verse",
        color: "var(--accent-lavender)"
    },
    {
        quote: "They don't just build websites; they build brands. Highly recommended for anyone wanting to stand out.",
        author: "David Kim",
        role: "Director, Apex",
        color: "var(--accent-blue)"
    }
];

const Testimonials = () => {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef();

    useEffect(() => {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }, []);

    return (
        <section style={{ padding: '100px 0', overflow: 'hidden' }}>
            <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto 60px' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', textAlign: 'left' }}>Client Love</h2>
            </div>

            <motion.div
                ref={carouselRef}
                style={{ cursor: 'grab', overflow: 'hidden' }}
                whileTap={{ cursor: 'grabbing' }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    style={{ display: 'flex', gap: '40px', paddingLeft: '20px', paddingRight: '20px' }}
                >
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            style={{
                                minWidth: '400px',
                                backgroundColor: item.color,
                                padding: '60px',
                                borderRadius: '40px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <p style={{
                                fontSize: '1.4rem',
                                lineHeight: 1.4,
                                marginBottom: '40px',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 500
                            }}>
                                "{item.quote}"
                            </p>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{item.author}</div>
                                <div style={{ opacity: 0.7 }}>{item.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
