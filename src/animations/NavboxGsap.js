import { useEffect } from 'react';
import { gsap } from 'gsap';

function NavboxGsap(isMenuOpen, menuRef) {
  useEffect(() => {
    if (isMenuOpen) {
      // Animate menu opening
      gsap.to(menuRef.current, {
        opacity: 1,
       
        x: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
    } else {
      // Animate menu closing
      gsap.to(menuRef.current, {
        opacity: 0,
        
        x: '-100%',
        duration: 0.5,
        ease: 'power3.in',
      });
    }
  }, [isMenuOpen, menuRef]);
}

export default NavboxGsap;