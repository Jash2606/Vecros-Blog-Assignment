import React from 'react';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <footer className='w-full bg-gray-900 text-white py-6 mt-auto'>
      <div className='container mx-auto flex flex-col items-center justify-center space-y-4'>
        {/* Footer Title */}
        <h2 className='text-xl font-semibold'>Connect with Me</h2>

        {/* Social Media Links */}
        <div className='flex space-x-6'>
          <a
            href='https://github.com/Jash2606'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300'
            aria-label='GitHub profile'
          >
            {/* <GitHubIcon /> */}
            <span>GitHub</span>
          </a>
          <a
            href='https://www.linkedin.com/in/jash-savaliya/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300'
            aria-label='LinkedIn profile'
          >
            {/* <LinkedInIcon /> */}
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Copyright */}
        <div className='text-gray-500'>
          &copy; {new Date().getFullYear()} All Rights Reserved. | Designed by Jash
        </div>
      </div>
    </footer>
  );
};

export default Footer;
