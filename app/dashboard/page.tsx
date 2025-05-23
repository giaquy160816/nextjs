import React from 'react'
import { Metadata } from 'next';
import { SEO } from '@/lib/seo';

export const metadata: Metadata = {
    title: SEO.dashboard.title,
    description: SEO.dashboard.description,
};

export default function Dashboard() {
    return (
        <div>Dashboard</div>
    )
}
