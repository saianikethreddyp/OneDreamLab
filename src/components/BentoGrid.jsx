import { motion } from 'framer-motion';
import { Star, Zap, Heart, Shield } from 'lucide-react';

const Card = ({ title, text, icon: Icon, color, className, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay }}
        className={className}
        style={{
            backgroundColor: color,
            padding: '40px',
            borderRadius: '32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
        }}
    >
        <div style={{
            marginBottom: '20px',
            background: 'rgba(0,0,0,0.1)',
            width: '60px', height: '60px',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <Icon size={30} strokeWidth={1.5} />
        </div>
        <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>{title}</h3>
            <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>{text}</p>
        </div>
    </motion.div>
);

const BentoGrid = () => {
    return (
        <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
                fontSize: '4rem',
                textAlign: 'center',
                marginBottom: '60px'
            }}>Why Choose Us</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {/* Simple responsive grid for now, can be made into true bento with spans */}
                <div style={{ gridColumn: 'span 2' }}>
                    <Card
                        title="Strategic Vision"
                        text="We don't just design; we strategize. Every pixel serves a purpose in your broader business goals."
                        icon={Star}
                        color="var(--accent-lavender)"
                        delay={0}
                    />
                </div>
                <div>
                    <Card
                        title="Fast Delivery"
                        text="Speed matters. We deliver high-quality work without the bloat and delay of traditional agencies."
                        icon={Zap}
                        color="var(--accent-pink)"
                        delay={0.1}
                    />
                </div>
                <div>
                    <Card
                        title="Passion Led"
                        text="We love what we do, and it shows in every project we touch."
                        icon={Heart}
                        color="var(--accent-orange)"
                        delay={0.2}
                    />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                    <Card
                        title="Reliable Support"
                        text="We are your partners for the long haul. Our support doesn't end at launch."
                        icon={Shield}
                        color="var(--accent-lime)"
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
