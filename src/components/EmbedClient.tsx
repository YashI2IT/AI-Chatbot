'use client'
import { navigate } from 'next/dist/client/components/segment-cache/navigation'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
function EmbedClient({ ownerId }: { ownerId: string }) {
    const navigate = useRouter()
    const [copied, setCopied] = useState(false)
    const embedCode = `<script 
    src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js" 
    data-owner-id="${ownerId}">
</script> `
    const copyCode = () => {
        navigator.clipboard.writeText(embedCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }
    return (
        <div className='min-h-screen bg-zinc-50 text-zinc-900'>
            <div className='sticky top-0 z-40 bg-white border-b border-zinc-200'>
                <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
                    <div className='cursor-pointer' onClick={() => navigate.push("/")}>
                        <Image src="/logo.png" alt="SupportAI Logo" width={120} height={40} className='object-contain' />
                    </div>
                    <button className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-100 transition' onClick={() => navigate.push("/dashboard")}>Back to Dashboard</button>
                </div>
            </div>

            <div className='flex justify-center px-4 py-14'>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-4xl  bg-white rounded-2xl shadow-xl p-10"
                >
                    <h1 className='text-2xl font-semibold mb-2'>Embed ChatBot</h1>
                    <p>Copy and paste this code before <code>&lt;/body&gt;</code></p>
                    <div className='relative bg-zinc-900 text-zinc-100 rounded-xl p-5 text-sm font-mono mb-10'>
                        <pre className='overflow-x-auto'>{embedCode}</pre>
                        <button className='absolute top-3 right-3 bg-white text-zinc-900 text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-zinc-200 transition' onClick={copyCode}>
                            {copied ? "Copied ✓" : "Copy"}
                        </button>
                    </div>

                    <ol className='space-y-3  text-sm text-zinc-600 list-decimal list-inside'>
                        <li>Copy the embed script</li>
                        <li>Paste it before the closing body tag</li>
                        <li>Reload your website</li>
                    </ol>

                    <div className='mt-14'>
                        <h1 className='text-lg font-medium mb-2'>Live Preview</h1>
                        <p className='text-sm text-zinc-500 mb-6'>This is how the chatbot will appear on your website</p>

                        <div className='rounded-xl border border-zinc-300 bg-white shadow-md overflow-hidden'>
                            <div className='flex items-center gap-2 px-4 h-9 bg-zinc-100 border-b border-zinc-200'>
                                <span className='w-2.5 h-2.5 rounded-full bg-red-400' />
                                <span className='w-2.5 h-2.5 rounded-full bg-yellow-400' />
                                <span className='w-2.5 h-2.5 rounded-full bg-green-400' />
                                <span className='ml-4 text-xs text-zinc-500'>Your-website.com</span>
                            </div>
                            <div className='relative h-64 sm:h-72 p-6 text-zinc-400 text-sm'>

                                Your website goes here



                                <div className='absolute bottom-24 right-6 w-64 bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden'>
                                    <div className='bg-black text-white text-xs px-3 py-2 flex justify-between items-center'>
                                        <span>Customer Support</span>
                                        <span>╳</span>
                                    </div>

                                    <div className='p-3 space-y-2 bg-zinc-50'>
                                        <div className='bg-zinc-200 text-zinc-800 text-xs px-3 py-2 rounded-lg w-fit'>hi! how can I help you?</div>
                                        <div className='bg-black text-white text-xs px-3 py-2 rounded-lg ml-auto w-fit'>what is the return policy?</div>
                                    </div>
                                </div>

                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                    className="
      absolute bottom-6 right-6
      w-14 h-14 rounded-full
      bg-black text-white
      flex items-center justify-center
      shadow-2xl
      cursor-pointer
    "
                                >
                                    🗨️
                                </motion.div>



                            </div>
                        </div>

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

export default EmbedClient
