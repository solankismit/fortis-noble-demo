// import Link from "next/link";
// import { cn } from "@/lib/utils";
// export function Footer({ className }: { className?: string }) {
//   return (
//     <footer
//       className={cn(
//         "fixed bottom-0 left-0 w-full min-h-screen bg-black text-white flex flex-col justify-end overflow-hidden transition-transform duration-400 -z-10",
//         className
//       )}
//     >
//       <div className="relative w-full py-10 px-4 lg:px-8">
//         {/* Newsletter Section */}
//         <div className="text-center">
//           <h2 className="text-4xl lg:text-6xl mb-4 font-serif">
//             More Fortis Noble?
//           </h2>
//           <p className="text-xl mb-14">Keep up to date with our newsletters.</p>
//           <Link
//             href="/newsletter"
//             className="inline-block px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
//           >
//             Subscribe
//           </Link>
//         </div>

//         {/* Office Locations */}
//         <nav className="mt-20 hidden sm:block">
//           <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-12 gap-y-8">
//             {officeLocations.map((location) => (
//               <li key={location.country} className="relative">
//                 <h3 className="text-2xl lg:text-4xl font-serif mb-2">
//                   <Link href={location.href} className="hover:text-gray-400">
//                     {location.country}
//                   </Link>
//                 </h3>
//                 <ul className="space-y-1">
//                   {location.cities.map((city) => (
//                     <li key={city}>
//                       <Link
//                         href={location.href}
//                         className="text-sm tracking-wide hover:text-gray-400"
//                       >
//                         {city}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Company Info */}
//         <div className="text-center mt-16">
//           <p className="text-sm tracking-wide">
//             2008–2025 © Fortis Noble Advokatbyrå AB with registered
//             office in Stockholm
//           </p>
//           <p className="text-sm tracking-wide mt-2">
//             <span>Organisation number: 556399–4499</span>
//             <span className="ml-2">Momsnummer (VAT no): SE556399449901</span>
//           </p>
//         </div>

//         {/* Legal Links */}
//         <nav className="mt-4">
//           <ul className="flex flex-wrap justify-center gap-4">
//             {legalLinks.map((link) => (
//               <li key={link.text}>
//                 <Link
//                   href={link.href}
//                   className="text-xs uppercase tracking-wider opacity-70 hover:opacity-90 border-b border-white"
//                 >
//                   {link.text}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Social Links */}
//         <ul className="absolute bottom-10 right-10 lg:right-24 flex gap-3 sm:gap-4">
//           {socialLinks.map((link) => (
//             <li key={link.platform}>
//               <Link
//                 href={link.href}
//                 className="text-2xl hover:text-gray-400 transition-colors"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {link.icon}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </footer>
//   );
// }

// const officeLocations = [
//   {
//     country: "Sweden",
//     cities: ["Stockholm", "Gothenburg", "Malmö"],
//     href: "/contact/sweden",
//   },
//   {
//     country: "Belgium",
//     cities: ["Brussels"],
//     href: "/contact/brussels",
//   },
//   {
//     country: "Singapore",
//     cities: ["Singapore"],
//     href: "/contact/singapore",
//   },
//   {
//     country: "USA",
//     cities: ["New York"],
//     href: "/contact/usa",
//   },
// ];

// const legalLinks = [
//   { text: "Contact us", href: "/contact" },
//   { text: "Terms and conditions", href: "/terms" },
//   { text: "Disclaimer", href: "/disclaimer" },
//   { text: "Privacy Notice", href: "/privacy" },
//   { text: "Cookie policy", href: "/cookies" },
// ];

// const socialLinks = [
//   {
//     platform: "Instagram",
//     href: "https://www.instagram.com/mannheimer_swartling/",
//     icon: "📷", // Replace with actual icon component
//   },
//   {
//     platform: "Facebook",
//     href: "https://www.facebook.com/mannheimerswartling",
//     icon: "📘", // Replace with actual icon component
//   },
//   {
//     platform: "LinkedIn",
//     href: "https://www.linkedin.com/company/mannheimer-swartling",
//     icon: "💼", // Replace with actual icon component
//   },
// ];
