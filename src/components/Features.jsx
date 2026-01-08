import { motion } from 'framer-motion';
import { Clock, DollarSign, Layers } from 'lucide-react';

const features = [
    {
        title: "Fast and Reliable Delivery",
        desc: "We move at the speed of creativity — and caffeine. Your deadlines won't even see us coming.",
        icon: Clock,
        shape: "blob",
        color: "#E8F5E9", // Light Green
        iconColor: "#2E7D32"
    },
    {
        title: "Clear, No-Surprise Pricing",
        desc: "No hidden fees, no sneaky charges — just clear, honest pricing and work that makes you wonder.",
        icon: DollarSign,
        shape: "cross",
        color: "#FCE4EC", // Light Pink
        iconColor: "#C2185B"
    },
    {
        title: "Everything, Under One Roof",
        desc: "Design? Branding? Websites? TikTok dances? (Okay, maybe not that last one... yet.)",
        icon: Layers,
        shape: "burst",
        color: "#FFF9C4", // Light Yellow
        iconColor: "#FBC02D"
    }
];

const Shape = ({ type, color }) => {
    if (type === 'blob') {
        return (
            <div style={{
                position: 'absolute',
                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '160px', height: '160px',
                backgroundColor: color,
                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                zIndex: 0
            }} />
        );
    } else if (type === 'cross') {
        return (
            <div style={{
                position: 'absolute',
                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                zIndex: 0
            }}>
                <div style={{ width: '60px', height: '180px', background: color, borderRadius: '30px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                <div style={{ width: '180px', height: '60px', background: color, borderRadius: '30px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
            </div>
        );
    } else { // burst
        return (
            <div style={{
                position: 'absolute',
                top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(45deg)',
                width: '140px', height: '140px',
                backgroundColor: color,
                // Simple star-like shape using multiple rotated squares or just a jagged polygon
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                zIndex: 0,
                transformOrigin: 'center'
            }} />
        );
    }
};

const Features = () => {
    return (
        <section style={{ padding: '120px 20px', backgroundColor: 'var(--bg-cream)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px' }}>
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <div style={{ position: 'relative', width: '200px', height: '200px', marginBottom: '30px' }}>
                            <Shape type={feature.shape} color={feature.color} />
                            <div style={{
                                position: 'absolute',
                                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                zIndex: 1,
                                color: 'var(--text-maroon)'
                            }}>
                                <feature.icon size={64} strokeWidth={1.5} />
                            </div>
                        </div>

                        <h3 style={{
                            fontSize: '2rem',
                            marginBottom: '16px',
                            fontFamily: 'var(--font-heading)',
                            color: 'var(--text-maroon)',
                            lineHeight: 1.1
                        }}>
                            {feature.title}
                        </h3>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            opacity: 0.8,
                            maxWidth: '300px'
                        }}>
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
