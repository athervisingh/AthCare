import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";



export const metadata = {
  title: "AthCare: Be the Voice for Animals",
  description: "AthCare is a compassionate initiative dedicated to supporting animals and birds in need. The project focuses on providing direct aid through a team of dedicated volunteers and professionals who work tirelessly to ensure the well-being of these creatures. AthCare&apos;s mission is to create a world where every animal receives the care and attention they deserve, without relying on third-party organizations. Whether it&apos;s rescuing, rehabilitating, or simply offering a helping hand, AthCare stands as a beacon of hope for our furry and feathered friends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= "bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
      <SessionWrapper>
        <Navbar />  
   
        <div className="w-full min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">{children}</div>
    
        <Footer/>
      </SessionWrapper>
      </body>
    </html> 
  );
}
