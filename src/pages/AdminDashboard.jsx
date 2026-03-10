import React, { useState } from 'react';
import { Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Components
import Sidebar from '../components/Admin/Sidebar';
import Header from '../components/Admin/Header';
import { Particles } from '../components/Admin/AdminUIUtils';
import DashboardView from '../components/Admin/Dashboard/DashboardView';
import DonorsView from '../components/Admin/Dashboard/DonorsView';
import HospitalsView from '../components/Admin/Dashboard/HospitalsView';
import RequestsView from '../components/Admin/Dashboard/RequestsView';
import CampsView from '../components/Admin/Dashboard/CampsView';

// Hooks
import { useDashboardData } from '../components/Admin/Dashboard/useDashboardData';

// Register ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler);

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [searchQuery, setSearchQuery] = useState('');
    const { lineData, lineOptions, barData, barOptions, hospitals, donors, requests, camps, setDonors, setHospitals } = useDashboardData();




    const handleLogout = () => {
        navigate('/login');
    };

    const filteredDonors = donors.filter(d =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredHospitals = hospitals.filter(h =>
        h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        h.need.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredRequests = requests.filter(r =>
        r.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.bloodType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.id.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f8fafc', fontFamily: '"DM Sans", Inter, sans-serif', position: 'relative' }}>
            <Particles />

            {/* Sidebar */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={handleLogout} />

            {/* Main Content Area */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                {/* Page Content */}
                <Box sx={{ p: 4, overflowY: 'auto', flex: 1 }}>
                    <AnimatePresence mode="wait">
                        {activeTab === 'dashboard' && (
                            <DashboardView
                                lineData={lineData}
                                lineOptions={lineOptions}
                                barData={barData}
                                barOptions={barOptions}
                                hospitals={filteredHospitals}
                                setActiveTab={setActiveTab}
                            />
                        )}
                        {activeTab === 'donors' && <DonorsView donors={filteredDonors} setDonors={setDonors} />}

                        {activeTab === 'hospitals' && <HospitalsView hospitals={filteredHospitals} setHospitals={setHospitals} />}

                        {activeTab === 'requests' && <RequestsView requests={filteredRequests} />}

                        {activeTab === 'camps' && <CampsView camps={camps} />}
                    </AnimatePresence>

                </Box>
            </Box>
        </Box>
    );
};

export default AdminDashboard;