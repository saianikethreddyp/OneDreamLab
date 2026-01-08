import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], [100, -100]); // Moves opposite to scroll for parallax

    return (
        <footer
            ref={ref}
            style={{
                backgroundColor: 'var(--text-maroon)',
                color: 'var(--bg-cream)', // Cream text on Maroon
                position: 'relative',
                overflow: 'hidden',
                padding: '100px 20px 40px',
                marginTop: '0' // Connects seamlessly
            }}>

            {/* Massive Parallax Background Text */}
            <motion.div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '50%',
                x: '-50%',
                y: textY,
                width: '100%',
                textAlign: 'center',
                zIndex: 0,
                opacity: 0.1, // Subtle blend
                pointerEvents: 'none'
            }}>
                <h1 style={{
                    fontSize: '25vw',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    lineHeight: 0.8,
                    margin: 0,
                    background: 'linear-gradient(to bottom, transparent, rgba(253, 251, 242, 0.5))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    whiteSpace: 'nowrap'
                }}>
                    ODL
                </h1>
            </motion.div>

            {/* Content Layer */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '60px' }}>

                {/* Left Column: Address */}
                <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>Address</h3>
                    <p style={{ opacity: 0.8, lineHeight: 1.6, fontSize: '1.1rem' }}>
                        123 Main Street, Suite<br />
                        200, Alwal, Hyderabad
                    </p>

                    <h3 style={{ fontSize: '2rem', marginTop: '60px', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>Opening Hours</h3>
                    <p style={{ opacity: 0.8, lineHeight: 1.6, fontSize: '1.1rem' }}>
                        Mon to Sat: 9.00am - 8.30pm<br />
                        Sun: Closed
                    </p>
                </div>

                {/* Right Column: Links */}
                <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>Explore</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1.2rem', opacity: 0.8 }}>
                            <li>Portfolio</li>
                            <li>Reviews</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>Follow</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1.2rem', opacity: 0.8 }}>
                            <li>Instagram</li>
                            <li>Youtube</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style={{
                maxWidth: '1200px',
                margin: '100px auto 0',
                paddingTop: '40px',
                borderTop: '1px solid rgba(253, 251, 242, 0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                opacity: 0.6,
                fontSize: '0.9rem',
                position: 'relative',
                zIndex: 1
            }}>
                <span>© 2024 One Dream Lab.</span>
                <span>All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
