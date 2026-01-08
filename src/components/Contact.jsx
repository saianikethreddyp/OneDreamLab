import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        // Outer container allowing full width background
        <section style={{
            padding: '80px 20px',
            backgroundColor: 'var(--bg-cream)',
            display: 'flex',
            justifyContent: 'center'
        }}>
            {/* The Card Component - Matching the reference image style */}
            <div style={{
                backgroundColor: '#FFF9C4', // The specific yellow from the reference
                borderRadius: '60px',
                padding: '80px',
                maxWidth: '1200px',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '80px',
                position: 'relative',
                overflow: 'hidden' // for any decorative leaks
            }}>

                {/* Left Column: Illustration & Text */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                    {/* Placeholder for the illustration - simulating with an emoji composition or icon for now */}
                    {/* 'Let's Go' Illustration */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        style={{ marginBottom: '20px' }}
                    >
                        <img
                            src="/lets-go.png"
                            alt="Let's Go Illustration"
                            style={{
                                width: '380px',
                                maxWidth: '100%',
                                height: 'auto',
                            }}
                        />
                    </motion.div>

                    <h2 style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--text-maroon)',
                        fontSize: '2.5rem',
                        marginBottom: '16px'
                    }}>
                        Need a custom quote?
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-maroon)',
                        opacity: 0.8,
                        maxWidth: '350px',
                        lineHeight: 1.5
                    }}>
                        Don't let your ideas sit idle — slide into our inbox and let's make magic!
                    </p>
                </div>

                {/* Right Column: Form */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

                        {['Name', 'Email', 'Phone'].map((label) => (
                            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <label style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 700,
                                    fontSize: '1.2rem',
                                    color: 'var(--text-maroon)'
                                }}>
                                    {label}
                                </label>
                                <input
                                    type={label === 'Email' ? 'email' : 'text'}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        borderBottom: '1px solid rgba(61, 11, 27, 0.2)',
                                        padding: '10px 0',
                                        fontSize: '1.1rem',
                                        color: 'var(--text-maroon)',
                                        outline: 'none',
                                        fontFamily: 'var(--font-body)'
                                    }}
                                />
                            </div>
                        ))}

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 700,
                                fontSize: '1.2rem',
                                color: 'var(--text-maroon)'
                            }}>
                                Message
                            </label>
                            <textarea
                                rows={3}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid rgba(61, 11, 27, 0.2)',
                                    padding: '10px 0',
                                    fontSize: '1.1rem',
                                    color: 'var(--text-maroon)',
                                    outline: 'none',
                                    fontFamily: 'var(--font-body)',
                                    resize: 'none'
                                }}
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                marginTop: '20px',
                                backgroundColor: '#FBC02D', // Darker yellow/gold for button
                                color: 'var(--text-maroon)',
                                border: 'none',
                                padding: '24px',
                                borderRadius: '99px',
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                fontFamily: 'var(--font-heading)',
                                cursor: 'pointer',
                                boxShadow: '0 4px 0 rgba(61, 11, 27, 1)' // Hard shadow for retro feel
                            }}
                        >
                            Submit Message
                        </motion.button>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
