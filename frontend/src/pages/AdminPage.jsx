import React, { useState } from 'react'
import CreateProductForm from '../components/CreateProductForm/CreateProductForm';
import ProductsList from '../components/ProductsList/ProductsList';

import "../pageStyles/AdminPage.css"

const tabs = [
    { id: "create", label: "Create Product" },
    { id: "products", label: "Products" },
    // { id: "analytics", label: "Analytics" },
];

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState("create");

    return (
        <section>
            <div className="admin_container">
                <div className="admin_header">
                    <nav>
                        <ul className='admin_nav_container'>
                            {tabs.map((tab) => (
                                <li
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={activeTab === tab.id ? "active_tab" : ""}
                                >
                                    {tab.label}
                                </li>

                            ))}
                        </ul>
                    </nav>
                </div>
                {activeTab === "create" && <CreateProductForm />}
                {activeTab === "products" && <ProductsList />}
                {/* {activeTab === "analytics" && <AnalyticsTab />} */}
            </div>
        </section>
    )
}

export default AdminPage