export default function Footer() {
  return (
    <footer className="bg-[url('/images/bg1.jpg')] bg-cover bg-bottom text-white h-[1600px]">        
      <div className="pt-12 text-center text-sm">
        © {new Date().getFullYear()} heem.net. All rights reserved.
      </div>
    </footer>
  );
} 
