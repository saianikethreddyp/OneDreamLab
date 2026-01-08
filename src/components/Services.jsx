import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const services = [
    {
        title: "Brand Identity",
        description: "We build brands that speak louder than words. From logo design to comprehensive visual systems, we define who you are.",
        color: "var(--accent-lime)"
    },
    {
        title: "Web Design",
        description: "Creating digital experiences that matter. We design websites that are visually stunning, user-friendly, and optimized for conversion.",
        color: "var(--accent-pink)"
    },
    {
        title: "Development",
        description: "Turning designs into functional reality. Our development team ensures pixel-perfect implementation with modern technologies.",
        color: "var(--accent-lavender)"
    },
    {
        title: "Content Strategy",
        description: "Words that work. We craft compelling narratives and content strategies that resonate with your target audience.",
        color: "var(--accent-orange)"
    }
];

const AccordionItem = ({ title, description, color, isOpen, onClick }) => {
    return (
        <div style={{ marginBottom: '20px' }}>
            <motion.div
                onClick={onClick}
                initial={false}
                animate={{
                    backgroundColor: isOpen ? color : 'rgba(255,255,255,0)',
                    borderRadius: isOpen ? '24px' : '12px'
                }}
                transition={{ duration: 0.3 }}
                style={{
                    padding: '30px',
                    cursor: 'pointer',
                    borderBottom: isOpen ? 'none' : '1px solid rgba(61, 11, 27, 0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <h3 style={{ fontSize: '2rem', margin: 0 }}>{title}</h3>
                <div style={{
                    background: 'var(--text-maroon)',
                    borderRadius: '50%',
                    width: '40px', height: '40px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--bg-cream)'
                }}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{
                            padding: '0 30px 40px 30px',
                            backgroundColor: color,
                            borderRadius: '0 0 24px 24px',
                            marginTop: '-10px' // Connects visually to header
                        }}>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.6,
                                maxWidth: '80%',
                                opacity: 0.9
                            }}>
                                {description}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Services = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                textAlign: 'center',
                marginBottom: '60px',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em'
            }}>
                What We Do
            </h2>
            {services.map((service, index) => (
                <AccordionItem
                    key={index}
                    {...service}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                />
            ))}
        </section>
    );
};

export default Services;
