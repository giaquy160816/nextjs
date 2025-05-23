
import { SEO } from '@/lib/seo';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: SEO.profile.title,
    description: SEO.profile.description,
  };
export default function Profile() {
    return (
        <div>Profile</div>
    )
}
