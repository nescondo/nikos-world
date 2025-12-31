import { useState } from "react";
import AboutMeConfig from "./about-me-config";
import AboutMeBio from "./about-me-bio";

function AboutMeWindow() {
    const [tab, setTab] = useState('bio');
        
        function onTabClick(tabName: string) {
            if (tabName) {
                setTab(tabName);
                return;
            }
        }
    return (
        <>
        {tab === 'bio' ? (
            <AboutMeBio onTabClick={onTabClick}></AboutMeBio>
        ) : (
            <AboutMeConfig onTabClick={onTabClick}></AboutMeConfig>
        )}
        </>
    )
}

export default AboutMeWindow