import './globals.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/sora/300.css';
import '@fontsource/sora/400.css';
import '@fontsource/sora/500.css';
import '@fontsource/sora/600.css';
import '@fontsource/sora/700.css';

export const metadata = {
  title: 'Resume Builder',
  description: 'Create and manage your professional resume',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-sans">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
