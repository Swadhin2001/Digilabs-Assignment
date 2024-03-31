import React from "react";
import Image from "next/image";
import NotificationBell from '@/public/ri_notification-2-line.png'


const ErrorSection = () => {
  return (
    <>
        <div className="ring-div">
            <div className="Notification-bell">
                <Image src = {NotificationBell} alt= '' className="bg-transparent absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"/>
            </div>
            <div id="r2" className="ring1"></div>
            <div id="r3" className="ring1"></div>
            <div id="r4" className="ring1"></div>
            <div id="r5" className="ring1"></div>
            <div id="r6" className="ring1"></div>
        </div>
    </>
  );
};

export default ErrorSection;
