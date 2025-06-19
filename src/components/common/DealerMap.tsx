'use client'
import React from 'react';

export default function DealerMap() {
    return (
         <div style={{ width: '100%', height: '480px' }}>
            <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1ql0I1MmqK6EObXZguJRCugv3vsGU7qM&ehbc=2E312F"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    )
}