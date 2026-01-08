import { motion } from 'framer-motion';

const steps = [
    {
        num: "01",
        title: "Discovery",
        desc: "We dive deep into your brand's soul to uncover the unique value that sets you apart from the noise."
    },
    {
        num: "02",
        title: "Strategy",
        desc: "We build a roadmap that bridges the gap between where you are and where you want to be."
    },
    {
        num: "03",
        title: "Creation",
        desc: "Our designers and developers craft pixel-perfect experiences that embody your new strategic direction."
    },
    {
        num: "04",
        title: "Launch",
        desc: "We help you introduce your new self to the world with impact, ensuring a smooth takeoff."
    }
];

const Process = () => {
    return (
        <section style={{
            padding: '120px 20px',
            backgroundColor: 'var(--text-maroon)',
            color: 'var(--bg-cream)',
            borderRadius: '40px',
            margin: '40px 20px'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{
                    fontSize: 'clamp(3rem, 5vw, 5rem)',
                    marginBottom: '80px',
                    textAlign: 'center'
                }}>
                    Our Process
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px'
                }}>
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{
                                fontSize: '6rem',
                                fontFamily: 'var(--font-heading)',
                                opacity: 0.1,
                                position: 'absolute',
                                top: '-40px',
                                left: '-10px',
                                fontWeight: 800
                            }}>
                                {step.num}
                            </div>
                            <div style={{
                                position: 'relative',
                                zIndex: 2,
                                borderLeft: '1px solid rgba(253, 251, 242, 0.2)',
                                paddingLeft: '24px',
                                paddingTop: '20px'
                            }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>{step.title}</h3>
                                <p style={{ opacity: 0.8, lineHeight: 1.6 }}>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
