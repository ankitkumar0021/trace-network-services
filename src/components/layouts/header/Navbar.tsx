'use client';

import React, { useState } from 'react';
import { ImArrowDownRight2 } from 'react-icons/im';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const menuData = [
    {
        label: 'Home',
        submenu: [],
        submenu_status: false,
        
    },
    {
        label: 'HIKMICRO Outdoor',
        submenu: [
            { label: 'Monoculars', children: ['LYNX S', 'LYNX 2.0', 'FALCON', 'FALCON 2.0', 'CONDOR', 'CONDOR 2.0'] },
            { label: 'Binoculars', children: ['HABROK', 'RAPTOR'] },
            { label: 'Tube Scopes', children: ['LYNX S', 'LYNX 2.0', 'FALCON', 'FALCON 2.0', 'CONDOR', 'CONDOR 2.0'] },
            { label: 'Clip-On Scopes', children: ['HABROK', 'RAPTOR'] },
            { label: 'HM Parts', children: [] },
            { label: 'HM Accessories', children: [] },
            { label: 'HM Promotional Gear', children: [] },
        ],
        submenu_status: true,
         slug: 'hikmicro-outdoor'
    },
    {
        label: 'Speras Flashlights',
        submenu: [
            { label: 'Monoculars', children: ['LYNX S', 'LYNX 2.0', 'FALCON', 'FALCON 2.0', 'CONDOR', 'CONDOR 2.0'] },
            { label: 'Binoculars', children: ['HABROK', 'RAPTOR'] },
            { label: 'HM Promotional Gear', children: [] },
        ],
        submenu_status: true,
         slug: 'speras-flashlights'
    },
    {
        label: 'Magne-Tech',
        submenu: [
            { label: 'Tube Scopes', children: ['LYNX S', 'LYNX 2.0', 'FALCON', 'FALCON 2.0', 'CONDOR', 'CONDOR 2.0'] },
            { label: 'Clip-On Scopes', children: ['HABROK', 'RAPTOR'] },
            { label: 'HM Parts', children: [] },
            { label: 'HM Accessories', children: [] },
            { label: 'HM Promotional Gear', children: [] },
        ],
        submenu_status: true,
         slug: 'magne-tech'
    },
    {
        label: 'HM Thermography',
        submenu: [
            { label: 'Monoculars', children: ['LYNX S', 'LYNX 2.0', 'FALCON', 'FALCON 2.0', 'CONDOR', 'CONDOR 2.0'] },
            { label: 'Binoculars', children: ['HABROK', 'RAPTOR'] },
        ],
        submenu_status: true,
         slug: 'hm-thermography'
    },
];

const submenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.05,
            duration: 0.0,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
    const [hoveredMain, setHoveredMain] = useState<string | null>(null);
    const [hoveredSub, setHoveredSub] = useState<string | null>(null);

    return (
        <div className="bg-secondary-gray custom_container_padding !py-0">
            <div className="flex justify-center">
                {menuData.map((mainItem) => (
                    <div
                        key={mainItem.label}
                        className="relative py-3 px-6 hover:bg-primary"
                        onMouseEnter={() => setHoveredMain(mainItem.label)}
                        onMouseLeave={() => {
                            setHoveredMain(null);
                            setHoveredSub(null);
                        }}
                    >
                        <Link href={ `/category/${mainItem.slug}` || '#'}>
                            <span className="relative cursor-pointer font-montserrat font-medium text-white uppercase custom_base_text">
                                {mainItem.label}
                                {mainItem?.submenu_status && (
                                    <span className="absolute bottom-[3px] -right-5">
                                        <ImArrowDownRight2 className="!text-xs" />
                                    </span>
                                )}
                            </span>
                        </Link>

                        {/* Submenu with layout animation */}
                        <AnimatePresence>
                            {hoveredMain === mainItem.label && mainItem.submenu.length > 0 && (
                                <motion.div
                                    layout
                                    layoutRoot
                                    className="absolute top-12.5 left-0 bg-secondary space-y-5 p-8 pr-0 w-64 z-20"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={submenuVariants}
                                >
                                    {mainItem.submenu.map((subItem) => (
                                        <motion.div
                                            layout
                                            key={subItem.label}
                                            className="relative group"
                                            onMouseEnter={() => setHoveredSub(subItem.label)}
                                            onMouseLeave={() => setHoveredSub(null)}
                                            variants={itemVariants}
                                        >
                                            <div
                                                className={`flex gap-x-2 items-center text-white font-montserrat font-medium custom_base_text cursor-pointer hover:text-primary ${hoveredSub === subItem.label ? 'text-primary' : ''
                                                    }`}
                                            >
                                                {subItem.label}
                                                {subItem.children.length > 0 && (
                                                    <span>
                                                        <ImArrowDownRight2 className="!text-[9px]" />
                                                    </span>
                                                )}
                                            </div>

                                            {/* Child submenu */}
                                            <AnimatePresence>
                                                {subItem.children.length > 0 && hoveredSub === subItem.label && (
                                                    <motion.div
                                                        key="child-submenu"
                                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                                        exit={{ opacity: 0, y: -10, height: 0 }}
                                                        transition={{ duration: 0.3, ease: 'easeInOut', staggerChildren: 0.05 }}
                                                        className="absolute top-0 left-full w-48 bg-secondary text-white py-3 px-2 z-30 space-y-1 overflow-hidden"
                                                    >
                                                        {subItem.children.map((child) => (
                                                            <motion.div
                                                                key={child}
                                                                initial={{ opacity: 0, y: -5 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -5 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="py-1 px-2 hover:text-primary cursor-pointer whitespace-nowrap"
                                                            >
                                                                {child}
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};
