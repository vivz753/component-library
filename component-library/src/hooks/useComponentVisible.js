import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        isComponentVisible && document.addEventListener('click', handleClickOutside, true);
        !isComponentVisible && document.removeEventListener('click', handleClickOutside, true);
    }, [isComponentVisible]);

    return [ ref, isComponentVisible, setIsComponentVisible ];
}