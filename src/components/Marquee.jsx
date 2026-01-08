import { motion } from 'framer-motion';

const logos = [
    "Google", "Spotify", "Airbnb", "Linear", "Framer", "Stripe", "Nike", "Apple", "Notion", "Discord"
];

const Marquee = () => {
    return (
        <section style={{
            padding: '60px 0',
            backgroundColor: 'var(--accent-blue)',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <div style={{ display: 'flex' }}>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ display: 'flex', whiteSpace: 'nowrap' }}
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} style={{
                            fontSize: 'clamp(3rem, 6vw, 4rem)',
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 800,
                            marginRight: 'clamp(40px, 5vw, 80px)',
                            opacity: 0.5,
                            color: 'var(--text-maroon)'
                        }}>
                            {logo}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Marquee;
