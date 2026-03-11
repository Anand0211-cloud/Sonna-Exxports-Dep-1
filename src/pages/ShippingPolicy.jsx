import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShippingPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-body antialiased transition-colors duration-300">
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-primary-dark dark:text-gray-100">Shipping Policy</h1>
                
                <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Order Processing</h2>
                        <p>
                            All orders are processed after confirmation of specifications, quantities, and sample approvals. Production timelines may vary depending on the product type, customization requirements, and order volume.
                            <br />Typical production timelines are shared during the order confirmation stage to ensure clear coordination between both parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Production Lead Time</h2>
                        <p>
                            Production lead time generally ranges between 45–60 days after sample approval and order confirmation. However, timelines may vary depending on product complexity, fabric sourcing, and customization requirements.
                            <br />Our team maintains regular communication throughout the production process to ensure transparency and timely updates.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Shipping Methods</h2>
                        <p>Sonna Exxports supports global shipping through reliable logistics partners. Orders can be shipped via:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                            <li>Sea Freight</li>
                            <li>Air Freight</li>
                            <li>Courier Services (for samples and smaller shipments)</li>
                        </ul>
                        <p>The most suitable shipping method will be coordinated based on order size, destination, and delivery requirements.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Shipping Terms</h2>
                        <p>We support internationally recognized shipping terms including:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                            <li>FOB (Free on Board)</li>
                            <li>CIF (Cost, Insurance, Freight)</li>
                            <li>DDP (Delivered Duty Paid)</li>
                        </ul>
                        <p>Shipping terms are agreed upon during the order confirmation process.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">International Shipping</h2>
                        <p>
                            As an international garment manufacturer & exporter, Sonna Exxports supplies garments to buyers across global markets. Shipping timelines depend on the destination country, customs procedures, and freight carrier schedules.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Customs & Duties</h2>
                        <p>
                            Import duties, customs clearance charges, and local taxes are the responsibility of the buyer unless otherwise agreed upon in the shipping terms.
                            <br />Our team assists with all necessary export documentation to ensure smooth international shipment processing.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Shipment Tracking</h2>
                        <p>
                            Once the shipment is dispatched, relevant shipping documents and tracking details will be shared with the buyer for transparency and coordination.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Shipping Support</h2>
                        <p>
                            For any shipping-related queries, logistics coordination, or delivery information, our team is available to assist.
                            <br />Please contact us through our Contact Page or email our support team for assistance.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ShippingPolicy;
