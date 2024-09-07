
import SideNav from "@/Components/SideNav";
import "./globals.css";
import Header from "@/Components/Header";

// export default function Layout({ children }) {
//   return (
//     <div className="flex">
//     <SideNav/>
//       <div className="flex-1">
//        <Header/>
//         <main>{children}</main> {/* Dynamic page content */}
//       </div>
//     </div>
//   );
// }


export default function RootLayout({ children }) {
  return (
<html lang="en">
      <body>
        <div className="flex">
          <SideNav />
          <div className="flex-1">
            <Header /> 
            <main >{children}</main> 
          </div>
        </div>
      </body>
    </html>
  );
}
