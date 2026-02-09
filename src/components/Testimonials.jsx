import React from 'react';

const testimonials = [
    {
        id: 1,
        text: "Sonna Exxports has been a pivotal partner in our supply chain. Their attention to detail and commitment to sustainable practices align perfectly with our brand values.",
        author: "Sarah Jenkins",
        role: "Creative Director, Aura Fashion",
        location: "London, UK"
    },
    {
        id: 2,
        text: "The quality of silk and the precision of the embroidery is unmatched. They delivered our custom collection ahead of schedule with zero defects.",
        author: "Marcello Rossi",
        role: "Head of Procurement, VIVANT",
        location: "Milan, Italy"
    },
    {
        id: 3,
        text: "Finally, a manufacturer that understands modern luxury. The 'Tailored for your brand' service allowed us to launch our private label effortlessly.",
        author: "Elena Vasquez",
        role: "Founder, LUNA",
        location: "Barcelona, Spain"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const current = testimonials[activeIndex];

    return (
        <section className="py-24 bg-background-light text-primary-dark">
            <div className="layout-container px-4 md:px-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase">Testimonials</span>
                        <h2 className="font-serif text-4xl md:text-5xl mt-3">Trusted by Global Brands</h2>
                    </div>

                    <div className="relative">
                        <div className="bg-white p-12 md:p-16 rounded-3xl shadow-lg border border-primary/5 relative mx-4 md:mx-12">
                            <div className="absolute top-8 left-8 text-8xl text-primary/5 font-serif leading-none">"</div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <p className="text-xl md:text-2xl text-gray-700 mb-10 font-serif leading-relaxed italic">
                                    "{current.text}"
                                </p>

                                <div className="flex flex-col items-center gap-2">
                                    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold mb-2">
                                        {current.author[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-primary-dark">{current.author}</h4>
                                        <p className="text-sm text-gray-500">{current.role}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">{current.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 size-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all z-20"
                            aria-label="Previous testimonial"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 size-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all z-20"
                            aria-label="Next testimonial"
                        >
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
