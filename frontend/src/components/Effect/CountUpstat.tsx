import React from "react";
import { useState, useEffect, useRef } from "react";

const useCountingEffect = (targetValue: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasStarted = useRef(false);

    useEffect(() => {
        const START_PERCENTAGE = 0.9;
        const startValue = Math.floor(START_PERCENTAGE * targetValue);
        
        // Initialize count to the start value (or 0 if target is small)
        if (targetValue > 100) {
            setCount(startValue);
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted.current) {
                    hasStarted.current = true;
                    let startTime: number;
                    
                    const countRange = targetValue - startValue;

                    const animateCount = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const animationPercentage = Math.min(progress / duration, 1); // Progress from 0 to 1

                        // Calculate the current value: startValue + (percentage of the remaining range)
                        const currentCount = Math.floor(startValue + (animationPercentage * countRange));
                        
                        // Ensure we don't count past the final target
                        setCount(Math.min(currentCount, targetValue));

                        if (animationPercentage < 1) {
                            requestAnimationFrame(animateCount);
                        }
                    };
                    requestAnimationFrame(animateCount);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [targetValue, duration]);

    return [ref, count];
};

// --- STATS COMPONENT ---
interface CountUpStatProps {
    label: string;
    endValue: number;
    prefix?: string;
    suffix?: string;
}

/**
 * Component to display a single statistic with a count-up animation.
 */
export const CountUpStat: React.FC<CountUpStatProps> = ({ label, endValue, prefix = '', suffix = '' }) => {
    const [ref, count] = useCountingEffect(endValue, 2000);

    return (
        <div ref={ref as React.RefObject<HTMLDivElement>} className="flex flex-col items-start">
            <span className="text-1.5xl font-black text-indigo-700">
                {prefix}{count.toLocaleString()}{suffix}
            </span>
            <span className="text-gray-600 text-base">{label}</span>
        </div>
    );
};