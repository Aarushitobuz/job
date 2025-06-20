import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#0c3c56] text-white font-sans px-4 sm:px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10  ">
                <div className="max-w-xs space-y-3">
                    <Image
                        src="/images/logo-footer.jpg" 
                        width={60}
                        height={10}
                        alt="Jobora Logo" 
                     />
                    <p className="font-semibold">Call Us</p>
                    <p className="text-sm text-white/80 font-bold">123 456 7890</p>
                    <p className="text-sm text-white/80">
                        928 Queensberry Street,<br />
                        North Melbourne VIC 3051, Australia
                    </p>
                    <a href="mailto:support@jobboard.com" className="text-green-300 underline text-sm block mt-2">
                        support@jobboard.com
                    </a>
                </div>
                <div>
                    <h4 className="text-base font-bold mb-3">For Candidates</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><Link href="/browse-companies" className="hover:text-white hover:underline">Browse Companies</Link></li>
                        <li><Link href="/browse-candidates" className="hover:text-white hover:underline">Browse Candidates</Link></li>
                        <li><Link href="/candidate-dashboard" className="hover:text-white hover:underline">Candidate Dashboard</Link></li>
                        <li><Link href="/job-alert" className="hover:text-white hover:underline">Job Alert</Link></li>
                        <li><Link href="/my-bookmarks" className="hover:text-white hover:underline">My Bookmarks</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-base font-bold mb-3">For Employers</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><Link href="/all-employers" className="hover:text-white hover:underline">All Employers</Link></li>
                        <li><Link href="employer-dashboard" className="hover:text-white hover:underline">Employer Dashboard</Link></li>
                        <li><Link href="job-packages" className="hover:text-white hover:underline">Job Packsges</Link></li>
                        <li><Link href="submit-jobs" className="hover:text-white hover:underline">Submit Jobs</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-base font-bold mb-3">About Us</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><Link href="/contact-us" className="hover:text-white hover:underline">Contact Us</Link></li>
                        <li><Link href="/terms" className="hover:text-white hover:underline">Terms</Link></li>
                        <li><Link href="/comapnies" className="hover:text-white hover:underline">Companies</Link></li>
                        <li><Link href="/pricing" className="hover:text-white hover:underline">Pricing</Link></li>
                        <li><Link href="/faqs" className="hover:text-white hover:underline">FAQs</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-base font-bold mb-3">Helpful Resources</h4>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><Link href="/site-map" className="hover:text-white hover:underline">Site Map</Link></li>
                        <li><Link href="/terms-of-use" className="hover:text-white hover:underline">Terms of Use</Link></li>
                        <li><Link href="/privay-center" className="hover:text-white hover:underline">Privacy Center</Link></li>
                        <li><Link href="/security-center" className="hover:text-white hover:underline">Security Center</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/70">
                © 2025 JobBoard. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;

 