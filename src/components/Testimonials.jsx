import React from "react";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "CEO, Tech Corp",
            content: "Sachin is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are top-notch.",
            image: "https://xsgames.co/randomusers/avatar.php?g=male"
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Project Manager, Creative Agency",
            content: "Working with Sachin was a pleasure. He is a great communicator and always goes above and beyond to ensure the project's success.",
            image: "https://xsgames.co/randomusers/avatar.php?g=female"
        }
    ];

    return (
        <section id="testimonials" className="container">
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px' }}>
                Testimonials
            </h2>
            <div className="testimonials-grid">
                {testimonials.map((t) => (
                    <div key={t.id} className="glass-card" style={{ padding: '30px' }} data-aos="fade-up" data-aos-duration="1000">
                        <p style={{ fontStyle: 'italic', marginBottom: '20px', color: 'var(--text-muted)' }}>
                            "{t.content}"
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <img src={t.image} alt={t.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                            <div>
                                <h4 style={{ fontSize: '1.1rem' }}>{t.name}</h4>
                                <p style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
