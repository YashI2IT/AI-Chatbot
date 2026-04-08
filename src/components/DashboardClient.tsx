'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Image from 'next/image'
function DashboardClient({ ownerId }: { ownerId: string }) {
    const navigate = useRouter()
    const [businessName, setBusinessName] = useState("")
    const [supportEmail, setSupportEmail] = useState("")
    const [knowledge, setKnowledge] = useState("")
    const [loading, setLoading] = useState(false)
    const [saved, setSaved] = useState(false)
    const handleSettings = async () => {
        setLoading(true)
        try {
            const result = await axios.post("/api/settings", { ownerId, businessName, supportEmail, knowledge })
            console.log(result.data)
            setLoading(false)
            setSaved(true)
            setTimeout(() => setSaved(false), 3000)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
     useEffect(()=>{
if(ownerId){
    const handleGetDetails=async ()=>{
       try {
            const result = await axios.post("/api/settings/get", { ownerId })
           setBusinessName(result.data.businessName)
            setSupportEmail(result.data.supportEmail)
             setKnowledge(result.data.knowledge)

            
        } catch (error) {
            console.log(error)
           
        }
    }

    handleGetDetails()
}

     },[ownerId])
    return (
        <div className='min-h-screen bg-zinc-50 text-zinc-900'>
            <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className='fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200'
            >
                <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
                    <div className='cursor-pointer' onClick={() => navigate.push("/")}>
                        <Image src="/logo.png" alt="SupportAI Logo" width={120} height={40} className='object-contain' />
                    </div>
                    <button className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition' onClick={()=>navigate.push("/embed")}>Embed ChatBot</button>
                </div>
            </motion.div>

            <div className='flex justify-center px-4 py-14 mt-20'>
                <motion.div
                    className='w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10'

                >
                    <div className='mb-10'>
                        <h1 className='text-2xl font-semibold'>ChatBot Settings</h1>
                        <p className='text-zinc-500 mt-1'> Manage your AI chatbot knowledge and business details</p>
                    </div>

                    <div className='mb-10'>
                        <h1 className='text-lg font-medium mb-4'>Business Details</h1>
                        <div className='space-y-4'>
                            <input type="text" className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80' placeholder='Business Name' value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                            <input type="text" className='w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80' placeholder='Support Email' value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-lg font-medium mb-4'>Knowledge Base</h1>
                        <p className='text-sm text-zinc-500 mb-4'>Add FAQs, policies, delivery info, refunds, etc.</p>
                        <div className='space-y-4'>
                            <textarea className='w-full h-54 rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/80' placeholder={`Example:
• Refund policy: 7 days return available
• Delivery time: 3–5 working days
• Cash on Delivery available
• Support hours`} onChange={(e) => setKnowledge(e.target.value)} value={knowledge} />
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            disabled={loading}
                            onClick={handleSettings}
                            className="px-7 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-zinc-800 transition disabled:opacity-60"
                        >
                            {loading ? "Saving..." : "Save"}

                        </motion.button>
                        {saved && <motion.span
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm font-medium text-emerald-600"
                        >
                            ✓ Settings saved
                        </motion.span>}

                    </div>



                </motion.div>
            </div>

            <footer className='bg-zinc-50 border-t border-zinc-200 py-12 px-6 mt-auto'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h3 className='font-semibold text-sm mb-4 text-zinc-900'>Support</h3>
                            <ul className='space-y-2 text-sm text-zinc-600'>
                                <li><a href='#' className='hover:text-zinc-900 transition'>Help Center</a></li>
                                <li><a href='#' className='hover:text-zinc-900 transition'>Documentation</a></li>
                                <li><a href='#' className='hover:text-zinc-900 transition'>Contact Us</a></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className='font-semibold text-sm mb-4 text-zinc-900'>Company</h3>
                            <ul className='space-y-2 text-sm text-zinc-600'>
                                <li><a href='#' className='hover:text-zinc-900 transition'>About</a></li>
                                <li><a href='#' className='hover:text-zinc-900 transition'>Blog</a></li>
                                <li><a href='#' className='hover:text-zinc-900 transition'>Careers</a></li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h3 className='font-semibold text-sm mb-4 text-zinc-900'>Legal</h3>
                            <ul className='space-y-2 text-sm text-zinc-600'>
                                <li><a href='#' className='hover:text-zinc-900 transition'>Privacy Policy</a></li>
                                <li><a href='#' className='hover:text-zinc-900 transition'>Terms of Service</a></li>
                            </ul>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='pt-6 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4'
                    >
                        <p className='text-xs text-zinc-500'>&copy; {new Date().getFullYear()} SupportAI. All rights reserved.</p>
                        <div className='flex gap-3'>
                            <motion.a 
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href='#' 
                                className='w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 transition text-xs font-semibold'
                            >
                                f
                            </motion.a>
                            <motion.a 
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href='#' 
                                className='w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 transition text-xs font-semibold'
                            >
                                𝕏
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </div>
    )
}

export default DashboardClient
