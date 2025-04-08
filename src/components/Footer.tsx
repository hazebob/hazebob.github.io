interface FooterProps {
  bgImage: number;
}

export default function Footer({ bgImage }: FooterProps) {
  return (
    <footer 
      className="bg-cover bg-bottom text-white h-[1600px]"
      style={{ backgroundImage: `url('/images/bg${bgImage}.jpg')` }}
    >        
      <div className="pt-12 text-center text-sm">
        © {new Date().getFullYear()} heem.net. All rights reserved.
      </div>
    </footer>
  );
} 
