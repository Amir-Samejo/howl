import React, { useState } from 'react';
import { useTrail, a } from '@react-spring/web';


const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 80, tension: 600, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });
    return (
        <>
            <div>
                {trail.map(({ height, ...style }, index) => (
                    <a.div key={index} className="trailsText" style={style}>
                        <a.div style={{ height }}>{items[index]}</a.div>
                    </a.div>
                ))}
                <p className="mt-4 text-5xl font-semibold max-w-lg sm:text-3xl/relaxed">
                    We are an Award Winning Agency based in London.
                </p>
            </div>

        </>
    );
};

export default function BannerHeading() {
    const [open, set] = useState(true);
    return (
        <div className="container  ml-[3.5rem]" onClick={() => set(state => !state)}>
            <Trail open={open}>
                <span className=' text-white'>WEB</span>
                <span className=' text-zinc-400' >DESIGN &</span>
                <span className=' text-white'>DEVELOPMENT</span>
                <span className=' text-zinc-400'>AGENCY</span>

            </Trail>
        </div>
    );
}
