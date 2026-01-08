import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                padding: '24px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(253, 251, 242, 0.7)'
            }}
        >
            <div style={{ fontWeight: 800, fontSize: '24px', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>
                ODL.
            </div>
            <nav>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '12px 28px',
                        borderRadius: '999px',
                        backgroundColor: 'var(--text-maroon)',
                        color: 'var(--bg-cream)',
                        border: 'none',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}
                >
                    MENU
                </motion.button>
            </nav>
        </motion.header>
    );
};

export default Header;
