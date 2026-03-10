import { useState } from 'react';

export const useDashboardData = () => {
    const [lineData] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
            {
                label: 'Donations',
                data: [400, 500, 450, 650, 300, 400, 300, 500, 400, 600],
                borderColor: '#dc2626',
                backgroundColor: 'rgba(220,38,38,0.08)',
                tension: 0.4, fill: true, pointRadius: 4,
                pointBackgroundColor: '#dc2626',
                pointBorderColor: 'white', pointBorderWidth: 2,
            },
            {
                label: 'Requests',
                data: [500, 700, 550, 550, 600, 400, 600, 500, 700, 500],
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245,158,11,0.05)',
                borderDash: [5, 5], tension: 0.4, fill: true, pointRadius: 4,
                pointBackgroundColor: '#f59e0b',
                pointBorderColor: 'white', pointBorderWidth: 2,
            }
        ]
    });

    const [lineOptions] = useState({
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 1200, easing: 'easeInOutQuart' },
        plugins: {
            legend: { position: 'top', align: 'end', labels: { boxWidth: 8, usePointStyle: true, padding: 20, font: { size: 12, weight: 600 } } },
            tooltip: { backgroundColor: '#0f172a', titleColor: '#f8fafc', bodyColor: '#94a3b8', padding: 12, cornerRadius: 10, displayColors: false }
        },
        scales: {
            y: { ticks: { font: { size: 11 }, color: '#94a3b8' }, grid: { color: '#f1f5f9', drawBorder: false } },
            x: { ticks: { font: { size: 11 }, color: '#94a3b8' }, grid: { display: false } }
        }
    });

    const [barData] = useState({
        labels: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
        datasets: [{
            label: 'Units Available',
            data: [120, 80, 40, 60, 20, 15, 30, 5],
            backgroundColor: ['#dc2626', '#ef4444', '#4f46e5', '#6366f1', '#d97706', '#f59e0b', '#16a34a', '#22c55e'].map(c => c + 'cc'),
            borderRadius: 8, barPercentage: 0.55,
        }]
    });

    const [barOptions] = useState({
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 1400, easing: 'easeInOutBounce', delay: ctx => ctx.dataIndex * 80 },
        plugins: { legend: { display: false }, tooltip: { backgroundColor: '#0f172a', cornerRadius: 10, padding: 12 } },
        scales: { x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { size: 11, weight: 700 } } }, y: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { color: '#f8fafc' } } }
    });

    const [hospitals, setHospitals] = useState([
        { name: 'City General Hospital', need: 'Critical O-', units: 5, status: 'Pending' },
        { name: 'Mercy Care Center', need: 'Urgent A+', units: 2, status: 'Fulfilled' },
        { name: 'St. Jude Clinic', need: 'High B+', units: 4, status: 'Pending' },
    ]);

    const [donors, setDonors] = useState([
        { id: 1, name: 'Alice Johnson', type: 'O-', lastDonation: '10 days ago', status: 'Active' },
        { id: 2, name: 'Bob Smith', type: 'A+', lastDonation: '2 months ago', status: 'Active' },
        { id: 3, name: 'Charlie Brown', type: 'B+', lastDonation: '1 year ago', status: 'Inactive' },
        { id: 4, name: 'Diana Prince', type: 'AB-', lastDonation: '5 days ago', status: 'Active' },
    ]);

    const [requests, setRequests] = useState([
        { id: 'REQ-001', hospital: 'City General', bloodType: 'O-', units: 5, urgency: 'Critical', status: 'Pending' },
        { id: 'REQ-002', hospital: 'Mercy Care', bloodType: 'A+', units: 2, urgency: 'High', status: 'Approved' },
        { id: 'REQ-003', hospital: 'St. Jude', bloodType: 'B+', units: 10, urgency: 'Normal', status: 'Fulfilled' },
    ]);

    const [camps, setCamps] = useState([
        { id: 1, name: 'City Plaza Drive', date: '2026-03-20', location: 'Downtown Square', status: 'Upcoming' },
        { id: 2, name: 'Tech Park Camp', date: '2026-03-25', location: 'Silicon Valley', status: 'Upcoming' },
        { id: 3, name: 'Community Health', date: '2026-03-10', location: 'Suburbia', status: 'Ongoing' },
    ]);

    return {
        lineData,
        lineOptions,
        barData,
        barOptions,
        hospitals, setHospitals,
        donors, setDonors,
        requests, setRequests,
        camps, setCamps
    };
};

