import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Logoipsum",
        category: "Rebranding",
        color: "#ff6b8b", // Hot Pink
        image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2671&auto=format&fit=crop",
        logoText: "Logoipsum"
    },
    {
        title: "Bottle Brand",
        category: "Product Design",
        color: "#74c67a", // Vivid Green
        image: "https://images.unsplash.com/photo-1602143407151-01114192003b?q=80&w=2574&auto=format&fit=crop",
        logoText: "Liquid"
    },
    {
        title: "Urban Shift",
        category: "App Design",
        color: "#a78bfa", // Purple
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        logoText: "Urban"
    },
    {
        title: "Neon Verse",
        category: "Web Dev",
        color: "#fb923c", // Orange
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop",
        logoText: "Neon"
    }
];

const ProjectCard = ({ project, i }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax: Different speeds based on index
    const y = useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -100 : 0]);

    return (
        <motion.div
            ref={ref}
            style={{ y }} // Apply parallax transform
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
                style={{
                    position: 'relative',
                    borderRadius: '40px',
                    overflow: 'hidden',
                    backgroundColor: project.color,
                    aspectRatio: '4/3',
                    cursor: 'pointer',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
            >
                {/* Logo Badge */}
                <div style={{
                    position: 'absolute',
                    top: '30px',
                    left: '30px',
                    background: 'white',
                    padding: '12px 24px',
                    borderRadius: '20px',
                    fontWeight: 800,
                    fontSize: '1rem',
                    zIndex: 10,
                    color: 'black'
                }}>
                    {project.logoText}
                </div>

                <motion.img
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={project.image}
                    alt={project.title}
                    style={{
                        width: '80%',
                        height: '80%',
                        objectFit: 'cover',
                        position: 'absolute',
                        bottom: '-10%',
                        right: '-10%',
                        borderRadius: '20px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}
                />

                {/* Hover Text Reveal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '30px',
                        color: 'white',
                        zIndex: 10
                    }}
                >
                    <h3 style={{ fontSize: '2rem', margin: 0, textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>{project.title}</h3>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Portfolio = () => {
    return (
        <section style={{
            padding: '160px 20px 120px',
            backgroundColor: 'var(--bg-cream)',
            position: 'relative'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '100px', position: 'relative' }}>
                <h2 style={{
                    fontSize: 'clamp(4rem, 10vw, 8rem)',
                    lineHeight: 0.9,
                    color: 'var(--text-maroon)',
                    position: 'relative',
                    zIndex: 2,
                    margin: 0
                }}>
                    Look what<br />we made!
                </h2>

                <motion.div
                    animate={{ rotate: [5, -5, 5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        pointerEvents: 'none'
                    }}
                >
                    <div style={{
                        backgroundColor: 'var(--accent-lavender)',
                        padding: '20px 40px',
                        borderRadius: '50% 40% 60% 50% / 40% 50% 60% 50%',
                        transform: 'rotate(-5deg)',
                        boxShadow: '0 10px 0 rgba(0,0,0,0.1)'
                    }}>
                        <span style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            color: 'var(--text-maroon)'
                        }}>
                            Portfolio
                        </span>
                    </div>
                </motion.div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '80px', // Increased gap for parallax breathing room
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} i={i} />
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '100px' }}>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        background: 'var(--text-maroon)',
                        color: 'var(--bg-cream)',
                        padding: '24px 60px',
                        borderRadius: '99px',
                        fontSize: '1.5rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    See All Projects
                </motion.button>
            </div>
        </section>
    );
};

export default Portfolio;
